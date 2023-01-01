<template>
  <div class="main">
    <ChatHeaderBar :conversations="conversations" />
    <ChatHistory :conversations="conversations.conversation" />
    <ChatMessageBar />
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useMessageStore } from '@/stores/MessageStore';
import ChatHeaderBar from "@/components/ChatHeaderBar.vue";
import ChatHistory from "@/components/ChatHistory.vue";
import ChatMessageBar from "@/components/ChatMessageBar.vue";

export default {
  components: {
    ChatHeaderBar,
    ChatHistory,
    ChatMessageBar,
  },

  data() {
    return {
      conversations: [],
    }
  },

  created() {
    const conversationId = "conversation_id_001";
    this.conversations = this.userConversations(conversationId);
    console.log(this.conversations);
  },

  computed: {
    ...mapState(useMessageStore, ['userConversations']),
  }
};
</script>
