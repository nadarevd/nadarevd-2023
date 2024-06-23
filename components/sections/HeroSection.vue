<template>
    <BaseSectionComponent alignment="left">
      <template v-slot:tag>Software Developer & Designer</template>
      <template v-slot:header>Hello, I'm<br><span class="gradient-text">Denis Nadarevic </span></template>
      <template v-slot:subheader>Keen eye for detail and a dedication to continuous learning and staying up-to-date with the latest technologies.</template>
      <template v-slot:component><SectionsComponentsHeroContent /></template>
    </BaseSectionComponent>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
</style>