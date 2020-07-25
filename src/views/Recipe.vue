<template>
    <v-container fluid class="background">
        <v-layout column style="width:fit-content;margin:0 auto;">
          <v-card color="#FCE4EC" style="opacity: 0.9">
        <v-card-title class="justify-center">
            My Recipe 
        </v-card-title>
        
            <div  v-for="(item,idx) in userRecipes" class="subheading mb-2" style="text-align: center; margin: 0 40px" :key="idx">
                 {{item}}
            <v-btn small
              color="purple"
              text
              @click="removeRecipe(idx)" 
            >
              <v-icon small> mdi-close</v-icon>
            </v-btn>
            </div>

          </v-card>
        </v-layout>
    </v-container>
</template>



<script>
export default {
    name: 'Recipe',
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        },
        removeRecipe(idx){
          this.$store.dispatch('removeRecipe', idx);
        }
    }
};
</script>
<style scoped>
.background{
   background: url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
