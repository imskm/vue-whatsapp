import { defineStore } from "pinia";
import DATA from "@/data.json";

const useMessageStore = defineStore("messageStore", {
  state() {
    return {
      data: DATA,
    };
  },

  getters: {
    messages() {
      return this.data;
    },

    getConversationList(page = 1) {
      let result = [];

      this.data.conversations.forEach((c, index) => {
        result.push({
          id: c.id,
          contact_name: c.contact_name,
          contact_phone: c.contact_phone,
          contact_photo_url: c.contact_photo_url,
          contact_photo_lg_url: c.contact_photo_lg_url,
          last_message: c.conversation[c.conversation.length - 1],
        });
      });

      return result;
    },

  },

  actions: {
    userConversations(conversationId) {
      return this.data.conversations.filter((conv) => conv.id === conversationId).pop();
    },
    
  },
});

export { useMessageStore };
