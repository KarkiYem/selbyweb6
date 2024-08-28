<template>
  <div>
    <div class="container-fluid op">
      <div class="container ott">
        <div class="fle">
          <div class="col-2">
            <p class="htet">POPULAR LOCATIONS</p>
            <p class="ptet1">Guwahati</p>
            <p class="ptet1">Jorhat</p>
            <p class="ptet1">Shillong</p>
            <p class="ptet1">Itanagar</p>
          </div>
          <div class="col-2">
            <p class="htet">TRENDING LOCATIONS</p>
            <p class="ptet1">Dibrugarh</p>
            <p class="ptet1">Dimapur</p>
            <p class="ptet1">Naharlugun</p>
            <p class="ptet1">Tura</p>
          </div>
          <div class="col-2">
            <p class="htet" @click="$router.push('/AboutUs')">ABOUT US</p>
            <p class="ptet1" @click="$router.push('/ContactUs')">Contact Us</p>
          </div>
          <div class="col-2">
            <p class="htet">SELBY</p>
            <p class="ptet1" @click="$router.push('/Privacypolicy')">
              Legal & Privacy Policy
            </p>
            <p class="ptet1" @click="$router.push('/Termsandconditions')">
              Terms of Service
            </p>
          </div>
          <div class="col-2">
            <p class="htet">FOLLOW US</p>
            <div>
              <a
                href="https://www.instagram.com/selbyind?utm_source=qr&igsh=MTZ0Mnp0czluMjkzYw=="
                target="_blank"
                ><mdicon name="instagram"
              /></a>
              <a
                href="https://www.facebook.com/share/K5Ke9gQREs3ewbc7/?mibextid=qi2Omg"
                target="_blank"
              >
                <mdicon name="facebook"
              /></a>
              <!--    <mdicon name="twitter" />
              <mdicon name="play-circle-outline" /> -->
            </div>
            <div style="margin-top: 2rem">
              <img class="img2" src="img/playstore.webp" />
              <img class="img2" src="img/appstore.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid op2">
      <div class="container oo">
        <img class="img" src="img/Selby (1)/selby_logo[1] 1.png" />
        <!--   <img
          class="img"
          src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
        /> -->
        <img
          class="img"
          src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
        />
        <img
          class="img"
          src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
        />
        <img
          class="img"
          src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
        />
        <img
          class="img"
          src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
        />
      </div>
    </div>
    <div class="container-fluid op2">
      <div class="container op3">
        <p class="ptet">Help - Sitemap</p>
        <p class="ptet">
          All rights reserved ©{{ year }} Boro NextGen Technology Private
          Limited
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.ott {
  display: flex;
  width: 100%;
}
.fle {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.col-2 {
  flex: 0 0 20%;
  max-width: 20%;
}
p {
  margin: 0;
  padding: 0;
}
.htet {
  font-size: 14px;
  font-weight: bold;
}
.ptet1 {
  font-size: 14px;
}
.op {
  min-height: 8rem;
  margin-top: 3rem;
  padding-block: 1rem;
  background-color: #cfcfcf;
}
.op2 {
  display: flex;
  justify-content: center;
  height: 5rem;
  align-items: center;
  background-color: #0400fd;
}
.op3 {
  display: flex;
  justify-content: space-between;
  color: white;
  height: 1rem;
  align-items: center;
  background-color: #0400fd;
}
.oo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img {
  height: 3rem;
  width: 8rem;
  object-fit: contain;
}
.ptet {
  font-size: 10px;
}
@media screen and (max-width: 750px) {
  .col-2 {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
  .img {
    height: 2rem;
    width: 3rem;
    object-fit: contain;
  }
  .op {
    min-height: 4rem;
    margin-top: 3rem;
    padding-block: 1rem;
    background-color: #cfcfcf;
  }
  .op2 {
    display: flex;
    justify-content: center;
    height: 4rem;
    align-items: center;
    background-color: #0400fd;
  }
}
</style>
