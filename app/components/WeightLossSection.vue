<script lang="ts" setup>
const { width } = useWindowSize();

const itemsToShow = computed(() => {
  if (width.value < 700) return 1;
  if (width.value < 1260) return 3.5;
  if (width.value <= 1360) return 4.1;
  if (width.value <= 1490) return 4.5;
  if (width.value <= 1520) return 5.2;
  return 6;
});
</script>

<template>
  <div class="px-4 py-5">
    <div
      class="py-5"
      style="background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),0 8px 24px rgba(0, 0, 0, 0.18);"
    >
      <h2 class="text-center primary mb-5 mt-3">
        Weight Loss Program
      </h2>
      <p
        class="text-center"
        style="font-style: italic;"
      >
        Enjoy a guaranteed weight loss <br> with our expert guidance and support.
      </p>
      <clientOnly>
        <Carousel
          :autoplay="2500"
          :gap="10"
          :wrap-around="true"
          :items-to-show="itemsToShow"
        >
          <Slide
            v-for="slide in 12"
            :key="slide"
          >
            <div :style="['width: 300px; height: 700px;', `background-image: url(/images/testimonial-wl-${slide}.jpeg); background-position: center; background-size: contain; background-repeat: no-repeat`]" />
          </Slide>
        </Carousel>
      </clientOnly>
    </div>
  </div>
</template>

<style>

</style>
