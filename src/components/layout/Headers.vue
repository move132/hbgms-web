<template>
	<Menu id="Header" mode="horizontal" theme="dark" active-name="1"  class="header">
        <div class="layout-logo">
            <img src="../../assets/images/logo.png" />院内血糖管理系统
        </div>
        <div class="layout-setting"> 
            <Dropdown trigger="click" >
                <a href="javascript:void(0)">
                    超级管理员
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>切换</Dropdown-item>
                    <Dropdown-item>设置</Dropdown-item>
                    <Dropdown-item>退出</Dropdown-item> 
                </Dropdown-menu>
            </Dropdown>
        </div> 
    </Menu>
</template>
<script>
	export default {
		components: {  },
	    name: 'header',
	    data() {
	        return {
	             
	        }
	    },
	    created() { 

	    },  
	    methods: {

    	}
	}
</script>
<style>
	
</style>