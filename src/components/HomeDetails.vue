<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card height=730>
                    <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">KETO</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Keto</h3>
                            <v-card-text class="text--primary">
                            <div>Its products are also totally free of gluten (in case gluten is an issue for you!), antibiotics and added hormones, so you can rest-easy knowing that you're eating only the highest-quality ingredients. 
                            </div>
                            </v-card-text>
                        </div>
                       <v-card-actions style="display:block;width:100%;" v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="#64FFDA" @click="showRecipes('keto')">Select This Plan</v-btn>
                      </v-card-actions>
                    </v-card-title>
                    
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card height=730>
                    <v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">PALEO</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Paleo</h3>
                            <v-card-text class="text--primary">
                            <div>Meals are prepared and delivered fresh—never frozen—and last for up to 10 days in the refrigerator. Customers can choose from one, two or three meals per day and can subscribe weekly.
                            </div>
                            </v-card-text>
                        </div>
                    <v-card-actions style="display:block;width:100%;" v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="#64FFDA" @click="showRecipes('paleo')">Select This Plan</v-btn>
                    </v-card-actions>
                    </v-card-title>
                </v-card>
          </v-flex>

               <v-flex xs12 sm12 md4>
                <v-card height=730>
                    <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">VEGAN</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Vegan</h3>
                            <v-card-text class="text--primary">
                            <div>A vegan diet is one that consists only of plant-derived foods. Like non-vegans, vegans eat soups, stews, stir-fries, salads, and casseroles. More details below
                            </div>
                            </v-card-text>
                        </div>
                     <v-card-actions style="display:block;width:100%" v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="#64FFDA" @click="showRecipes('vegan')">Select This Plan</v-btn>
                    </v-card-actions>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "HomeDetails",
  methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        }
    }
};
</script>


<style scoped>

</style>
