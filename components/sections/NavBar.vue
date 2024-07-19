<template>
    <div class="navbar">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" class="nav-link">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" class="nav-link">GitHub</a>
        <div class="rounded-md bg-gradient-to-r from-primary via-secondary to-tertiary p-[.07rem]">
                <div class="flex h-full w-full items-center justify-center bg-lightsOff rounded-md px-3 py-[4px]">
                    <div class=" bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary text-md text-transparent font-bold">
                        <a href="/path/to/your/resume.pdf" target="_blank" class="bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary text-md text-transparent font-bold">Resume</a>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
    // Your script content here
}
</script>

<style>
.navbar {
    /* position: fixed; Removed to keep the navbar at the top without following the scroll */
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Transparent background */
    color: #d3d3d3; /* Dark gray accents */
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 1rem 0; /* Add some padding */
}

.nav-link {
    color: #d3d3d3; /* Dark gray accents */
    text-decoration: none; /* No underline */
    font-size: 1rem; /* Adjust size as needed */
}

</style>