'use client';
import { Image, OrbitControls, Text, useCursor } from '@react-three/drei';
import * as THREE from 'three';

import { CaseModal } from '@/components/widgets/CaseModal/CaseModal';
import { CasesData, ICase } from '@/lib/mok/gallery.config';
import { Canvas, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { JSX, useRef, useState } from 'react';

interface GalleryScreenProps {
  radius?: number;
  frameWidth?: number;
  frameHeight?: number;
  imageScaleFactor?: number;
  gapAngle?: number; // Gap angle in degrees between frames
  maxLat?: number; // Maximum latitude to avoid poles
  centralCols?: number; // Number of images in central rows
}

export default function GalleryScreen({
  radius = 12,
  frameWidth = 6,
  frameHeight = 4,
  imageScaleFactor = 0.9,
  gapAngle = 6,
  maxLat = 80,
  centralCols,
}: GalleryScreenProps) {
  const [selectedData, setSelectedData] = useState<ICase | null>(null);

  function Frame({
    position,
    url,
    width,
    height,
    title,
    data,
  }: {
    position: [number, number, number];
    url: string;
    data: ICase;
    width: number;
    height: number;
    title: string;
  }) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<THREE.Mesh>(null!);
    const image = useRef<THREE.Mesh>(null!);
    const frame = useRef<THREE.Mesh>(null!);
    const [rnd] = useState(() => Math.random());
    useCursor(isHovered);

    useFrame((state, dt) => {
      image.current.material.zoom = 1.2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 5;
      easing.damp3(
        image.current.scale,
        [
          width * 0.95 * imageScaleFactor * (isHovered ? 0.95 : 1),
          height * 0.925 * imageScaleFactor * (isHovered ? 0.95 : 1),
          1,
        ],
        0.1,
        dt
      );
      easing.dampC(frame.current.material.color, isHovered ? 'orange' : 'white', 0.1, dt);
      if (ref.current) {
        if (position[1] > 0) {
          ref.current.lookAt(0, height, 0);
        } else if (position[1] < 0) {
          ref.current.lookAt(0, 0 - height, 0);
        } else {
          ref.current.lookAt(0, 0, 0);
        }
      }
    });

    return (
      <mesh
        ref={ref}
        position={position}
        onPointerOver={(e) => (e.stopPropagation(), setIsHovered(true))}
        onPointerOut={() => setIsHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedData(data);
        }}
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          transparent={true}
          color={'#ffffff'}
          opacity={0}
        />
        <mesh ref={frame} raycast={() => null} scale={[width, height, 0.1]} position={[0, 0, 0.1]}>
          <boxGeometry />
          <meshBasicMaterial
            toneMapped={false}
            fog={false}
            transparent={true}
            color={'#ffffff'}
            opacity={0.3}
          />
        </mesh>
        <Image
          scale={[width * 0.95 * imageScaleFactor, height * 0.925 * imageScaleFactor]}
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.2]}
          url={url}
        />
        <Text
          position={[0, -height / 2 + 0.2, 0.3]}
          fontSize={0.2}
          color="#333"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </mesh>
    );
  }

  const InnerSphere = () => {
    // Calculate subtended angles for frame dimensions
    const horSpanDeg = (2 * Math.atan(frameWidth / 2 / radius) * 180) / Math.PI;
    const vertSpanDeg = (2 * Math.atan(frameHeight / 2 / radius) * 180) / Math.PI;

    const baseNumCols = centralCols ?? Math.round(360 / (horSpanDeg + gapAngle));

    const latStepDeg = vertSpanDeg + gapAngle;

    const maxTotalLat = 2 * maxLat;
    const numIntervals = Math.floor(maxTotalLat / latStepDeg);
    const numRows = numIntervals + 1;
    const totalLat = numIntervals * latStepDeg;
    const latStart = -totalLat / 2;

    const dataLength = CasesData.length;

    const frames: JSX.Element[] = [];
    let index = 0;

    for (let row = 0; row < numRows; row++) {
      const lat = latStart + row * latStepDeg; // degrees
      const latRad = (lat * Math.PI) / 180;
      const cosLat = Math.cos(latRad);
      const numColsRow = Math.max(1, Math.round(baseNumCols * cosLat));
      const lonStepRow = 360 / numColsRow;

      for (let col = 0; col < numColsRow; col++) {
        const dataIndex = index % dataLength;
        const item = CasesData[dataIndex];
        const lon = col * lonStepRow;
        const lonRad = (lon * Math.PI) / 180;
        const x = radius * Math.cos(latRad) * Math.cos(lonRad);
        const y = radius * Math.sin(latRad);
        const z = radius * Math.cos(latRad) * Math.sin(lonRad);
        frames.push(
          <Frame
            key={index}
            position={[x, y, z]}
            url={item.src}
            width={frameWidth}
            height={frameHeight}
            title={item.title}
            data={item}
          />
        );
        index++;
      }
    }

    return (
      <group>
        <mesh>
          <sphereGeometry args={[radius, 64, 64]} />
          <meshBasicMaterial transparent={true} opacity={0} color="#060010" side={THREE.BackSide} />
        </mesh>
        {frames}
      </group>
    );
  };

  return (
    <div className="w-dvw h-dvh relative">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 0.1],
          near: 0.001,
          far: 20,
          fov: 80,
        }}
      >
        <InnerSphere />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enabled={true}
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={-0.5}
          rotateSpeed={-0.5}
          minPolarAngle={Math.PI / 2 - 0.25}
          maxPolarAngle={Math.PI / 2 + 0.25}
          enableDamping={true}
          dampingFactor={0.05}
          target={[0, 0, 0]}
        />
      </Canvas>
      {!!selectedData && <CaseModal data={selectedData} onClose={() => setSelectedData(null)} />}
    </div>
  );
}
