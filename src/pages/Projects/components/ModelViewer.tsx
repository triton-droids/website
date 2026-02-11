import '@google/model-viewer';
import { BodyText } from '../../../components/Typography';

interface ModelViewerProps {
  modelUrl?: string;
  fallbackImage?: string;
  alt?: string;
  className?: string;
  /** Model orientation as space-separated "X Y Z" in degrees, e.g. "0 180deg 0" to flip horizontally */
  orientation?: string;
  /** Initial camera orbit "theta phi radius", e.g. "0deg 75deg 1.2m" for a closer view */
  cameraOrbit?: string;
  /** Camera target point "x y z" in meters, e.g. "0 0.15 0" to shift framing (positive Y = look above center, model appears lower) */
  cameraTarget?: string;
}

export default function ModelViewer({
  modelUrl,
  fallbackImage,
  alt = '3D Model',
  className = '',
  orientation,
  cameraOrbit,
  cameraTarget,
}: ModelViewerProps) {
  const containerClassName = [
    'w-full rounded-[24px] overflow-hidden shadow-xl ring-1 ring-white/[0.06]',
    modelUrl
      ? 'p-0 flex items-center justify-center h-[500px] md:h-[600px] bg-[#141416]'
      : 'p-8 md:p-12 bg-[#2A2B2D]',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      {modelUrl ? (
        <model-viewer
          src={modelUrl}
          alt={alt}
          {...(orientation && { orientation })}
          {...(cameraOrbit && { 'camera-orbit': cameraOrbit })}
          {...(cameraTarget && { 'camera-target': cameraTarget })}
          camera-controls
          auto-rotate
          auto-rotate-delay="2000"
          rotation-per-second="30deg"
          shadow-intensity="0.5"
          shadow-softness="0.9"
          exposure="1.25"
          tone-mapping="neutral"
          interaction-prompt="none"
          className="block w-full h-full max-w-full max-h-full min-w-0 min-h-0"
          style={{ width: '100%', height: '100%' }}
        />
      ) : fallbackImage ? (
        <div className="w-full rounded-[16px] overflow-hidden">
          <img
            src={fallbackImage}
            alt={alt}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-[500px] rounded-[16px] bg-[#1A1A1A] flex items-center justify-center">
          <BodyText className="text-main-text">3D Model Placeholder</BodyText>
        </div>
      )}
    </div>
  );
}
