<script lang="ts" setup>
interface ServiceCardComponentProps {
  typeOfService: 'cardio' | 'ob' | 'pedia'
}

const props = defineProps<ServiceCardComponentProps>();

const serviceMap: Record<string, { icon: string, title: string }> = {
  cardio: {
    icon: 'streamline-kameleon-color:heart-watch',
    title: 'Cardiology',
  },
  ob: {
    icon: 'twemoji:pregnant-person',
    title: 'Obstetrics',
  },
  pedia: {
    icon: 'noto:person-feeding-baby',
    title: 'Pediatrics',
  },
};

const service = computed(() => serviceMap[props.typeOfService] || { icon: '', title: '' });
</script>

<template>
  <div
    class="service-card"
  >
    <div class="icon-display pt-2">
      <Icon
        :name="service.icon"
        size="5em"
      />
    </div>
    <div
      style="background-color: white; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;"
      class="px-5 pb-5 pt-2"
    >
      <div
        class="font-secondary text-center service-name mb-2"
        style="color: black;"
      >
        {{ service.title }}
      </div>
      <p
        style="color: black; text-align: justify;"
        class="font-secondary"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nam dolor corrupti reiciendis veritatis debitis dolores? Non ipsum iusto magnam deleniti sapiente! Dolorem veritatis rem, quisquam molestias eveniet autem distinctio.
      </p>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  border-radius: 8px;
  box-shadow:   0 1px 3px rgba(0, 0, 0, 0.12),
  0 8px 24px rgba(0, 0, 0, 0.18);

  .icon-display {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8em;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: white;
  }

  .service-name {
    font-size: 2em;
    font-weight: bold;
  }
}

@media screen and (max-width: 1198px) {
  .service-card {
    width: 100%;
  }
}
@media screen and (min-width: 1199px) {
  .service-card {
    width: 31%;
  }
}
</style>
