<template>
  <div class="flex justify-center py-20">
    <div id="circle3"></div>
  </div>
</template>

<script>
export default {
  name: "TheSpeaner"
}
</script>

<style scoped>
#circle3 {
  /*display: block;*/
  /*position: absolute;*/
  /*top: 70%;*/
  /*left: 50%;*/
  height: 25px;
  width: 25px;
  /*margin: -25px 0 0 -25px;*/
  border: 3px rgba(0, 0, 0, 0.15) solid;
  border-top: 3px #2a2a2a solid;
  border-right: 3px #2a2a2a solid;
  border-bottom: 3px #2a2a2a solid;
  border-radius: 50%;
  -webkit-animation: spin3 1s infinite linear;
  animation: spin3 1s infinite linear;
  z-index: 1000;
}

@-webkit-keyframes spin3 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

@keyframes spin3 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>