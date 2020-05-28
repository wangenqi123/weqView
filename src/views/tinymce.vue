<template>
  <div>
    <tinymceEditor v-model="value"></tinymceEditor>

    {{value}}
  </div>
</template>

<script>
import tinymceEditor from "../components/tinymce-editor/tinymceEditor.vue";
export default {
  name: "",
  data(){
    return{
      value:"new Content"
    }
  },
  components: {
    tinymceEditor,
  }
};
</script>

<style>
</style>