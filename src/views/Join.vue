<template>
 <div>
 <v-container grid-list-lg>
  <v-layout row :align="alignment" :justify="justify">
     <v-flex md8 xs12 sm12 class="text-xs-center display-1 font-weight-black my-5">
       <div id="text">Available Meal Plans</div>
       <v-carousel height=300px style="width:80%;margin: 15px auto" show-arrows-on-hover> 
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      
    ></v-carousel-item>
    </v-carousel>
     </v-flex>
     <v-flex md4 xs12 sm12 style="display:flex; align-items:center">
     <v-form
    id="form"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>


    <v-text-field name="password" label="Password" id="password"
    type="password" required v-model="password" :rules="passwordRules">
    
    </v-text-field>

    <v-btn
      :disabled="!valid"
      color="#E0F2F1"
      class="mr-4"
      @click="submit"
    >
      Register
    </v-btn>

    <v-btn
      color="#EF5350"
      class="mr-4"
      @click="reset"
    >
      Cancel
    </v-btn>

    
  </v-form>
  </v-flex>
  </v-layout>
 </v-container>
 
 
 
  
  </div>
</template>



<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
            v => !!v || 'Password is required',
            v =>
                v.length >= 6 ||
                'Password must be greater than 6 characters'
        ],
      items: [
          {
            src: 'https://images.all-free-download.com/images/graphiclarge/food_picture_03_hd_pictures_167556.jpg',
          },
          {
            src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            src: 'https://wallpaperaccess.com/full/1400917.jpg',
          },
          {
            src: 'https://cdn.hipwallpaper.com/i/38/27/dVptfA.jpg',
          },
        ],
    }),

      

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
                this.$store.dispatch('userJoin', {
                    email: this.email,
                    password: this.password
                });
            }
        },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>
<style scoped>
/deep/ .v-text-field{
      width: 100%;
      margin: 10px auto;
}
#form{
  text-align: center;
  margin: 50px auto;
}
#text{
  display: block;
  text-align: center;
}
</style>