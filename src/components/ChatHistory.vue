<template>
  <div class="chat-window">
    <EmptyComponent v-for="c in conversations">
      <SenderMessageBubble v-if="c.message.sender.id == loggedInUserId" :message="c.message" />
      <ReceiverMessageBubble v-if="c.message.receiver.id == loggedInUserId" :message="c.message" />
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
