<template>
    <nav class="navbar fixed-top navbar-dark">
        <div id="navbarSupportedContent">
            <ul class="navbar-nav flex-row">
                <li class="nav-item px-3">
                    <router-link class="nav-link" active-class="class" :to="{name: 'Pages'}">Pages</router-link>
                </li>
                <li class="nav-item px-3">
                    <router-link class="nav-link" :to="{name: 'New'}">New</router-link>
                </li>
                <li class="nav-item px-3">
                    <router-link class="nav-link" :to="{name: 'Menus'}">Menus</router-link>
                </li>
            </ul>
        </div>

        <a class="navbar-brand ml-auto">
            <img
                src="https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png"
                width="40"
                height="40"
                class="d-inline-block align-top mr-2"
                alt
            >
            <div class="btn-group">
                <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >John Smith</a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        </a>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.navbar {
    background: #6c757d;
    box-shadow: 0 2px 3px #6c757d;
    color: white;
    z-index: 3;
    .btn-group {
        cursor: pointer;
        .dropdown-toggle::after {
            vertical-align: 0.15em;
        }
    }
    #navbarSupportedContent {
        @media (min-width: 1050px) {
            display: none !important;
        }
    }
}
</style>