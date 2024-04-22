<template>
  <!-- grid flex item -->
  <RouterLink to="/instrument/1">
    <div :class="gridItemClass" @click="openInstrumentModal">

    </div>
  </RouterLink>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
import InstrumentModal from './InstrumentModal.vue'
//props item from SoundGrid.vue
const props = defineProps({
  item: Object
})


//open Instrument Modal when grid item is
let openInstrument = () => {
  console.log('openInstrumentModal')
  //open Instrument Modal
  route.push({ name: 'Instrument' })
}

//set class for grid item
const gridItemClass = ref(`
bg-gray-100
    border-2
    border-gray-200
    rounded-lg
    p-4
    m-4
    flex
    flex-col
    items-center
    justify-center
    text-center
    w-1/4
    h-1/4
`)

gridItemClass.value = gridItemClass.value + ' grid-cols-' + props.item.limitCol

</script>