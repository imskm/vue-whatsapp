<template>
  <div class="sidebar">
    <StatusHeaderBar />
    <SidebarNotification />
    <SearchChatBar />

    <ChatList>
      <ChatListItem
        v-for="c in getConversationList"
        :key="c.id"
        :chat="c"
        @click="openConversation(c.id)"
      />
    </ChatList>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMessageStore } from "@/stores/MessageStore.js";

import ChatList from "@/components/ChatList.vue";
import ChatListItem from "@/components/ChatListItem.vue";
import StatusHeaderBar from "@/components/StatusHeaderBar.vue";
import SidebarNotification from "@/components/SidebarNotification.vue";
import SearchChatBar from "@/components/SearchChatBar.vue";

export default {
  emits: ['on-open-conversation'],
  components: {
    StatusHeaderBar,
    SidebarNotification,
    ChatList,
    ChatListItem,
    SearchChatBar,
  },

  data() {
    return {
      conversationList: [],
    };
  },

  created() {
    this.conversationList = this.getConversationList;
  },

  methods: {
    openConversation(conv_id) {
      this.$emit('on-open-conversation', conv_id);
    },
  },

  mounted() {
    // 
  },

  computed: {
    ...mapState(useMessageStore, ["getConversationList"]),
  },
};
</script>
