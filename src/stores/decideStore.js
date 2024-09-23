import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { db } from "src/firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useDecideStore = defineStore("decide", () => {
  /*
  Variables
  */
  const choices = ["rock", "paper", "scissors"];
  const playerChoice = ref(null);
  const computerChoice = ref(null);
  const result = ref(null);
  const score = ref(0);

  /*
  Functions
  */

  const fetchScore = async () => {
    try {
      const docRef = doc(db, "scores", "playerScore");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        score.value = docSnap.data().score;
      } else {
        await setDoc(docRef, { score: 0 });
        score.value = 0;
      }
    } catch (error) {
      console.error("Error fetching score:", error);
    }
  };
  // Save score to Firestore
  const saveScore = async (newScore) => {
    try {
      const docRef = doc(db, "scores", "playerScore");
      await setDoc(docRef, { score: newScore });
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };
  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const checkWinner = () => {
    if (playerChoice.value === computerChoice.value) return "draw";

    const winningCombinations = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    return winningCombinations[playerChoice.value] === computerChoice.value
      ? "win"
      : "lose";
  };

  const resultMessage = computed(() => {
    if (result.value === "draw") return "It's a tie!";
    else if (result.value === "win") return "YOU WIN";
    else return "YOU LOSE";
  });

  const play = async (choice) => {
    playerChoice.value = choice;

    await new Promise((resolve) => {
      setTimeout(() => {
        computerChoice.value = getComputerChoice();
        result.value = checkWinner();
        resolve();
      }, 1000);
    });

    if (result.value === "win") {
      score.value += 1;
    } else if (result.value === "lose") {
      if (score.value > 0) {
        score.value -= 1;
      }
    }
    // Save the score to Firestore
    await saveScore(score.value);
  };
  // Function to reset the game
  const resetScore = async () => {
    score.value = 0;
    await saveScore(0); // Reset score in Firestore
  };

  const resetGame = () => {
    playerChoice.value = null;
    computerChoice.value = null;
    result.value = null;
  };
  // Fetch initial score when component mounts
  onMounted(() => {
    fetchScore();
  });

  return {
    choices,
    play,
    playerChoice,
    computerChoice,
    result,
    resultMessage,
    getComputerChoice,
    checkWinner,
    resultMessage,
    resetGame,
    resetScore,
    score,
  };
});
