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
        <router-view/>
        <section class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 ft-first-part">
                        <img src="./assets/images/logo-new.png" class="logo" alt="Aimtech Logo">
                        <div class="col-md-12 pt-5 pl-0">
                            <p>Hakob Hakobyan 3, Yerevan, Armenia</p>
                            <p>+374 55 55 77 44</p>
                        </div>
                        <div class="col-md-12 pt-5 pl-0 social-buttons">
                            <img class="mr-3" src="./assets/images/facebook.png" alt="Aimtech facebook logo">
                            <img src="./assets/images/linkedin.png" alt="Aimtech linkedin logo">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <a class="link-title" href="#">Company</a>
                        <div class="col-md-12 pl-0 pt-5 link-block">
                            <p>
                                <a href="#">About Us</a>
                            </p>
                            <p>
                                <a href="#">Our Team</a>
                            </p>
                            <p>
                                <a href="#">What We Do</a>
                            </p>
                            <p>
                                <a href="#">Careers</a>
                            </p>
                            <p>
                                <a href="#">Contact Us</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <a class="link-title" href="#">Services</a>
                        <div class="col-md-12 pl-0 pt-5 link-block">
                            <p>
                                <a href="#">About Us</a>
                            </p>
                            <p>
                                <a href="#">Our Team</a>
                            </p>
                            <p>
                                <a href="#">What We Do</a>
                            </p>
                            <p>
                                <a href="#">Careers</a>
                            </p>
                            <p>
                                <a href="#">Contact Us</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <a class="link-title" href="#">Technologies</a>
                        <div class="col-md-12 pl-0 pt-5 link-block">
                            <p>
                                <a href="#">About Us</a>
                            </p>
                            <p>
                                <a href="#">Our Team</a>
                            </p>
                            <p>
                                <a href="#">What We Do</a>
                            </p>
                            <p>
                                <a href="#">Careers</a>
                            </p>
                            <p>
                                <a href="#">Contact Us</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="privacy-footer">
            <div class="container-fluid footer-cont">
                <p class="m-0">&copy; 2018-2020 AIMTECH, All rights reserved</p>
                <div class="link-block-footer">
                    <a class="mr-5" href="#">Terms & Conditions</a>
                    <a class="mr-5" href="#">Privacy Policy</a>
                    <a class="mr-5" href="#">Site Map</a>
                </div>
            </div>
        </section>
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
    .container-fluid{
        padding-left: 100px!important;
        padding-right: 100px!important;
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
        height: 50px;
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
    .footer{
        padding: 50px 0;
        background-color: #f0f0f0;
    }
    .footer .logo{
        height: 43px;
    }
    .footer p{
        letter-spacing: 2px;
        color: #1e3e55;
    }
    .footer .link-title {
        letter-spacing: 2px;
        color: #36a8e0;
        padding-bottom: 10px;
        border-bottom: 3px solid #36a8e0;
        border-bottom-right-radius: 2px;
        border-bottom-left-radius: 2px;
        font-family: robotoregular, sans-serif;
        font-size: 20px;
    }
    a:hover{
        text-decoration: none!important;
    }
    .link-block p > a{
        color: #1e3e55;
    }
    .footer .social-buttons img{
        height: 40px;
    }
    .privacy-footer{
        height: 80px;
    }
    .footer-cont{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .footer-cont a, .footer-cont p{
        font-family: robotoregular, sans-serif;
        letter-spacing: 2px;
        color: #212529;
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
    @media all and (max-width: 460px) {
        .menu-bar{
            top: 0;
        }
        .logo{
            height: 40px;
        }
        .section1-text-container h1{
            font-size: 40px!important;
        }
        .section1-text-container span{
            font-size: 40px!important;
        }
        .header ul li a{
            font-size: 20px;
        }
        .header ul li{
            margin-bottom: 10px;
            /*margin-top: 5px;*/
        }
        .container-fluid{
            padding-left: 15px!important;
            padding-right: 15px!important;
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
    }

</style>
