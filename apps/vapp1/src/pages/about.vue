<script setup lang="ts">
import { One } from "@nuxtspace/vlib1";
import { Two } from "@nuxtspace/vlib1";
</script>


<template>
  <div class="about">
    <One />
    <Two />
    <h1>This is an about page.</h1>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
}
</style>
