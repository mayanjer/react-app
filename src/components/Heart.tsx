

import { Heart } from 'lucide-react'

interface LucideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
    nonScalingStroke?: boolean;
    
  /**
   * @deprecated
   */
  absoluteStrokeWidth?: boolean;
  [key: string]: any; // Any other SVG attributes
}

function HeartBtn({size, fill, strokeWidth, onClick}: LucideProps) {
    return <Heart size={size} fill={fill} stroke-width={strokeWidth} onClick={ onClick } />
}

export default HeartBtn