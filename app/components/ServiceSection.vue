<script setup lang="ts">
const emits = defineEmits<{
  (e: 'book-appointment'): void
}>();
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
          OB-GYN Services
        </h2>
      </div>
      <div class="services px-4 pb-5 mb-5">
        <div class="card p-4">
          <div>
            <h5 class="primary mb-3">
              Consultations & Care
            </h5>
            <ul>
              <li>OB-Gyne Consultation</li>
              <li>Pre- & Post-Natal Check-up</li>
              <li>Prenatal Care</li>
              <li>Pregnancy Planning</li>
              <li>Childbirth (Normal / CS)</li>
              <li>Menopause Care</li>
              <li>Menstrual Health</li>
              <li>Family Planning</li>
              <li>Vaginal Infections</li>
              <li>Well-Woman Check-up</li>
            </ul>
          </div>
          <button
            class="bg-primary px-4 py-2 mt-4 button width-full"
            @click="emits('book-appointment')"
          >
            Book an Appointment
          </button>
        </div>

        <div class="card p-4">
          <div>
            <h5 class="primary mb-3">
              Procedures
            </h5>
            <ul>
              <li>Pap Smear (results in 3 days)</li>
              <li>D&C (Raspa)</li>
              <li>IUD Insertion</li>
              <li>Implant Removal</li>
              <li>General Pelvic Surgery</li>
              <li>Myoma / Ovarian Mass Management</li>
            </ul>
          </div>
          <button
            class="bg-primary px-4 py-2 mt-4 button width-full"
            @click="emits('book-appointment')"
          >
            Book an Appointment
          </button>
        </div>

        <div class="card p-4">
          <div>
            <h5 class="primary mb-3">
              OB-Focused Ultrasound
            </h5>
            <ul>
              <li>Pelvic Ultrasound</li>
              <li>TVS (Transvaginal Sonography)</li>
              <li>Transrectal Ultrasound</li>
              <li>Follicle Monitoring</li>
              <li>Biophysical Scoring with Biometry</li>
              <li>Fetal Doppler / Placental Doppler</li>
              <li>3D Ultrasound</li>
              <li>4D Ultrasound</li>
            </ul>
          </div>
          <button
            class="bg-primary px-4 py-2 mt-4 button width-full"
            @click="emits('book-appointment')"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>

    <div
      class="services mt-5"
      style="gap:10px"
    >
      <div
        class="card flex-by-2 p-4 card-bottom-right-decor"
        style="height: 340px;"
      >
        <div>
          <h5 class="primary mb-3">
            Cardiology Services
          </h5>
          <ul>
            <li>Cardiology Check-up</li>
            <li>CP Clearance</li>
            <li>Cardiac Diagnostics</li>
            <li>ECG Testing</li>
            <li>2D Echocardiogram</li>
            <li>2D Echo with Doppler Studies</li>
          </ul>
        </div>
        <Icon
          class="card-bottom-right-decor-content"
          size="2.7em"
          name="line-md:heart-filled"
        />
      </div>
      <div
        class="card flex-by-2 p-4 card-bottom-right-decor"
        style="height: 340px;"
      >
        <div>
          <h5 class="primary mb-3">
            Wellness
          </h5>
          <ul>
            <li>Wellness Program</li>
            <li>Weight Management</li>
            <li>Weight-Loss Management</li>
            <li>Anti-Aging Program</li>
            <li>Immunization</li>
            <li>Laboratory Results Interpretation</li>
            <li>Ultrasound Results Interpretation</li>
          </ul>
          <Icon
            class="card-bottom-right-decor-content"
            size="3em"
            name="material-symbols-light:digital-wellbeing"
          />
        </div>
      </div>
      <div
        class="card flex-by-2 p-4 card-bottom-right-decor"
        style="height: 340px;"
      >
        <div>
          <h5 class="primary mb-3">
            Laboratory Tests
          </h5>
          <ul>
            <li>Complete Blood Count (CBC)</li>
            <li>Liver Function Test (LFT)</li>
            <li>Renal Function Test (RFT)</li>
            <li>Thyroid Function Test (TFT)</li>
            <li>Electrolytes</li>
            <li>Blood Typing</li>
            <li>Blood Biochemistry Tests</li>
            <li>General Laboratory Services</li>
          </ul>
          <Icon
            class="card-bottom-right-decor-content"
            size="3em"
            name="raphael:lab"
          />
        </div>
      </div>
      <div
        class="card flex-by-2 p-4 card-bottom-right-decor"
        style="height: 340px;"
      >
        <div>
          <h5 class="primary mb-3">
            Ultrasound & Imaging Services
          </h5>
          <ul>
            <li>General Ultrasound</li>
            <li>Whole Abdominal UTZ</li>
            <li>Breast Ultrasound</li>
            <li>Prostate Ultrasound</li>
            <li>KUB (Kidneys, Ureters, Bladder)</li>
            <li>Scrotal / Inguinal Ultrasound</li>
          </ul>
          <Icon
            class="card-bottom-right-decor-content"
            size="2.7em"
            name="line-md:computer-filled"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
}

.services-container {
  background-image: url('../assets/images/online-services.jpg');
  background-position: center;
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
