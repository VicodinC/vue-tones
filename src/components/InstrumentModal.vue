<script setup>
import { ref } from 'vue'
import * as Tone from 'tone'

const InstrumentSelectOptionList = ref(['piano', 'guitar', 'drum'])


//setInstrumentToSoundItem
const setInstrumentToSoundItem = (instrument) => {
  console.log('setInstrumentToSoundItem', instrument)

  //item.instrument = instrumen
}


</script>

<template>
  <div class="flex">
    <h2>Instrument List</h2>
    <select class="intrument-select" @change="setInstrumentToSoundItem($event.target.value)">
      <option v-for="option in InstrumentSelectOptionList" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
.intrument-select {
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
}
</style>