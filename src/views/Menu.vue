<template>
   <div>
  <HomeDetails></HomeDetails>
  <MealRecipes></MealRecipes>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeDetails from "@/components/HomeDetails.vue";
import MealRecipes from '@/components/MealRecipes';
export default {
  name: "Menu",
  components: {
    HomeDetails,
    MealRecipes
  }
};
</script>
<style scoped>
</style>
