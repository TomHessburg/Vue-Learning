<template>
  <div class="hello">
    <ul>
      <li v-for="num in 5" v-bind:key="num">{{ num }}</li>
    </ul>
    <h3>{{ message }}</h3>
    <span class="input-box" v-bind:key="person" v-for="person in people">
      <label for="person">{{ person }}</label>
      <input type="checkbox" :id="person" :value="person" v-model="checkedNames">
    </span>
    <h4 v-if="checkedNames.length === 5">everyone checked! :D</h4>
    <p v-bind:key="name" v-for="name in checkedNames">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      message: "hi there :D",
      people: ["Tom", "Moriah", "Sally", "Wendy", "Frank"],
      checkedNames: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.input-box {
  padding: 8px;
  border-bottom: 1px solid black;
}
</style>
