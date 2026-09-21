import React from "react";

/**
 * components/PixelCard.jsx
 * 
 * Componente contenedor reutilizable que aplica el estilo visual retro:
 * - Bordes cuadrados gruesos.
 * - Sombra sólida/dura tipo pixel-art.
 * - Fondo pastel.
 * 
 * Recibe `title` opcional, `children` (el contenido interior) y `variant` para cambiar el color de acento.
 */
export default function PixelCard({
  title,
  children,
  variant = "cream",
  className = "",
}) {
  return (
    <div className={`pixel-card pixel-card--${variant} ${className}`}>
      {title && (
        <div className="pixel-card__header">
          <span className="pixel-card__icon">🐾</span>
          <h3 className="pixel-card__title">{title}</h3>
        </div>
      )}
      <div className="pixel-card__body">{children}</div>
    </div>
  );
}

