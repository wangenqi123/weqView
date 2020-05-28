<template>
  <section id="tinymce-editor">tinymceEditor</section>
</template>
<script>
import "./tinymce.min.js";
import "./themes/silver/theme.min.js";
import "./langs/zh_CN.js";
import "./plugins/preview/plugin.min.js";
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  mounted() {
    tinymce.init({
      selector: "#tinymce-editor",
      language: "zh_CN",
      //菜单栏
      menubar: "bar1 bar2",
      menu: {
        bar1: { title: "菜单栏1", items: "copy paste" },
        bar2: { title: "菜单栏2", items: "cut preview" }
      },
      //工具栏
      toolbar: "undo redo preview",
      plugins: "preview",

      //监听tinymce初始化完成事件
      setup: editor => {
        editor.on("init", event => {
          //先初始化，后传入值
          editor.setContent(this.value);
          console.log(event);
        });
      },

      //监听input和change事件，实时更新value
      init_instance_callback: editor => {
        editor.on("input", e => {
          this.$emit("input", e.target.innerHTML);
        }),
          editor.on("change", e => {
            this.$emit("input", e.level.content);
          });
      }
    });
  }
};
</script>
<style  lang="less" scoped>
@import url("./skins/ui/oxide/skin.min.css");
</style>