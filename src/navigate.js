const MENU_HEIGHT = 50; // ALTURA DEL MENU PARA DESCONTARLA DEL COMPONENTE

export default (id, duration, menuHeight = MENU_HEIGHT) => {
  const component = document.getElementById(id);
  if (component && duration > 0) {
    const positionY = component.offsetTop - menuHeight;
    if (document.scrollingElement.scrollTop === positionY) return;
    const totalScrollDistance = Math.abs(
      document.scrollingElement.scrollTop - positionY
    );
    let scrollY = document.scrollingElement.scrollTop,
      oldTimestamp = null;
    const stepMore = (newTimestamp) => {
      if (oldTimestamp !== null) {
        scrollY +=
          (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
        if (scrollY >= positionY)
          return (document.scrollingElement.scrollTop = positionY);
        document.scrollingElement.scrollTop = scrollY;
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepMore);
    };
    const stepLess = (newTimestamp) => {
      if (oldTimestamp !== null) {
        scrollY -=
          (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
        if (scrollY <= positionY)
          return (document.scrollingElement.scrollTop = positionY);
        document.scrollingElement.scrollTop = scrollY;
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepLess);
    };
    const step = (newTimestamp) => {
      if (scrollY < positionY) stepMore(newTimestamp);
      else stepLess(newTimestamp);
    };
    window.requestAnimationFrame(step);
  }
};
