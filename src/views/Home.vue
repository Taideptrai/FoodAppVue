<template>
   <div>
  <HomeHero id="HomeHero"></HomeHero>
  <HomeDetails></HomeDetails>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/HomeHero.vue";
import HomeDetails from "@/components/HomeDetails.vue";

export default {
  name: "Home",
  components: {
    HomeHero,
    HomeDetails
  }
};
</script>
<style scoped>
#HomeHero{
  height: 700px;
}
</style>
