<template>
    <div>
        <router-link :to="{name: 'New'}" class="btn btn-primary">New Page</router-link>
        <Table></Table>
    </div>
</template>

<script>
import Table from "../components/Pages/Table";
export default {
    components: {
        Table
    }
};
</script>

<style scoped>
</style>