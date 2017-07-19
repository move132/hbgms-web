<template>
  <div id="app">
    <!-- <img src="./assets/images/logo.png"> -->
    <div class="layout">
       <Headers></Headers>
           

        <div class="layout-content">
            <div class="panel_left">
                <v-bar wrapper="wrapper" vBar="re_barscroll" vBarInternal="" hBar=""   hBarInternal="">
                   <Menu ref="menu" :active-name="activeName" :open-names="openNames" theme="dark"  accordion  @on-select="onselect" @on-open-change="openchange">
                        <template  v-for="(item,index) in data">
                            <Submenu :name="index+1" :data-index="index+1" >
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    {{ item.navname }}
                                </template>
                                <template v-for="(item_nav,i) in item.nav_menu">  
                                    <router-link :to="item_nav.router">
                                        <Menu-item  :data-name="(index+1)+'-'+(i+1)" :name="(index+1)+'-'+(i+1)" :key="item_nav.name">
                                            {{ item_nav.name }} 
                                        </Menu-item>
                                    </router-link>
                                 </template>
                            </Submenu>
                        </template>
                    </Menu> 
                </v-bar>    
            </div>
            <div class="panel_right">
                <div class="layout-header">
                    <i-button type="text" @click="">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-content-main"> 
                    <transition name="bounce" mode="out-in" appear>
                        <router-view></router-view>
                    </transition>
                </div>
            </div> 
        </div> 
    </div> 
  </div>
</template>

<script>
import VBar from 'v-bar'; 
import data from './menu_data'; 
import Headers from './components/layout/Headers';
export default {
    components: { VBar, Headers },
    name: 'app',
    data() {
        return {
            activeName: '',
            openNames: [],
            data:data
        }
    },
    created() {
        //console.log(this.data); 
        this.update();
    },  
    methods: {
        dropclick(e){
            console.log(e);
        },
        onselect(e){

        },
        openchange(e){
            //console.log(e);
        },
        update (route) { 
            this.$set(this, 'activeName', '1-1');
            this.$set(this, 'openNames', [1]);
            this.$nextTick(() => {
                //this.$refs.menu.updateActiveName();
                this.$refs.menu.$children.forEach((item) => {
                    console.log(item)
                    item.opened = false
                })
                this.$refs.menu.updateOpened()
            }) 
        }
    }
}
</script>

<style>
    @import './assets/css/index.css';
    
</style>
