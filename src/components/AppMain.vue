<template>
  <div class="main">
    <ChatHeaderBar />
    <ChatHistory />
    <ChatMessageBar />
  </div>
</template>

<script>
import ChatHeaderBar from "@/components/ChatHeaderBar.vue";
import ChatHistory from "@/components/ChatHistory.vue";
import ChatMessageBar from "@/components/ChatMessageBar.vue";

export default {
  components: {
    ChatHeaderBar,
    ChatHistory,
    ChatMessageBar,
  },
};
</script>
