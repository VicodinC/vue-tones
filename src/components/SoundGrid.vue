<script setup>
import SoundGridItem from './SoundGridItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <!-- grid 8 x 16 -->
  <div>
    <!-- repeat inner gridItem 16 time -->

    <SoundGridItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>synthTest</template>

      <!-- testbtn -->
      <button @click="synthTest">Test Synth</button>
    </SoundGridItem>
  </div>



</template>
