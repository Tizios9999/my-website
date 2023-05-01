export default function applyBorderStyle(color, size = 6, radiance = 2) {
    return {
      border: `${size}px solid ${color}`,
      boxShadow: `0 0 ${size*2}px ${color}, 
      inset 0 0 ${size*2}px ${color},
      0 0 ${radiance}px white,
      inset 0 0 ${radiance}px white`
    }
  }