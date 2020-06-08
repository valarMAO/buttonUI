<template>
  <div id="app">
    <div class="container"></div>
    <div class="left">
      <h4>组件</h4>
      <p>Button 按钮</p>
    </div>
    <div class="right">
      <h2>Button 按钮</h2>
      <p>常用的操作按钮</p>
      <h3>基础用法</h3>
      <p>基础的按钮用法</p>
      <div class="source">
        <div class="row">
          <y-button>默认按钮</y-button>
          <y-button type="primary">主要按钮</y-button>
          <y-button type="success">成功按钮</y-button>
          <y-button type="info">信息按钮</y-button>
          <y-button type="warning">警告按钮</y-button>
          <y-button type="danger">危险按钮</y-button>
        </div>
        <div class="row">
          <y-button plain>朴素按钮</y-button>
          <y-button type="primary" plain>主要按钮</y-button>
          <y-button type="success" plain>成功按钮</y-button>
          <y-button type="info" plain>信息按钮</y-button>
          <y-button type="warning" plain>警告按钮</y-button>
          <y-button type="danger" plain>危险按钮</y-button>
        </div>
        <div class="row">
          <y-button round>圆角按钮</y-button>
          <y-button type="primary" round>主要按钮</y-button>
          <y-button type="success" round>成功按钮</y-button>
          <y-button type="info" round>信息按钮</y-button>
          <y-button type="warning" round>警告按钮</y-button>
          <y-button type="danger" round>危险按钮</y-button>
        </div>
        <div class="row">
          <y-button icon="sousuo" circle></y-button>
          <y-button type="primary" icon="chuangzuo" circle></y-button>
          <y-button type="success" icon="seleted" circle></y-button>
          <y-button type="info" icon="email" circle></y-button>
          <y-button type="warning" icon="shoucang" circle></y-button>
          <y-button type="danger" icon="shanchu" circle></y-button>
        </div>
      </div>
      <h3>禁用状态</h3>
      <p>按钮不可用状态</p>
      <div class="source">
        <div class="row">
          <y-button disabled>默认按钮</y-button>
          <y-button type="primary" disabled>主要按钮</y-button>
          <y-button type="success" disabled>成功按钮</y-button>
          <y-button type="info" disabled>信息按钮</y-button>
          <y-button type="warning" disabled>警告按钮</y-button>
          <y-button type="danger" disabled>危险按钮</y-button>
        </div>
      </div>
      <h3>文字按钮</h3>
      <p>没有边框和背景色的按钮</p>
      <div class="source">
        <div class="row">
          <y-button type="text">文字按钮</y-button>
          <y-button type="text" disabled>文字按钮</y-button>
        </div>
      </div>
      <h3>图标按钮</h3>
      <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）</p>
      <div class="source">
        <div class="row">
          <y-button type="primary" icon="chuangzuo"></y-button>
          <y-button type="primary" icon="lianjie"></y-button>
          <y-button type="primary" icon="shanchu"></y-button>
          <y-button type="primary" icon="sousuo">搜索</y-button>
          <y-button type="primary" icon="shangchuan" icon-position="right">上传</y-button>
        </div>
      </div>
      <h3>加载中</h3>
      <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
      <div class="source">
        <div class="row">
          <y-button type="primary" loading>加载中</y-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  width: 1140px;
  margin: 0 auto;
}

.container {
  height: 80px;
  width: 100%;
}

.left {
  float: left;
  width: 240px;
  height: 100vh;
}
.left h4 {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  color: #333;
}
.left p {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  color: #444;
}

.right {
  margin-left: 240px;
}
.right h2 {
  font-weight: 400;
  color: #1f2f3d;
}
.right p {
  font-size: 14px;
  color: #5e6d82;
  margin: 14px 0;
}
.right h3 {
  margin: 55px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
}
.source{
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
}
.row{
  margin-bottom: 20px;
}
.row .y-button + .y-button{
  margin-left: 10px;
}
</style>