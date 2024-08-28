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
              <p class="ptxt">LOGIN</p>

              <input
                type="Phone"
                style="margin-top: 2rem"
                placeholder="Enter Phone No"
                v-model="phone"
              />

              <input
                type="OTP"
                placeholder="Enter OTP"
                v-model="otp"
                v-if="seen == true"
              /><br />
              <br />
              <button
                v-if="seen == false"
                type="submit"
                value="Send OTP"
                @click="sendOtp()"
              >
                Generate OTP</button
              ><br />
              <div class="pops">
                <button
                  class="bt"
                  type="submit"
                  value="Verify"
                  @click="verifyOtp"
                  v-if="seen == true"
                >
                  Verify OTP</button
                ><br />
                <button
                  class="bt"
                  type="submit"
                  v-if="seen == true"
                  value="Resend OTP"
                  @click="sendOtp()"
                >
                  Resend OTP
                </button>
              </div>

              <!--   <a href="https://partner.alfrescogrand.com/" class="mt-4">
                <p class="ptxt1">Partner Login?</p></a
              > -->
            </div>
          </div>
        </div>
      </div>
      <!--    <p style="position: absolute; right: 40px; bottom: 10px; font-size: 12px">
        <a
          href="https://haaku.in"
          target="blank"
          style="text-decoration: none; color: white"
          >Designed & Developed by Haaku Technology</a
        >
      </p> -->
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
      phone: "",
      appVerifier: "",
      otp: "",
      seen: false,
      s1: true,
      at: [],
      us: [],
    };
  },
  methods: {
    async sendOtp() {
      var self = this;
      self.s1 = false;
      if (self.phone.length != 10) {
        Message({
          showClose: true,
          message: "Phone Number is Invalid!",
          type: "warning",
        });
      } else {
        self.seen = true;
        /*    Message({
          showClose: true,
          message: "Otp sent Succcessfully!",
          type: "success",
        }); */

        const data = {
          phone: self.phone,
        };
        const url = "https://selby.in/api/sendOtp";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(url, options);
        const responseData = await response.json();
        if (response.ok) {
          Message({
            showClose: true,
            message: "Otp sent Succcessfully!",
            type: "success",
          });
        } else {
          Message({
            showClose: true,
            message: "Otp not sent!",
            type: "warning",
          });
        }
      }
    },

    async verifyOtp() {
      var self = this;
      if (self.otp.length == 6) {
        try {
          const record = await db
            .collection("otp")
            .getFirstListItem(`phone="${self.phone}" && otp="${self.otp}"`, {});

          self.us = self.us.filter((e) => e.phone == self.phone);

          if (self.us.length == 0) {
            Cookie.set("setUser", self.phone);
            self.$store.commit("phone", self.phone);
            self.$router.push("/Logindetails");
          } else {
            Cookie.set("setUser", self.phone);
            self.$store.commit("phone", self.phone);
            history.back();
          }
        } catch (e) {
          Message({
            showClose: true,
            message: "Invalid Otp!",
            type: "warning",
          });
        }
      } else {
        Message({
          showClose: true,
          message: "Invalid Otp!",
          type: "warning",
        });
      }
    },
    async getDat() {
      this.us = await db.collection("users").getFullList({
        sort: "-created",
      });
    },
  },
  mounted() {
    this.getDat();
  },
};
</script>
<style scoped>
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

input[type="phone"],
input[type="OTP"] {
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

<!-- <template>
  <div>
    <div
      style="
        background-image: url('img/al/Rectangle 98.png');
        background-repeat-x: repeat;
        height: 100vh;
        background-position: center;
      "
    >
      <div class="main1">
        <div class="box" :hidden="s1">
          <div class="inbox">
            <div style="height: 2.5rem">
              <h1 style="color: white">LOGIN</h1>
            </div>
            <h5 class="h2">Phone:</h5>
            <div class="inp">
              <input
                type="text"
                placeholder="Enter Valid Phone Number"
                v-model="phone"
              />
            </div>
            <h1 class="h2">Otp:</h1>
            <div class="inp">
              <input :type="typee" placeholder="Enter otp" v-model="top" />

              <div
                class="eye1"
                @click="typee === 'password' ? goja() : goja1()"
              >
                <mdicon
                  :name="
                    typee === 'password' ? 'eye-outline' : 'eye-off-outline'
                  "
                />
              </div>
            </div>
            <p class="reg">
              Don't have an account
              <span
                style="color: #002fa7; cursor: pointer"
                @click="
                  s1 = !s1;
                  s2 = !s2;
                "
                >Register?</span
              >
            </p>
            <div class="inp">
              <button class="btn1" @click="send()">Login</button>
            </div>
          </div>
        </div>
        <div class="box" :hidden="s2">
          <div class="inbox">
            <div style="height: 2.5rem">
              <h1 style="color: white">REGISTER</h1>
            </div>
            <h5 class="h2">Name:</h5>
            <div class="inp">
              <input type="text" placeholder="Enter name" v-model="name" />
            </div>
            <h5 class="h2">Email:</h5>
            <div class="inp">
              <input type="text" placeholder="Enter Email" v-model="email" />
            </div>

            <h1 class="h2">Password:</h1>
            <div class="inp">
              <input
                :type="typee"
                placeholder="Enter password"
                v-model="password"
              />

              <div
                class="eye1"
                @click="typee === 'password' ? goja() : goja1()"
              >
                <mdicon
                  :name="
                    typee === 'password' ? 'eye-outline' : 'eye-off-outline'
                  "
                />
              </div>
            </div>
            <h1 class="h2">Confirm Password:</h1>
            <div class="inp">
              <input
                :type="typee"
                placeholder="Confirm password"
                v-model="cpassword"
              />

              <div
                class="eye1"
                @click="typee === 'password' ? goja() : goja1()"
              >
                <mdicon
                  :name="
                    typee === 'password' ? 'eye-outline' : 'eye-off-outline'
                  "
                />
              </div>
            </div>
            <div class="inp">
              <button class="btn1" @click="save()">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/pocketbase";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  layout: "default2",
  middleware: "isAuth",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      email1: "",
      password1: "",
      s1: false,
      s2: true,
      typee: "password",
      cpassword: "",
    };
  },
  methods: {
    async send() {
      const authData = await db
        .collection("users")
        .authWithPassword(this.email1, this.password1)
        .then(async (authData) => {
          this.$message({
            message: "Login successfully",
            type: "success",
          });
          this.$store.commit("setUser", authData.record.email);
          Cookie.set("setUser", authData.record.email);
          history.back();
        })
        .catch((error) => {
          this.$message({
            message: error.message,
            type: "error",
          });
        });
    },
    async save() {
      var self = this;
      const data = {
        email: this.email,
        emailVisibility: true,
        password: this.password,
        passwordConfirm: this.cpassword,
        name: this.name,
      };

      const record = await db
        .collection("users")
        .create(data)
        .then(async () => {
          this.$message({
            message: "Account created successfully",
            type: "success",
          });
          this.s1 = !this.s1;
          this.s2 = !this.s2;
        });
    },
    goja() {
      this.typee = "text";
    },
    goja1() {
      this.typee = "password";
    },
  },
};
</script>

<style scoped>
.reg {
  color: white;
  text-align: right;
}
.h2 {
  color: white;
  font-size: 22px;
  margin-top: 1rem;
}
.p {
  color: white;
  text-align: center;
}
.main1 {
  width: 90%;
  margin: 0 auto;
  position: relative;
  height: 90vh;
}
.eye1,
.eye11 {
  position: absolute;
  top: 20%;
  right: 10px;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

.send1 {
  color: #39f146;
  text-decoration: underline 1px solid #39f146;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  width: 40%;
  min-height: 30vh;
  border-radius: 10px;
  background-color: #39566a;
  padding-bottom: 1rem;
}
.inbox {
  width: 60%;
  height: 90%;
  margin: 0 auto;
  margin-top: 2rem;
}
.flex {
  display: flex;
  gap: 30px;
  align-items: center;
}
.inp {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
input {
  height: 50px;
  min-width: 100%;
  border: 1px solid #ccc;
  background-color: #96b4c8;
  border-radius: 6px;
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
  padding: 0 14px;
}

input:focus {
  outline: none;
  /* border-color: #1877f2; */
}

::placeholder {
  color: #777;
  font-size: 1.063rem;
}
.btn1 {
  min-width: 31%;
  height: 3rem;
  margin-top: 2rem;
  background-color: #3d6982;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
@media only screen and (max-width: 1450px) {
  .box {
    transform: translate(-50%, -50%);
    width: 70%;
  }
  .inbox {
    margin-top: 2rem;
    width: 90%;
  }
  .flex {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .inp {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  input {
    height: 45px;
    max-width: 80%;
    font-size: 1rem;
  }

  ::placeholder {
    font-size: 1rem;
  }
  .btn1 {
    font-size: 18px;
    margin-bottom: 1rem;
  }
  .h2 {
    font-size: 20px;
  }
  .p {
    font-size: 14px;
  }
}
@media only screen and (max-width: 950px) {
  .box {
    transform: translate(-50%, -50%);
    width: 70%;
  }
  .inbox {
    margin-top: 2rem;
    width: 90%;
  }
  .flex {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .inp {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  input {
    height: 45px;
    max-width: 80%;
    font-size: 1rem;
  }

  ::placeholder {
    font-size: 1rem;
  }
  .btn1 {
    font-size: 18px;
    margin-bottom: 1rem;
  }
  .h2 {
    font-size: 20px;
  }
  .p {
    font-size: 14px;
  }
}
@media only screen and (max-width: 650px) {
  .box {
    transform: translate(-50%, -50%);
    width: 98%;
  }
  .inbox {
    margin-top: 2rem;
    width: 95%;
  }
  .flex {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .btn1 {
    font-size: 14px;
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  .h2 {
    font-size: 18px;
  }
  .p {
    font-size: 12px;
  }
}
</style>
 -->
