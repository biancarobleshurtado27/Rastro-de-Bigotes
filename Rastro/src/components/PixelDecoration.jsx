import React from "react";

/**
 * components/PixelDecoration.jsx
 * 
 * Elementos decorativos construidos exclusivamente con HTML y CSS.
 * Reemplaza emojis como estrellas, huellas, hojas o nubes por formas pixeladas.
 * 
 * Tipos soportados:
 * - 'star': Estrella de cuatro puntas pixel art.
 * - 'pawprint': Huella de gato con almohadilla y tres deditos.
 * - 'leaf': Hojita verde menta.
 * - 'cloud': Nube esponjosa pixelada.
 * - 'sparkle': Destello de luz pastel.
 * - 'wood-grain': Vetas de madera sutiles.
 * - 'tile-pattern': Patrón geométrico de baldosa.
 * - 'shingle-pattern': Ondulaciones de tejas de techo.
 * 
 * @param {string} type Tipo de decoración
 * @param {string} className Clases adicionales
 */
export default function PixelDecoration({ type = "star", className = "" }) {
  const renderDecorationContent = () => {
    switch (type) {
      case "star":
        return (
          <div className="deco-pixel-star" aria-hidden="true">
            <span className="star-point star-point--v" />
            <span className="star-point star-point--h" />
            <span className="star-center" />
          </div>
        );

      case "pawprint":
        return (
          <div className="deco-pixel-paw" aria-hidden="true">
            <div className="paw-toes">
              <span className="paw-toe" />
              <span className="paw-toe" />
              <span className="paw-toe" />
            </div>
            <div className="paw-pad" />
          </div>
        );

      case "leaf":
        return (
          <div className="deco-pixel-leaf" aria-hidden="true">
            <span className="leaf-stem" />
            <span className="leaf-body" />
          </div>
        );

      case "cloud":
        return (
          <div className="deco-pixel-cloud" aria-hidden="true">
            <span className="cloud-puff cloud-puff--1" />
            <span className="cloud-puff cloud-puff--2" />
            <span className="cloud-puff cloud-puff--3" />
            <span className="cloud-base" />
          </div>
        );

      case "sparkle":
        return (
          <div className="deco-pixel-sparkle" aria-hidden="true">
            <span className="sparkle-diamond" />
          </div>
        );

      case "wood-grain":
        return (
          <div className="deco-pixel-wood" aria-hidden="true">
            <span className="wood-line" />
            <span className="wood-knot" />
          </div>
        );

      case "tile-pattern":
        return <div className="deco-pixel-tile-pattern" aria-hidden="true" />;

      case "shingle-pattern":
        return <div className="deco-pixel-shingle" aria-hidden="true" />;

      default:
        return null;
    }
  };

  return (
    <span className={`pixel-decoration pixel-decoration--${type} ${className}`}>
      {renderDecorationContent()}
    </span>
  );
}

