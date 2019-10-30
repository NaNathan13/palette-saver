<template>
  <div>
    <div class="container">
        <VueDropdown class="vue-dropdown"/>
        <input class="input" type="text">
    </div>
      
  </div>
</template>

<script>
import VueDropdown from 'vue-dynamic-dropdown'
export default {
  name: 'FormatDropDown',
  components: {
      VueDropdown
  }

}
</script>

<style scoped>
 #title{
     position: relative;
     text-align: center;
     top: -100px;
 }

 .input{
     position: relative;
     top: -100px;
     left: -200px;
 }

 .vue-dropdown{
     z-index: 1;
     position: absolute;
     left: 50%;
     color: red;
     margin-left: -100px;
     top: 50px;
 }
</style>
