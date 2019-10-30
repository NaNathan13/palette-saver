<template>
  <div class="home">
    <FormatDropDown/>
    <Palette/>
  </div>
</template>

<script>
// @ is an alias to /src
import Palette from '@/components/Palette.vue'
import FormatDropDown from '@/components/FormatDropDown.vue'

export default {
  name: 'home',
  components: {
    Palette, FormatDropDown
  }
}
</script>
