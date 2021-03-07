<template>
  <div @mousemove="getMousePosition" style="height: 900px">
    鼠标： {{ mousePos.x }},{{ mousePos.y }} 线段长度： {{ lineStyle.width }}
    <!-- <div id="one" class="item"></div>
    <div id="two" class="item"></div>
    <div id="three" class="item"></div> -->
    <div class="line" :style="lineStyle"></div>
  </div>
</template>

<script>
import LeaderLine from "leader-line-vue";
export default {
  name: "",
  data() {
    return {
      mousePos: {
        x: 0,
        y: 0,
      },
      value: "new Content",
      lineStyle: {
        top: "300px",
        left: "100px",
        width: "100px",
        transform: `rotate(50deg)`,
      },
    };
  },
  created() {
    this.init();
  },
  watch: {
    mousePos: {
      handler(obj, oldName) {
        console.log(obj);
        this.lineStyle = {
          // left: obj.x - 82 + "px",
          // top: obj.y - 38 + "px",
          left: "0px",
          top: "500px",
          width: Math.sqrt(obj.x * obj.x + obj.y * obj.y) + "px",
          transform: `rotate(50deg)`,
        };
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getMousePosition(e) {
      // console.log(e);
      this.mousePos.x = e.layerX;
      this.mousePos.y = e.layerY;
    },
    init() {
      console.log("测试");
    },
  },
};
</script>

<style>
.border {
  margin-left: 166px;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

.item {
  height: 100px;
  width: 200px;
  position: absolute;
  z-index: 2;
}
#one {
  background: red;
  top: 200px;
  left: 400px;
}
#two {
  background: blue;
  top: 100px;
  left: 40px;
}

#three {
  background: yellow;
  top: 400px;
  left: 10px;
}
.line {
  position: absolute;
  background: green;
  height: 1px;
  z-index: 1; /*这里设置大于2，即可看到真正连线的其实是两个元素的中心坐标*/
}
</style>