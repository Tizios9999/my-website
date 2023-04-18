export default function applyBorderStyle(color) {
    return {
      border: `6px solid ${color}`,
      boxShadow: `0 0 12px ${color}, 
      inset 0 0 12px ${color},
      0 0 2px white,
      inset 0 0 2px white;`,
      borderRadius: "2%"
    }
  }