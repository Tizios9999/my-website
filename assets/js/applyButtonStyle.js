export default function applyButtonStyle(color) {
    return {
      color: `${color}`,
      border: `2px solid ${color}`,
      boxShadow: `0 0 12px ${color}, 
      inset 0 0 12px ${color},
      0 0 2px white,
      inset 0 0 2px white`,
      textShadow: `0 0 0 6px ${color}`
    }    
  }