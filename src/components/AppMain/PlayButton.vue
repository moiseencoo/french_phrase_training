<template>
  <div class="play-button-area">
    <button @click="playSound" :class="{'playing': isPlaying, 'play-button': true}"></button>
  </div>
</template>

<script>
export default {
  name: "PlayButton",
  props: {
    sound: String,
  },
  data: () => ({
    isPlaying: false
  }),
  methods: {
    playSound() {
      if (this.sound) {
        this.isPlaying = true;
        let fullPath = require(`../../assets/phrases/${this.sound}`)
        let audio = new Audio(fullPath);
        audio.play();
        audio.onended = () => {
          this.isPlaying = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.play-button-area {
  display: flex;
  justify-content: center;
  align-items: center;
}

.play-button {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: $primary_color;
  outline: none;
  border: 0;
  margin: 30px;
  box-shadow: 0 0 10px $dark_color;
  transition: all 0.5s;
  cursor: pointer;

  &.playing {
    background-color: $accent_color;
    animation: playing 2s infinite;
  }

  &:before {
    content: "";
    position: absolute;
    border-bottom: 55px solid $light_color;
    border-right: 40px solid transparent;
    border-left: 40px solid transparent;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%) rotate(90deg);
    transition: border 0.8s ease-in-out;
  }

  &:hover {
     box-shadow: 0 0 20px $dark_color, inset 0 0  40px $light_color;
  }
}

@keyframes playing {
  0% {box-shadow: 0 0 10px $dark_color;}
  25% {box-shadow: 0 0 25px $dark_color;}
  55% {box-shadow: 0 0 10px $dark_color;}
  75% {box-shadow: 0 0 40px $dark_color;}
  100% {box-shadow: 0 0 10px $dark_color;}
}
</style>
