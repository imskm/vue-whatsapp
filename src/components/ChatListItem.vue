<template>
  <!-- Alice -->
  <div class="chat">
    <div class="chat-left">
      <img :src="`${chat.contact_photo_url}`" />
    </div>
    <div class="chat-right">
      <div class="chat-right-top">
        <span class="contact-name">{{ chat.contact_name }}</span>
        <span class="chat-date">{{ sentDateTime }}</span>
      </div>
      <div class="chat-right-bottom">
        <div class="chat-right-bottom-left">

          <!-- Message Status icon (the single, double check) -->
          <MessageCheckMarker :status="chat.last_message.status" />
          <!-- .chat-message-typing -->
          <span class="chat-message">{{ chat.last_message.data }}</span>
        </div>
<!--         <div class="chat-right-bottom-right">
          <span class="unread-messages-number"> 3 </span>
          <span class="chat-options">
            <img src="/assets/img/down-arrow.svg"/>
          </span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import MessageCheckMarker from '@/components/MessageCheckMarker.vue';

export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  components: {
    MessageCheckMarker,
  },

  data() {
    return {
      //
    };
  },

  methods: {
    //
  },

  computed: {

    sentDateTime() {
      let t = this.chat.last_message.sent_at;
      let d = new Date(t);
      return d.getHours() + ":" + d.getMinutes();
    }
  }
};
</script>
