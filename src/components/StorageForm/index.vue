<template>
  <div>
    <div class="item">
      <div><strong>Назва складу</strong> : {{ storage.title }}</div>
      <div><strong>Одиниця виміру товару</strong> : {{ storage.unit }}</div>
      <div>
        <strong>Кількість товару</strong> : {{ storage.count }}
      </div>
    </div>
    <button @click="$emit('remove', storage)">Видалити</button>
  </div>
</template>

<script>
export default {
  props: {
    storage: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.item {
  margin: 10px;
}
</style>