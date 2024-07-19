<template>
  <div>
    <SectionsNavBar />
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsSkillsSection />
    <SectionsJobSection />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    return { route };
  }
}
</script>

<style>
</style>