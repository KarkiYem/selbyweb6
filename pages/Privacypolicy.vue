<template>
  <div class="privacy-container">
    <section class="introduction">
      <h1>Privacy Policy</h1>
      <p>
        Selby respects your privacy and is committed to protecting your personal
        information. This Privacy Policy outlines how we collect, use, disclose,
        and protect your information when you use our platform.
      </p>
    </section>

    <section class="information-collection">
      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, shipping address, payment information.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you use our
          platform, including browsing history, search queries, and
          interactions.
        </li>
        <li>
          <strong>Device Information:</strong> Information about your device,
          such as IP address, device type, and operating system.
        </li>
      </ul>
    </section>

    <section class="how-we-use">
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To process payments and prevent fraud.</li>
        <li>To communicate with you about your orders and account.</li>
        <li>To personalize your experience on our platform.</li>
        <li>To send you marketing communications (with your consent).</li>
        <li>To comply with legal obligations.</li>
      </ul>
    </section>

    <section class="information-sharing">
      <h2>Information Sharing</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>
          Third-party service providers who assist us in operating our business.
        </li>
        <li>Payment processors to process payments.</li>
        <li>Law enforcement or other authorities as required by law.</li>
      </ul>
    </section>

    <section class="data-security">
      <h2>Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal
        information from unauthorized access, disclosure, alteration, and
        destruction.
      </p>
    </section>

    <section class="your-rights">
      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, update, or delete your personal
        information. You can also object to or restrict the processing of your
        data.
      </p>
    </section>

    <section class="changes-policy">
      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on this page.
      </p>
    </section>

    <section class="contact-us">
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at <a href="mailto:support@selby.in">support@selby.in</a>.
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
.privacy-container {
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
