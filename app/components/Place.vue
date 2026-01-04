<script lang="ts" setup>
interface Props {
  placeName: string
  phone: string
  email: string
  fbName: string
  fbLink: string
}

defineProps<Props>();
</script>

<template>
  <div class="place">
    <div class="contact-info px-4 py-5">
      <p
        style=" font-weight: bold; font-size: 1.1em;"
        class="mb-2 primary"
      >
        {{ placeName }}
      </p><p
        class="font-secondary mb-2 flex-center-v"
      >
        <Icon
          name="line-md:phone-twotone"
          size="1.2em"
          class="mr-2"
        />
        Phone: {{ phone }}
      </p>
      <p
        class="font-secondary mb-2 flex-center-v"
      >
        <Icon
          name="line-md:email-alt-twotone"
          size="1.2em"
          class="mr-2"
        />
        Email: {{ email }}
      </p>
      <a
        :href="fbLink"
        target="_blank"
      >
        <Icon
          name="logos:facebook"
          class="mr-2"
        /> <span class="font-secondary">{{ fbName }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.place {
  width: 50%;
}
</style>
