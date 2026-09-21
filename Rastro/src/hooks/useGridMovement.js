import { useState, useCallback, useEffect } from "react";

/**
 * hooks/useGridMovement.js
 * 
 * Hook personalizado para gestionar el movimiento de Mishi en una cuadrícula 2D.
 * 
 * Reglas de movimiento:
 * 1. La nueva posición debe estar dentro de los límites (0 <= row < rows, 0 <= col < cols).
 * 2. Casillas transitables: 'floor', 'carpet', 'roof', 'garden', 'exit', 'interior', 'door'.
 * 3. Casillas no transitables: 'wall', 'blocked', 'water'.
 * 4. Obstáculos sólidos en la lista interactiveObjects no se pueden atravesar.
 * 5. Si la casilla está bloqueada, no muta la posición y emite un mensaje suave temporal.
 * 
 * @param {Object} initialPosition Coordenadas iniciales { row, col }
 * @param {Object} mapData Datos completos del mapa actual (rows, cols, tiles, interactiveObjects)
 * @param {Function} onMove Callback opcional al completar un movimiento válido
 */
export function useGridMovement(initialPosition, mapData, onMove) {
  const [position, setPosition] = useState(initialPosition || { row: 0, col: 0 });
  const [direction, setDirection] = useState("down");
  const [isMoving, setIsMoving] = useState(false);
  const [blockedMessage, setBlockedMessage] = useState(null);

  // Sincronizar si cambia la posición inicial o el mapa
  useEffect(() => {
    if (initialPosition) {
      setPosition(initialPosition);
      setDirection("down");
      setIsMoving(false);
      setBlockedMessage(null);
    }
  }, [initialPosition?.row, initialPosition?.col, mapData?.id]);

  // Limpiar mensaje bloqueado tras 2.5 segundos
  useEffect(() => {
    if (!blockedMessage) return;
    const timer = setTimeout(() => {
      setBlockedMessage(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [blockedMessage]);

  /**
   * Valida si una casilla destino es transitable
   */
  const isWalkable = useCallback(
    (targetRow, targetCol) => {
      if (!mapData || !mapData.tiles) return false;

      // 1. Verificar límites de la matriz
      if (
        targetRow < 0 ||
        targetRow >= mapData.rows ||
        targetCol < 0 ||
        targetCol >= mapData.cols
      ) {
        return false;
      }

      // 2. Verificar tipo de casilla
      const tileType = mapData.tiles[targetRow][targetCol];
      const nonWalkableTiles = ["wall", "blocked", "water"];
      if (nonWalkableTiles.includes(tileType)) {
        return false;
      }

      // 3. Verificar si hay un obstáculo sólido registrado en esa casilla
      const hasSolidObstacle = mapData.interactiveObjects?.some(
        (obj) =>
          obj.row === targetRow &&
          obj.col === targetCol &&
          (obj.type === "obstacle" || obj.solid === true)
      );

      if (hasSolidObstacle) {
        return false;
      }

      return true;
    },
    [mapData]
  );

  /**
   * Intenta mover a Mishi en una dirección cardinal ('up', 'down', 'left', 'right')
   */
  const move = useCallback(
    (newDirection) => {
      // Siempre actualizamos la orientación hacia donde se intentó mirar/mover
      setDirection(newDirection);

      let deltaRow = 0;
      let deltaCol = 0;

      if (newDirection === "up") deltaRow = -1;
      if (newDirection === "down") deltaRow = 1;
      if (newDirection === "left") deltaCol = -1;
      if (newDirection === "right") deltaCol = 1;

      const nextRow = position.row + deltaRow;
      const nextCol = position.col + deltaCol;

      if (isWalkable(nextRow, nextCol)) {
        // Movimiento válido: creamos un nuevo objeto sin mutación directa
        const newPos = { row: nextRow, col: nextCol };
        setPosition(newPos);
        setIsMoving(true);
        setBlockedMessage(null);

        // Apagar animación de paso tras breve lapso
        setTimeout(() => {
          setIsMoving(false);
        }, 180);

        if (typeof onMove === "function") {
          onMove(newPos, newDirection);
        }
      } else {
        // Casilla no transitable: mensaje suave sin alertas invasivas
        setBlockedMessage("Por aquí no se puede pasar.");
      }
    },
    [position, isWalkable, onMove]
  );

  const resetPosition = useCallback((newPos) => {
    setPosition(newPos);
    setDirection("down");
    setIsMoving(false);
    setBlockedMessage(null);
  }, []);

  return {
    position,
    direction,
    isMoving,
    move,
    resetPosition,
    blockedMessage,
    setBlockedMessage,
  };
}

