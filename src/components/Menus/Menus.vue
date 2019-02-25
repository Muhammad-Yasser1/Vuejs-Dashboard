<template>
    <div>
        <div class="row mb-4 pr-5 pl-4">
            <label for="url" class="col-md-2 px-0">
                <h6 class="pt-1">Menu Name</h6>
            </label>
            <input
                type="text"
                class="form-control col-md-8 col-10"
                id="url"
                placeholder="Write menu name..."
            >
            <div class="col-md-2 col-2 px-0 d-flex justify-content-end">
                <button class="btn btn-primary">Add</button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-wrap pr-2">
            <div class="accordion col-md-7" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >Menu One</button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <button
                                        class="btn btn-link"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOneContent"
                                        aria-expanded="true"
                                        aria-controls="collapseOneContent"
                                    >Cras justo odio</button>
                                    
                                    <span>
                                        <i class="fas fa-angle-down"></i>
                                    </span>
                                </li>
                                <div class="collapse show" id="collapseOneContent">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            Cras justo odio
                                            <span>
                                                <i class="fas fa-angle-down"></i>
                                            </span>
                                        </li>
                                        <li class="list-group-item">
                                            Dapibus ac facilisis in
                                            <span>
                                                <i class="fas fa-angle-down"></i>
                                            </span>
                                        </li>
                                        <li class="list-group-item">
                                            Morbi leo risus
                                            <span>
                                                <i class="fas fa-angle-down"></i>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <li class="list-group-item">
                                    Dapibus ac facilisis in
                                    <span>
                                        <i class="fas fa-angle-down"></i>
                                    </span>
                                </li>
                                <li class="list-group-item">
                                    Morbi leo risus
                                    <span>
                                        <i class="fas fa-angle-down"></i>
                                    </span>
                                </li>
                            </ul>
                            <div class="Menu-form">
                                <div class="switch">
                                    <input type="checkbox" id="switch" checked>
                                    <span class="slider round"></span>
                                </div>
                                <div class="isActive">
                                    <label for="switch">Is Active</label>
                                </div>
                                <div class="mt-4">
                                    <label class="row">
                                        <div class="d-inline-block px-3">Name prefix</div>
                                        <input type="text" id="prefix" class="form-control col-2">
                                        <div class="ml-auto mr-3">
                                            <a href="#">Delete Menu</a>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >Menu Two</button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
                        <div class="card-body">Two</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >Menu Three</button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree">
                        <div class="card-body">Three</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >Menu Four</button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour">
                        <div class="card-body">Four</div>
                    </div>
                </div>
            </div>
            <PageLinkOther class="col-md-5 my-5 my-md-0"></PageLinkOther>
        </div>
    </div>
</template>

<script>
import PageLinkOther from "./PageLinkOther";
export default {
    components: {
        PageLinkOther
    }
};
</script>

<style lang='scss' scoped>
.accordion {
    .card {
        .card-header {
            padding: 5px;
            button {
                font-weight: 700;
            }
        }
        .card-body {
            .list-group {
                width: 300px;
                .list-group {
                    margin-left: 30px;
                    padding: 20px 0;
                }
                .list-group-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 1px solid #777;
                    padding: 10px 15px;
                    .btn {
                        padding: 0;
                    }
                }
            }
        }
        .Menu-form {
            border-top: 1px solid #bbb;
            margin-top: 25px;
            padding-top: 15px;
            .isActive {
                font-size: 18px;
                font-weight: 700;
                display: inline-flex;
                position: relative;
                top: 5px;
                left: 10px;
            }
        }
    }
}
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #2196f3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
