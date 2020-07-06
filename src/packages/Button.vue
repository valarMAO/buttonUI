<template>
  <button class="y-button" :class="btnClass" @click="$emit('click',$event)">
    <y-icon :icon="icon" class="icon" v-if="icon && !loading"></y-icon>
    <y-icon icon="dengdai" v-if="loading" class="icon"></y-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "y-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary","text"].includes(type)
        ) {
          console.error("type类型错误");
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(type) {
        if (type && !["left", "right"].includes(type)) {
          console.error("iconPosition属性必须为" + "left或right");
        }
        return true;
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
	}	
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`y-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`y-button-${this.iconPosition}`);
      }
      if (this.plain) {
        classes.push("is-plain");
      }
      if (this.round) {
        classes.push("is-round");
      }
      if (this.circle) {
        classes.push("is-circle");
      }
      if (this.disabled) {
        classes.push("is-disabled");
      }
      return classes;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common.scss";
$height: 40px;
$font-size: 14px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.y-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: 40px;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  &.is-plain {
    border-color: $border-color;
    color: $color;
    fill:#fff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: $primary;
    color: $primary;
    fill:#fff;
  }
  &.is-plain:active {
    background: #fff;
    border-color: $active-color;
    color: $active-color;
    outline: none;
    fill:#fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #c0c4cc;
    cursor: no-drop;
    background: #fff;
    border-color: #ebeef5;
    fill:#fff;
  }
  .icon {
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
  .icon + span {
    margin-left: 5px;
    margin-right: 5px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
  }
}
.y-button-primary {
  color: #fff;
  background-color: $primary;
  border-color: $primary;
  fill:#fff;
  &:hover,
  &:focus {
    background: $primary-hover;
    border-color: $primary-hover;
    color: #fff;
  }
  &:active {
    background: $active-color;
    border-color: $active-color;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: $background;
    border-color: $primary-plain-br;
    color: $primary;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: $primary;
    border-color: $primary;
    color: #fff;
  }
  &.is-plain:active {
    background: $active-color;
    border-color: $active-color;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background: #a0cfff;
    border-color: #a0cfff;
  }
}

.y-button-success {
  color: #fff;
  background-color: $success;
  border-color: $success;
  fill:#fff;
  &:hover,
  &:focus {
    background: $success-hover;
    border-color: $success-hover;
    color: #fff;
  }
  &:active {
    background: $success-active;
    border-color: $success-active;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: $success-plain-bg;
    border-color: $success-plain-br;
    color: $success;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: $success;
    border-color: $success;
    color: #fff;
  }
  &.is-plain:active {
    background: $success-active;
    border-color: $success-active;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background: #b3e19d;
    border-color: #b3e19d;
  }
}

.y-button-warning {
  color: #fff;
  fill:#fff;
  background-color: $warning;
  border-color: $warning;
  &:hover,
  &:focus {
    background: $warning-hover;
    border-color: $warning-hover;
    color: #fff;
  }
  &:active {
    background: $warning-active;
    border-color: $warning-active;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: $warning-plain-bg;
    border-color: $warning-plain-br;
    color: $warning;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: $warning;
    border-color: $warning;
    color: #fff;
  }
  &.is-plain:active {
    background: $warning-active;
    border-color: $warning-active;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background: #f3d19e;
    border-color: #f3d19e;
  }
}

.y-button-danger {
  color: #fff;
  fill:#fff;
  background-color: $danger;
  border-color: $danger;
  &:hover,
  &:focus {
    background: $danger-hover;
    border-color: $danger-hover;
    color: #fff;
  }
  &:active {
    background: $danger-active;
    border-color: $danger-active;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: $danger-plain-bg;
    border-color: $danger-plain-br;
    color: $danger;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: $danger;
    border-color: $danger;
    color: #fff;
  }
  &.is-plain:active {
    background: $danger-active;
    border-color: $danger-active;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background: #fab6b6;
    border-color: #fab6b6;
  }
}

.y-button-info {
  color: #fff;
  fill:#fff;
  background-color: $info;
  border-color: $info;
  &:hover,
  &:focus {
    background: $info-hover;
    border-color: $info-hover;
    color: #fff;
  }
  &:active {
    background: $info-active;
    border-color: $info-active;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: $info-plain-bg;
    border-color: $info-plain-br;
    color: $info;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: $info;
    border-color: $info;
    color: #fff;
  }
  &.is-plain:active {
    background: $info-active;
    border-color: $info-active;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background: #c8c9cc;
    border-color: #c8c9cc;
  }
}
.y-button-text{
	border-color: transparent;
	color: $primary;
	background: transparent;
	padding-left: 0;
	padding-right: 0;
	&:hover,&:focus{
		color: $primary-hover;
		border-color: transparent;
		background-color: transparent;
	}
	&:active{
		color: $active-color;
		border-color: transparent;
		background-color: transparent;
	}
	&.is-disabled,&.is-disabled:hover,&.is-disabled:focus{
		border-color: transparent;
	}
}
.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.is-circle {
  border-radius: 50%;
  padding: 12px;
}
</style>