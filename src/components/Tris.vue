<template>
	<main>
        
		<h1>Tic Tac Toe</h1>

		<h3>Player's turn</h3>

		<div class="board">
            <div 
				v-for="(row, x) in board" 
				:key="x"
				class="row">
				<div 
					v-for="(cell, y) in row" 
					:key="y" 
					@click="MakeMove(x, y)"
                    class="slot">
					{{ cell === 'X' ? 'x' : cell === 'O' ? 'o' : '' }}
				</div>
			</div>
		</div>

		<div>
			<h2 v-if="winner">Player '{{ winner }}' wins!</h2>
			<button @click="ResetGame" >Reset</button>
		</div>
	</main>
</template>

<script>
import { ref, computed } from 'vue'

// griglia di gioco
const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

//condizioni di vittoria
const CalculateWinner = (board) => {
  const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}


const winner = computed(() => CalculateWinner(board.value.flat()))

const MakeMove = (x, y) => {
	if (winner.value) return

	if (board.value[x][y]) return

	board.value[x][y] = player.value

	player.value = player.value === 'X' ? 'O' : 'X'
}

const ResetGame = () => {
	board.value = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]
	player.value = 'X'

}

export default {
  data() {
    return {
      player,
      board,
      winner,
      MakeMove,
      ResetGame
    };
  }
};

</script>

<style scoped>
.board{
  border: 1px solid;
  border-color: dark;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 24px;

  .slot{
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-grow: 1;
    padding: 10px;
    border: 1px solid; 
    border-color: dark;
 }
}

</style>