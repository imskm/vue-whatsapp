<template>
  <div class="grid">
    <!-- App background -->
    <div class="top"></div>
    <div class="bottom"></div>
    <!-- App -->
    <AppMainLayout>
      <AppSidebar @on-open-conversation="openConversation" />
      <AppMain :conversation-id="convId" />
    </AppMainLayout>
  </div>
</template>

<script>
import AppMainLayout from "@/layouts/AppMainLayout.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import AppMain from "@/components/AppMain.vue";

export default {
  components: {
    AppMainLayout,
    AppSidebar,
    AppMain,
  },
  data() {
    return {
      convId: "",
    };
  },
  methods: {
    openConversation(convId) {
      this.convId = convId;
    },
  },
};
</script>
