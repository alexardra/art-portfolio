<template>
<PageWrapper
  :mode="mode"
>
  <div
    class="w-100 h-100"
    :class="{ 'modal-backdrop': galleryOptions.showPhotoModal }"
  >
    <MainNavbar />
    <router-view></router-view>
    <MainFooter 
      v-if="showFooter"
    />
  </div>
  <PhotoGallery
    v-if="galleryOptions.showPhotoModal"
  />
</PageWrapper>
</template>

<script>
/* eslint-disable no-debugger */
import PageWrapper from './components/PageWrapper.vue'
import MainNavbar from './components/MainNavbar.vue'
import MainFooter from './components/MainFooter.vue'
import PhotoGallery from './components/PhotoGallery.vue'

export default {
  name: 'App',
  components: {
    PageWrapper,
    MainNavbar,
    MainFooter,
    PhotoGallery,
  },
  data() {
    return {
      galleryOptions: {
        content: null,
        startTileIndex: null,
        showPhotoModal: false,
      },
    }
  },
  computed: {
    mode() {
      return this.$route.name === 'MainPage' ? 'dark' : 'light'
    },
    showFooter() {
      return this.$route.fullPath.startsWith('/work')
    },
  },
  methods: {
    showModal(content, startTileIndex) {
      this.galleryOptions.content = content
      this.galleryOptions.startTileIndex = startTileIndex
      this.galleryOptions.showPhotoModal = true
      setTimeout(() => {
        document.addEventListener('click', this.hideOnClick)
      }, 0)
    },
    hideOnClick(event) {
      if (event.target.id !== 'fullscreen' && event.target.parentNode.id !== 'fullscreen')
          this.hideModal()
    },
    hideModal() {
      this.galleryOptions.content = null
      this.galleryOptions.startTileIndex = null
      this.galleryOptions.showPhotoModal = false
      setTimeout(() => {
        document.removeEventListener('click', this.hideOnClick)
      }, 0)
    },
  },
}
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  overflow:hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  height:100%;
}
</style>
