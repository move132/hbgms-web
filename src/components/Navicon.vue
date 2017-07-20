<template>
	<div class="layout-header">
        <i-button type="text" @click="sidebarHandler">
            <Icon type="navicon" size="32"></Icon>
        </i-button>
    </div>
</template>
<script>
export default { 
    name: 'navicon',
    data() {
        return { 
            sidebar:false
        }
    },
    created() { 
    },  
    methods: {
        sidebarHandler(){ 
            this.sidebar= !this.sidebar;
        }
    }
}
</script>

<style> 
</style>