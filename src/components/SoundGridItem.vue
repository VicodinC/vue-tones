<template>
  <!-- grid flex item -->
  <div :class="gridItemClass" @click="openInstrumentModal">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
import InstrumentModal from './InstrumentModal.vue'
//props item from SoundGrid.vue
const props = defineProps({
  item: Object
})


//modal open
let openInstrumentModal = () => {
  console.log('openInstrumentModal')
  //open modal
  InstrumentModal.open = true;
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