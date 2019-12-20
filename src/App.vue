<template>
    <div id="app">
        <div class="container position-absolute">
            <div class="row">
                <header class="col-md-12">
                    <div class="header">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="#"><img class="logo" src="./assets/images/logo.png" alt="Aimtech logo"></a>
                            <ul class="menu-bar">
                                <li class="nav-item">
                                    <router-link to="/">Home</router-link>
                                    <span class="dot"></span>
                                </li>
                                <li class="nav-item ">
                                    <router-link to="/services">Services</router-link>
                                    <span class="dot"></span>
                                </li>
                                <li class="nav-item ">
                                    <router-link to="/about">About</router-link>
                                    <span class="dot"></span>
                                </li>
                                <li class="nav-item ">
                                    <router-link to="/projects">Our Work</router-link>
                                    <span class="dot"></span>
                                </li>
                                <li class="nav-item ">
                                    <router-link to="/contact-us">Contact Us</router-link>
                                    <span class="dot"></span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-content col-md-12">
                        <div class="text-center mb-5">
                            <img class="logo" src="./assets/images/logo.png" alt="Aimtech logo">
                        </div>
                        <div class="info-container">
                            <div>
                                <p class="text-right">Hakob Hakobyan 3 </p>
                                <p class="text-right">Yerevan, Armenia, 0014 </p>
                            </div>
                            <div>
                                <p class="left">+374 55 023 420</p>
                                <p class="text-left">info@aimtech.am, sales@aimtech.am</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="socials">
            <div class="container">
                <div class="row">
                    <img class="mr-2" src="./assets/images/facebook.png" alt="Aimtech logo">
                    <img src="./assets/images/linkedin.png" alt="Aimtech logo">
                </div>
            </div>
        </div>
        <!-- Footer -->
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                hover: false
            }
        },
        methods: {

        }
    }
</script>

<style>
    @font-face {
        font-family: 'ralewaybold';
        src: url('./assets/fonts/raleway-bold-webfont.woff2') format('woff2'),
        url('./assets/fonts/raleway-bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    @font-face {
        font-family: 'robotobold';
        src: url('./assets/fonts/roboto-bold-webfont.woff2') format('woff2'),
        url('./assets/fonts/roboto-bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    @font-face {
        font-family: 'robotolight';
        src: url('./assets/fonts/roboto-light-webfont.woff2') format('woff2'),
        url('./assets/fonts/roboto-light-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    @font-face {
        font-family: 'robotomedium';
        src: url('./assets/fonts/roboto-medium-webfont.woff2') format('woff2'),
        url('./assets/fonts/roboto-medium-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    @font-face {
        font-family: 'robotoregular';
        src: url('./assets/fonts/roboto-regular-webfont.woff2') format('woff2'),
        url('./assets/fonts/roboto-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }
    h2, p{
        font-family: 'robotolight', sans-serif;
    }
    h3 {
        font-family: 'robotoregular', sans-serif;
    }
    header, .header {
        width: 100%;
    }
    body{
        overflow-x: hidden;
    }
    .logo{
        height: 85px;
    }
    .header ul {
        margin-bottom: 0!important;
    }
    .header ul li{
        list-style-type: none;
        text-align: right;
        margin-bottom: 18px;
        position: relative;
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
        font-family: 'ralewaybold', sans-serif;
    }
    .navbar{
        display: flex;
        justify-content: space-between!important;
        padding: 4px!important;
    }
    .container.position-absolute{
        left: 50%;
        transform: translateX(-50%);
    }
    .footer{
        padding-top: 80px;
        width: 100%;
        height: 300px;
        background-color: #004a82;
    }
    .footer-content{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .footer-content p{
        color: #fff;
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

    @media all and (max-width: 1366px) {
        .logo {
            height: 65px;
        }
        .header ul li a{
            font-size: 12px;
        }
        .header ul li {
            margin: 0;
        }
        .header ul li:nth-child(1) {
            margin-top: 15px;
        }
    }

</style>
