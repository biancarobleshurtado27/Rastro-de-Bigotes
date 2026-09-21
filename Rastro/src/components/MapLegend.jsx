import React from "react";

/**
 * components/MapLegend.jsx
 * 
 * Leyenda visual de casillas sin emojis.
 * Utiliza muestras cuadradas con las mismas texturas y colores del juego:
 * - Suelo
 * - Pared
 * - Objeto
 * - Salida
 * - Mishi
 */
export default function MapLegend() {
  const legendItems = [
    { label: "Suelo", className: "legend-swatch--floor" },
    { label: "Pared", className: "legend-swatch--wall" },
    { label: "Objeto", className: "legend-swatch--object" },
    { label: "Salida", className: "legend-swatch--exit" },
    { label: "Mishi", className: "legend-swatch--mishi" },
  ];

  return (
    <div className="map-legend" role="region" aria-label="Leyenda de la cuadrícula">
      <span className="map-legend__title">Leyenda del mapa:</span>
      <div className="map-legend__items">
        {legendItems.map((item) => (
          <div key={item.label} className="map-legend__item">
            <span className={`map-legend__swatch ${item.className}`} aria-hidden="true" />
            <span className="map-legend__label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
