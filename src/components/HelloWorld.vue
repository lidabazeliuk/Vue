<template>
  <div>
    <storage-form @create="createStorage" />
    <storage-list :Storages="Storages" @remove="removeStorage" />
  </div>
</template>

<script>
import StorageForm from "@/components/StorageForm";
import StorageList from "@/components/StorageList";
export default {
  name: "HomePage",
  components: {
    StorageForm,
    StorageList,
  },
  data() {
    return {
      Storages: [
        {
          id: 1,
          title: "Mist",
          unit: "ml",
          count: "1-1000000",
        },
        {
          id: 2,
          title: "Potatoes",
          unit: "kg",
          count: "1-1000000",
        },
      ],
    };
  },
  methods: {
    createStorage(Storage) {
      this.Storages.push(Storage);
    },
    removeStorage(Storage) {
      this.Storages = this.Storages.filter((s) => s.id !== Storage.id);
    },
  },
};
</script>