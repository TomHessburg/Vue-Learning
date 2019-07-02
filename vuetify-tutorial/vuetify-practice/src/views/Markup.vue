<template>
  <div class="home">
    <h1>Homepage</h1>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn color="pink" dark depressed>click me</v-btn>
    <v-btn color="pink" flat>click me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn small depressed class="pink white--text">
      <v-icon small left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn large class="pink white--text">
      <span>email me</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn ripple fab small flat dark color="red">
      <v-icon>favorite</v-icon>
    </v-btn>

    <p
      class="blue white--text"
    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam quo harum, aut quaerat perspiciatis nostrum, accusantium officia rerum eos fugit. Nulla officiis id optio, corrupti provident laboriosam. Dolor.</p>
    <p
      class="pink lighten-4 red--text text--darken-4"
    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae recusandae non, quasi illo et nulla facere dolore impedit officiis aliquam tempore. Recusandae nobis in, eligendi sint ipsam reprehenderit voluptates officiis.</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Saller dispaly</h4>
    <p class="headline">This is the headline</p>
    <p class="subheading font-weight-bold">This is a subheading</p>
    <p class="caption">this is a caption</p>
  </div>
</template>

<script>
export default {};
</script>
