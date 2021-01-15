<template>
  <q-page-container class="flex flex-center">
    <div>
      <div>
        <br><br>
        <strong>Test Base Server Node</strong>
      </div>
      <div
        v-for="api_node in api_resources_nodes"
        :key="api_node._id"
      >
        {{ api_node.title}}
        <b>{{ api_node.description}}</b>
      </div>
    </div>
  </q-page-container>
</template>

<script>
import {getDataNode} from "boot/axios";

export default {
  name: "Node",
  data() {
    return {
      api_resources_nodes: []
    }
  },
  async created() {
    this.api_resources_nodes = await getDataNode()
  }
}
</script>

<style scoped>
b {
  color: red;
}
</style>
