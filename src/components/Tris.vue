<template>
	<main>
    
		<h2>È il turno del giocatore "{{ player }}"</h2>
        
		<div class="board">
            <div 
				v-for="(row, x) in board" 
				:key="x"
				class="row">
				<div 
					v-for="(cell, y) in row" 
					:key="y" 
					@click="MakeMove(x, y)"
                    class="slot"
                    :class="{ 'croce': cell === 'X', 'cerchio': cell === 'O','winning': isWinningSlot(x, y) }">
					{{ cell === 'X' ? 'x' : cell === 'O' ? 'o' : '' }}
				</div>
			</div>
		</div>

    <div v-if="!winner">
      <button class="restart" @click="ResetGame">Riavvia Partita</button>
    </div>

    <div v-if="winner">
      <h2 >Il giocatore "{{ winner }}" vince!</h2>       
      <button class="restart" @click="ResetGame">Gioca ancora</button>
    </div>
		
	</main>
</template>

<script>
import { ref, computed } from 'vue'

// griglia di gioco
const winningSlots = ref([]);
const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

//determina gli slot vincenti per cambiarne los tile
const isWinningSlot = (x, y) => {
  const index = x * 3 + y;
  return winningSlots.value.includes(index);
};

//condizioni di vittoria
const CalculateWinner = (board) => {
  const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winningSlots.value = [a, b, c];
      return board[a]
    }
  }
  console.log("winner:" + winner.value + ";" , board)
  return null
}

// decide il vincitore
const winner = computed(() => {
  const result = CalculateWinner(board.value.flat());
  console.log(result);
  return result;
});
// decide chi fa la mossa
const MakeMove = (x, y) => {
	if (winner.value) return

	if (board.value[x][y]) return

	board.value[x][y] = player.value

	player.value = player.value === 'X' ? 'O' : 'X'

  CalculateWinner(board.value.flat());
}

//nuova partita
const ResetGame = () => {
	board.value = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]
	player.value = 'X'
  winningSlots.value = [];
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
  },
  methods:{
    isWinningSlot,
    CalculateWinner
  },
  setup() {
    return { winningSlots };
  }
};

</script>

<style lang="scss">
@import '../assets/css/style.scss';

.board{
  border: 1px solid;
  border-color: $myDark;
  max-width: 360px;
  margin: 0 auto;
  margin-bottom: 24px;

  .slot{
    display: inline-block;
    width: 40%;
    aspect-ratio: 1;
    flex-grow: 1;
    padding: 10px;
    border: 1px solid; 
    border-color: $myDark;
    background-size: cover;
    color: transparent;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center;
 }
 .croce{     
    background-image:url('../assets/img/x.png');

    }
.cerchio{
    background-image:url('../assets/img/o.png');
}
}

.restart{
  margin: 24px 0;
  border: 2px solid;

}
.restart:hover{
    background-color:$myDark;
    color: $white;
}

.winning{ 
  background-color: black;
}

</style>