<template>
  <div class="container">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-card class="pa-4" elevation="4">
        <v-row>
          <v-col cols="6">
            <h4 class="font-weight-thin headline">ZEETOMIC TOKEN</h4>
            <hr>
          </v-col>
          <v-col cols="6">
            <v-row class="d-flex justify-center">
              <client-only>
              <vue-qr 
                class="qr_code desktop"
                :logoSrc="ke" 
                :margin="10" 
                :text="user_profile.wallet">
              </vue-qr>
              <vue-qr 
                class="qr_code mobile"
                :size="130"
                :logoSrc="ke" 
                :margin="10" 
                :text="user_profile.wallet">
              </vue-qr>
              </client-only>
            </v-row>
            <p class="wallet_key font-weight-medium subtitle-1">{{user_profile.wallet}}</p>
            <input type="text" id="myInput" v-model="user_profile.wallet" />
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn absolute dark fab top left color="primary" v-on="on" @click="onCopy()">
                  <v-icon>fa fa-copy</v-icon>
                </v-btn>
              </template>
              <span>Click To Copy</span>
            </v-tooltip>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-card class="pa-2" elevation="4">
          <h2>Receive Token</h2>
          <hr>
          <br>
          <HistoryMobo v-if="!history.error" :history="history.map(his => his.to === user_profile.wallet && his )"/>
          <Getwallet v-else :portfolio="history"/>
          <div 
            v-for="(item,index) in history"
            :key="index"
          >
            <div v-if="!item.amount">
              <p class="text-center pt-2" v-if="index <= 0">no-data-available</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const Getwallet = () => import('~/components/UI/Getwallet.vue');
const HistoryMobo = () => import(/* webpackChunkName: "History" */ '~/components/Table/HistoryMobo.vue');
import { transaction } from '~/utils/asyncData/transaction.js';

export default {
  middleware: ['auth'],
  components: {
    HistoryMobo,
    Getwallet
  },
  data () {
    return {
      ke: require("~/assets/zee_qr.png"),
    }
  },
  asyncData: transaction,
  methods: {
    onCopy() {
      /* Get the text field */
      var copyText = document.getElementById("myInput");
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      /* Copy the text inside the text field */
      document.execCommand("copy");
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    }
  }
}
</script>

<style scoped>
.wallet_key {
  color: #fafafa;
  padding-top: 6px; 
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: anywhere;
}
.qr_code {
  padding-top: 2rem;
}
.ke_token {
  width: 26px;
  margin: 5px; 
}
#myInput {
  position: absolute;
  color: #fff;
  opacity: 0;
  width: 1px;
  height: 1px;
  font-size: 1px;
  left: 0;
  box-sizing: content-box;
  -webkit-user-select: initial;
  outline: none;
  margin-left: -9999px;
}
/* //SmartPhone */
@media only screen and (max-width: 500px) {
  .desktop {
    display: none!important;
  }
  .container {
    padding: 1rem;
  }
  .wallet_key{
    font-size: 12px!important;
    line-height: 16px;
  }
  .qr_code {
    padding-top: 1%;
  }
}
/* //Tablet */
@media only screen and (min-width: 501px) and (max-width: 767px) {
  .desktop {
    display: none!important;
  }
}
/* //Normal */
@media only screen and (min-width: 768px) and (max-width: 1199px){
  .desktop {
    display: none!important;
  }
}
/* Large monitor */
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .mobile {
    display: none!important;
  }
}
/* Widescreen */
@media only screen and (min-width: 1920px) {
  .mobile {
    display: none!important;
  }
}
</style>