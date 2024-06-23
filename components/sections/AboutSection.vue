<template>
  <div class="flex-row md:flex hidden">
    <BaseSectionComponent alignment="left">
      <template v-slot:tag>Loving Father of 0 and self-proclaimed Harvard Astrophysicist</template>
      <template v-slot:header>Who am I?</template>
      <template v-slot:subheader>
        <div class="w-5/6">
          Full-stack developer, computer scientist, businessman, freight broker, event coordinator,
        course instructor, hackathon leader, workshop facilitator, and more. I love learning, no
        matter what the field or topic is. I’m an Honours Business Admin. & Computer Science graduate
        from UWindsor and living in Toronto to pursue my tech career.
        </div>
      </template>
    </BaseSectionComponent>

    <div class="my-auto">
      <img src="~/assets/about-me-graphic.png" alt="">
    </div>
  </div>

  <div class="flex-col md:hidden flex">
    <BaseSectionComponent alignment="center">
      <template v-slot:tag>Loving Father of 0 and self-proclaimed Harvard Astrophysicist</template>
      <template v-slot:header>Who am I?</template>
      <template v-slot:subheader>
        <div class="w-full">
          Full-stack developer, computer scientist, businessman, freight broker, event coordinator,
        course instructor, hackathon leader, workshop facilitator, and more. I love learning, no
        matter what the field or topic is. I’m an Honours Business Admin. & Computer Science graduate
        from UWindsor and living in Toronto to pursue my tech career.
        </div>
      </template>
    </BaseSectionComponent>

    <div class="mx-auto w-10/12">
      <img src="~/assets/about-me-graphic.png" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>