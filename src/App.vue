<template>
  <div id="app">
    <!-- <img src="./assets/images/logo.png"> -->
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1"  class="header">
            <div class="layout-logo">
                <img src="./assets/images/logo.png">院内血糖管理系统
            </div>
            <div class="layout-setting"> 
                <Dropdown trigger="click" >
                    <a href="javascript:void(0)">
                        超级管理员
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <Dropdown-menu slot="list"  on-click='dropclick'>
                        <Dropdown-item>切换</Dropdown-item>
                        <Dropdown-item>设置</Dropdown-item>
                        <Dropdown-item>退出</Dropdown-item> 
                    </Dropdown-menu>
                </Dropdown>
            </div>
            <!-- <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div> -->
        </Menu>
           

        <div class="layout-content">
            <div class="panel_left">
                <v-bar wrapper="wrapper" vBar="re_barscroll" vBarInternal="" hBar=""   hBarInternal="">
                    <Menu active-name="1-2" theme="dark" accordion :open-names="['1']">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-navigate"></Icon>
                                    科室血糖管理
                                </template>
                                <Menu-item name="1-1">患者血糖</Menu-item>
                                <Menu-item name="1-2">科室血糖</Menu-item>
                                <Menu-item name="1-3">查房单</Menu-item>
                                <Menu-item name="1-4">血糖数据导出</Menu-item> 
                            </Submenu>
                            <Submenu name="2">  
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    临床信息管理
                                </template>
                                <Menu-item name="2-1">床位一览表</Menu-item>
                                <Menu-item name="2-2">患者信息管理</Menu-item>
                                <Menu-item name="2-3">条形码打印</Menu-item>
                                <Menu-item name="2-4">血糖记录单</Menu-item>
                                <Menu-item name="2-5">血糖数据维护</Menu-item>
                                <Menu-item name="2-6">查房单</Menu-item>
                                <Menu-item name="2-7">试条用量统计</Menu-item>
                                <Menu-item name="2-8">护士工作量统计</Menu-item> 

                                <Menu-item name="2-1">床位一览表</Menu-item>
                                <Menu-item name="2-2">患者信息管理</Menu-item>
                                <Menu-item name="2-3">条形码打印</Menu-item>
                                <Menu-item name="2-4">血糖记录单</Menu-item>
                                <Menu-item name="2-5">血糖数据维护</Menu-item>
                                <Menu-item name="2-6">查房单</Menu-item>
                                <Menu-item name="2-7">试条用量统计</Menu-item>
                                <Menu-item name="2-8">护士工作量统计</Menu-item> 
                            </Submenu>
                            <Submenu name="3"> 
                                <template slot="title">
                                    <Icon type="ios-analytics"></Icon>
                                    门诊血糖数据记录
                                </template> 
                            </Submenu>
                            <Submenu name="4"> 
                                <template slot="title">
                                    <Icon type="ios-navigate"></Icon>
                                    质量管理
                                </template>
                                <Menu-item name="1-1">试剂管理</Menu-item>
                                <Menu-item name="1-2">质控数据查询</Menu-item>
                                <Menu-item name="1-3">检验比对管理</Menu-item> 
                            </Submenu>
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
                    <router-view></router-view>
                </div>
            </div> 
        </div> 
    </div> 
  </div>
</template>

<script>
import VBar from 'v-bar';
import data from './menu_data'; 
export default {
    components: { VBar },
    name: 'app',
    data() {
        return {
            data:{}
        }
    },
    created() {
        console.log(this); 
     },  
    methods: {
        dropclick:function(e){
            console.log(e);
        }
    }
}
</script>

<style>
    @import './assets/css/index.css';
    
</style>
