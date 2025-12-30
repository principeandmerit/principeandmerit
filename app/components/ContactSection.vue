<template>
  <div class="contact-section">
    <div class="contact-info px-4 py-5">
      <h2 class="primary mb-4">
        Contact Us
      </h2>
      <p
        style="color: white; text-align: justify; font-weight: bold; font-size: 1.1em;"
        class="mb-2"
      >
        Prestige Birth and Beyond Medical Clinic and Birthing Home
      </p>
      <p
        style="color: white; text-align: justify;"
        class="font-secondary mb-2 flex-center-v"
      >
        <Icon
          name="line-md:home-twotone"
          size="1.2em"
          class="mr-2"
        />
        Dc2 Building Culiat Tandang Sora, Quezon City, Philippines
      </p>
      <p
        style="color: white; text-align: justify;"
        class="font-secondary mb-2 flex-center-v"
      >
        <Icon
          name="line-md:phone-twotone"
          size="1.2em"
          class="mr-2"
        />
        Phone: 0991 790 2314
      </p>
      <p
        style="color: white; text-align: justify;"
        class="font-secondary mb-2 flex-center-v"
      >
        <Icon
          name="line-md:email-alt-twotone"
          size="1.2em"
          class="mr-2"
        />
        Email: mail@mail.com
      </p>
    </div>
    <div class="contact-map">
      <ClientOnly>
        <iframe
          width="100%"
          height="400"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Prestige+Birth+and+Beyond+Medical+Clinic+and+Birthing+Home&output=embed"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-section {
  display: flex;

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    background-color: black;
  }

  .contact-map {
    width: 50%;
  }
}

@media screen and (max-width: 1199px) {
  .contact-section {
    flex-direction: column;

    .contact-info,
    .contact-map {
      width: 100%;
    }
  }
}
</style>
