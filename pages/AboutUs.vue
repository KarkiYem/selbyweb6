<template>
  <div class="about-container">
    <section class="hero">
      <div class="hero-content"></div>
    </section>

    <section class="mission">
      <div class="content">
        <h2>About Selby</h2>
        <p>
          Selby (a brand of Boro NextGen Technology Pvt Ltd) is your one-stop
          online destination for buying and selling a wide range of products. We
          are committed to creating a seamless and user-friendly platform that
          connects buyers and sellers effortlessly.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals and businesses to buy and sell
          products conveniently and securely. We strive to create a trusted
          platform where buyers can find great deals and sellers can reach a
          wider audience.
        </p>
      </div>
    </section>

    <section class="how-it-works">
      <div class="content">
        <h2>How Selby Works</h2>
        <ul>
          <li>
            <strong>Easy Listing:</strong> Sellers can list their products
            quickly and easily with detailed descriptions and high-quality
            images.
          </li>
          <li>
            <strong>Safe Transactions:</strong> We prioritize the security of
            our users. Our platform offers various payment options and buyer
            protection measures.
          </li>
          <li>
            <strong>Wide Reach:</strong> With Selby, you can reach a vast
            audience of potential buyers across different locations.
          </li>
          <li>
            <strong>Excellent Customer Support:</strong> Our dedicated customer
            support team is always ready to assist you with any questions or
            concerns.
          </li>
        </ul>
      </div>
    </section>

    <section class="values">
      <div class="content">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Customer Focus:</strong> We put our customers first and
            strive to exceed their expectations.
          </li>
          <li>
            <strong>Trust and Transparency:</strong> We build trust through
            honesty and transparency in our operations.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously seek new ways to
            improve our platform and user experience.
          </li>
          <li>
            <strong>Community:</strong> We foster a strong community of buyers
            and sellers.
          </li>
        </ul>
      </div>
    </section>

    <section class="join-community">
      <div class="content">
        <h2>Join the Selby Community</h2>
        <p>
          Whether you're looking for a bargain or trying to sell your unwanted
          items, Selby is the place for you. Join our community today and start
          buying or selling with ease.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.about-container {
  font-family: "Arial", sans-serif;
}

.hero {
  background: url("/img/Selby banner-02.png") center center/cover no-repeat;
  padding: 100px 20px;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.mission,
.how-it-works,
.values,
.join-community {
  padding: 20px 20px;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
}

h1,
h2 {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.2rem;
}

p,
li {
  margin-bottom: 20px;
  line-height: 1.6;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .hero {
    padding: 50px 20px;
  }

  .hero-content h1 {
    font-size: 28px;
  }
}
</style>
