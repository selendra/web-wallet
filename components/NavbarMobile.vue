<template>
  <nav class="nav_mobile">
    <v-row class="bar d-flex align-center">
      <v-col>
        <v-btn text @click="handleDrawer()">
          <v-icon>fa fa-bars</v-icon>
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-end align-center">
        <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
        transition="scale-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              color="white"
              dark
              v-on="on"
              rounded
            >
              <v-icon>fas fa-bell</v-icon>
            </v-btn>
          </template>
          <v-sheet elevation="12">
            <div style="height: 320px; width: 50px"></div>
          </v-sheet>
        </v-menu>
        <v-menu
          transition="scale-transition"
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn 
              rounded
              small 
              text 
              v-on="on"
            >
              <v-icon>fa fa-chevron-down</v-icon>
            </v-btn>
          </template>
          <br/>
          <v-list>
            <v-list-item @click="handleSignout">
              <v-list-item-title>Sign Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <div class="nav-bg" v-if="navDrawer" @click="handleDrawer"></div>
    <div 
      class="nav"
      :class="{'show':navDrawer}"
      transition="slide-x-transition"
    >
      <v-list-item-group color="#79c4ff">
        <div class="pt-4"></div>
        <v-row class="d-flex justify-center" v-if="mini">
          <img src="~/assets/z-logo.png" alt="z-logo" class="z_logo">
        </v-row>
        <div style="padding-top: 2rem" ></div>
        <v-list-item v-for="(item, index) in navItems" :key="index" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user_profile: null,

      navDrawer: false,
      mini: true,
      active: false,
      navItems: [
        { path: '/' , text: 'Wallet', icon: 'fas fa-wallet' },
        { path: '/transaction' , text: 'Transaction', icon: 'fas fa-list' },
        { path: '/send' , text: 'Send', icon: 'fas fa-arrow-up' },
        { path: '/receive' , text: 'Receive', icon: 'fas fa-arrow-down' },
        { path: '/setting' , text: 'Setting', icon: 'fas fa-cog' },
      ]
    }
  },
  methods: {
    handleDrawer() {
      this.navDrawer = !this.navDrawer;
    },
    handleSignout() {
      this.$store.dispatch('users/handleLogout');
    },
  }
}
</script>

<style lang="less" scoped>
  .bar {
    background: #1A1E27!important;;
    height: 60px;
    width: 100vw;
    margin: 0;
  }
  .nav-bg {
    width: 100vw;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 8;
  }
  .nav {
    width: 0;
    min-height: 100%;
    background: #1A1E27;
    position: absolute;
    z-index: 9;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }
  &.show {
    width: 60%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1199px){
    .nav_mobile {
      display: none!important;
    }  
  }
  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    .nav_mobile {
      display: none!important;
    }  
  }
  @media only screen and (max-height: 500px) {
    .nav_mobile {
      display: none!important;
    }    
  }
  @media only screen and (min-width: 1920px) {
    .nav_mobile {
      display: none!important;
    } 
  }
</style>