const scrollToSection = (elId) => {
    
    // Seleziono l'elemento

    const element = document.getElementById(elId);

    // Scrollo verso l'elemento

    element.scrollIntoView({ behavior: "smooth" });

  }

export default scrollToSection;