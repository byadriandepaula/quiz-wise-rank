
import React from 'react';

interface CustomIconProps {
  className?: string;
}

export const HomeIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    🏠
  </div>
);

export const TrophyIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    🏆
  </div>
);

export const PlayIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current font-bold`}>
    ▶
  </div>
);

export const CrownIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    👑
  </div>
);

export const MedalIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    🥈
  </div>
);

export const StarIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    ⭐
  </div>
);

export const LockIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    🔒
  </div>
);

export const CreditCardIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    💳
  </div>
);

export const UploadIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    📤
  </div>
);

export const CheckIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current font-bold`}>
    ✓
  </div>
);

export const AlertTriangleIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    ⚠️
  </div>
);

export const TrashIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    🗑️
  </div>
);

export const EyeIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    👁️
  </div>
);

export const EyeOffIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    🙈
  </div>
);

export const ClockIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current`}>
    🕐
  </div>
);

export const ChevronDownIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <div className={`${className} flex items-center justify-center text-current font-bold`}>
    ▼
  </div>
);
