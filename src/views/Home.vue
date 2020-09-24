<template>
  <layout-main>
    <template v-slot:phrases>
      <play-button sound="day1_1.mp3"></play-button>
    </template>
    <template v-slot:input>
      <user-input phrase="Il fait beau aujourd'hui"></user-input>
    </template>

    <template v-slot:history>
      <p>Here's some contact info</p>
    </template>
    <template v-slot:sidebar>
      <p>Here's some contact info</p>
    </template>
  </layout-main>
</template>

<script>
import PlayButton from "@/components/AppMain/PlayButton";
import UserInput from "@/components/AppMain/UserInput";
import LayoutMain from "@/layouts/LayoutMain";

export default {
  name: "Home",
  components: {
    LayoutMain,
    PlayButton,
    UserInput,
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
