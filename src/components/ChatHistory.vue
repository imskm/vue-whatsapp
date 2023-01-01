<template>
  <div class="chat-window">

    <SenderMessageBubble />
    <ReceiverMessageBubble />

  </div>
</template>
<script>
import SenderMessageBubble from '@/components/SenderMessageBubble.vue';
import ReceiverMessageBubble from '@/components/ReceiverMessageBubble.vue';

export default {
  components: {
    SenderMessageBubble,
    ReceiverMessageBubble,
  },
}
</script>