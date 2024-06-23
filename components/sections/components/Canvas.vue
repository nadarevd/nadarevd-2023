<script setup>
import { ref } from 'vue'
import { TresCanvas } from '@tresjs/core'


const { onLoop } = useRenderLoop()
const boxRef = ref()
onLoop(({ delta, elapsed, clock, dt }) => {
  if(boxRef.value) {
    console.log(Math.sin(delta))
     boxRef.value.position.y = Math.sin(elapsed)
  }
})
</script>

<template>
  <TresCanvas
  class="!h-[500px]"
  clear-color="#010409"
  >
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />
    <TresMesh ref="boxRef">
      <TresBoxGeometry />
      <TresMeshBasicMaterial color="teal" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>

<style>
</style>