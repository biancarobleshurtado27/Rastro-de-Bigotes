import React from "react";

/**
 * components/MapLegend.jsx
 * 
 * Leyenda visual compacta que explica los tipos de casillas y elementos del mapa:
 * - Suelo
 * - Pared
 * - Objeto
 * - Salida
 * - Mishi
 */
export default function MapLegend() {
  const legendItems = [
    { label: "Suelo", className: "legend-sample--floor" },
    { label: "Pared", className: "legend-sample--wall" },
    { label: "Objeto", className: "legend-sample--object", icon: "✨" },
    { label: "Salida", className: "legend-sample--exit", icon: "🚪" },
    { label: "Mishi", className: "legend-sample--mishi", icon: "🐱" },
  ];

  return (
    <div className="map-legend" role="region" aria-label="Leyenda de la cuadrícula">
      <span className="map-legend__title">🗺️ Leyenda del mapa:</span>
      <div className="map-legend__items">
        {legendItems.map((item) => (
          <div key={item.label} className="map-legend__item">
            <span className={`map-legend__sample ${item.className}`}>
              {item.icon || null}
            </span>
            <span className="map-legend__label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

