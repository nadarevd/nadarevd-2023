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
        <div class="grid grid-cols-9 gap-12">
          <div v-for="(skill, index) in skillsOne" :key="`one-${index}`">
            <img v-lazy="`/skills/${skill}.svg`" class="w-24 h-24 mx-auto"/>
          </div>

          <div v-for="(skill, index) in skillsTwo" :key="`two-${index}`">
            <img v-lazy="`/skills/${skill}.svg`" class="w-24 h-24 mx-auto"/>
          </div>

          <div v-for="(skill, index) in skillsThree" :key="`three-${index}`">
            <img v-lazy="`/skills/${skill}.svg`" class="w-24 h-24 mx-auto"/>
          </div>
        </div>
      </template>
    </BaseSectionComponent>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsOne: ['vuejs', "nuxt", "pinia", "vite", "rails", "laravel", 'figma', 'tailwindcss', "nodejs"],
      skillsTwo: ["git", "github", "jira", "heroku", "canva", "photoshop", "linux", "windows 11", "docker"],
      skillsThree: ["unity", "djs", "digitalocean", "bitbucket", "vscode", "c", "html", "css", "javascript"]
    }
  },
  directives: {
    lazy: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(([entry], observer) => {
          if (entry.isIntersecting) {
            el.src = binding.value;
            observer.unobserve(el);
          }
        }, {threshold: 0.1});
        observer.observe(el);
      }
    }
  }
}
</script>

<style>
</style>