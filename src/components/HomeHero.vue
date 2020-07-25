<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-3']" class="font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
            <div :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-3']" class="font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
            <div :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'display-0']" class="font-weight-bold white--text text-sub">Finally be a foodie at home with fresh, chef-prepared meals delivered daily.</div>
            <v-btn larger fab class="mt-5 brown darken-4 hidden-sm-and-down">
            <v-icon large color="white">mdi-arrow-down</v-icon>
            </v-btn>

            <v-btn small fab class="mt-5 brown darken-4 hidden-md-and-up">
            <v-icon medium color="white">mdi-arrow-down</v-icon>
            </v-btn>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero',
    data() {
        return {
           
        };
    }
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 100%;
}
.text-sub{
  text-align: center;
}
</style>