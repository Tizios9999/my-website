export default function applyDropShadowStyle(color) {
    return {
      filter: `drop-shadow(0 0 3px ${color})`
    }
  }