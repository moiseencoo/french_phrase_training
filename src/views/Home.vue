<template>
  <main class="home">
    <play-button sound="day1_1.mp3"></play-button>
    <user-input phrase="Il fait beau aujourd'hui"></user-input>
  </main>
</template>

<script>
import PlayButton from "@/components/AppMain/PlayButton";
import UserInput from "@/components/AppMain/UserInput";

export default {
  name: "Home",
  components: {
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
