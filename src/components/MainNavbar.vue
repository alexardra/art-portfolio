<template>
  <div
    class="outer-p d-flex justify-between align-items-end position-relative container"
    style="z-index: 1"
  >
    <div class="d-flex align-items-end">
      <component :is="logoComponent" />
      <MainNavbarItem
        v-for="item in navbarItems"
        :key="item.id"
        :title="item.title"
        :to="item.to"
        :external="item.external"
      />
    </div>
    <MainNavbarItem
      to="mailto:anniebarbakadze@gmail.com"
      title="Contact"
      :external="true"
      :bold="true"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import MainNavbarItem from "./MainNavbarItem.vue";

export default {
  components: {
    MainNavbarItem,
  },
  computed: {
    navbarItems() {
      return [
        {
          title: "Work",
          to: "/work",
        },
        {
          title: "Me",
          to: "/about",
        },
        {
          title: "Starsheep",
          to: "https://www.instagram.com/starsheep2/",
          external: true,
        },
      ];
    },
    logoComponent() {
      return {
        light: defineAsyncComponent(() => import("./images/LogoDark.vue")),
        dark: defineAsyncComponent(() => import("./images/LogoLight.vue")),
      }[this.$root.mode];
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .outer-p {
    padding: 10px;
  }
}
</style>
