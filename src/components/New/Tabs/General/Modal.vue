<template>
    <div
        class="modal fade"
        id="add-components"
        tabindex="-1"
        role="dialog"
        aria-labelledby="add-componentsLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="add-componentsLabel">Add Components</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
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
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action"
                        >Dapibus ac facilisis in</a>
                        <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action"
                        >Porta ac consectetur ac</a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action"
                            tabindex="-1"
                            aria-disabled="true"
                        >Vestibulum at eros</a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
