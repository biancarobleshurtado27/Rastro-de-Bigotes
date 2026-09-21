import React from "react";

/**
 * components/PixelObject.jsx
 * 
 * Renderiza objetos, muebles, pistas y decorados mediante CSS puro y pixel art.
 * No utiliza emojis ni imágenes externas.
 * 
 * Tipos soportados:
 * bed, shelf, photo, toy, blanket, drawer, window, plant, table,
 * chimney, antenna, box, pot, rope, hook, wood, bridge, door,
 * pawprint, tool, ball, collar, lamp.
 * 
 * @param {string} type Tipo de objeto
 * @param {string} name Nombre descriptivo para accesibilidad
 * @param {boolean} interactive Si el objeto es interactuable
 * @param {boolean} collected Si el objeto ya fue recogido o completado
 * @param {string} className Clases adicionales
 */
export default function PixelObject({
  type = "box",
  name = "Objeto",
  interactive = false,
  collected = false,
  className = "",
}) {
  const renderObjectGraphics = () => {
    switch (type) {
      /* ==================== Casa de Mishi ==================== */
      case "bed":
        return (
          <div className="po-bed">
            <div className="po-bed__headboard" />
            <div className="po-bed__mattress">
              <div className="po-bed__pillow" />
              <div className="po-bed__quilt" />
            </div>
          </div>
        );

      case "shelf":
        return (
          <div className="po-shelf">
            <div className="po-shelf__wood" />
            <div className="po-shelf__books">
              <span className="book book--1" />
              <span className="book book--2" />
              <span className="book book--3" />
            </div>
          </div>
        );

      case "photo":
        return (
          <div className="po-photo">
            <div className="po-photo__frame">
              <div className="po-photo__canvas">
                <span className="mini-cat-silhouette cat--mishi" />
                <span className="mini-cat-silhouette cat--yosu" />
              </div>
            </div>
          </div>
        );

      case "toy":
        return (
          <div className="po-toy">
            <div className="po-yarn-ball">
              <span className="yarn-line yarn-line--1" />
              <span className="yarn-line yarn-line--2" />
              <span className="yarn-tail" />
            </div>
          </div>
        );

      case "blanket":
        return (
          <div className="po-blanket">
            <div className="po-blanket__folds">
              <span />
              <span />
            </div>
          </div>
        );

      case "drawer":
        return (
          <div className="po-drawer">
            <div className="po-drawer__body">
              <div className="po-drawer__knob" />
              <div className="po-drawer__keyhole" />
            </div>
          </div>
        );

      case "window":
        return (
          <div className="po-window">
            <div className="po-window__frame">
              <div className="po-window__glass">
                <span className="sun-glow" />
              </div>
              <div className="po-window__cross-v" />
              <div className="po-window__cross-h" />
            </div>
          </div>
        );

      case "plant":
        return (
          <div className="po-plant">
            <div className="po-plant__leaves">
              <span className="leaf-sprout leaf--l" />
              <span className="leaf-sprout leaf--c" />
              <span className="leaf-sprout leaf--r" />
            </div>
            <div className="po-plant__pot" />
          </div>
        );

      case "table":
        return (
          <div className="po-table">
            <div className="po-table__top" />
            <div className="po-table__legs">
              <span className="table-leg" />
              <span className="table-leg" />
            </div>
          </div>
        );

      /* ==================== Techos y Vecindario ==================== */
      case "chimney":
        return (
          <div className="po-chimney">
            <div className="po-chimney__smoke">
              <span className="smoke-puff smoke-puff--1" />
              <span className="smoke-puff smoke-puff--2" />
            </div>
            <div className="po-chimney__cap" />
            <div className="po-chimney__brick" />
          </div>
        );

      case "antenna":
        return (
          <div className="po-antenna">
            <div className="po-antenna__v-mast" />
            <div className="po-antenna__arms">
              <span className="arm arm--left" />
              <span className="arm arm--right" />
            </div>
            <div className="po-antenna__tip" />
          </div>
        );

      case "box":
        return (
          <div className="po-box">
            <div className="po-box__crate">
              <span className="crate-plank" />
              <span className="crate-cross" />
            </div>
          </div>
        );

      case "pot":
        return (
          <div className="po-pot">
            <div className="po-pot__flower">
              <span className="petal petal--1" />
              <span className="petal petal--2" />
              <span className="flower-center" />
            </div>
            <div className="po-pot__body" />
          </div>
        );

      case "rope":
        return (
          <div className="po-rope">
            <div className="po-rope__coil">
              <span className="rope-loop" />
              <span className="rope-loop" />
              <span className="rope-end" />
            </div>
          </div>
        );

      case "hook":
        return (
          <div className="po-hook">
            <div className="po-hook__metal">
              <span className="hook-ring" />
              <span className="hook-curve" />
            </div>
          </div>
        );

      case "wood":
        return (
          <div className="po-wood">
            <div className="po-wood__plank">
              <span className="wood-knot" />
              <span className="wood-strip" />
            </div>
          </div>
        );

      case "bridge":
        return (
          <div className="po-bridge">
            <div className="po-bridge__planks">
              <span className="b-plank" />
              <span className="b-plank" />
              <span className="b-rope" />
            </div>
          </div>
        );

      /* ==================== Casa de Yosu ==================== */
      case "door":
        return (
          <div className="po-door">
            <div className="po-door__frame">
              <div className="po-door__handle" />
              <div className="po-door__panels">
                <span />
                <span />
              </div>
            </div>
          </div>
        );

      case "pawprint":
        return (
          <div className="po-pawprint">
            <div className="po-pawprint__toes">
              <span />
              <span />
              <span />
            </div>
            <div className="po-pawprint__pad" />
          </div>
        );

      case "tool":
        return (
          <div className="po-tool">
            <div className="po-tool__handle" />
            <div className="po-tool__head" />
          </div>
        );

      case "ball":
        return (
          <div className="po-ball">
            <div className="po-ball__sphere">
              <span className="ball-shine" />
            </div>
          </div>
        );

      case "collar":
        return (
          <div className="po-collar">
            <div className="po-collar__strap">
              <span className="po-collar__bell" />
            </div>
          </div>
        );

      case "lamp":
        return (
          <div className="po-lamp">
            <div className="po-lamp__glow" />
            <div className="po-lamp__roof" />
            <div className="po-lamp__glass" />
            <div className="po-lamp__post" />
          </div>
        );

      default:
        return <div className="po-generic-crate" />;
    }
  };

  return (
    <div
      className={`pixel-object pixel-object--${type} ${
        interactive ? "is-interactive" : ""
      } ${collected ? "is-collected" : ""} ${className}`}
      title={`${name}${interactive ? " (Interactuable)" : ""}`}
      role="img"
      aria-label={`${name}${interactive ? ", interactuable" : ""}${
        collected ? ", recogido" : ""
      }`}
    >
      {/* Indicador sutil de interactividad (destello suave pixelado en esquina) */}
      {interactive && !collected && (
        <span className="pixel-object__indicator" aria-hidden="true">
          <span className="po-indicator-dot" />
        </span>
      )}

      {/* Ilustración CSS interna */}
      <div className="pixel-object__graphic" aria-hidden="true">
        {renderObjectGraphics()}
      </div>
    </div>
  );
}

