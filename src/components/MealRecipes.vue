<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm3 md3 lg3 v-for="(item, idx) in recipes" :key="idx">
                <v-card style="height:600px;margin:10px 0">
                    <v-responsive>
                        <v-img :src="item.recipe.image"></v-img>
                    </v-responsive>

                    <v-card-text style="height:300px;overflow:scroll">
                        <div class="title">{{item.recipe.label}}</div>

                        <div class="subheading">Ingredients</div>
                        <ul>
                            <li v-for="(ingredient, i) in item.recipe.ingredientLines" :key="i">{{ingredient}}</li>
                        </ul>
                    </v-card-text>

                    <v-btn flat style="display:block;margin:0 auto" @click="orderRecipe(item)">Order Now</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'MealRecipes',
    computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
    orderRecipe(item) {
        if (this.isAuthenticated) {
            this.$store.dispatch('addRecipe', item);
        } else {
            this.$router.push('/Signin');
        }
    }
}
};

</script>

<style scoped>
</style>