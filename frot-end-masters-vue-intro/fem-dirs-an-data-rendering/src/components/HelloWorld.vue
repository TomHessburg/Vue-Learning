<template>
  <div class="hello" @click="entered = !entered" :class="entered && 'entered'">
    <!-- : === v-bind: -->
    <ul>
      <li
        v-for="num in 5"
        v-bind:class="checkedNames.length >= num ? 'is-checked' : ''"
        v-bind:key="num"
      >{{ num }}</li>
    </ul>
    <h3>{{ message }}</h3>
    <span class="input-box" v-bind:key="person" v-for="person in people">
      <label for="person">{{ person }}</label>
      <!-- @ === v-on:... can user terinaries and such directly here, or methods which will auto pass "e" -->
      <input
        @click="clickingCheckBox"
        type="checkbox"
        :id="person"
        :value="person"
        v-model="checkedNames"
      >
    </span>
    <!-- difference between v-if and v-show is in the dom. v-if keeps a place holder comment for the item and dosnt render it.
    v-show creates the element in the dom and puts a display none on it-->
    <h4 v-if="checkedNames.length === 5">everyone checked! :D</h4>
    <div class="coolguy" v-if="checkedNames">
      <p v-if="checkedNames.length < 5">ur mean!</p>
      <p v-else>yeaaaa thats what i thought!</p>
    </div>
    <p v-bind:key="name" v-for="name in checkedNames">{{name}}</p>
    <!-- <pre v-pre>{{ message }}</pre> this will pretty print -->
    <div class="calculator">
      <input v-model.number="num1" type="number">
      <label>+</label>
      <input v-model.number="num2" type="number">
      <label>=</label>
      <label>{{ num1 + num2 }}</label>
    </div>
  </div>
  <!-- can do things like @submit.prevent to prevent default, or @click.once to only allow 1 click -->
  <!-- keycodes are avaibale, for example @enter. can also add your own. -->
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      message: "favorite peeps?",
      people: ["Tom", "Moriah", "Sally", "Wendy", "Frank"],
      checkedNames: [],
      entered: false,
      num1: 0,
      num2: 0
    };
  },
  methods: {
    clickingCheckBox(e) {
      console.log(e.target.value);
    }
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
.is-checked {
  color: rgb(196, 27, 27);
}
.coolguy {
  color: rgb(0, 74, 184);
}
.entered {
  background: rgba(0, 0, 0, 0.01);
  padding-bottom: 16px;
}
</style>
