<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field :rules="inputRules" label="title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-textarea :rules="inputRules" label="information" v-model="content" prepend-icon="edit"></v-textarea>

          <v-menu>
            <v-text-field
              :rules="inputRules"
              :value="formattedDate"
              label="Due date"
              prepend-icon="date_range"
              slot="activator"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn @click="submit" flat class="success mx-0 mt-3" :loading="posting">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      posting: false,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.posting = true;
        const project = {
          title: this.title,
          dialog: false,
          content: this.content,
          due: format(this.due, "Do MMM YYYY"),
          person: "The Net Ninja",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(res => {
            this.posting = false;
            this.dialog = false;
            this.$emit("projectAdded");
          })
          .catch(err => console.log(err));
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MM YYYY") : "";
    }
  }
};
</script>
