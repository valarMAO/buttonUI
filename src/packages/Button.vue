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
    border-color: #dcdfe6;
    color: #606266;
    fill:#fff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
    fill:#fff;
  }
  &.is-plain:active {
    background: #fff;
    border-color: #3a8ee6;
    color: #3a8ee6;
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
  background-color: #409eff;
  border-color: #409eff;
  fill:#fff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: #ecf5ff;
    border-color: #b3d8ff;
    color: #409eff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  &.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
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
  background-color: #67c23a;
  border-color: #67c23a;
  fill:#fff;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: #f0f9eb;
    border-color: #c2e7b0;
    color: #67c23a;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  &.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
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
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: #fdf6ec;
    border-color: #f5dab1;
    color: #e6a23c;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  &.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
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
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: #fef0f0;
    border-color: #fbc4c4;
    color: #f56c6c;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  &.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
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
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    background: #f4f4f5;
    border-color: #d3d4d6;
    color: #909399;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
  &.is-plain:active {
    background: #82848a;
    border-color: #82848a;
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
	color: #409eff;
	background: transparent;
	padding-left: 0;
	padding-right: 0;
	&:hover,&:focus{
		color: #66b1ff;
		border-color: transparent;
		background-color: transparent;
	}
	&:active{
		color: #3a8ee6;
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