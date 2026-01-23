<template>
  <div class="layout">
    <!-- Main content -->
    <div class="layout-content">
      <NavBar />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style>
.layout {
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;

  .layout-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
