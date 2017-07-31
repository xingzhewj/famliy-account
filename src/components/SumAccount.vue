<template>
    <div class="sum-account">
        <div class="sum-child sum-date">
            <p class="sum-date-title">{{ dateTitle }}年</p>
        </div>
        <SumInfo class="sum-child"></SumInfo>
        <SumInfo class="sum-child"></SumInfo>
    </div>
</template>

<script>
import bus from '@/bus';
import SumInfo from './SumInfo.vue';

export default {
    name: 'sumAccount',
    components: {
        SumInfo,
        Record
    },
    data() {
        return {
            dateTitle: '2017'
        }
    }
}
</script>

<style lang="less" scoped>
.sum-account {
    display: flex;
    padding: 10px;
    align-items: center;
    background-color: #2A2E32;

    .sum-date-title {
        color: #ccc;
        font-size: 12px;
    }

    .sum-child {
        flex-grow: 1;
    }
}
</style>
