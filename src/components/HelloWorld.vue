<template>
  <div class="hello">
    <h1>vue demos</h1>
    <ol>
      <li><promise-demo></promise-demo></li>
      <!-- <li><test-promise></test-promise> </li> -->
      <!-- <li> <async-await></async-await> </li> -->
      <!-- <li> <img-promise></img-promise> </li> -->
    </ol>
  </div>
</template>

<script>
import PromiseDemo from './demoPromise'
import TestPromise from './demoPromise/testPromise.vue'
import AsyncAwait from './demoPromise/asyncAwait.vue'
import ImgPromise from './demoPromise/imgPromise.vue'
export default {
  name: 'HelloWorld',
  components:{
    PromiseDemo,
    TestPromise,
    AsyncAwait,
    ImgPromise
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  text-align: left;
}
</style>
