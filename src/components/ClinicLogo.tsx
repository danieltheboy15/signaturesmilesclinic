import { useState } from 'react';
import { CLINIC_CONFIG } from '../config/clinic';

interface ClinicLogoProps {
  className?: string;
}

export function ClinicLogo({ className = 'h-11 w-[110px] sm:h-12 sm:w-[122px]' }: ClinicLogoProps) {
  const [src, setSrc] = useState<string>(CLINIC_CONFIG.logo.src);

  return (
    <span className={`relative inline-block overflow-hidden shrink-0 ${className}`}>
      <img
        src={src}
        alt={CLINIC_CONFIG.logo.alt}
        referrerPolicy="no-referrer"
        onError={() => {
          if (src !== CLINIC_CONFIG.logo.fallbackSrc) {
            setSrc(CLINIC_CONFIG.logo.fallbackSrc);
          }
        }}
        className="h-full w-full object-cover object-[50%_43.5%]"
      />
    </span>
  );
}
