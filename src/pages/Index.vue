<template>
  <q-page padding>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans"
      rel="stylesheet"
    />

    <!-- Background & animion & navbar & title -->
    <div class="container-fluid">
      <!-- Background animtion-->
      <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
      <!-- header -->
      <div class="header">
        <!-- title & content -->
        <section class="header-content">
          <h1>Welcome</h1>
          <img
            src="../assets/Alumnet.png"
            alt=""
            style="width: 200px; "
          />
          <p >
            Welcome to Alumnet System. We are a social media alumni platform,<br />
            making people who are alumni to meet again.
          </p>
          <div></div>

          <q-btn label="GET STARTED" @click="toPageLogin" />
          <q-btn label="FOR ADMIN" @click="toLoginAdmin" />
          <div style="margin-top: 20px; font-size: 20px;">Find alumni information</div>
          <q-input
          v-model="search"
            standout="bg-white text-black"
            bg-color="white"
            rounded
            outlined
            style="max-width: 800px; margin: 0 auto; padding: 10px"
            class="search"
            id="search"
            label="Search by name or surname"
          > <template v-slot:append>
            <q-icon  name="search" @click="clicksearch" />
          </template>
        </q-input>
        </section>
        <q-card 
      v-for="(col, index) in searchList"
          :key="index"
      rounded
      class="my-card text-black"
      style="margin: 30px; margin-top: 10px; background: white;"
     
    >

      <q-card-section class="row"  >
        <q-avatar class="q-mr-xs q-ml-md" id="image_profile">
          <img v-if="this.searchList[index].image_profile !== null"  :src="this.searchList[index].image_profile" />
          <img  src="../assets/man.png" />
          
        </q-avatar>

        <div
          class="text-subtitle2"
          id="student_name"
          style="margin-left: 20px; margin-top: 10px"
        >
          {{ this.searchList[index].firstname }}
          {{ this.searchList[index].lastname }}
         
        </div>
      </q-card-section>

    </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { getSearch } from '../api/api'
export default {
  methods: {
    async clicksearch(){
     
      this.search = this.search.charAt(0).toUpperCase() + this.search.slice(1)
      this.searchList =  await getSearch(this.search,this.search)
    },
    toPageLogin() {
      this.$router.push({ name: "loginPage" });
    },
    toLoginAdmin() {
      this.$router.push({ name: "loginAdmin" });
    },
  },
  data() {
    const $q = useQuasar();

    function login() {
      $q.notify("Some other message");
    }
    return {
      login,
      searchList:[],
      search: "",
    };
  },
};
</script>
<style>
body {
  font-family: "Josefin Sans", sans-serif;
  box-sizing: border-box;
}

.container-fluid {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #fff;
}
/* ============= Animation background ========= */
.background {
  background: linear-gradient(132deg, #032030, #1794a5, #212335);
  background-size: 500% 500%;
  animation: Gradient 15s ease infinite;
  position: relative;
  height: 200vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;
}
.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #d7d4e4;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
  border-color: #fff;
}
.cube:nth-child(2) {
  animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}
.cube:nth-child(3) {
  animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}
.cube:nth-child(4) {
  animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}
.cube:nth-child(5) {
  animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}
.cube:nth-child(6) {
  animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}

/* ================= Header ============ */
.header {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Header content & title & button*/
.header-content {
  text-align: center;
  color: #efeef5;
  margin-right: 15px;
  margin-left: 15px;
}
.header-content h1 {
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: 1px;
}
.header-content p {
  font-size: 20px;
  line-height: 1.5;
 
}
.header-content button {
  width: 140px;
  margin: 20px 10px;
  color: #591bc5;
  font-size: 17px;
  border: 1px solid #efeef5;
  font-weight: 500;
  background: #efeef5;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.header-content button:hover {
  border-radius: 0;
}
/* Animate Background*/
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
