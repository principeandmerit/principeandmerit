<script setup lang="ts">
const router = useRouter();
const serviceList = services();
// const a = getServicesMenu();
</script>

<template>
  <div
    id="ob-service-section"
    class="px-4 py-5"
  >
    <div class="services-container mb-5">
      <div
        class="py-2 mb-5"
        style="border-top-left-radius: 8px; border-top-right-radius: 8px; background-color: white;"
      >
        <h2 class="text-center">
          {{ serviceList.ob.name }}
        </h2>
      </div>
      <div class="services px-4 pb-5 mb-5">
        <div
          v-for="obServices in serviceList.ob.sub"
          :key="obServices.name"
          class="card p-4"
        >
          <div>
            <h5 class="primary mb-3">
              {{ obServices.name }}
            </h5>
            <ul>
              <li
                v-for="item in obServices.items"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <button
            class="bg-primary px-4 py-2 mt-4 button width-full"
            @click="router.push('book-appointment')"
          >
            Book an Appointment
          </button>
        </div>

        <div
          class="card-fw px-4 py-5"
          style="text-align: center;"
        >
          <div>
            <h4 class="primary mb-3">
              OB Packages
            </h4>
            <div>Normal Spontaneous Delivery with local Anesthesia -35k</div>
            <div>Normal Spontaneous Delivery with IV Sedation -40k</div>
          </div>
          <hr
            class="my-5"
            style="border: 1px solid #d1d1d1;"
          >
          <div>
            <h4 class="primary">
              CS Rate for uncomplicated delivery
            </h4>
            <small
              class="font-secondary"
              style="font-style: italic;"
            >
              *Depends on Hospital of choice
            </small>
            <div class="mt-3">
              FEU-NRMF MEDICAL CENTER - 120-130K
            </div>
            <div>Commonwealth Medical Hospital - 110k-115k</div>
            <div>North Caloocan Doctor and Hospital - 68k-75k</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="services mt-5"
      style="gap:10px"
    >
      <div
        v-for="otherService in serviceList.others"
        :key="otherService.name"
        class="card flex-by-2 p-4 card-bottom-right-decor"
        style="height: 340px;"
      >
        <div>
          <h5 class="primary mb-3">
            {{ otherService.name }}
          </h5>
          <ul>
            <li
              v-for="item in otherService.items"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <Icon
          class="card-bottom-right-decor-content"
          :size="otherService.iconSize"
          :name="otherService.icon"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-fw {
  background-color: white;
  width: 100%;
  border-radius: 8px;
  box-shadow:   0 1px 3px rgba(0, 0, 0, 0.12),
  0 8px 24px rgba(0, 0, 0, 0.18);
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
}

.services-container {
  background-image: url('../assets/images/online-services.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  box-shadow:   0 1px 3px rgba(0, 0, 0, 0.12),
  0 8px 24px rgba(0, 0, 0, 0.18);
}

.card {
  border-radius: 8px;
  box-shadow:   0 1px 3px rgba(0, 0, 0, 0.12),
  0 8px 24px rgba(0, 0, 0, 0.18);
  background-color: white;
  min-width: 330px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &.card-bottom-right-decor {
    .card-bottom-right-decor-content {
      position: absolute;
      bottom: 5px;
      right: 10px;
      color: white;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: #1565C0;
      bottom: -180px;
      right: -150px;
      height: 260px;
      width: 260px;
      transform: rotate(54deg);
    }
  }
}

@media screen and (max-width: 1425px) {
  .flex-by-2 {
    flex-basis: 33%;
  }
}
</style>
