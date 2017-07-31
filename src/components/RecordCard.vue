<template>
    <div class="record-info">
        <i class="record-icon"></i>
        <span class="record-text">{{text}}</span>
        <span class="record-num">{{num}}</span>
    </div>
</template>

<script>
export default {
  data() {
      return {
        // 1-支出；0-收入
        type: 1,
        text: '买菜',
        num: '14.3'
      };
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.record-info {
    height: 30px;
    line-height: 30px;
    overflow: hidden;

    .record-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ccc;
    }

    .record-text {
        font-size: 14px;
    }

    .record-num {
        float: right;
        font-size: 12px;
        color: #ccc;
    }
}
</style>

