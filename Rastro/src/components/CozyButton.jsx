import React from "react";

/**
 * components/CozyButton.jsx
 * 
 * Botón reutilizable con diseño retro pixel-art y estética cozy:
 * - Bordes cuadrados con sombra dura estilo arcade.
 * - Estados hover, active y focus visibles y accesibles para navegación por teclado.
 * - Tamaño grande y cómodo para hacer clic tanto en computadora como en móvil.
 * 
 * @param {Function} onClick Función al hacer clic.
 * @param {React.ReactNode} children Contenido o texto del botón.
 * @param {string} variant Variante de color ('primary', 'secondary', 'hero', 'accent').
 * @param {string} type Tipo de botón ('button' o 'submit').
 * @param {string} ariaLabel Etiqueta de accesibilidad ARIA.
 * @param {boolean} disabled Si el botón se encuentra deshabilitado.
 * @param {string} className Clases CSS adicionales.
 */
export default function CozyButton({
  onClick,
  children,
  variant = "primary",
  type = "button",
  ariaLabel,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`cozy-btn cozy-btn--${variant} ${className}`}
    >
      {children}
    </button>
  );
}

