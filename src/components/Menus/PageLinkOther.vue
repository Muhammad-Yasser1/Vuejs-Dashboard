<template>
    <div class="PageLinkOther">
        <div class="row mb-4">
            <div class="input-group mb-3 col-12 px-0">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active px-4">
                        <input type="radio" name="options" id="Page-btn" autocomplete="off" checked> Page
                    </label>
                    <label class="btn btn-secondary px-4">
                        <input type="radio" name="options" id="Link-btn" autocomplete="off"> Link
                    </label>
                    <label class="btn btn-secondary px-4">
                        <input type="radio" name="options" id="Other-btn" autocomplete="off"> Other
                    </label>
                </div>
            </div>
            <div class="input-group mb-3 col-12 px-0">
                <div class="input-group-prepend">
                    <span
                        class="input-group-text bg-transparent border-right-0"
                        id="Components-search"
                    >
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <input
                    type="text"
                    class="form-control border-left-0"
                    placeholder="Search"
                    aria-label="Components-search"
                    aria-describedby="Components-search"
                >
            </div>
            <div class="list-group col-12 mt-3 px-0">
                <a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
                <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a
                    href="#"
                    class="list-group-item list-group-item-action"
                    tabindex="-1"
                    aria-disabled="true"
                >Vestibulum at eros</a>
            </div>
            <div class="col-12 d-flex my-5">
                <label for="url" class="col-4 px-0">
                    <h6 class="pt-2">Alternative Text</h6>
                </label>
                <input
                    type="text"
                    class="form-control col-8 px-0"
                    id="url"
                    placeholder="Lorem ipsum dolor sit."
                >
            </div>
            <div class="col-12 d-flex my-5">
                <button class="btn btn-primary">Add to menu</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.PageLinkOther {
}
</style>