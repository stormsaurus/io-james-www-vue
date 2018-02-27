<template>
    <div class="home">
    <v-container fluid>
        <v-carousel>
            <v-carousel-item src="img/home/Diegogarcia.jpg"/></v-carousel-item>
            <v-carousel-item src="img/home/Island_couple.jpg"/></v-carousel-item>
            <v-carousel-item src="img/home/Degar_sunset_from_cannon_point.jpg"/></v-carousel-item>
        </v-carousel>
        <br />
        <p>What is it?  My name james plus .io which is the <a href="https://en.wikipedia.org/wiki/Country_code_top-level_domain">cctld</a> for the British Indian Ocean Territory.</p>
        <p>The territory has an archipelago with a single large island called <a rel="shadowbox" href="http://en.wikipedia.org/wiki/Diego_Garcia" title="Diego Garcia">Diego Garcia</a>.  The tld is a tropical paradise for my virtual collection of odds and ends.</p>
    </v-container fluid>
    </div>
</template>

<style>
    body { font-size: 16px; }
</style>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'home',
    });
</script>
