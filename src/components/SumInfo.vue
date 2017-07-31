<template>
    <div class="sum-info">
        <p class="sum-info-title">{{ title }}</p>
        <p class="sum-info-value">{{ value }}</p>
    </div>
</template>

<<script>
export default {
    data() {
        return {
            title: '支出(元)',
            value: '13,124.30'
        };
    }
}
</script>

<style lang="less" scoped>
    .sum-info {
        .sum-info-title {
            color: #ccc;
            font-size: 12px;
        }
        .sum-info-value {
            margin-top: 15px;
            color: #fff;
            font-size: 14px;
        }
    }
</style>


