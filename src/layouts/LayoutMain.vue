<template>
  <div class="grid-container">
    <div class="phrases">
      <slot name="phrases"></slot>
    </div>
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="input">
      <slot name="input"></slot>
    </div>
    <div class="history">
      <slot name="history"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-container {
  flex: 2;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.5fr 1fr 1fr;
  gap: 3% 3%;
  grid-template-areas:
    "phrases phrases phrases sidebar"
    "input input input sidebar"
    "history history history sidebar";
}
.phrases {
  grid-area: phrases;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
}
.sidebar {
  grid-area: sidebar;
  box-shadow: 0 0 10px $dark_color;
  border-radius: 20px;
}
.input {
  grid-area: input;
}
.history {
  grid-area: history;
}
</style>
