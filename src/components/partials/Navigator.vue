<template>
     <div class="container-full">
        <nav class="row">
            <span>Tic Tac Toe</span>
            <router-link to="/">Home</router-link>
            <router-link to="/players">Players</router-link>
            <router-link to="/history">History</router-link>
        </nav>
    </div> 
    <div class="container">
        <router-view />
    </div>

</template>

<style lang="scss" scoped>
@import '../../assets/css/style.scss';
.container-full{
    position: fixed;
    top: 0;
    left: 0;
}
.row{
    width: 100%;
    line-height: 40px;
}



</style>