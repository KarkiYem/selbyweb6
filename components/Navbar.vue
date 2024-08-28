<template>
  <div class="head">
    <div class="nav1">
      <img
        @click="$router.push('/')"
        class="img"
        src="img/Selby (1)/selby_logo[1] 1.png"
      />
      <div class="drop">
        <mdicon name="magnify" class="search1" />
        <el-dropdown style="width: 100%">
          <span
            class="el-dropdown-link"
            style="
              min-width: 100%;
              font-weight: 700;
              font-size: 18px;
              color: white;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            Guwahati<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="width: 12%">
            <el-dropdown-item>Guwahati</el-dropdown-item>
            <el-dropdown-item>Jorhat</el-dropdown-item>
            <el-dropdown-item>Shillong</el-dropdown-item>
            <el-dropdown-item>Itanagar</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="in">
        <input
          class="input"
          @keyup.enter="go(search)"
          v-model="search"
          placeholder="Find Cars,Mobile Phones and More.."
        />
        <div class="search"><mdicon name="magnify" class="search1" /></div>
      </div>
      <h5 v-if="!$store.state.phone" @click="$router.push('/Login')">Login</h5>
      <h5 v-else @click="$router.push('/Profile')">
        <i style="color: white" class="el-icon-user-solid"></i>
      </h5>
      <h5 v-if="$store.state.phone" @click="$router.push('/Chat')">
        <i style="color: white" class="el-icon-chat-round"></i>
      </h5>
      <div class="sell" @click="$router.push('/Post')">
        <div class="spa">
          <span><mdicon name="plus-thick" />&nbsp;SELL</span>
        </div>
      </div>
    </div>
    <div class="ppop" style="width: 98%; margin: 0 auto; padding-top: 0rem">
      <div class="navi">
        <div>
          <span @click="drawer = true"> <mdicon name="menu" /></span>
          <img class="imgmob" src="img/Selby (1)/selby_logo[1] 1.png" />
        </div>
        <div style="display: flex; align-items: center">
          <p class="pttet">Guwahati,Assam&nbsp;</p>
          <mdicon name="map-marker" />
        </div>
      </div>
      <div style="margin-top: 0.5rem">
        <el-input
          placeholder="Find Cars,Mobile Phones and More.."
          v-model="input"
          @keyup.enter="go(input)"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <el-drawer
      title="SELBY"
      :visible.sync="drawer"
      :direction="direction"
      size="100%"
    >
      <div
        class="fless"
        style="
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding-bottom: 0.5rem;
          gap: 1rem;
          border-bottom: 0.1rem solid gray;
        "
      >
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <div style="">
          <p class="pttet" style="font-weight: bold">Welcome to SELBY</p>
          <p class="pttet">Take charge of your buying and selling journey</p>
        </div>
      </div>
      <div
        class="fless"
        style="
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding-bottom: 0.5rem;
          gap: 1rem;
          margin-top: 0.5rem;
        "
      >
        <mdicon name="camera-outline" />
        <div style="">
          <p
            @click="$router.push('/Post')"
            class="pttet"
            style="font-weight: bold"
          >
            Start Selling
          </p>
        </div>
      </div>
      <div
        class="fless"
        style="
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding-bottom: 0.5rem;
          gap: 1rem;
        "
      >
        <mdicon name="heart-outline" />
        <div style="">
          <p
            @click="$router.push('/Profile')"
            class="pttet"
            style="font-weight: bold"
          >
            My ADS
          </p>
        </div>
      </div>
      <div
        class="fless"
        style="
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding-bottom: 0.5rem;
          gap: 1rem;
          border-bottom: 0.1rem solid gray;
        "
        v-if="$store.state.phone"
      >
        <mdicon name="chat-outline" />
        <div style="">
          <p class="pttet" style="font-weight: bold">Chat</p>
        </div>
      </div>
      <!--    <div
        class="fless"
        style="
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding-top: 0.5rem;
          gap: 1rem;
        "
      >
        <mdicon name="help-circle-outline" />
        <div style="">
          <p class="pttet" style="font-weight: bold">Help</p>
        </div>
      </div> -->
      <!--   <div
        class="fless"
        style="
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding-bottom: 0.5rem;
          gap: 1rem;
        "
      >
        <mdicon name="web" />
        <div style="">
          <p class="pttet" style="font-weight: bold">Language</p>
        </div>
      </div> -->
      <span style="width: 100%; display: flex; justify-content: center">
        <button
          class="btn22"
          v-if="!$store.state.phone"
          @click="$router.push('/Login')"
        >
          Login
        </button>
        <button class="btn22" v-else @click="$router.push('/Profile')">
          Login
        </button>
      </span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      input: "",
      drawer: false,
      direction: "ttb",
    };
  },
  methods: {
    go(e) {
      if (e) {
        this.$router.push({ name: "Details-id", params: { id: e } });
      }
    },
  },
};
</script>

<style scoped>
.pttet {
  font-size: 12px;
  letter-spacing: 0;
}
.ppop {
  display: none;
}
.drop {
  display: flex;
  align-items: center;
  flex: 0 0 12%;
  max-width: 12%;
  padding: 0 5px;
  gap: 20px;
  height: 2.5rem;
  border: 2px solid white;
  border-radius: 5px;
}
.head {
  background-color: #0400fd;
  max-width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav1 {
  width: 99%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav2 {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.sell {
  position: relative;
}
.spa {
  width: 6rem;
  height: 2.4rem;
  padding-right: 5px;
  background-color: #fff;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
}

.spa::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(
    90deg,
    red 0%,
    orange 25%,
    yellow 50%,
    green 75%,
    blue 100%
  );
  border-radius: 50px;
  z-index: -1;
}

.spa::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 50px;
  padding: 3px;
  z-index: -1;
}
p {
  margin: 0;
  padding: 0;
  font-size: 20px;
  letter-spacing: 2px;
}
.icon3 {
  position: absolute;
  left: 0;
  top: 15%;
  transform: scale(2.5);
  color: rgb(18, 36, 19);
}

.img {
  width: 8rem;
  height: 3rem;
  object-fit: contain;
}
.in {
  display: flex;
  flex: 0 0 60%;
  max-width: 60%;
}
.search {
  width: 6%;
  height: 2.8rem;
  background-color: #191f1a;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search1 {
  transform: scale(1);
  color: white;
}
.input {
  width: 95%;
  height: 2.8rem;
  padding-left: 1rem;
  padding-right: 2.5rem;
  font-size: 1rem;
  outline: none;
  border: 2px solid black;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.icon {
  color: white;
  transform: scale(1.8);
}
.icon2 {
  background-color: white;
  transform: scale(1.2);
  padding: 5px;
  border-radius: 5px;
}
@media screen and (max-width: 750px) {
  .ppop {
    display: block;
  }
  .navi {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imgmob {
    width: 3rem;
    aspect-ratio: 3/1;
  }
  .head {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav1 {
    width: 99%;
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .img {
    width: 4rem;
    height: 2rem;
    object-fit: contain;
  }
  .btn22 {
    width: 90%;
    margin: 0 auto;
    height: 3rem;
    font-size: 14px;
    font-weight: bold;
    color: white;
    border-radius: 3px;
    background-color: #051104;
    border: 1px solid #ffffff;
  }
}
</style>
<style>
.el-input__inner:hover {
  border-color: #ffffff !important;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 2px solid #ffffff !important;
  box-sizing: border-box;
  color: #ffffff !important;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  outline: none !important;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-input__prefix {
  color: #ffffff !important;
  font-weight: bold;
}
</style>
