<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <h2 class="gradient-text font-bold text-xl">{{ currentJob.title }}</h2>
        <h3 class="text-gray-200 text-lg">{{ currentJob.company }}</h3>
      </div>
      <div class="flex flex-col text-right">
        <h3 class="text-gray-400">{{ currentJob.location }}</h3>
        <h3 class="text-gray-400">{{ currentJob.date }}</h3>
      </div>
    </div>
    <div class="grid grid-cols-8 w-fit gap-2">
      <div v-for="(skill, index) in currentJob.technologies" :key="`job-${index}`" class="w-8">
        <img :src="`/skills/${skill}.svg`" :alt="skill" class=" rounded-md"/>
      </div>
    </div>
    <div class="py-3">
      <div class="border-l-2 border-gray-300 gradient-text pl-3 text-gray-400">
        <p v-html="currentJob.description"></p>
      </div>
    </div>
    <h4>My Responsibities & Achievements</h4>
    <ul class=" list-disc ml-8">
      <li v-for="(role, index) in currentJob.roles" :key="index">
        {{ role }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    currentJob: {
      type: Object,
      required: true
    },
  }
}
</script>

<style>

</style>