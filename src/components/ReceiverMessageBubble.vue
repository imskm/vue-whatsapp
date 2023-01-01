<template>
  <div :class="[{'image-message': message.message.type === 'image' }, {'receiver-audio-message': message.message.type === 'audio' }, 'receiver']">
    <span class="receiver-message-tail"><img src="/assets/img/message-tail-receiver.svg"/></span>
    
    <span class="receiver-message" v-if="message.message.type === 'text'">{{ message.message.data }}</span>
    <span class="receiver-message" v-if="message.message.type === 'image'">
      <img :src="`data:image/jpeg;base64,${message.message.data}`" alt="">
    </span>
    <div v-if="message.message.type === 'audio'" class="audio-message">
      <div class="audio-message-left">
        <img src="/assets/img/play-audio-icon.svg" />
      </div>
      <div class="audio-message-center">
        <div class="audio-message-center-top">
          <span class="audio-message-bar"></span>
          <input type="range" min="0" max="100" value="75" />
        </div>
        <div class="audio-message-center-bottom">
          <div class="audio-message-bottom">
            <span class="audio-message-length">1:15</span>
            <span class="message-time">21:36</span>
          </div>
        </div>
      </div>
      <div class="audio-message-right">
        <img
          class="audio-message-contact-image"
          src="/assets/img/timmy-m-harley.jpg"
        />
        <img
          class="audio-message-microphone"
          src="/assets/img/microphone-seen.svg"
        />
      </div>
    </div>
    
    <span class="message-time">{{ messageTime }}</span>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
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