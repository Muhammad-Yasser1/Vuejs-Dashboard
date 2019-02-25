<template>
    <div
        class="tab-pane fade show active p-5"
        id="nav-General"
        role="tabpanel"
        aria-labelledby="nav-General-tab"
    >
        <div class="row mb-2">
            <label for="Title" class="col-sm-2">
                <div>Page Title</div>
                <small>Lorem ipsum dolor sit.</small>
            </label>
            <input type="text" class="form-control col-10" id="Title" placeholder>
        </div>
        <div class="row mb-4">
            <label for="url" class="col-sm-2">
                <a>/url/page</a>
            </label>
            <input
                type="text"
                class="form-control col-8"
                id="url"
                placeholder="/url/page"
                v-if="editMode"
            >
            <div class="col-2 px-0 d-flex justify-content-end">
                <button
                    class="btn btn-primary"
                    @click="editMode = !editMode"
                >{{editMode?'Save':'Change'}}</button>
            </div>
        </div>
        <div class="row mb-4">
            <label for="anounce" class="col-sm-2">
                <div>Anounce</div>
                <small>Lorem ipsum dolor sit.</small>
            </label>
            <input type="text" class="form-control col-10" id="anounce" placeholder>
        </div>
        <div class="row mb-4">
            <label for="components" class="col-2">
                <div>Components:</div>
            </label>
            <div class="col-10 d-flex justify-content-center" id="components">
                <a href="#add-components" data-toggle="modal">+ add</a>
            </div>
        </div>
        <div class="row">
            <label for="main-content" class="col-sm-2">
                <div>Main Content</div>
            </label>
            <div
                type="text"
                class="integerated-editor col-10"
                id="main-content"
            >The Integerated Editor Goes Here</div>
        </div>
        <div class="row">
            <button class="ml-auto mr-5 btn-lg my-5 btn btn-primary">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editMode: false
        };
    }
};
</script>

<style lang='scss' scoped>
.integerated-editor {
    height: 400px;
    background: #ecdddd;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>