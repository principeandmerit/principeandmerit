<script setup lang="ts">
const bookingModal = useTemplateRef('bookingModal');
const openBookingModal = () => {
  if (bookingModal.value) {
    bookingModal.value.open();
  }
}
</script>

<template>
  <div>
    <Cta
      class="mb-5"
      @book-appointment="openBookingModal"
    />
    <IntegritySection class="my-5" />
    <ServiceSection
      class="my-5"
      @book-appointment="openBookingModal"
    />
    <ContactSection />
    <BookVisitModal ref="bookingModal" />
  </div>
</template>
