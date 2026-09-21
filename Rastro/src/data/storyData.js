/**
 * src/data/storyData.js
 * 
 * Contiene la secuencia narrativa inicial del videojuego "Rastro de Bigotes".
 * Cada objeto representa un cuadro de diálogo con el personaje, su mensaje y expresión.
 */

export const initialStory = [
  {
    id: 1,
    characterName: "Mishi",
    message: "Hace días que no veo a Yosu…",
    portrait: "sad",
  },
  {
    id: 2,
    characterName: "Mishi",
    message: "Extraño sus maullidos y la forma en que siempre me esperaba en el tejado.",
    portrait: "nostalgic",
  },
  {
    id: 3,
    characterName: "Mishi",
    message: "He revisado toda la casa, pero no encuentro ninguna señal suya.",
    portrait: "searching",
  },
  {
    id: 4,
    characterName: "Mishi",
    message: "Tal vez dejó alguna pista antes de irse.",
    portrait: "thoughtful",
  },
  {
    id: 5,
    characterName: "Mishi",
    message: "Voy a seguir su rastro de bigotes.",
    portrait: "determined",
  },
  {
    id: 6,
    characterName: "Mishi",
    message: "No descansaré hasta encontrarlo.",
    portrait: "resolute",
  },
];

/**
 * Diccionario de nombres legibles para los tres mapas del juego
 */
export const mapNames = {
  "casa-mishi": "Casa de Mishi",
  "techos": "Techos y vecindario",
  "casa-yosu": "Casa de Yosu",
};

