<template>
    <div id="app">
        <mt-header title="家庭记账">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <router-view></router-view>
        <mt-palette-button content="+" mainButtonStyle="color:#fff;background-color:#26a2ff;bottom:10px;right:10px" >
            <div class="my-icon-button" @touchstart="addCost"></div>
            <div class="my-icon-button"></div>
            <div class="my-icon-button"></div>
        </mt-palette-button>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="统计">
                <img src="" slot="icon" /> 统计
            </mt-tab-item>
            <mt-tab-item id="历史">
                <img src="" slot="icon" /> 历史
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            selected: ''
        };
    },
    methods: {
        addCost() {
            console.log('addCost');
        }
    }
}
</script>

<style>
#app {}
</style>
