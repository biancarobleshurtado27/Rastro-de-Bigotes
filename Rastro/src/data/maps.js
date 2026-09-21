/**
 * data/maps.js
 * 
 * Configuración detallada de los 3 mapas para el RPG 2D Cozy "Rastro de Bigotes".
 * Cada mapa cuenta con:
 * - Metadata descriptiva y objetivos.
 * - Dimensiones del escenario (filas x columnas).
 * - Matriz de tiles con tipos de suelo y decorados pixel art.
 * - Objetos interactivos con diálogos nostálgicos y tiernos.
 */

export const gameMaps = {
  "casa-mishi": {
    id: "casa-mishi",
    number: 1,
    title: "Casa de Mishi",
    subtitle: "Habitación cálida y nostálgica",
    description: "Una pequeña habitación iluminada por los rayos dorados de la tarde. El aroma a madera y recuerdos llena el aire.",
    puzzleGoal: "Examina los recuerdos de Yosu y encuentra la llave del balcón para salir a los tejados.",
    hint: "Revisa la fotografía en la pared y el ovillo de lana cerca del estante; Yosu siempre escondía cosas divertidas allí.",
    nextMap: "techo-vecindario",
    nextMapLabel: "Subir al tejado",
    dimensions: { rows: 7, cols: 7 },
    initialPlayerPos: { row: 5, col: 3 },
    theme: "cozy-bedroom",
    // Matriz de 7x7 celdas del mundo RPG
    // Tipos de tile:
    // W: pared de madera
    // F: suelo de tablones de madera
    // R: alfombra suave durazno/pastel
    // B: cama de Mishi con mantita
    // S: estante con libros y plantas
    // P: fotografía enmarcada de Mishi y Yosu
    // Y: ovillo de lana rosa (juguete)
    // L: planta en maceta de interior
    // WIN: gran ventana con luz cálida
    // D: puerta/salida al balcón hacia los techos
    layout: [
      ["W",   "WIN", "W",   "P",   "W",   "S",   "W"],
      ["W",   "F",   "F",   "F",   "F",   "L",   "W"],
      ["B",   "R",   "R",   "R",   "F",   "F",   "W"],
      ["W",   "R",   "R",   "R",   "F",   "Y",   "W"],
      ["W",   "F",   "F",   "F",   "F",   "F",   "W"],
      ["W",   "F",   "F",   "F",   "F",   "F",   "D"],
      ["W",   "W",   "W",   "W",   "W",   "W",   "W"],
    ],
    interactables: {
      "P": {
        name: "Fotografía de Mishi y Yosu",
        icon: "🖼️",
        text: "Es una pequeña foto de Yosu y yo juntos en el tejado durante la primavera. Su sonrisa de gato siempre me alegraba el día.",
        itemReward: "Recuerdo cálido",
      },
      "B": {
        name: "Cama suave con mantita",
        icon: "🛏️",
        text: "Aquí solíamos dormir siestas juntos después de corretear. Todavía huele un poquito a él.",
      },
      "WIN": {
        name: "Ventana con luz dorada",
        icon: "🪟",
        text: "El sol del atardecer baña la habitación con un tono durazno. A lo lejos se divisan los tejados del vecindario.",
      },
      "S": {
        name: "Estantería de madera",
        icon: "📚",
        text: "Llena de cuentos ilustrados y pequeños frascos. En la repisa superior hay una pluma que a Yosu le encantaba perseguir.",
      },
      "Y": {
        name: "Ovillo de lana rosa",
        icon: "🧶",
        text: "¡El juguete favorito de Mishi! Debajo del ovillo hay una pequeña llavecita dorada para el balcón.",
        itemReward: "Llave del Balcón",
      },
      "L": {
        name: "Planta de helecho menta",
        icon: "🪴",
        text: "Una planta frondosa en una maceta pastel. Las hojas están frescas y bien cuidadas.",
      },
      "D": {
        name: "Puerta hacia el tejado",
        icon: "🚪",
        text: "La puerta conduce a la cornisa del tejado. Puedes sentir la suave brisa del atardecer llamándote.",
        isExit: true,
      },
    },
  },

  "techo-vecindario": {
    id: "techo-vecindario",
    number: 2,
    title: "Techo y Vecindario",
    subtitle: "Atardecer entre chimeneas y brisa suave",
    description: "Una vista panorámica sobre las casas del barrio. El cielo se tiñe de tonos durazno y lavanda mientras caen las primeras sombras.",
    puzzleGoal: "Sigue los mechones de pelo y las huellas entre las chimeneas para encontrar el camino a la casa de Yosu.",
    hint: "Observa la ropa tendida y las cajas de madera. Los gatos adoran saltar sobre las cajas para alcanzar cornisas elevadas.",
    nextMap: "casa-yosu",
    nextMapLabel: "Bajar a la casa de Yosu",
    dimensions: { rows: 7, cols: 7 },
    initialPlayerPos: { row: 6, col: 1 },
    theme: "sunset-rooftops",
    // Tipos de tile:
    // SKY: cielo pastel de atardecer
    // T: tejas rosas/terracota
    // CH: chimenea de ladrillo con humito
    // ANT: antena de televisión analógica
    // BX: cajas de madera apiladas
    // PT: macetas con flores en cornisa
    // CL: cuerda con ropa tendida (sábanas al viento)
    // RW: ventana iluminada del vecindario
    // EXIT_ROOF: bajada secreta hacia la casa de Yosu
    layout: [
      ["SKY", "SKY", "SKY", "SKY", "SKY", "SKY", "SKY"],
      ["T",   "CH",  "T",   "CL",  "T",   "ANT", "T"],
      ["T",   "T",   "T",   "T",   "T",   "T",   "RW"],
      ["PT",  "T",   "BX",  "T",   "T",   "T",   "T"],
      ["T",   "T",   "T",   "T",   "CH",  "T",   "T"],
      ["T",   "CL",  "T",   "T",   "T",   "BX",  "EXIT_ROOF"],
      ["T",   "T",   "T",   "PT",  "T",   "T",   "T"],
    ],
    interactables: {
      "CH": {
        name: "Chimenea de ladrillo suave",
        icon: "🧱",
        text: "Desprende un humo tibio y aromático. Cerca de los ladrillos hay un mechoncito de pelaje gris... ¡es de Yosu!",
        itemReward: "Pista: Pelo de Yosu",
      },
      "ANT": {
        name: "Antena vintage de TV",
        icon: "📡",
        text: "Una antena metálica clásica. Desde aquí arriba se ve todo el vecindario brillando con luces cálidas.",
      },
      "BX": {
        name: "Cajas de madera acogedoras",
        icon: "📦",
        text: "Cajas apiladas perfectas para que un gato trepe. Alguien dejó marcas de garras juguetonas aquí recientemente.",
      },
      "PT": {
        name: "Macetas con flores lilas",
        icon: "🌸",
        text: "Pequeñas petunias y pensamientos cultivados por un vecino amable. Huelen delicioso con la brisa.",
      },
      "CL": {
        name: "Cuerda de ropa tendida",
        icon: "🧺",
        text: "Sábanas blancas y mantitas ondeando suavemente. Crean un pasadizo secreto entre los dos techos.",
      },
      "RW": {
        name: "Ventana con luz interior",
        icon: "🪟",
        text: "Se escucha una tetera silbando adentro y una música suave de piano. Qué pacífico es este atardecer.",
      },
      "EXIT_ROOF": {
        name: "Bajada hacia el jardín de Yosu",
        icon: "🪜",
        text: "Una escalera de madera apoyada contra la pared permite bajar sin peligro al patio de Yosu.",
        isExit: true,
      },
    },
  },

  "casa-yosu": {
    id: "casa-yosu",
    number: 3,
    title: "Casa de Yosu",
    subtitle: "El jardín secreto al anochecer",
    description: "Un patio florido con césped suave y un farol cálido encendido. Huellas diminutas de patitas conducen hacia la puerta.",
    puzzleGoal: "Sigue las huellas de patitas y abre la puerta del porche para reunirte con Yosu.",
    hint: "Sigue el rastro de huellas hasta el farol cálido y revisa el platito de comida; allí encontrarás la última pista.",
    nextMap: "completado",
    nextMapLabel: "¡Abrazar a Yosu!",
    dimensions: { rows: 7, cols: 7 },
    initialPlayerPos: { row: 6, col: 3 },
    theme: "yosu-garden",
    // Tipos de tile:
    // FNC: cerca de madera pastel
    // G: césped verde menta suave
    // PTH: sendero de adoquines desgastados
    // LAN: farol de hierro con cálido halo de luz
    // DR: puerta de madera de la casa de Yosu
    // WIN_Y: ventana iluminada con cortinas cerradas
    // PAW: huellitas de gato en el suelo
    // TOY: pescadito de juguete de Yosu
    // BWL: platito de comida
    // FLW: macetón de lavanda
    layout: [
      ["FNC", "WIN_Y", "DR",  "FNC", "WIN_Y", "FLW", "FNC"],
      ["G",   "PTH",   "PTH", "PTH", "G",     "G",   "G"],
      ["G",   "LAN",   "PTH", "G",   "FLW",   "G",   "G"],
      ["G",   "G",     "PAW", "PTH", "G",     "TOY", "G"],
      ["FLW", "G",     "G",   "PAW", "PTH",   "G",   "G"],
      ["G",   "BWL",   "G",   "G",   "PAW",   "PTH", "G"],
      ["FNC", "G",     "G",   "PTH", "G",     "G",   "FNC"],
    ],
    interactables: {
      "LAN": {
        name: "Farol cálido de hierro",
        icon: "🏮",
        text: "Un farol que emite una luz dorada y suave. El calor es reconfortante después de caminar por el viento de los techos.",
      },
      "PAW": {
        name: "Huellitas de gato frescas",
        icon: "🐾",
        text: "¡Pequeñas pisadas impresas en la tierra húmeda! No hay duda: este es el rastro de bigotes de Yosu.",
      },
      "TOY": {
        name: "Pescadito de juguete de tela",
        icon: "🐟",
        text: "¡El pececito de fieltro de Yosu! Aún está tibio. Debió haber estado jugando aquí hace solo unos minutos.",
        itemReward: "Pescadito de Yosu",
      },
      "BWL": {
        name: "Platito de cerámica",
        icon: "🥣",
        text: "Un cuenco con leche fresca y unos bocadillos de atún. Alguien lo preparó con mucho amor.",
      },
      "FLW": {
        name: "Arbusto de lavanda silvestre",
        icon: "🌿",
        text: "Flores aromáticas de color lila suave. Atraen pequeñas mariposas nocturnas.",
      },
      "WIN_Y": {
        name: "Ventana con luz acogedora",
        icon: "🪟",
        text: "A través de las cortinas de encaje se ve una silueta felina durmiendo plácidamente junto a la chimenea interior.",
      },
      "DR": {
        name: "Puerta principal de Yosu",
        icon: "🚪",
        text: "La puerta tiene una puertecita gatera de vaivén. ¡Yosu está justo al otro lado esperándote!",
        isExit: true,
      },
    },
  },
};

export const defaultMapId = "casa-mishi";
