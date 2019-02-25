<template>
    <table class="table table-striped table-bordered mt-3">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="page in pages" :key="page.id">
                <td>{{page.Title}}</td>
                <td>{{page.Author}}</td>
                <td>{{page.Date}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    computed: {
        pages() {
            return this.$store.state.pages;
        }
    }
};
</script>

<style scoped>
</style>