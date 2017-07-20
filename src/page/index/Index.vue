<template>
    <div class="page_layout"> 
        <h2 tabindex='0'>Hello Page</h2> 
        <p @click='clickhandler'>{{msg}}</p>
        <p>
            <input @keyup.up="left('sv',$event)" @keyup.left="left" @keyup.right="left" @keyup.down="left"/>
            <h2 class="" @mouse.left='mouseleft'>鼠标事件</h2>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods:{
            clickhandler:function(e){
                console.log($("input").val());
            },
            left:function(e,a){
                console.log(e,a);
            },
            mouseleft:function(e){
                console.log(e);
            }
        }
    }
</script>
 
<style lang="scss">
    @import './index.scss';
</style>
