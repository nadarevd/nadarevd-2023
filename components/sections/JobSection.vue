<template>
    <div>
        <div class="flex flex-row text-white md:flex-row">
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
                    <div class="flex lg:flex-row flex-col mx-auto w-full gap-5">
                        <div class="job-title lg:w-6/12">
                            <ul>
                                <li v-for="(job, index) in jobs" :key="index" @click="selectJob(job)">
                                    <div v-if="currentJob !== job" class="h-12 px-3 flex justify-between align-middle items-center">
                                        <NuxtPicture loading="lazy" format="svg,png" :src="job.logo" :imgAttrs="{class: job.class}"/>
                                        {{ job.title }}
                                    </div> 
                                    <div v-else class="w-full h-12 rounded-xl bg-gradient-to-r from-primary via-secondary to-tertiary p-[.07rem]">
                                        <div class="flex justify-between h-full w-full items-center bg-lightsOff rounded-xl px-3 py-[4px]">
                                            <NuxtPicture loading="lazy" format="svg,png"  :src="job.logo" :imgAttrs="{class: job.class}" />
                                            <div class="bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary text-md text-transparent ">
                                                {{ job.title }}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                        <div class="lg:w-6/12">
                            <transition name="fade" mode="out-in">
                                <div v-if="currentJob" :key="currentJob.title">
                                    <h2>{{ currentJob.title }}</h2>
                                    <h3>{{ currentJob.company }}</h3>
                                    <p v-html="currentJob.description"></p>
                                    <h4>What I Use</h4>
                                    <ul>
                                        <li v-for="(tech, index) in currentJob.technologies" :key="index">{{ tech }}
                                        </li>
                                    </ul>
                                    <h4>My Roles</h4>
                                    <ul>
                                        <li v-for="(role, index) in currentJob.roles" :key="index" v-html="role"></li>
                                    </ul>
                                    <h4>Goals</h4>
                                    <p>{{ currentJob.goals }}</p>
                                </div>
                            </transition>
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
            jobs: [
                {
                    title: 'Software Developer',
                    company: 'Descartes',
                    logo: '/descartes.svg',
                    class: 'h-4',
                    description: 'I am part of a talented team of developers that are dedicated to creating solutions in <b>logistics</b> and supply chain management.',
                    technologies: ['Vue.JS', 'Ruby on Rails', 'SQL', 'Azure DevOps', 'Freight Brokering'],
                    roles: ['Analyze existing solutions to propose design and functional improvements', 'Refactor existing code to better structure code', 'Debug code as code is updated throughout the development process', 'Create solutions for new services'],
                    goals: 'I am aiming to become a full-stack developer. I consider myself to be a professional Vue.JS developer; However, I want to dive deeper into more areas of Software Development such as back-end, marketing, and business development. My plan is to master Ruby on Rails.'
                },
                {
                    title: 'Lead Frontend Developer',
                    company: 'Loadly',
                    logo: '/loadly.svg',
                    class: 'h-6',
                    description: 'Description for Loadly',
                    technologies: ['Tech1', 'Tech2'],
                    roles: ['Role1', 'Role2'],
                    goals: 'Goals for Loadly'
                },
                {
                    title: 'UX Designer & Marketer',
                    company: 'Eztrackr',
                    logo: '/eztrackr.svg',
                    class: 'h-6',
                    description: 'Description for Loadly',
                    technologies: ['Tech1', 'Tech2'],
                    roles: ['Role1', 'Role2'],
                    goals: 'Goals for Loadly'
                },
                {
                    title: 'Frontend Developer & Broker',
                    company: 'Eztrackr',
                    logo: '/priority.svg',
                    class: 'h-10',
                    description: 'Description for Loadly',
                    technologies: ['Tech1', 'Tech2'],
                    roles: ['Role1', 'Role2'],
                    goals: 'Goals for Loadly'
                },
                {
                    title: 'Founder & Lead Organizer',
                    company: 'BorderHacks',
                    logo: '/borderhacks.png',
                    class: 'h-10',
                    description: 'Description for Loadly',
                    technologies: ['Tech1', 'Tech2'],
                    roles: ['Role1', 'Role2'],
                    goals: 'Goals for Loadly'
                },
                {
                    title: 'Founder & Lead Organizer',
                    company: 'WinHacks',
                    logo: '/winhacks.png',
                    class: 'h-10',
                    description: 'Description for Loadly',
                    technologies: ['Tech1', 'Tech2'],
                    roles: ['Role1', 'Role2'],
                    goals: 'Goals for Loadly'
                },
            ],
            currentJob: null,
        }
    },
    created() {
        this.currentJob = this.jobs[0];
    },
    methods: {
        selectJob(job) {
            if (this.currentJob !== job) {
                this.currentJob = job;
            }
        }
    }
}
</script>

<style>
.container {
    display: flex;
    height: 600px;
}

.job-titles ul {
    list-style: none;
    padding: 0;
}

.job-titles li {
    padding: 10px;
    cursor: pointer;
}

.job-titles li.active {
    background: #34495e;
}


.job-details h2 {
    margin-top: 0;
}

/* Transition Styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
