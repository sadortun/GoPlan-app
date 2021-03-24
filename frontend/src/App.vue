<template>
<div>abc

<!--      <suspense>-->

        <trading-vue
                     :data="chartData" :height="333" :width="444">
        </trading-vue>

<!--      </suspense>-->
  def
</div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {useRouter} from 'vue-router'
import TradingVue from 'trading-vue-js'

const defaultLayout = 'default'

export default defineComponent({
  components:{
    TradingVue,
  },
  setup () {
    const {currentRoute} = useRouter()
    const chartData = ({
      ohlcv: [
        [1551128400000, 33, 37.1, 14, 14, 196],
        [1551132000000, 13.7, 30, 6.6, 30, 206],
        [1551135600000, 29.9, 33, 21.3, 21.8, 74],
        [1551139200000, 21.7, 25.9, 18, 24, 140],
        [1551142800000, 24.1, 24.1, 24, 24.1, 29],
      ]
    })
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    )

    return {
      layout,
      chartData,
    }
  },
})
</script>
