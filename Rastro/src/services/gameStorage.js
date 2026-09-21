/**
 * services/gameStorage.js
 * 
 * Capa de servicios para la persistencia de datos del juego.
 * En proyectos reales o futuros, aquí se conecta con localStorage,
 * IndexedDB o un backend (API REST / Firebase).
 * 
 * Por ahora provee funciones didácticas para guardar y leer
 * el progreso del jugador en el navegador.
 */

const STORAGE_KEY = "rastro_bigotes_progress";

/**
 * Obtiene el mapa actual guardado o el valor por defecto.
 * @returns {string} ID del mapa guardado.
 */
export function getSavedProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { currentMap: "casa-mishi", completed: false };
  } catch (error) {
    console.warn("No se pudo acceder a localStorage:", error);
    return { currentMap: "casa-mishi", completed: false };
  }
}

/**
 * Guarda el mapa actual alcanzado por el jugador.
 * @param {string} mapId Identificador del mapa (ej: "techo-vecindario")
 */
export function saveProgress(mapId) {
  try {
    const data = { currentMap: mapId, lastUpdated: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Error guardando progreso:", error);
  }
}

/**
 * Reinicia el progreso del jugador.
 */
export function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Error reiniciando progreso:", error);
  }
}

