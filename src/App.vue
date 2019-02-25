<template>
    <div class="app">
        <Header></Header>
        <div class="d-flex">
            <SideBar></SideBar>
            <Modal></Modal>
            <transition name="fade" mode="out-in">
                <router-view class="w-75 main pb-5"/>
            </transition>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Modal from "./components/New/Tabs/General/Modal";
export default {
    components: {
        Header,
        SideBar,
        Modal
    }
};
</script>

<style lang='scss'>
.app {
    height: 100vh;
    overflow-x: hidden;
    .main {
        position: relative;
        z-index: 0;
        top: 120px;
        left: 280px;
        overflow-x: hidden;
        @media screen and (min-width: 1600px) {
            left: 350px;
        }
        @media screen and (max-width: 1150px) {
            left: 250px;
        }
        @media screen and (max-width: 1050px) {
            left: 20px;
            width: 95% !important;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
