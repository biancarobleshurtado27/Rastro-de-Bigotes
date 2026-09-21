import { useState } from "react";

/**
 * hooks/useDialogue.js
 * 
 * Custom Hook didáctico para gestionar una secuencia de diálogos.
 * Encapsula la lógica de:
 * - Saber en qué diálogo estamos (índice actual).
 * - Avanzar al siguiente diálogo.
 * - Detectar si estamos en el último diálogo o si ya terminamos la conversación.
 * - Reiniciar la secuencia.
 * 
 * @param {Array} dialoguesList Lista de objetos de diálogo
 */
export function useDialogue(dialoguesList = []) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const total = dialoguesList.length;
  const currentDialogue = dialoguesList[currentIndex] || null;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  // Avanza al siguiente diálogo o marca la conversación como finalizada
  const nextDialogue = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Permite reiniciar la conversación desde el inicio
  const resetDialogue = () => {
    setCurrentIndex(0);
    setIsFinished(false);
  };

  return {
    currentIndex,
    currentDialogue,
    total,
    isFirst,
    isLast,
    isFinished,
    nextDialogue,
    resetDialogue,
  };
}

