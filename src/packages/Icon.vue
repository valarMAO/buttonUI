<template>
  <svg class="y-icon" aria-hidden="true" :class="loadingIcon">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script>
import "../styles/icon";
export default {
  name: "y-icon",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    loadingIcon() {
      if (this.icon == "dengdai") {
        return "y-icon-loading";
      }
    }
  }
};
</script>

<style lang="scss">
.y-icon {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
@keyframes mymove {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
// function 时间 速度曲线 播放次数
.y-icon-loading {
  animation: mymove 1s linear infinite;
}
</style>