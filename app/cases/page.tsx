import LightPillar from '@/components/LightPillar';
import GalleryScreen from '@/components/screens/GalleryScreen/GalleryScreen';

export default function CasesPage() {
  return (
    <section className="relative  w-full h-full min-w-dvw min-h-dvh bg-background">
      <LightPillar
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={0.7}
        rotationSpeed={0.2}
        glowAmount={0.003}
        pillarWidth={8.0}
        pillarHeight={0.4}
        noiseIntensity={0.1}
        pillarRotation={0}
        interactive={false}
        mixBlendMode="normal"
      />
      <GalleryScreen />
    </section>
  );
}
