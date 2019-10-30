<template>
  <div>
    <div class="container">
        <vue-dropdown :config="config" class="vue-dropdown">THIS IS THE TITLE</vue-dropdown>

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
  },
config: {
            options: [
                {
                    value: "option 11"
                },
                {
                    value: "option 22"
                },
                {
                    value: "option 33"
                },
            ],
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
     top: 75px;
 }
</style>
