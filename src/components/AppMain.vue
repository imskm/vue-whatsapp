<template>
  <div class="main">
    <ChatHeaderBar :conversations="conversations" />
    <ChatHistory :conversations="fetchConversations" />
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
  props: {
    conversationId: {
      type: String,
      required: true,
    },
  },

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
    // 
  },

  computed: {
    fetchConversations() {
      if (this.conversationId) {
        this.conversations = this.userConversations(this.conversationId);
        
        return this.conversations.conversation;
      }

      return [];
    },

    ...mapState(useMessageStore, ['userConversations']),
  }
};
</script>
