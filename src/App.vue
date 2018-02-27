<template>
<div id="app">
    <v-app id="inspire" dark>
        <v-navigation-drawer clipped fixed v-model="drawer" app>
            <v-list dense>
                <v-list-tile @click="openPage('home')">
                    <v-list-tile-action>
                        <v-icon class="blue--text darken-4">home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="openPage('code')">
                    <v-list-tile-action>
                        <v-icon class="blue--text darken-4">code</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Code</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="openPage('projects')">
                    <v-list-tile-action>
                        <v-icon class="blue--text darken-4">dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Projects</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="openPage('resume')">
                    <v-list-tile-action>
                        <v-icon class="blue--text darken-4">work</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Resume</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="openPage('science')">
                    <v-list-tile-action>
                        <v-icon class="blue--text darken-4">blur_circular</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Science</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="openPage('dissertation')">
                    <v-list-tile-action>
                        <v-icon class="blue--text darken-4">note</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Dissertation</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="openPage('publications')">
                    <v-list-tile-action>
                        <v-icon class="blue--text darken-4">note</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Publications</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>james.io</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer app>
            <span>&copy; {{new Date().getFullYear()}}</span>
        </v-footer>
    </v-app>
</div>
</template>

<script>
    export default {
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        },
        methods:{
            openPage: function(page){
                this.$router.push({name: page})
            }
        }
    }
</script>

<style>

/* documentation styles */

.figure { font-weight:bold; text-align: center; }
.figure p.caption { text-align: center; }
.table { font-weight:bold; text-align: center; }
.table p.caption { text-align: center; }
div.equation { font-weight:bold; text-align: center; }
.equation p.caption { float: right; }
span.equation { font-weight:bold; }

/* Overrides for printing.  Veu by default looks rather poor when printed. */

@media print {
    aside, nav, .noprint, footer { display: none; }
    footer { display: none !important; }
    h1, h2, h3, h4, h5, h6 {
        color: black;
        page-break-after: avoid;
    }
    div, p, span {
        color: black;
    }
    .layout {
        box-shadow: unset !important;
        -webkit-box-shadow: unset !important;
    }
    main {
        padding: 0 !important;
    }
    a:link          { color: black !important; text-decoration:none; }
    a:visited       { color: black !important; text-decoration:none; }
    a:hover         { color: black !important; text-decoration:none; }
    a:active        { color: black !important; text-decoration:none; }
    .print-together {
        page-break-inside: avoid;
    }
}

</style>
