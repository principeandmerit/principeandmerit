<script lang="ts" setup>
interface Props {
  mapSrc: string
  width?: string
  height?: number
}

defineProps<Props>();
</script>

<template>
  <ClientOnly>
    <iframe
      :width="width ?? `100%`"
      :height="height ?? 400"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="mapSrc"
    />
  </ClientOnly>
</template>
