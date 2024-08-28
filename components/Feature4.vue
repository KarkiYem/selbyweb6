<template>
  <div>
    <div class="flex">
      <img
        style="width: 100%; aspect-ratio: 4/1"
        src="img/Selby banner-04.png"
      />
    </div>
  </div>
</template>

<script>
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
      this.swiper = new Swiper(".swiper4", {
        slidesPerView: 5,
        loop: false,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        },
        on: {
          slideChange: this.handleSlideChange,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
    },
    /*     handleSlideChange() {
      if (this.swiper) {
        const elem = document.querySelectorAll(".ss");
        this.activeIndex =
          window.innerWidth > 768
            ? this.swiper.activeIndex + 1
            : this.swiper.activeIndex;
        elem.forEach((item, i) => {
          if (this.activeIndex == i) {
            item.style.backgroundColor = "#0062b0";
          } else {
            item.style.backgroundColor = "transparent";
          }
        });
      }
    }, */
  },
  mounted() {
    this.initSwiper();
    /*  this.handleSlideChange(); */
  },
};
</script>

<style scoped>
.swiper4 {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
}
p {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.price {
  font-size: 20px;
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
  min-width: 100%;
  margin-top: 1rem;
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
  bottom: 0;
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
  font-size: 12px;
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
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
</style>
<style>
.swiper-button-next,
.swiper-button-prev {
  color: rgb(104, 104, 104) !important;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px !important;
}
</style>
