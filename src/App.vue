<script setup>
import Tris from './components/Tris.vue'
// Ricarica la pagina
const reloadPage = () => {
  window.location.reload(); 
};
</script>

<template>
  <nav class="container-full">
    <ul class="row">
      <li><a href="#" @click="reloadPage"><span>TIC TAC TOE </span></a></li>
      
    </ul>
  </nav>
  
 <div class="container">
  <Tris/>
 </div>
  

</template>

<style lang="scss">
@import './assets/css/style.scss';

nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  line-height: $navHeight;
  border-bottom: 2px solid;
  background-color: $white;
  box-shadow: 0px 1px 2px;

  span{
    font-size: 24px;
  }

  ul :first-child{
    flex-grow: 5;
    cursor: default;

    :hover{
      cursor: pointer;
      color: currentColor;
    }
  }

  li{
    flex-grow: 2;
    cursor: pointer;
  }
}

</style>
