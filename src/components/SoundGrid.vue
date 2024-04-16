<script setup>
import { ref } from 'vue'
import SoundGridItem from './SoundGridItem.vue'


const soundGridItem = ref({
  icon: '',
  limitCol: 12,
  heading: '',
  synthTest: ''
})

//create soundGridArray
const soundGridArray = ref([])


//function add soundGridItem
function addSoundGridItem() {
  console.log('addSoundGridItem')
  soundGridArray.value.push(soundGridItem.value)
}
</script>

<template>
  <!-- header div -->
  <div>
    <h2>SoundGrid</h2>
  </div>
  <!-- grid content div -->
  <div>

    <!-- addGridButton -->
    <button @click="addSoundGridItem">Add Grid Item</button>

    <!-- grid-->
    <div class="grid grid-cols-12 gap-4">
      <template v-for="(item, index) in soundGridArray" :key="index">
        <SoundGridItem :item="item">
        </SoundGridItem>
      </template>
    </div>
  </div>
</template>
