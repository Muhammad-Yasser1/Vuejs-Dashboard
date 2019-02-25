<template>
    <div
        class="tab-pane fade p-5"
        id="nav-Attributes"
        role="tabpanel"
        aria-labelledby="nav-Attributes-tab"
    >
        <div class="row mb-2">
            <label for="parent" class="col-md-2">
                <div>Parent</div>
                <small>Lorem ipsum dolor sit.</small>
            </label>
            <select class="custom-select col-md-10" id="parent">
                <option selected hidden disabled>Combo with autocomplete</option>
                <option value="1">one</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="row mb-2">
            <label for="Masterpage" class="col-md-2">
                <div>Masterpage</div>
                <small>Lorem ipsum dolor sit.</small>
            </label>
            <select class="custom-select col-md-10" id="Masterpage">
                <option selected hidden disabled>Combo with autocomplete</option>
                <option value="1">one</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="row mb-2 mt-3 mt-md-0">
            <label for="Order" class="col-2 pt-1">
                <div>Order</div>
            </label>
            <input type="number" class="form-control col-2" id="Order" placeholder="231">
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>