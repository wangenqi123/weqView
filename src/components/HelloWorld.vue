<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
      <button @click="Weq()">weq1</button>
    </p>
  </div>
</template>

<script>
import { loadWeq } from "@/api/weq";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        name: "weq",
        addr: "addr",
        list: [
          {
            name: "weq1",
            addr: "addr1"
          },
          {
            name: "weq2",
            addr: "addr2"
          }
        ]
      }
    };
  },
  methods: {
    Weq() {
       let data = this.form;
      //let data = JSON.parse(JSON.stringify(this.form)); 
      // let data = {
      //   name: "weq",
      //   addr: "addr",
      //   list: [
      //     {
      //       name: "weq1",
      //       addr: "addr1"
      //     },
      //     {
      //       name: "weq2",
      //       addr: "addr2"
      //     }
      //   ]
      // };
      loadWeq(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
