<script lang="ts" setup>
const dialogRef = useTemplateRef<HTMLDialogElement>('dialog');

const open = () => {
  dialogRef.value?.showModal();
};
const close = () => {
  dialogRef.value?.close();
};

defineExpose({
  open,
  close,
});
</script>

<template>
  <dialog
    id="booking-dialog"
    ref="dialog"
  >
    <div id="dialog-inner">
      <div
        id="dialog-close-btn"
      >
        <Icon
          name="line-md:menu-to-close-alt-transition"
          size="2em"
          style="color: #D4AF37; transform: rotate(45deg); cursor: pointer;"
          @click="close"
        />
      </div>
      <div
        id="dialog-title"
        class="px-4 py-2"
      >
        <h1 class="primary">
          Book an Appointment
        </h1>
        <!-- <div
          id="booking-form"
          class="mt-4"
        >
          <div id="date-line">
            <div>
              <label>
                <small>Date</small>
              </label>
              <DatePicker />
            </div>
            <div>
              <TimePicker />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
#booking-dialog {
  width: 90%;
  height: 90%;
  padding: 0px;

  #dialog-inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    #dialog-close-btn {
      position: absolute;
      top: -12.5rem;
      right: -7.5rem;
      width: 15rem;
      height: 15rem;
      background-color: black;
      transform: rotate(45deg);
      display: flex;
      align-items: end;
      justify-content: end;
      padding-bottom: 0.5rem;
      padding-right: 2.75rem;
    }
  }
}

#booking-form {

  #date-line {
    display: flex;
  }
}
</style>
