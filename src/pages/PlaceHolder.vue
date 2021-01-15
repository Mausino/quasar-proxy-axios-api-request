<template>
  <q-page-container class="flex flex-center">
    <div>
      <div>
        <br><br>
        <strong>Test https://jsonplaceholder.typicode.com/posts</strong>
      </div>
      <br><br>
      <div
        v-for="api_json_placeholder in api_json_placeholders"
        :key="api_json_placeholder.id"
      >
        {{ api_json_placeholder.title}}
        <b>{{ api_json_placeholder.body}}</b>>
      </div>
    </div>
  </q-page-container >
</template>

<script>
import {getDataJsonPlaceholder} from "boot/axios";

export default {
  name: "PlaceHolder",
  data() {
    return {
      api_json_placeholders: []
    }
  },
  async created() {
    this.api_json_placeholders = await getDataJsonPlaceholder()
  }
}
</script>

<style scoped>
b {
  color: red;
}
</style>
