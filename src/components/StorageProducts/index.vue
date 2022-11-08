<template>
    <div>
      <div>
        <h1>Фільтрація:</h1>
        <label>
          Назва
          <input type="text" v-model="searchTitle" />
        </label>
      </div>
      <div>
        <h1>Сортування</h1>
        <label>
          Сортувати за :
          <select v-model="sortField">
            <option value="title">Назва</option>
            <option value="unit">Одиниця виміру</option>
            <option value="count">Кількість</option>
          </select>
        </label>
      </div>
      <storage-product
        v-for="storage in filteredStorages"
        :storage="storage"
        :key="storage.id"
        @remove="$emit('remove', storage)"
      />
    </div>
  </template>
  
  <script>
  import ShopProduct from "@/components/ShopProduct";
  export default {
    components: { 
      ShopProduct,
    },
    data() {
      return {
        searchTitle: null,
        sortField: null,
      };
    },
    props: {
      shops: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      filteredShops() {
        let list = this.shops;
        if (this.searchTitle)
          list = this.shops.filter((product) =>
            product.title.startsWith(this.searchTitle)
          );
        if (this.sortField) {
          list.sort((product1, product2) => {
            let val1 = product1[this.sortField];
            let val2 = product2[this.sortField];
            if (typeof val1 === "string") {
              val1 = val1.toUpperCase();
              val2 = val2.toUpperCase();
            }
            if (val1 === val2) return 0;
            if (val1 > val2) return 1;
            return -1;
          });
        }
        return list;
      },
    },
  };
  </script>
  
  <style scoped></style>