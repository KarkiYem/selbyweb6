<!-- <template>
  <div>
    <div>
      <div class="flex"></div>
      <div class="swiper1">
        <div class="swiper-wrapper flex1">
          <div
            class="swiper-slide stories"
            v-for="(i, j) in tableData"
            :key="j"
          >
            <div class="box">
              <img class="img" :src="i.imgs[0]" alt="stories" @click="go()" />
              <p class="pp">{{ i.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <el-dialog fullscreen="true" :visible.sync="seen1" @close="stopStory">
        <div class="pop">
          <div class="popup">
            <div class="stories-dialog">
              <transition name="fade" mode="out-in">
                <img
                  v-if="currentImage"
                  :src="currentImage"
                  :key="currentImage"
                  class="story-img"
                />
              </transition>
              <div class="controls">
                <button
                  class="prev-btn"
                  @click="prevImage"
                  :disabled="isFirstImage"
                >
                  Prev
                </button>
                <button
                  class="next-btn"
                  @click="nextImage"
                  :disabled="isLastImage"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template> -->

<!-- <template>
  <div>
    <div>
      <div class="flex"></div>
      <div class="swiper1">
        <div class="swiper-wrapper flex1">
          <div
            class="swiper-slide stories"
            v-for="(i, j) in tableData"
            :key="j"
          >
            <div class="box">
              <img class="img" :src="i.imgs[0]" alt="stories" @click="go(j)" />
              <p class="pp">{{ i.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <el-dialog fullscreen="true" :visible.sync="seen1" @close="stopStory">
        <div class="pop">
          <div class="popup">
            <div class="stories-dialog">
              <p v-if="tableData[activeStoryIndex]" class="story-name">
                {{ tableData[activeStoryIndex].name }}
              </p>
              <div class="progress-bar">
                <div class="progress" :style="{ width: progress + '%' }"></div>
              </div>
              <transition name="fade" mode="out-in" @before-enter="beforeEnter">
                <img
                  v-if="currentImage"
                  :src="currentImage"
                  :key="currentImage"
                  class="story-img"
                  @load="onImageLoad"
                />
              </transition>
              <div class="controls">
                <button
                  class="prev-btn"
                  @click="prevImage"
                  :disabled="isFirstImage"
                >
                  Prev
                </button>
                <button
                  class="next-btn"
                  @click="nextImage"
                  :disabled="isLastImage"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
 -->

<!-- <script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      tableData: [],
      seen1: false,
      currentIndex: 0,
      activeStoryIndex: 0,
      currentImage: "",
      storyInterval: null,
      progress: 0,
      isLoading: true,
    };
  },

  computed: {
    isLastImage() {
      return (
        this.activeStoryIndex === this.tableData.length - 1 &&
        this.currentIndex ===
          (this.tableData[this.activeStoryIndex]?.imgs.length - 1 || 0)
      );
    },
    isFirstImage() {
      return this.activeStoryIndex === 0 && this.currentIndex === 0;
    },
    maxIndex() {
      if (this.tableData.length > 0 && this.tableData[this.activeStoryIndex]) {
        return this.tableData[this.activeStoryIndex].imgs.length - 1;
      }
      return 0;
    },
  },

  methods: {
    startStory() {
      if (this.tableData.length > 0 && this.tableData[this.activeStoryIndex]) {
        this.currentImage =
          this.tableData[this.activeStoryIndex].imgs[this.currentIndex];
        this.isLoading = true;
        this.preloadNextImage();
        this.storyInterval = setInterval(() => {
          this.progress = ((this.currentIndex + 1) / (this.maxIndex + 1)) * 100;
          if (!this.isLastImage) {
            this.nextImage();
          } else {
            this.stopStory(); // Stop the interval when the last image is reached
          }
        }, 3000); // Change image every 3 seconds
      } else {
        console.error(
          "No data found in tableData or invalid activeStoryIndex."
        );
      }
    },
    go(index) {
      if (this.tableData[index]) {
        this.seen1 = true;
        this.activeStoryIndex = index;
        this.currentIndex = 0;
        this.progress = 0;
        this.isLoading = true;
        this.startStory();
      } else {
        console.error("Invalid story index:", index);
      }
    },
    nextImage() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      } else if (this.activeStoryIndex < this.tableData.length - 1) {
        this.activeStoryIndex++;
        this.currentIndex = 0;
      }
      if (this.tableData[this.activeStoryIndex]) {
        this.isLoading = true;
        this.currentImage =
          this.tableData[this.activeStoryIndex].imgs[this.currentIndex];
        this.preloadNextImage();
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else if (this.activeStoryIndex > 0) {
        this.activeStoryIndex--;
        this.currentIndex =
          this.tableData[this.activeStoryIndex]?.imgs.length - 1 || 0;
      }
      if (this.tableData[this.activeStoryIndex]) {
        this.isLoading = true;
        this.currentImage =
          this.tableData[this.activeStoryIndex].imgs[this.currentIndex];
        this.preloadNextImage();
      }
    },
    stopStory() {
      clearInterval(this.storyInterval);
      this.storyInterval = null;
      this.progress = 0;
    },
    preloadNextImage() {
      const nextIndex = this.currentIndex + 1;
      if (nextIndex <= this.maxIndex) {
        const nextImage = new Image();
        nextImage.src = this.tableData[this.activeStoryIndex].imgs[nextIndex];
      }
    },
    onImageLoad() {
      this.isLoading = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 300); 
    },
    initSwiper() {
      this.swiper = new Swiper(".swiper1", {
        slidesPerView: 5,
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 15,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    },
    async getData() {
      var self = this;
      self.path1 = path;
      self.tableData = await db.collection("stories").getFullList({
        sort: "-created",
      });

      if (!self.tableData.every((item) => Array.isArray(item.imgs))) {
        console.error(
          "Data structure is not as expected. 'imgs' should be an array."
        );
      }

      await db.collection("stories").subscribe("*", function (e) {
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
    },
  },
  mounted() {
    this.getData();
    this.initSwiper();
  },
  watch: {
    seen1(newValue) {
      if (!newValue) {
        this.stopStory();
      }
    },
  },
  beforeDestroy() {
    this.stopStory();
  },
};
</script>
 -->

<template>
  <div>
    <div>
      <div class="flex"></div>
      <div class="swiper1">
        <div class="swiper-wrapper flex1">
          <div
            class="swiper-slide stories"
            v-for="(i, j) in tableData"
            :key="j"
          >
            <div class="box">
              <img class="img" :src="i.imgs[0]" alt="stories" @click="go(j)" />
              <p class="pp">{{ i.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <el-dialog fullscreen="true" :visible.sync="seen1" @close="stopStory">
        <div class="pop">
          <div class="popup">
            <div class="stories-dialog">
              <p v-if="tableData[activeStoryIndex]" class="story-name">
                {{ tableData[activeStoryIndex].name }}
              </p>
              <div class="progress-bar">
                <div class="progress" :style="{ width: progress + '%' }"></div>
              </div>
              <transition
                name="slide"
                mode="out-in"
                @before-enter="beforeEnter"
              >
                <img
                  v-if="currentImage"
                  :src="currentImage"
                  :key="currentImage"
                  class="story-img"
                  @load="onImageLoad"
                />
              </transition>
              <div class="controls">
                <button
                  class="prev-btn"
                  @click="prevImage"
                  :disabled="isFirstImage"
                >
                  Prev
                </button>
                <button
                  class="next-btn"
                  @click="nextImage"
                  :disabled="isLastImage"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      tableData: [],
      seen1: false,
      currentIndex: 0,
      activeStoryIndex: 0,
      currentImage: "",
      storyInterval: null,
      progress: 0,
      isLoading: true,
    };
  },

  computed: {
    isLastImage() {
      return (
        this.activeStoryIndex === this.tableData.length - 1 &&
        this.currentIndex ===
          (this.tableData[this.activeStoryIndex]?.imgs.length - 1 || 0)
      );
    },
    isFirstImage() {
      return this.activeStoryIndex === 0 && this.currentIndex === 0;
    },
    maxIndex() {
      if (this.tableData.length > 0 && this.tableData[this.activeStoryIndex]) {
        return this.tableData[this.activeStoryIndex].imgs.length - 1;
      }
      return 0;
    },
  },

  methods: {
    startStory() {
      if (this.tableData.length > 0 && this.tableData[this.activeStoryIndex]) {
        this.currentImage =
          this.tableData[this.activeStoryIndex].imgs[this.currentIndex];
        this.isLoading = true;
        this.preloadNextImage();
        this.storyInterval = setInterval(() => {
          this.progress = ((this.currentIndex + 1) / (this.maxIndex + 1)) * 100;
          if (!this.isLastImage) {
            this.nextImage();
          } else {
            this.stopStory(); // Stop the interval when the last image is reached
          }
        }, 3000); // Change image every 3 seconds
      } else {
        console.error(
          "No data found in tableData or invalid activeStoryIndex."
        );
      }
    },
    go(index) {
      if (this.tableData[index]) {
        this.seen1 = true;
        this.activeStoryIndex = index;
        this.currentIndex = 0;
        this.progress = 0;
        this.isLoading = true;
        this.startStory();
      } else {
        console.error("Invalid story index:", index);
      }
    },
    nextImage() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      } else if (this.activeStoryIndex < this.tableData.length - 1) {
        this.activeStoryIndex++;
        this.currentIndex = 0;
      }
      if (this.tableData[this.activeStoryIndex]) {
        this.isLoading = true;
        this.currentImage =
          this.tableData[this.activeStoryIndex].imgs[this.currentIndex];
        this.preloadNextImage();
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else if (this.activeStoryIndex > 0) {
        this.activeStoryIndex--;
        this.currentIndex =
          this.tableData[this.activeStoryIndex]?.imgs.length - 1 || 0;
      }
      if (this.tableData[this.activeStoryIndex]) {
        this.isLoading = true;
        this.currentImage =
          this.tableData[this.activeStoryIndex].imgs[this.currentIndex];
        this.preloadNextImage();
      }
    },
    stopStory() {
      clearInterval(this.storyInterval);
      this.storyInterval = null;
      this.progress = 0;
    },
    preloadNextImage() {
      const nextIndex = this.currentIndex + 1;
      if (nextIndex <= this.maxIndex) {
        const nextImage = new Image();
        nextImage.src = this.tableData[this.activeStoryIndex].imgs[nextIndex];
      }
    },
    onImageLoad() {
      this.isLoading = false;
    },
    beforeEnter(el) {
      el.style.transform = "translateX(100%)";
      setTimeout(() => {
        el.style.transform = "translateX(0)";
      }, 300); // Adjust timing if needed
    },
    initSwiper() {
      this.swiper = new Swiper(".swiper1", {
        slidesPerView: 5,
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 15,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    },
    async getData() {
      var self = this;
      self.path1 = path;
      self.tableData = await db.collection("stories").getFullList({
        sort: "-created",
      });

      if (!self.tableData.every((item) => Array.isArray(item.imgs))) {
        console.error(
          "Data structure is not as expected. 'imgs' should be an array."
        );
      }

      await db.collection("stories").subscribe("*", function (e) {
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
    },
  },
  mounted() {
    this.getData();
    this.initSwiper();
  },
  watch: {
    seen1(newValue) {
      if (!newValue) {
        this.stopStory();
      }
    },
  },
  beforeDestroy() {
    this.stopStory();
  },
};
</script>
<style scoped>
.stories-dialog {
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  height: 90vh;
  position: relative;
  overflow: hidden;
}

.story-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
}

.controls {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.prev-btn,
.next-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev-btn:disabled,
.next-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<style scoped>
.stories-dialog {
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  height: 90vh;
  position: relative;
  overflow: hidden;
}

.story-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
}

.controls {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.01s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.prev-btn,
.next-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev-btn:disabled,
.next-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<style scoped>
.story-name {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #fff;
  z-index: 10;
  background: rgba(194, 194, 194, 0.1);
}

.progress-bar {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.3);
}

.progress {
  height: 100%;
  background-color: #fff;
  transition: width 0.5s ease;
}
.pop {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  width: 100%;
  min-height: 100%;
}
.swiper1 {
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
.box {
  min-width: 6rem;
  height: 16rem;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: rgba(194, 194, 194, 0.1);
}
/* .box::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(194, 194, 194, 0.1);
} */
.pp {
  position: absolute;
  bottom: -5px;
  left: 5px;
  font-weight: bold;
  font-size: 12px;
  color: white;
  /* background: rgba(245, 245, 245, 0.8); */
}
.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>

<!-- <template>
  <div>
    <div>
      <div class="flex"></div>
      <div class="swiper1">
        <div class="swiper-wrapper flex1">
          <div
            class="swiper-slide stories"
            v-for="(i, j) in tableData"
            :key="j"
          >
            <div class="box">
              <img class="img" :src="i.imgs[0]" alt="stories" @click="go()" />
            </div>
          </div>
        </div>
      </div>
      <el-dialog fullscreen="true" :visible.sync="seen1">
   
        <template>
          <div class="stories">
            <div v-for="(story, index) in tableData" :key="index" class="story">
              <transition name="fade" mode="out-in">
                <img
                  :src="story.imgs[currentIndex]"
                  :key="story.imgs[currentIndex]"
                  class="story-img"
                />
              </transition>
            </div>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
 -->
<!-- <script>
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
      seen1: false,
      currentIndex: 0,
    };
  },

  methods: {
    startStory() {
      setInterval(() => {
        this.currentIndex =
          (this.currentIndex + 1) % this.tableData[0].imgs.length;
      }, 3000); // Change image every 3 seconds
    },
    go() {
      this.seen1 = true;
      this.startStory();
    },
    initSwiper() {
      this.swiper = new Swiper(".swiper1", {
        slidesPerView: 5,
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 15,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    },
    async getData() {
      var self = this;
      self.path1 = path;
      self.tableData = await db.collection("stories").getFullList({
        sort: "-created",
      });

      await db.collection("stories").subscribe("*", function (e) {
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
    },
  },
  mounted() {
    this.getData();
    this.initSwiper();
  },
};
</script>
<style scoped>
.stories {
  display: flex;
  justify-content: space-around;
}

.story {
  width: 100px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000;
}

.story-img {
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
 -->

<!-- <style scoped>
.pop {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
}
.popup {
  width: 80%;
  min-height: 80%;
  border: 1px solid red;
}
.swiper1 {
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
.box {
  min-width: 6rem;
  height: 16rem;
  border-radius: 10px;
  overflow: hidden;
  /* border: 3px solid rgb(0, 255, 76); */
}
.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
 -->
