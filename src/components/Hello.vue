<template>
  <div class="hello">
    <mt-button type="primary">default</mt-button>
  </div>
</template>

<script>
import bus from '@/bus';
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
