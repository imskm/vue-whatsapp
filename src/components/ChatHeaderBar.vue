<template>
  <div class="chat-window-header">
    <div class="chat-window-header-left">
      <img
        class="chat-window-contact-image"
        :src="conversations.contact_photo_url"
      />
      <div class="contact-name-and-status-container">
        <span class="chat-window-contact-name">{{ conversations.contact_name }}</span>
        <span class="chat-window-contact-status">Online</span>
      </div>
    </div>
    <div class="chat-window-header-right">
      <img class="chat-window-search-icon" src="/assets/img/search-icon.svg" />
      <img class="chat-window-menu-icon" src="/assets/img/menu-icon.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    conversations: {
      type: Object,
      required: true,
    }
  }
}
</script>