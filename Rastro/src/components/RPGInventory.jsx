import React from "react";

/**
 * components/RPGInventory.jsx
 * 
 * Ventana emergente de inventario con estética de bolsa o bolsita de tela acogedora.
 * Muestra los recuerdos, objetos y pistas que Mishi ha encontrado a lo largo de su viaje.
 */
export default function RPGInventory({
  isOpen = false,
  items = [],
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="rpg-modal-overlay" onClick={onClose}>
      <div
        className="rpg-modal rpg-inventory-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rpg-modal__header">
          <div className="rpg-modal__title-group">
            <span className="rpg-modal__icon">🎒</span>
            <h3 className="rpg-modal__title">Bolsita de Recuerdos</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rpg-modal__close-btn"
            title="Cerrar bolsa"
          >
            ✖
          </button>
        </div>

        <p className="rpg-inventory__description">
          Objetos y pistas que Mishi lleva consigo para no perder el rastro de Yosu:
        </p>

        <div className="rpg-inventory__grid">
          {items.length === 0 ? (
            <div className="rpg-inventory__empty">
              <span className="empty-icon">🧶</span>
              <p>Tu bolsita está vacía por ahora.</p>
              <small>Acércate a los objetos del mapa y presiona <strong>Examinar</strong> para encontrar pistas.</small>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="rpg-inventory-slot">
                <div className="rpg-inventory-slot__icon">{item.icon || "🐾"}</div>
                <div className="rpg-inventory-slot__info">
                  <span className="slot-name">{item.name}</span>
                  <small className="slot-desc">{item.desc || "Un objeto especial del camino."}</small>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="rpg-modal__footer">
          <button
            type="button"
            onClick={onClose}
            className="retro-btn retro-btn--accent"
          >
            Cerrar bolsa 🐾
          </button>
        </div>
      </div>
    </div>
  );
}

