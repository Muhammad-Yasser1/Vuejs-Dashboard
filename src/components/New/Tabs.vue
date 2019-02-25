<template>
    <div>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
                class="nav-item nav-link active"
                id="nav-General-tab"
                data-toggle="tab"
                href="#nav-General"
                role="tab"
                aria-controls="nav-General"
                aria-selected="true"
            >General</a>
            <a
                class="nav-item nav-link"
                id="nav-Meta-tab"
                data-toggle="tab"
                href="#nav-Meta"
                role="tab"
                aria-controls="nav-Meta"
                aria-selected="false"
            >Meta</a>
            <a
                class="nav-item nav-link"
                id="nav-Attributes-tab"
                data-toggle="tab"
                href="#nav-Attributes"
                role="tab"
                aria-controls="nav-Attributes"
                aria-selected="false"
            >Attributes</a>
            <a
                class="nav-item nav-link"
                id="nav-Image-tab"
                data-toggle="tab"
                href="#nav-Image"
                role="tab"
                aria-controls="nav-Image"
                aria-selected="false"
            >Image</a>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <general></general>
            <MetaComp></MetaComp>
            <Attributes></Attributes>
            <ImageComp></ImageComp>
        </div>
    </div>
</template>

<script>
import General from "./Tabs/General";
import Meta from "./Tabs/Meta";
import Attributes from "./Tabs/Attributes";
import Image from "./Tabs/Image";

export default {
    components: {
        General,
        MetaComp: Meta,
        Attributes,
        ImageComp: Image
    }
};
</script>

<style lang='scss' scoped>
.tab-content {
    border: 1px solid #dee2e6;
    position: relative;
    z-index: -1;
    top: -2px;
}
</style>