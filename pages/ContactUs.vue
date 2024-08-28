<template>
  <div class="contact-us-container">
    <div class="contact-info">
      <h2>Contact Us</h2>
      <p>
        <strong>Address:</strong> 278 A Chachal Road , near UBI Bank , Six Mile,
        Guwahati ,Khanapara ,Kamrup Metro ,Assam -781022
      </p>
      <p><strong>Phone:</strong> +919707176758</p>
      <p><strong>Email:</strong> boronextgentechnology@gmail.com</p>
    </div>
    <!--     <div class="map-container">
      <iframe
        src="https://www.google.com/maps/search/278A+Chachal+Road+,+near+UBI+Bank+,+six+Mile,+++++++++Guwahati+,Khanapara+,Kamrup+Metro+,Assam+-781022/@26.1264251,91.8103686,16z?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.contact-us-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.contact-info {
  flex: 1;
  padding-right: 20px;
}

.map-container {
  flex: 1;
  height: 300px; /* You can adjust this as needed */
}

@media (max-width: 768px) {
  .contact-us-container {
    flex-direction: column;
  }

  .map-container {
    margin-top: 20px;
    height: 200px; /* Adjust height for mobile devices */
  }
}
</style>
