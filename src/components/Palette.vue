<template>
  <div class="hello">
    <div class="container">
      <div @click="copyColor" class="color" id="#2F80ED" style="background: #2F80ED;"></div>
      <div @click="copyColor" class="color" id="#219653" style="background: #219653;"></div>
      <div @click="copyColor" class="color" id="#EB5757" style="background: #EB5757;"></div>
      <div @click="copyColor" class="color" id="#828282" style="background: #828282;"></div>
      <div @click="copyColor" class="color" id="#F2C94C" style="background: #F2C94C;"></div>

      <div @click="copyColor" class="color" id="#2980b9" style="background: #2980b9;"></div>
      <div @click="copyColor" class="color" id="#d35400" style="background: #d35400;"></div>
      <div @click="copyColor" class="color" id="#16a085" style="background: #16a085;"></div>
      <div @click="copyColor" class="color" id="#8e44ad" style="background: #8e44ad;"></div>
      <div @click="copyColor" class="color" id="#2c3e50" style="background: #2c3e50;"></div>

      <div @click="copyColor" class="color" id="#2F80ED" style="background: #2F80ED;"></div>
      <div @click="copyColor" class="color" id="#219653" style="background: #219653;"></div>
      <div @click="copyColor" class="color" id="#EB5757" style="background: #EB5757;"></div>
      <div @click="copyColor" class="color" id="#828282" style="background: #828282;"></div>
      <div @click="copyColor" class="color" id="#F2C94C" style="background: #F2C94C;"></div>

      <div @click="copyColor" class="color" id="#2980b9" style="background: #2980b9;"></div>
      <div @click="copyColor" class="color" id="#d35400" style="background: #d35400;"></div>
      <div @click="copyColor" class="color" id="#16a085" style="background: #16a085;"></div>
      <div @click="copyColor" class="color" id="#8e44ad" style="background: #8e44ad;"></div>
      <div @click="copyColor" class="color" id="#2c3e50" style="background: #2c3e50;"></div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Palette',
  methods: {
    copyColor(e){
      let colorValue = e.target.id;
      console.log(colorValue);
      document.execCommand('copy', colorValue);

    }
  }
}
</script>

<style scoped>
  .container{
    width: 99%;
    position: absolute;
    top: 100px;
    height: calc(100% - 100px);
    top: 150px;
  }
  
  .color{
    width: 19%;
    height: 20%;
    position: relative;
    float: left;
    cursor: pointer;
    margin: 5px;
  }

  .input{
    height: 50px;
    width: 200px;
  }
</style>
