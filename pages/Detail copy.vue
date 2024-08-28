<template>
  <div>
    <div class="container main">
      <div class="left">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="CATEGORIES" name="1">
            <div style="height: 9rem; overflow-y: scroll">
              <div>
                <p class="title">All Categories</p>
              </div>
              <div>
                <p class="">All Categories</p>
                <p class="">Motor cycles(202)</p>
                <p class="">Scooters(20)</p>
                <p class="active">Spare Parts(22)</p>
                <p class="">Bicicles(302)</p>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="LOCATIONS" name="2">
            <div style="height: 4rem">
              <div>
                <p class="">Budget</p>
              </div>
              <div class="block">
                <el-slider v-model="value" range show-stops> </el-slider>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="BUDGET" name="3">
            <div>
              <div>
                <el-input
                  placeholder="Type something"
                  suffix-icon="el-icon-search"
                  v-model="input2"
                >
                </el-input>
              </div>
              <div style="height: 9rem; overflow-y: scroll">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox
                    style="width: 100%"
                    label="Honda Aviatar"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="Hero Maestro Edge 125 (502)"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="
Yamaha Fascino 125 (500)"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="Hero Honda Pleasure (495)"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="Hero Duet (469)"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="Suzuki Access (444)"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="Hero Pleasure (415)"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="TVS Scooty Pep Plus (374)"
                  ></el-checkbox>
                  <el-checkbox
                    style="width: 100%"
                    label="Hero Destini 125 (317)"
                  ></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="ALL MODEL" name="4">
            <div style="height: 9rem; overflow-y: scroll">
              <!--    <div>
                <p class="title">All Models</p>
              </div>
              <div>
                <p class="">All Categories</p>
                <p class="">Motor cycles(202)</p>
                <p class="">Scooters(20)</p>
                <p class="active">Spare Parts(22)</p>
                <p class="">Bicicles(302)</p>
              </div> -->
              <el-checkbox-group v-model="checkList">
                <el-checkbox
                  style="width: 100%"
                  label="Honda Aviatar"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Maestro Edge 125 (502)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="
Yamaha Fascino 125 (500)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Honda Pleasure (495)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Duet (469)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Suzuki Access (444)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Pleasure (415)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="TVS Scooty Pep Plus (374)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Destini 125 (317)"
                ></el-checkbox>
              </el-checkbox-group>
            </div>
          </el-collapse-item>
          <el-collapse-item title="KM DRIVEN" name="5">
            <div style="height: 9rem; overflow-y: scroll">
              <div>
                <p class="title">KM DRIVEN</p>
              </div>
              <div>
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="YEAR" name="6">
            <div style="height: 9rem; overflow-y: scroll">
              <div>
                <p class="">YEAR</p>
              </div>
              <div>
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="">0-100KM</p>
                  <p class="">300</p></span
                >
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="right">
        <div class="container flex1">
          <div
            class="stories"
            v-for="i in data"
            :key="i"
            @click="$router.push('/ProductDetails')"
          >
            <div class="box">
              <img
                class="img"
                src="https://media.zigcdn.com/media/model/2021/Jan/fortuner-3_360x240.jpg"
              />
              <div class="love">
                <mdicon name="heart-outline" />
                <!--          <mdicon name="heart" class="icon" /> -->
              </div>
              <div class="feature">
                <h6 class="ft">Feature</h6>
              </div>
            </div>
            <div class="text">
              <p class="title">Mac Book 14</p>
              <p class="price">Rs 35000</p>
              <span style="display: flex; gap: 20px">
                <p class="highlight">New</p>
                <p class="highlight">10/10</p>
              </span>
              <span style="display: flex; justify-content: space-between">
                <p class="desc">Gulbarh phase,15</p>
                <p class="desc">22 Sep</p>
              </span>
            </div>
          </div>
        </div>
        <div class="contaner" style="display: grid; place-items: center">
          <button class="btn" @click="loadmore">Load More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 5,
      activeNames: ["1", "2", "3", "4", "5", "6", "7"],
      checkList: [],
      input2: "",
      value: [4, 90],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    loadmore() {
      this.data += 5;
    },
  },
};
</script>

<style scoped>
.active {
  font-weight: bold;
}
.main {
  display: flex;
  justify-content: space-between;
}
.left {
  flex: 0 0 25%;
  max-width: 25%;
}
.right {
  flex: 0 0 70%;
  max-width: 70%;
}

p {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 14px;
  color: rgb(53, 53, 53);
  font-weight: bold;
}
.price {
  font-size: 16px;
  color: rgb(53, 53, 53);
  font-weight: bold;
}
.highlight {
  font-size: 14px;
  background-color: #dfdfdf;
  padding: 2px 5px;
  border-radius: 5px;
}
.desc {
  font-size: 12px;
}

.flex {
  display: flex;
  justify-content: space-between;
  margin-block: 2rem;
}
.flex1 {
  display: flex;
  gap: 1%;
  min-width: 100%;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.stories {
  flex: 0 0 32%;
  max-width: 32%;
  margin-bottom: 1rem;
}

.box {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
}
.love {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 3rem;
  height: 3rem;
  background-color: #ececec;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.feature {
  position: absolute;
  top: 15%;
  left: 10px;
  width: auto;
  height: 1.5rem;
  padding-inline: 5px;
  background-color: rgb(206, 175, 38);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  color: red;
}
.ft {
  color: white;
  font-size: 10px;
  font-weight: bold;
  margin: 0 !important;
}
.text {
  margin-top: 10px;
  width: 100%;
}
.img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.ptext {
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
.btn {
  border: 2px solid black;
  border-radius: 3px;
  font-weight: bold;
  color: black;
  outline: none;
  font-size: 14px;
  outline: none;
}
@media screen and (max-width: 750px) {
  .left {
    display: none;
  }
  .right {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .stories {
    flex: 0 0 49%;
    max-width: 49%;
    margin-bottom: 1rem;
  }
}
</style>
<style>
.el-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 12px;
  color: rgb(53, 53, 53);
}
.el-input__inner {
  outline: none !important;
}
.el-slider__bar {
  background-color: rgb(53, 53, 53);
}
.el-slider__button {
  border: 2px solid rgb(53, 53, 53);
}
</style>
