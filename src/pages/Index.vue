<template>
  <q-page padding  >
    <!-- <div class="text-center" style="padding:50px">
     <div class="text-h4" style="padding:20px"> Search for Alumni</div>
      <q-input standout="bg-white text-black"  bg-color="white" rounded outlined label="Search" style="padding:20px" /> -->
        <!-- <q-card class="my-card text-white text-center" style="background: linear-gradient(#014a88 0%, #1794A5 100%); border-radius: 15px; padding:20px">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
          </q-card-section>
          <q-card-section class="q-pt-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
          <q-separator inset />
          <q-card-section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card> -->
    <!-- </div> -->
    
      <!-- <div class="row" > 
      
        <div class="q-pa-md q-gutter-sm ">
          <q-btn text-color="black" label="GET STARTED" @click="toPageLogin" style="font-size:15px ;background: linear-gradient(#014a88 0%, #1794A5 100%);"/>
         </div>
         <div class="q-pa-md q-gutter-sm">
          <q-btn text-color="black" label="FOR ADMIN" @click="toPageLogin" style="font-size:15px ;background: linear-gradient(#014a88 0%, #1794A5 100%);"/>
         </div>
      
     
        
           
    </div> -->
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">

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
   <header>
<!-- title & content -->
      <section class="header-content">
         <h1>Welcome</h1>
         <p> Welcome to our studio. We are a passionated group of people,<br>
           making high quality products designed to make your life easier.</p>
         <div>
    <q-input standout="bg-white text-black"  bg-color="white" rounded outlined label="Search" style="max-width: 800px ; margin:0 auto;" class="search"  />
  </div>
        <p> Welcome to our studio. We are a passionated group of people,<br>
           making high quality products designed to make your life easier.</p>
          <q-btn  label="GET STARTED" @click="toPageLogin" />
          <q-btn  label="FOR ADMIN" @click="toLoginAdmin" />
      </section>
  </header>
  
  </div>
  
    
   
  </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
export default {
  methods :{
    toPageLogin(){
      this.$router.push({name:"loginPage"}
      )
    },
     toLoginAdmin(){
      this.$router.push({name:"loginAdmin"})
    },
    
  },
  setup() {
    const $q = useQuasar()

     function login () {
      $q.notify('Some other message')
    }
    return {
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      login
    };
  },
 
};

</script>
<style>
body {
  font-family: 'Josefin Sans', sans-serif;
  box-sizing: border-box;
}
.container-fluid{
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #FFF;
}
/* ============= Animation background ========= */
.background {
  background: linear-gradient(132deg, #FC415A, #591BC5, #212335);
  background-size: 500% 500%;
  animation: Gradient 15s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding:0;
  margin:0px;
}
.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #D7D4E4;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
  border-color: #FFF ;
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
header{
  position: absolute;
  top:0%;
  left: 0%;
  width:100%;
  margin: 0;
  padding: 0;
}

/* Header content & title & button*/
.header-content{
  
  text-align: center;
  color:  #EFEEF5;
}
.header-content h1{
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: 1px;
}
.header-content p {
  font-size: 20px;
  line-height: 1.5;
  margin: 20px auto;
}
.header-content button{
  width: 140px;
  margin:20px 10px;
  color: #591BC5;
  font-size: 17px;
  border:1px solid #EFEEF5;
  font-weight: 500;
  background: #EFEEF5;
  border-radius: 20px;
  padding: 10px;
  cursor:pointer;
  transition: .3s;
}
.header-content button:hover{
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
