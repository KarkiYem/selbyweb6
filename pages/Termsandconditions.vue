<template>
  <div class="terms-container">
    <section class="introduction">
      <h1>Terms of Service</h1>
      <p>
        These Terms of Service govern your use of the Selby platform. By
        accessing or using our platform, you agree to these terms.
      </p>
    </section>

    <section class="user-conduct">
      <h2>User Conduct</h2>
      <p>
        You agree to use the platform responsibly and lawfully. You are
        prohibited from:
      </p>
      <ul>
        <li>Posting illegal, harmful, or offensive content.</li>
        <li>Infringing on intellectual property rights.</li>
        <li>Engaging in fraudulent or deceptive activities.</li>
      </ul>
    </section>

    <section class="listing-selling">
      <h2>Listing and Selling</h2>
      <p>
        Sellers are responsible for accurately describing their products and
        ensuring compliance with applicable laws. Selby reserves the right to
        remove listings that violate our terms.
      </p>
    </section>

    <section class="limitation-liability">
      <h2>Limitation of Liability</h2>
      <p>
        Selby is not liable for any indirect, incidental, or consequential
        damages arising from your platform use.
      </p>
    </section>

    <section class="indemnification">
      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold Selby harmless from any claims arising
        from your use of the platform.
      </p>
    </section>

    <section class="termination">
      <h2>Termination</h2>
      <p>Selby may terminate your account at any time for any reason.</p>
    </section>

    <section class="governing-law">
      <h2>Governing Law</h2>
      <p>
        These Terms of Service shall be governed by the laws of the Guwahati
        High Court.
      </p>
    </section>

    <section class="contact-us">
      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at <a href="mailto:support@selby.in">support@selby.in</a>.
      </p>
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
.terms-container {
  font-family: "Arial", sans-serif;
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1,
h2 {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.2rem;
}

p,
ul {
  margin-bottom: 20px;
  line-height: 1.6;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
