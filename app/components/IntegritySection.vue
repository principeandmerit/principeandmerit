<template>
  <div class="px-4 py-5">
    <div
      id="integrity-section"
    >
      <div
        class="p-4"
      >
        <h1 class="primary">
          Aizza Angela Principe
        </h1>
        <h4>MD, FPOGS</h4>
        <p class="mt-3">
          <small>"Delivering AFFORDABLE yet QUALITY healthcare for every man and woman—powered by trusted diagnostics in Medical, Cardio, and OB-Gyne care. Because you deserve compassionate care with accuracy you can trust.”</small>
        </p>
      </div>
      <div class="image-holder">
        <div class="image-container">
          <img
            src="~assets/images/doc_aizza.jpg"
            alt="Doctor Aizza Angela Principe Photo"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
#integrity-section {
  display: flex;
  gap: 100px;
  background-color: white;
  border-radius: 8px;
  box-shadow:   0 1px 3px rgba(0, 0, 0, 0.12),
  0 8px 24px rgba(0, 0, 0, 0.18);

  p {
    font-style: italic;
  }

  .image-container {
    border-radius: 50%;
    overflow: hidden;
    width: 170px;
    height: 170px;
  }

  .image-holder {
    display: flex; justify-content: center; align-items: center; width: 370px;
  }

}

@media screen and (max-width: 1246px) {
  #integrity-section {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 25px;
    padding-bottom: 50px;

    .image-holder {
      width: 100%;
      padding-top: 50px;
    }
  }
}
</style>
