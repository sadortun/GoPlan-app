<template>
  <label
      v-for="(scale) in timeScales"
      :key="scale.label"
      class="inline-flex items-center px-2"
  >
    <input
        v-model="currentScaleLabel"
        :class="`form-radio h-5 w-5 text-green-600`"
        :value="scale.label"
        name="radio"
        type="radio"
        @click="scaleClicked(scale.label)"
    >
    <span class="ml-2 text-gray-700">{{ scale.label }}</span>
  </label>

    <trading-vue ><!-- sadortun-test -->
    </trading-vue>
  
<!--  <trading-vue v-if="isMounted"-->
<!--               :data="chartData" :height="333" :width="444">-->
<!--  </trading-vue>-->

  <!--  @todo If you remove this, charts wont update-->
  <small>{{ chartData.series }}</small>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {AssetSymbol} from '../../../../common/models'
import * as dayjs from 'dayjs'
import * as duration from 'dayjs/plugin/duration'
import {getScaleByLabel, getScaleForRange, loadData, timeScales} from './CandlestickChart'
import TradingVue from 'trading-vue-js'

dayjs.extend(duration)

export default defineComponent({
  components: {
    TradingVue,
  },
  props: {
    assetSymbol: {
      type: AssetSymbol,
      required: true
    }
  },
  setup(props) {
    // const theChart = ref(null)
    const currentScaleLabel = ref('3 Months')
    const isMounted = ref(false)
    //
    //
    const chartData = ({
      ohlcv: [
        [1551128400000, 33, 37.1, 14, 14, 196],
        [1551132000000, 13.7, 30, 6.6, 30, 206],
        [1551135600000, 29.9, 33, 21.3, 21.8, 74],
        [1551139200000, 21.7, 25.9, 18, 24, 140],
        [1551142800000, 24.1, 24.1, 24, 24.1, 29],
      ]
    })
    //
    // const reloadData = async (
    //     min: dayjs.Dayjs = undefined,
    //     max: dayjs.Dayjs = undefined,
    // ) => {
    //
    //   const scale = getScaleByLabel(currentScaleLabel.value)
    //   const from = min ? min : dayjs().subtract(scale.visible.asDays(), 'days')
    //   const to = max ? max : dayjs()
    //
    //   chartData.series[0].data = await loadData(
    //       props.assetSymbol,
    //       scale,
    //       from,
    //       to,
    //   )
    //
    // }
    const scaleClicked = async (label: string) => {
      // currentScaleLabel.value = label
      // await reloadData()
    }
    //
    //watch(currentScaleLabel, () => reloadData())
    //  watch(() => props.assetSymbol, () => reloadData())

    onMounted(async () => {
      isMounted.value=true
     // await reloadData()
    });


    return {
      timeScales,
      isMounted,
      scaleClicked,
      currentScaleLabel,
      chartData,
      // chart: new DataCube(Data),
      // colors: {
      //   colorBack: '#fff',
      //   colorGrid: '#eee',
      //   colorText: '#333',
      // }
    }
  },
})

</script>
