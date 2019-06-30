<template>
  <div class="hello" @keypress.enter="entered = !entered" :class="entered && 'entered'">
    <slot name="slot1"></slot>

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
    <p>{{ allTheNames }}</p>
    <p>this number is coming from the store: {{ numFromStore }}</p>
    <button @click="asyncTen">Async Increment Store Num</button>

    <div>
      <div v-for="post in posts" :key="post">
        <hr>
        <h4>{{post.title}}</h4>
        <p>{{post.content}}</p>
      </div>
    </div>
    <form>
      <label>title</label>
      <input type="text" v-model="title" required>
      <label>content</label>
      <input type="text" v-model="content" required>
      <button @click="subtmitForm">Submit</button>
    </form>
  </div>
  <!-- can do things like @submit.prevent to prevent default, or @click.once to only allow 1 click -->
  <!-- keycodes are avaibale, for example @enter. can also add your own. -->
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg: String
  },
  data() {
    return {
      message: "favorite peeps?",
      people: ["Tom", "Moriah", "Sally", "Wendy", "Frank"],
      checkedNames: [],
      entered: false,
      num1: 0,
      num2: 0,
      title: "",
      content: "",
      posts: [
        {
          title: "I'm Learning!",
          content: "Im here trying to learn some Vue!! :D"
        }
      ]
    };
  },
  methods: {
    clickingCheckBox(e) {
      console.log(e.target.value);
    },
    subtmitForm(e) {
      e.preventDefault();
      let newPost = {
        title: this.title,
        content: this.content
      };
      this.title = "";
      this.content = "";
      this.posts.push(newPost);
    },
    asyncTen() {
      this.$store.dispatch("increment", 1000);
    }
  },
  computed: {
    allTheNames() {
      return `${JSON.stringify(this.people)}`;
    },
    numFromStore() {
      return this.$store.getters.currentNum;
    }
  },
  watch: {
    content() {
      console.log("the content has changed!");
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
  color: rgb(10, 233, 25);
  font-weight: 400;
}
.coolguy {
  color: rgb(0, 74, 184);
}
.entered {
  background: rgba(142, 9, 9, 0.523);
  padding-bottom: 16px;
}
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  margin: auto;
  margin-bottom: 32px;
}
input {
  padding: 8px;
  margin-bottom: 8px;
}
</style>
