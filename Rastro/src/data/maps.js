/**
 * data/maps.js
 * 
 * Configuración preliminar de los tres mapas principales de "Rastro de Bigotes".
 * Cada mapa contiene su identificador para la ruta dinámica (/jugar/:mapa),
 * su nombre descriptivo, objetivo del puzzle y el mapa siguiente.
 */

export const gameMaps = {
  "casa-mishi": {
    id: "casa-mishi",
    number: 1,
    title: "Casa de Mishi",
    description: "La acogedora habitación de Mishi. Revisa las pistas y encuentra la ventana para salir al exterior.",
    puzzleGoal: "Encuentra la llave de lana para abrir la ventana del jardín.",
    nextMap: "techo-vecindario",
    nextMapLabel: "Subir a los techos",
    gridSize: { rows: 6, cols: 6 },
    theme: "interior-calido",
  },
  "techo-vecindario": {
    id: "techo-vecindario",
    number: 2,
    title: "Techo de las casas y vecindario",
    description: "Entre chimeneas, antenas y tejados de tejas rosadas. Sigue los mechones de pelo y las huellas.",
    puzzleGoal: "Salta entre los tejados evitando macetas y activa la pasarela secreta.",
    nextMap: "casa-yosu",
    nextMapLabel: "Bajar a la casa de Yosu",
    gridSize: { rows: 6, cols: 6 },
    theme: "exterior-noche-pastel",
  },
  "casa-yosu": {
    id: "casa-yosu",
    number: 3,
    title: "Casa de Yosu",
    description: "El hogar de Yosu. El rastro de bigotes termina aquí, ¡él debe estar cerca!",
    puzzleGoal: "Desbloquea el portón del jardín resolviendo el patrón de patitas.",
    nextMap: "completado",
    nextMapLabel: "¡Reunirse con Yosu!",
    gridSize: { rows: 6, cols: 6 },
    theme: "jardin-florido",
  },
};

export const defaultMapId = "casa-mishi";

