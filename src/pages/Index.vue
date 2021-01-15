<template xmlns="http://www.w3.org/1999/html">
  <q-layout>
    <Node></Node>
    <PlaceHolder></PlaceHolder>
  </q-layout>
</template>

<script>
import Node from "pages/Node";
import PlaceHolder from "pages/PlaceHolder";

export default {
  name: 'PageIndex',
  components: {
    Node,
    PlaceHolder
  }
}
</script>
