<template>
  <div>
    <input
      type="text"
      v-model="userValue"
      placeholder="Type what you hear"
      :class="{ correct: isCorrect, incorrect: isIncorrect}"
      @keyup="checkPhrase"
    />
  </div>
</template>

<script>
export default {
  name: "UserInput",
  props: {
    phrase: String,
  },
  data: () => ({
    userValue: "",
    correctness: false,
  }),
  computed: {
    isCorrect() {
      return this.correctness && this.userValue.length > 0
    },
    isIncorrect() {
      return !this.correctness && this.userValue.length > 0
    },
  },
  methods: {
    checkPhrase() {
      this.correctness = this.getSubstring() == this.userValue;
    },
    getSubstring() {
      return this.phrase.slice(0, this.userValue.length);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 20px 30px;
  text-align: center;
  border-radius: 30px;
  border: 3px solid $primary_color;
  font-size: 20px;
  transition: border 0.3s ease-in;
  outline: none;

  &.correct {
    border-color: #00C9A7;
    box-shadow: 0 0 5px #00C9A7;
  }

  &.incorrect {
    border-color:#FF8066;
    box-shadow: 0 0 5px #FF8066;
  }
}
</style>
