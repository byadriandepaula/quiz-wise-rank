
import React from 'react';
import { 
  Home, 
  Trophy, 
  Play, 
  Crown, 
  Medal, 
  Star, 
  Lock, 
  CreditCard, 
  Upload, 
  Check, 
  AlertTriangle, 
  Trash, 
  Eye, 
  EyeOff, 
  Clock, 
  ChevronDown 
} from 'lucide-react';

interface CustomIconProps {
  className?: string;
}

export const HomeIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Home className={className} />
);

export const TrophyIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Trophy className={className} />
);

export const PlayIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Play className={className} />
);

export const CrownIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Crown className={className} />
);

export const MedalIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Medal className={className} />
);

export const StarIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Star className={className} />
);

export const LockIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Lock className={className} />
);

export const CreditCardIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <CreditCard className={className} />
);

export const UploadIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Upload className={className} />
);

export const CheckIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Check className={className} />
);

export const AlertTriangleIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <AlertTriangle className={className} />
);

export const TrashIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Trash className={className} />
);

export const EyeIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Eye className={className} />
);

export const EyeOffIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <EyeOff className={className} />
);

export const ClockIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <Clock className={className} />
);

export const ChevronDownIcon = ({ className = "w-4 h-4" }: CustomIconProps) => (
  <ChevronDown className={className} />
);
