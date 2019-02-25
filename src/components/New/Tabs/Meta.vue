<template>
    <div class="tab-pane fade p-5" id="nav-Meta" role="tabpanel" aria-labelledby="nav-Meta-tab">
        <div class="row">
            <div class="input-group mb-3 col-12">
                <div class="row col-12">
                    <select class="custom-select col-sm-4 col-md-2 col-12" id="meta-tags">
                        <option selected hidden disabled>Choose...</option>
                        <option value="KeyWords">KeyWords</option>
                        <option value="Description">Description</option>
                        <option value="Author">Author</option>
                    </select>
                    <div class="col-sm-7 px-0 px-sm-2 col-md-9 col-10">
                        <input type="text" class="form-control" placeholder="Meta Content...">
                    </div>
                    <div class="col-1 px-1 px-sm-2">
                        <button class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="input-group my-3 col-12">
                <div class="col-md-2">Keywords</div>
                <div class="col-9 col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eum minus, aperiam eaque qui debitis quo porro nam dignissimos quis.</p>
                </div>
                <div class="col-3 col-md-2 d-flex justify-content-end">
                    <span class="icons align-self-start">
                        <i class="far fa-edit"></i>
                    </span>
                    <span class="icons align-self-start">
                        <i class="far fa-trash-alt"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="input-group my-3 col-12">
                <label class="col-md-2" for="Description">Description</label>
                <div class="col-9 col-md-8">
                    <textarea class="form-control" id="Description" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto magni qui corrupti unde atque harum iure, quidem impedit minus?</textarea>
                </div>
                <div class="col-3 col-md-2 d-flex justify-content-end">
                    <span class="icons align-self-start">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="icons align-self-start">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.input-group {
    .custom-select {
        border-radius: 5px;
    }
    .btn {
        box-shadow: 0 2px 3px #ccc;
    }
    .icons {
        padding: 5px 10px;
        border-radius: 50%;
        transition: all 0.2s;
        margin: 0 3px;
        cursor: pointer;
        &:hover {
            box-shadow: 0 3px 4px #ddd;
        }
    }
}
</style>