<template>
    <div class="container position-absolute">
        <div class="row">
            <header class="col-md-12">
                <div class="header">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="#"><img class="logo" src="../../assets/images/logo.png" alt="Aimtech logo"></a>
                        <ul class="menu-bar d-none d-md-block">
                            <li class="nav-item">
                                <router-link to="/">Home</router-link>
                                <span class="dot"/>
                            </li>
                            <li class="nav-item ">
                                <router-link to="/about">About</router-link>
                                <span class="dot"/>
                            </li>
                            <li class="nav-item ">
                                <router-link to="/portfolio">Our Work</router-link>
                                <span class="dot"/>
                            </li>
                            <li class="nav-item ">
                                <router-link to="/contact-us">Contact Us</router-link>
                                <span class="dot"/>
                            </li>
                        </ul>
                        <b-nav-item-dropdown class="d-lg-none d-xl-none d-sm-block" dropleft>
                            <template v-slot:button-content>
                                <img src="../../assets/images/hamburger_menu.png" alt="Hamburger menu">
                            </template>
                            <b-dropdown-item class="nav-item" to="/">Home</b-dropdown-item>
                            <b-dropdown-item class="nav-item" to="/about">About</b-dropdown-item>
                            <b-dropdown-item class="nav-item" to="/portfolio">Our Work</b-dropdown-item>
                            <b-dropdown-item class="nav-item" to="/contact-us">Contact Us</b-dropdown-item>
                        </b-nav-item-dropdown>

                    </nav>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>
