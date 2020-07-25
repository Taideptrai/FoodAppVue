<template>
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
      Login
    </v-btn>

    <v-btn
      color="#EF5350"
      class="mr-4"
      @click="reset"
    >
      Cancel
    </v-btn>

    
  </v-form>
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
        ]
    }),

    methods: {
       submit() {
        if (this.$refs.form.validate()) {
            this.$store.dispatch('userLogin', {
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
      width: 30%;
      margin: 10px auto;
}
#form{
  text-align: center;
  margin: 100px auto;
}
</style>