<template>
  <div class="hidd">
    <div class="flex">
      <span><strong>Categories</strong>&nbsp;&nbsp;</span>
      <!--  <span style="text-decoration: underline">see more</span> -->
    </div>
    <div class="swiper22">
      <div class="swiper-wrapper flex1">
        <div
          class="swiper-slide stories"
          v-for="(i, j) in tableData"
          :key="j"
          @click="goto(i.id)"
        >
          <div class="box">
            <img class="img" :src="`${path1}/api/files/cat/${i.id}/${i.img}`" />
          </div>
          <p class="ptext">{{ i.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      tableData: [],
      carouselItems: 3,
      flag: false,
      currentSlide: 0,
      activeIndex: 0,
      width: 370,
    };
  },

  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper22", {
        slidesPerView: 4,
        loop: false,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: this.handleSlideChange,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
    },
    goto(e) {
      this.$router.push({ name: "Details-id", params: { id: e } });
    },

    async getData() {
      var self = this;
      let op = [];
      self.path1 = path;
      self.tableData = await db.collection("cat").getFullList({
        sort: "-created",
      });
      self.tableData = self.tableData.sort((a, b) => a.position - b.position);

      await db.collection("cat").subscribe("*", function (e) {
        self.reflx(e);
      });
    },
    reflx(e) {
      var self = this;
      let at = self.tableData;
      self.tableData = [];
      let index = at.findIndex((a) => a.id == e.record.id);
      self.keys++;
      if (index != -1 && e.action == "update") {
        at[index] = e.record;
      } else {
        if (e.action == "create") {
          at.unshift(e.record);
        }
      }
      self.tableData = at;
      self.tableData = self.tableData.sort((a, b) => a.position - b.position);
    },
  },
  mounted() {
    if (window.screen.availWidth <= 750) {
      this.getData();
    }
    this.initSwiper();
  },
};
</script>

<style scoped>
.hidd {
  display: none;
}
.swiper2 {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.flex1 {
  display: flex;
  min-width: 100%;
  margin-top: 1rem;
}
.stories {
  flex: 0 0 32%;
  max-width: 32%;
  height: fit-content;
}
.box {
  width: 100%;
  overflow: hidden;
}
.img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.ptext {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
@media screen and (max-width: 750px) {
  .hidd {
    display: block;
  }
  .ptext {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
