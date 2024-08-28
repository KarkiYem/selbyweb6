<template>
  <div class="main-container">
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>Chats</h2>
      </div>
      <div class="contact-list">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="contact-item"
          :class="{ active: activeChat === contact.id }"
          @click="getData2(contact)"
        >
          <img class="avatar" :src="contact.image" alt="Contact Avatar" />
          <div class="contact-details">
            <h4>{{ contact.name2 }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-container">
      <div class="chat-header">
        <div class="chat-header-details">
          <h3 v-if="activeChat">
            Chat with {{ contacts.find((c) => c.id === activeChat).name2 }}
          </h3>
        </div>
      </div>

      <div class="chat-window" ref="chatWindow">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'chat-message',
            message.sent_by === $store.state.phone ? 'sent' : 'received',
          ]"
        >
          <div class="message-bubble">
            <p class="message-text">{{ message.msg }}</p>
            <span class="message-time">{{ message.time }}</span>
          </div>
        </div>
      </div>

      <div class="chat-input">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Type your message..."
        />
        <button @click="sendMessage">SEND</button>
      </div>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      contacts: [],
      messages: [],
      newMessage: "",
      activeChat: null, // Track the active chat
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async sendMessage() {
      if (this.newMessage.trim() !== "" && this.activeChat) {
        const time = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const data = {
          chat_id: this.activeChat, // Use active chat ID
          msg: this.newMessage,
          date: new Date(),
          time: time,
          sent_by: this.$store.state.phone,
        };

        await db.collection("chat_msgs").create(data);
        this.newMessage = "";
        this.scrollToBottom();
        this.getData2({ id: this.activeChat }); // Refresh messages for the active chat
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatWindow = this.$refs.chatWindow;
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
    },
    async getData() {
      var self = this;
      self.contacts = await db.collection("chat").getFullList({
        filter: `person1 = "${self.$store.state.phone}" `,
      });
      self.getData2(self.contacts[0]); // Load the first chat by default
    },
    async getData2(contact) {
      this.activeChat = contact.id; // Set the active chat ID
      this.messages = await db.collection("chat_msgs").getFullList({
        filter: `chat_id = "${contact.id}" `,
      });
      this.scrollToBottom();
    },
  },
};
</script>
<style scoped>
.contact-item.active {
  background-color: #f0f0f0;
  /* Add any additional styles to highlight the active chat */
}
.main-container {
  display: flex;
  height: 80vh;
  font-family: "Arial", sans-serif;
}

.sidebar {
  width: 30%;
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.sidebar-header {
  padding: 20px;
  background-color: #1877f2;
  color: white;
  text-align: center;
}

.contact-list {
  flex: 1;
  overflow-y: auto;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.contact-item:hover {
  background-color: #ddd;
}

.contact-item .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.contact-item h4 {
  margin: 0;
  font-size: 16px;
}

.contact-item p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.chat-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  /* background-color: #e5ddd5; */
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #1877f2;
  color: white;
}

.chat-header .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-header h3 {
  margin: 0;
  font-size: 18px;
}

.chat-header p {
  margin: 0;
  font-size: 14px;
  color: #b2dfdb;
}

.chat-window {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  max-height: 70vh;
  background-color: #f8f9fa;
}

.chat-message {
  display: flex;
  margin-bottom: 10px;
}

.chat-message.sent {
  justify-content: flex-end;
}

.chat-message.received {
  justify-content: flex-start;
}

.message-bubble {
  max-width: 70%;
  padding: 10px;
  margin-block: 6px;
  border-radius: 10px;
  position: relative;
  font-size: 14px;
}

.message-bubble p {
  margin: 0;
}

.sent .message-bubble {
  background-color: #dcf8c6;
  border-bottom-right-radius: 0;
}

.received .message-bubble {
  background-color: white;
  border-bottom-left-radius: 0;
}

.message-time {
  font-size: 10px;
  color: #999;
  position: absolute;
  bottom: -18px;
  right: 10px;
}

.chat-input {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
}

.chat-input button {
  background: none;
  border: none;
  cursor: pointer;
}

.chat-input button img {
  width: 24px;
  height: 24px;
}
</style>
