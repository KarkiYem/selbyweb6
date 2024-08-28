<template>
  <div class="profile-edit">
    <h1>Edit Profile</h1>
    <form @submit.prevent="updateProfile">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="profile.name" type="text" id="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="profile.email" type="email" id="email" readonly />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input v-model="profile.phone" type="tel" id="phone" readonly />
      </div>

      <!--    <div class="form-group">
        <label for="bio">Bio</label>
        <textarea v-model="profile.bio" id="bio" rows="5"></textarea>
      </div> -->

      <div class="form-group">
        <label for="profilePicture">Profile Picture</label>
        <input type="file" id="profilePicture" @change="handleFileUpload" />
      </div>
      <img width="100" height="100" :src="link" />

      <button style="margin-top: 1rem" type="submit" class="btn-submit">
        Save Changes
      </button>
    </form>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
import { Message } from "element-ui";
export default {
  middleware: ["CheckUser"],
  data() {
    return {
      profile: {
        id: "",
        username: "",
        email: "",
        emailVisibility: true,
        password: "",
        passwordConfirm: "",
        name: "",
        phone: "",
        block: true,
        subscription: "JSON",
        active: true,
        avatar: "",
      },
      link: "",
      path1: "",
      obj: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async updateProfile() {
      var self = this;
      self.profile.avatar = self.obj || self.profile.avatar;
      const datas = {
        username: self.profile.username,
        email: self.profile.email,
        emailVisibility: self.profile.emailVisibility,
        password: self.profile.password,
        passwordConfirm: self.profile.passwordConfirm,
        name: self.profile.name,
        phone: self.profile.phone,
        block: self.profile.block,
        subscription: JSON.stringify(self.profile.subscription),
        active: self.profile.active,
        avatar: self.profile.avatar,
      };

      await db
        .collection("users")
        .update(self.profile.id, datas)
        .then(() => {
          Message({
            showClose: true,
            message: "Profile Updated Succcessfully!",
            type: "success",
          });
          history.back();
        })
        .catch(() => {
          Message({
            showClose: true,
            message: "Something went wrong!",
            type: "warning",
          });
        });
    },

    handleFileUpload(event) {
      try {
        const files = event.target.files;
        if (files.length !== 0) {
          this.link = "";
          const file = files[0];

          if (file instanceof File) {
            this.link = URL.createObjectURL(file);
            this.obj = file;
          } else {
            console.error("The selected file is not valid.");
          }
        }
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    },
    async getData() {
      var self = this;
      let id = self.$route.params.id;
      const record = await db.collection("users").getOne(`${id}`, {});
      if (record) {
        const {
          id,
          username,
          email,
          emailVisibility,
          password,
          passwordConfirm,
          name,
          phone,
          block,
          subscription,
          active,
          avatar,
        } = record;
        self.profile = {
          id,
          username,
          email,
          emailVisibility,
          password,
          passwordConfirm,
          name,
          phone,
          block,
          subscription,
          active,
          avatar,
        };
      }
      self.path1 = path;
      self.link = `${self.path1}/api/files/users/${self.profile.id}/${self.profile.avatar}`;
    },
  },
};
</script>
<style scoped>
.profile-edit {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.profile-edit h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-submit {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .profile-edit {
    padding: 15px;
  }

  .btn-submit {
    padding: 12px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .profile-edit {
    padding: 10px;
  }

  .btn-submit {
    padding: 14px;
    font-size: 20px;
  }
}
</style>
