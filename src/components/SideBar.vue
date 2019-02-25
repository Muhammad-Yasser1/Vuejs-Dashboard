<template>
    <aside>
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link class="nav-link" active-class="class" :to="{name: 'Pages'}">Pages</router-link>
            </li>
            <li class="nav-item pl-5">
                <router-link class="nav-link" :to="{name: 'New'}">New</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'Menus'}">Menus</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
aside {
    padding: 10% 7% 5% 2%;
    background: #6c757d;
    box-shadow: 2px 0 3px #777;
    height: 100vh;
    position: fixed;
    z-index: 2;
    display: none !important;
    @media (min-width: 1050px) {
        display: block !important;
    }
    .nav-item {
        .nav-link {
            color: white;
            transition: all 0.3s;
            position: relative;
            left: 0;
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 25px;
            font-weight: 700;
            &:hover {
                left: 20px;
            }
        }
    }
}
</style>