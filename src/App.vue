<template>
    <div id="app">
        <b-navbar toggleable="lg" type="light" variant="default" class="header navbar-dark" ref="header" id="header">
            <div class="container">
                <b-navbar-brand to="/">
                    <img class="logo logo-white" src="./assets/images/logo.png" alt="Aimtech Logo">
                    <img class="logo logo-color d-none" src="./assets/images/logo-new.png" alt="Aimtech logo">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-nav-item to="/about">About</b-nav-item>
                        <b-nav-item to="/portfolio">Our Work</b-nav-item>
                        <b-nav-item to="/contact-us">Contact Us</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
        <router-view/>
        <footer class="rounded-section overflow-hidden mb-0">
            <div class="container-fluid mb-0">
                <div class="row border-bottom pt-5 pb-3 align-items-center footer-row ">
                    <div class="col-md-2 pl-md-0">
                        <p class="mb-md-0"><img src="./assets/images/reply.svg" alt="Reply Aimtech"> info@aimtech.am</p>
                    </div>
                    <div class="col-md-3 pr-md-0">
                        <p class="mb-md-0"> <img src="./assets/images/location.svg" alt="Loaction Aimtech"> H. Hakobyan 3, Yerevan, Armenia</p>
                    </div>
                    <div class="col-md-3">
                        <p class="mb-md-0"> <img src="./assets/images/call.svg" alt="Phone Aimtech"> +374 55 02 34 20</p>
                    </div>
                    <div class="col-md-4 footer-logo-cont d-none d-lg-block justify-content-end text-right">
                        <img class="img-fluid" src="./assets/images/logo.png" alt="">
                    </div>
                </div>
<!--                <div class="row pt-5 pb-3">-->
<!--                    <div class="col-lg-4 col-12 col-sm-12 pl-lg-0">-->
<!--                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequatur debitis, distinctio dolore doloribus ea eos id incidunt ipsum nisi nobis non optio quibusdam sapiente sint sit ullam veniam.</p>-->
<!--                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore molestias nam! Doloribus, fugit inventore magni maiores nemo, nesciunt nihil nulla officiis provident quam quis reiciendis saepe temporibus, vel voluptatibus?</p>-->
<!--                    </div>-->
<!--                    <div class="col-6 col-lg-2 col-sm-6">-->
<!--                        <ul>-->
<!--                            <li> <router-link to="/about">About</router-link></li>-->
<!--                            <li> <router-link to="#">What We Do</router-link></li>-->
<!--                            <li><router-link to="#">Sales Books</router-link></li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                    <div class="col-6 col-lg-2 col-sm-6">-->
<!--                        <ul>-->
<!--                            <li> <router-link to="#">Training Programs</router-link></li>-->
<!--                            <li><router-link to="#">Case Studies</router-link></li>-->
<!--                            <li><router-link to="/contact">Contact us</router-link></li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <div class="footer pt-4 pb-2">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-2 col-md-1 d-flex justify-content-center">
                            <a href="https://www.linkedin.com/company/aimtech-llc" target="_blank" class="img-cont d-flex align-items-center justify-content-center">
                                <img src="./assets/images/linkedin.svg" alt="Linkedin Logo Aimtech">
                            </a>
                        </div>
                        <div class="col-2 col-md-1 d-flex justify-content-center">
                            <a href="https://www.facebook.com/aimtecham/" target="_blank" class="img-cont d-flex align-items-center justify-content-center">
                                <img src="./assets/images/facebook.svg" alt="Facebook Logo Aimtech">
                            </a>
                        </div>
                        <div class="col-2 col-md-1 d-flex justify-content-center">
                            <a href="https://www.instagram.com/aimtech_am" target="_blank" class="img-cont d-flex align-items-center justify-content-center">
                                <img src="./assets/images/instagram.svg" alt="Instagram Logo Aimtech">
                            </a>
                        </div>
                        <div class="col-md-12 mt-4">
                            <p class="text-center m-0 cr">Copyright AimTech - {{ new Date().getFullYear() }}. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                hover: false,
                header: 0,
                sticky: 0
            }
        },
        mounted() {
            document.addEventListener("scroll", this.handleScroll);
            this.sticky = document.getElementById("header").offsetTop;
        },
        methods: {
            handleScroll() {
                if (window.pageYOffset > this.sticky + 60) {
                    this.$refs.header.classList.add("sticky");
                    this.$refs.header.classList.add("navbar-light");
                    this.$refs.header.classList.remove("navbar-dark");
                } else {
                    this.$refs.header.classList.remove("sticky");
                    this.$refs.header.classList.add("navbar-dark");
                    this.$refs.header.classList.remove("navbar-light");
                }
            }
        },
        watch:{
            $route (to, from){
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style>
    @font-face {
        font-family: 'robotolight';
        src: url('./assets/fonts/roboto-light-webfont.woff2') format('woff2'),
        url('./assets/fonts/roboto-light-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    .sticky {
        position: fixed!important;
        top: 0;
        width: calc(100% - 30px) !important;
        background: white;
        z-index: 10000;
        left: 0;
        transition: .5s;
        border-bottom: 3px solid #37a7e0;
        margin: 0 15px;
        border-radius: 0 0 15px 15px;
    }
    .sticky .container {
        padding: 0 15px!important;
    }
    .sticky a {
        color: #0c4a80!important;
        font-family: robotolight, sans-serif;
        font-size: 16px!important;
        transition: .3s;
    }
    .sticky a:hover{
        color: #2fa9de!important;
    }
    .sticky .router-link-exact-active{
        color: #2fa9de!important;
    }
    .navbar-nav a{
        font-family: robotolight, sans-serif;
        font-size: 16px!important;
    }
    .sticky .logo-white {
        display: none;
    }
    .sticky .logo-color {
        display: block!important;
    }
    .sticky + div  {
        padding-top: 60px!important;
    }
    #app{
        padding: 15px;
        background: #001224;
    }
    .rounded-section {
        border-radius: 15px;
        margin: 15px 0;
    }
    .dropdown-menu.show{
        background-color: unset;
        border: none!important;
        outline: none;
    }
    .nav-item{
        list-style-type: none;
    }
    .dropdown-toggle::after{
        border: none!important;
    }
    .dropdown-toggle::before{
        border: none!important;
    }
    h2, p{
        font-family: 'robotolight', sans-serif;
    }
    h3 {
        font-family: 'robotolight', sans-serif;
    }
    header, .header {
        width: 100%;
    }
    body{
        overflow-x: hidden;
    }
    .logo{
        height: 50px;
    }
    .header ul {
        margin: 0 auto;
    }
    .header ul li{
        list-style-type: none;
        text-align: right;
        position: relative;
        margin-left: 50px;
    }
    .cr {
        font-size: 11px;
    }

    .header ul li a {
        color: #ffffff;
        font-size: 18px;
        text-decoration: none;
        padding: 7px;
        font-family: 'robotomedium', sans-serif;
    }
    .rounded-btn{
        background-color: #36a8e0!important;
        text-transform: uppercase;
        color: #ffffff!important;
        border-radius: 20px!important;
        width: 170px;
        font-weight: 700!important;
        font-size: 14px!important;
        font-family: 'robotolight', sans-serif;
        letter-spacing: 2px;
    }
    .navbar{
        display: flex;
        justify-content: space-between!important;
        padding: 4px!important;
    }
    .container.position-absolute{
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    }
    .info-container{
        display: flex;
        justify-content: center;
    }
    .info-container > div{
        width: 300px;
    }
    .info-container > div:nth-child(1){
        margin-right: 10px;
    }

    .info-container > div:nth-child(2){
        margin-left: 10px;
    }
    .socials .row {
        justify-content: center;
        align-items: center;
        height: 80px;
    }
    .menu-bar{
        position: relative;
        top: 70px;
    }
    .dot{
        height: 13px;
        width: 13px;
        background-color: #37a7e0;
        border-radius: 50%;
        position: absolute;
        right: -15px;
        top: 7px;
        display: none;
    }
    .nav-item a:hover{
        color: #37a7e0;
    }
    .nav-item a:hover + .dot {
        display: inline-block!important;
    }
    a:hover{
        text-decoration: none!important;
    }
    .link-block p > a{
        color: #1e3e55;
    }
    .container-fluid{
        padding-left: 100px!important;
        padding-right: 100px!important;
    }


    /*main footer*/
    footer p {
        font-size: 13px;
        letter-spacing: 1px;
        color: white;
    }
    footer .container-fluid {
        background: #0e416c;
    }

    footer .border-bottom {
        border-bottom: 1px solid white!important;
    }
    .footer-logo-cont img {
        height: 50px;
    }
    .footer-row > div {
        display: flex;
        align-items: center;
    }
    footer ul a {
        color: white;
        font-size: 14px;
    }
    footer ul li {
        color: #05acd4;
        margin-bottom: 8px;
    }
    .footer-row p img {
        height: 15px;
        padding-right: 15px;
    }
    .footer {
        background: #0e3b61;
    }
    .footer img {
        height: 18px;
    }
    .footer .img-cont{
        height: 30px;
        width: 30px;
        background: #0789c4;
        text-align: center;
    }
    /*footer end*/
    @media all and (max-width: 1366px) {
        .logo {
            height: 55px;
        }

    }
    .nav-link.dropdown-toggle {
        position: relative;
        z-index: 999999;
    }
    @media all and (max-width: 1024px) {
        .container-fluid{
            padding-left: 50px!important;
            padding-right: 50px!important;
        }
    }
    @media all and (max-width: 460px) {
        .menu-bar{
            top: 0;
        }
        .logo{
            height: 40px;
        }
        .title{
            font-size: 28px;
        }
        .section1-text-container h1{
            font-size: 30px!important;
        }
        .section1-text-container span{
            font-size: 30px!important;
        }
        .header ul li a{
            font-size: 18px;
        }
        .header ul li{
            margin-bottom: 10px;
            /*margin-top: 5px;*/
        }
        .ft-first-part{
            text-align: center;
        }
        .footer-cont p, .footer-cont a{
            font-size: 14px;
        }
        .link-block-footer{
            display: none;
        }
        .menu-bar{
            padding-left: 0!important;
        }
        .dropleft .dropdown-menu{
            right: 10% !important;
        }
        .dropdown-menu.show{
            top: 65% !important;
        }
        .container-fluid{
            padding-left: 10px!important;
            padding-right: 10px!important;
        }
        .main-cont {
            height: 150px!important;
        }
    }
    @media all and (max-width: 320px){
        .header ul li{
            margin-bottom: 5px;
        }
        .header ul{
            margin-top: 25px!important;
        }
        .dropdown-menu.show{
            top: 0 !important;
        }
    }
    img[lazy="loading"]{
        height: 50px;
    }

</style>
