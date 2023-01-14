<template>
  <div class="sender">
    <span class="sender-message-tail">
      <img src="/assets/img/message-tail-sender.svg" />
    </span>
    <span v-if="message.type === 'text'" class="sender-message">{{ message.data }}</span>
    <span class="message-time">{{ messageTime }}</span>
    <span class="message-status">
      <MessageCheckMarker :status="message.status" />
    </span>
  </div>
</template>
<script>
import MessageCheckMarker from '@/components/MessageCheckMarker.vue';

export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },

  components: {
    MessageCheckMarker,
  },

  computed: {
    messageTime() {
      let sentAt = this.message.sent_at;
      let date = new Date(sentAt);

      return `${date.getHours()}:${date.getMinutes()}`;
    },
  },
}
</script>