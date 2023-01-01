<template>
  <div class="chat-window">
    <EmptyComponent v-for="message in conversations">
      <SenderMessageBubble v-if="message.sender.id == loggedInUserId" :message="message" />
      <ReceiverMessageBubble v-if="message.receiver.id == loggedInUserId" :message="message" />
    </EmptyComponent>
  </div>
</template>
<script>
import SenderMessageBubble from "@/components/SenderMessageBubble.vue";
import ReceiverMessageBubble from "@/components/ReceiverMessageBubble.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";

export default {
  props: {
    conversations: {
      type: Array,
      required: true,
    },
  },
  components: {
    SenderMessageBubble,
    ReceiverMessageBubble,
    EmptyComponent,
  },
  data() {
    return {
      loggedInUserId: "ME",
    }
  },

  created() {
  },
};
</script>
