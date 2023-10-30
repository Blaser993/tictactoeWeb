<template>
   
        <nav class="container-full">
            <ul class="row">
                <li><span>Tic Tac Toe</span></li>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/players">Players</router-link></li>
                <li><router-link to="/history">Storico</router-link></li>
            </ul>
            
            
            
            
        </nav>
   
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
    width: 100%;
    
    background-color: green;
}
.row{
    flex-basis: 100%;
    line-height: $navHeight;   

    li{
        flex-grow: 1;
        &  > *{
            padding: 12px;
            cursor: pointer;
        }     
    }s
    span{
        cursor:default;
    };
}



</style>