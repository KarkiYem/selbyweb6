<template>
  <div
    class="divs"
    style="
      background-image: url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/31/full/1704044517-9976.jpg?im=FeatureCrop,size=(826,465)');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <div class="features-5" style="position: relative">
      <div class="ma">
        <div class="row" style="display: flex; justify-content: center">
          <!-- <div class="col-lg-8 col-12"></div> -->
          <div class="col-lg-4 col-12">
            <div class="tpr"></div>
            <div class="dui">
              <p class="ptxt">LOGIN DETAILS</p>

              <input
                type="name"
                style="margin-top: 2rem"
                placeholder="Enter name"
                v-model="name"
              />
              <input
                type="Email"
                style="margin-top: 2rem"
                placeholder="Enter Email "
                v-model="email"
              />
              <!--     <input
                type="Password"
                style="margin-top: 2rem"
                placeholder="Enter password"
                v-model="password"
              />
              <input
                type="Confirm Password"
                style="margin-top: 2rem"
                placeholder="Enter Confirm password"
                v-model="confirmpassword"
              /> -->

              <div class="fl2">
                <input
                  type="file"
                  @change="filesChange1"
                  accept=".jpg,.png,.jpeg,.webp"
                />
                <div class="imgdiv" v-if="link != ''">
                  <img class="img" :src="link" />
                </div>
              </div>

              <button type="submit" value="Send OTP" @click="sendOtp()">
                Save</button
              ><br />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--     *********    END FEATURES 5   /api/sendOtp   *********      -->
  </div>
</template>
<script>
const Cookie = process.client ? require("js-cookie") : undefined;
import { Message } from "element-ui";
import { db, path } from "~/plugins/pocketBase";
export default {
  layout: "default2",
  /*  middleware: "isAuth", */
  data() {
    return {
      password: "",
      email: "",
      name: "",
      confirmpassword: "",
      appVerifier: "",
      otp: "",
      seen: false,
      s1: true,
      link: "",
      obj: null,
      at: [],
      username: "",
    };
  },
  methods: {
    async sendOtp() {
      var self = this;
      self.s1 = false;
      if (self.email == "") {
        Message({
          showClose: true,
          message: "Email is Invalid!",
          type: "warning",
        });
      } else {
        let a = self.name.split(" ");
        var randomNumber = Math.floor(Math.random() * 9000) + 1000;
        self.username = a[0] + randomNumber.toString();
        const data = {
          username: self.username,
          email: self.email,
          emailVisibility: true,
          password: self.password,
          passwordConfirm: self.confirmpassword,
          name: self.name,
          subscription: {},
          phone: self.$store.state.phone,
          block: true,
          active: true,
          avatar: self.obj,
        };

        const record = await db
          .collection("users")
          .create(data)
          .then((result) => {
            self.$router.push("/Profile");
          })
          .catch((err) => {
            Message({
              showClose: true,
              message: "Insert Correct Data!",
              type: "warning",
            });
          });
      }
    },
    async filesChange1(event) {
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
    dlt() {
      var self = this;
      self.link = "";
      self.obj = null;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.fl2 {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  gap: 1%;
}
.imgdiv {
  flex: 0 0 24%;
  max-width: 24%;
  aspect-ratio: 1/1;
  border: 1px solid gray;
  overflow: hidden;
  margin-bottom: 10px;
}
.img {
  object-fit: contain;
  width: 100%;
  width: 100%;
}
.ptxt {
  font-size: 30px;
  font-weight: 600;
  color: white;
}
.ptxt1 {
  font-size: 16px;
  font-weight: 600;
  color: #212122;
}
.dui {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-height: 200px;
  background-color: rgba(106, 129, 151, 0.6);
  z-index: 2;
  padding: 10px 15px;
  flex-direction: column;
  border-radius: 3px;
}

.tpr {
  height: 350px;
}
.ma {
  width: 90%;
  margin: 0 auto;
}
.divs {
  width: 100%;
  min-height: 100vh;
}
.btn3 {
  font-size: 30px;
  font-weight: bold;
  color: #002fa7;
  text-align: center;
}

input {
  margin-bottom: 10px;
}

input[type="name"],
input[type="Password"],
input[type="Confirm Password"],
input[type="Email"] {
  width: 212px;
  height: 40px;
  border: 2px solid #212122;
  background-color: #212122;
  color: white;
  font-weight: 600;
  border-radius: 3px;
  padding-left: 15px;
}

input:focus {
  outline: 0;
  transition: 0.8s;
  border: 2px solid #212122;
}

::placeholder {
  color: #7f7e7e;
  position: absolute;
  top: 8px;
  left: 20px;
}

input:focus ~ input[type="email"]::placeholder {
  background-color: #002fa7;
  color: white;
  position: absolute;
  top: 7px;
  left: 10px;
}

::-ms-reveal {
  filter: invert(100%);
}

button {
  width: 200px;
  height: 38px;
  border: 2px solid #212122;
  background: #212122;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

button:active {
  transform: scale(1.05);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
.pops {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.bt {
  flex: 0 0 40%;
  max-width: 40%;
  height: 38px;
  border: 2px solid #002fa7;
  background: #002fa7;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.bt:active {
  transform: scale(1.05);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
@media only screen and (max-width: 650px) {
  .tpr {
    height: 50px;
  }
}
@media only screen and (max-width: 500px) {
  .pops {
    display: block;
  }
  .bt {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 5px;
  }
}
</style>
<style>
.description {
  opacity: 1 !important;
}
</style>
