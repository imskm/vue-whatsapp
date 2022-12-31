<template>
  <div class="sidebar">

    <StatusHeaderBar />
    <SidebarNotification />
    <SearchChatBar />

    <ChatList>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </ChatList>

  </div>
</template>

<script>
import ChatList from '@/components/ChatList.vue';
import ChatListItem from '@/components/ChatListItem.vue';
import StatusHeaderBar from '@/components/StatusHeaderBar.vue';
import SidebarNotification from '@/components/SidebarNotification.vue';
import SearchChatBar from '@/components/SearchChatBar.vue';

export default {
  components: {
    StatusHeaderBar,
    SidebarNotification,
    ChatList,
    ChatListItem,
    SearchChatBar
  },

}
</script>