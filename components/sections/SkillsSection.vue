<template>
  <div>
    <div class="flex flex-col md:flex-row">
      <BaseSectionComponent alignment="center">
      <template v-slot:tag>
        Some sort of Tag Here
      </template>
      <template v-slot:header>
        A nice header here
      </template>
      <template v-slot:subheader>
          My growing list of skills and interests. Things I use professionally and for personal use.
      </template>
      
      <template v-slot:component>
        <div>
          <SectionsComponentsCanvas />
        </div>
      </template>
    </BaseSectionComponent>
    </div>    
  </div>
</template>

<script>  

</script>

<style>
</style>