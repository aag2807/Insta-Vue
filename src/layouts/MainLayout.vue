<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar class="constrain">
         <q-btn
          class="large-screen-only q-mr-sm"
           flat
           round
           size="large"
           icon="eva-camera-outline" 
           dense
           to="/camera"
          />
           <q-separator
              class="large-screen-only"
              vertical
            />
        <q-toolbar-title class="text-grand-hotel text-bold">
          Insta-Vue
        </q-toolbar-title>
         <q-btn
          class="large-screen-only"
           flat
           round
           size="large"
           icon="eva-home-outline" 
           dense
           to="/"
          />
      </q-toolbar>
    </q-header>

    <q-footer 
      class="bg-white small-screen-only" 
      bordered>
        <q-tabs
          class="text-grey-10"
          active-color="primary"
          indicator-color="transparent"
        >
          <q-route-tab
            to="/"
            icon="eva-home-outline"
            />
          <q-route-tab
            to="/camera"
            icon="eva-camera-outline"
           /> 
        </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  }
};
</script>
<style lang="sass">
  .q-toolbar
    @media (min-width: $breakpoint-sm-min)
      height: 77px

  .q-footer
    q-tab__icon
      font-size: 30px

  .q-toolbar__title
    font-size: 30px
    @media (max-width: $breakpoint-xs-max)
      text-align: center

</style>