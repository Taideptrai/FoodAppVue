<template>
    <span>
      <v-navigation-drawer app v-model="drawer" class="blue-grey darken-4" dark disable-resize-watcher overlay-opacity=0.3>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Order Food Fastest
            </v-list-item-title>
            <v-list-item-subtitle>
              Cheap-Fast and More
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
       


       <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index"  class="list-item" @click="changeroute(item)">
                     
                        <v-list-item-icon>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">{{appTitle}}</v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down btn" to="/Menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
             <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                  <v-btn flat class="hidden-sm-and-down btn" to="/Signin">SIGN IN</v-btn>
                  <v-btn  color="brown lighten-3" class="hidden-sm-and-down btn" to="/Join">JOIN</v-btn>
             </div>
            <div v-else>
            <v-btn color="success" class="hidden-sm-and-down btn" to="/Recipe">Cart 
              <v-icon right dark>mdi-shopping</v-icon>
            </v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down btn" @click="logout">Logout</v-btn>
            </div>
        </v-toolbar>
        
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: 'Menu' ,icon: 'mdi-food', route: "/Menu" },
                { title: 'Sign In', icon: 'mdi-account', route: "/Signin" },
                { title: 'Join' ,icon: 'mdi-check', route: "/Join"}
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        },
        changeroute(item){
          this.$router.push(item.route);
        }

    }
};

</script>

<style scoped>
.btn {
  margin: 0 10px;
}
.list-item{
  cursor: default;
  font-size: 18px;
  display:block;
}
.list-item:hover{
  background-color: black;
  display: block;
}
</style>