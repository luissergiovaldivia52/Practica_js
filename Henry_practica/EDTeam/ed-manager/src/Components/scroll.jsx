const gridJugadores = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, []) 
  
  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('jugador')
        let itemsLength = items.length
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }