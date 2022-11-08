<template>
  <div>
    <h4>Додати товар</h4>
    <label>
      Назва товару:
      <input type="text" v-model="storage.title" />
    </label>
    <label>
      Одиниця виміру:
      <input type="text" v-model="storage.unit" />
    </label>
    <label>
      Кількість:
      <input type="text" v-model="storage.count" />
    </label>
    <button @click="createStorage">Додати товар</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storage: {
        title: "",
        unit: "",
        count: "",
      },
    };
  },
  methods: {
    createStorage() {
      this.storage.id = Date.now();
      this.$emit("create", this.storage);
      this.storage = {
        title: this.title,
        unit: this.unit,
        count: this.count,
      };
    },
  },
};
</script>

<style lang="less" scoped></style>