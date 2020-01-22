<template>
    <div id="app">
        <router-view/>
        <footer>
            <div class="container-fluid rounded-section mb-0">
                <div class="row border-bottom pt-5 pb-3 align-items-center footer-row">
                    <div class="col-md-2 pl-lg-0">
                        <p>Have any questions ?</p>
                    </div>
                    <div class="col-md-2">
                        <p><img src="./assets/images/reply.svg" alt="Reply Aimtech"> info@aimtech.am</p>
                    </div>
                    <div class="col-md-2">
                        <p> <img src="./assets/images/location.svg" alt="Loaction Aimtech"> H. Hakobyan 3, Yerevan, Armenia</p>
                    </div>
                    <div class="col-md-2">
                        <p> <img src="./assets/images/call.svg" alt="Phone Aimtech"> +374 55 02 34 20</p>
                    </div>
                    <div class="col-md-4 footer-logo-cont justify-content-end text-right">
                        <img class="img-fluid d-block" src="./assets/images/logo.png" alt="">
                    </div>
                </div>
                <div class="row pt-5 pb-3">
                    <div class="col-lg-4 col-12 col-sm-12 pl-lg-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequatur debitis, distinctio dolore doloribus ea eos id incidunt ipsum nisi nobis non optio quibusdam sapiente sint sit ullam veniam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore molestias nam! Doloribus, fugit inventore magni maiores nemo, nesciunt nihil nulla officiis provident quam quis reiciendis saepe temporibus, vel voluptatibus?</p>
                    </div>
                    <div class="col-6 col-lg-2 col-sm-6">
                        <ul>
                            <li> <router-link to="/about">About</router-link></li>
                            <li> <router-link to="#">What We Do</router-link></li>
                            <li><router-link to="#">Sales Books</router-link></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 col-sm-6">
                        <ul>
                            <li> <router-link to="#">Training Programs</router-link></li>
                            <li><router-link to="#">Case Studies</router-link></li>
                            <li><router-link to="/contact">Contact us</router-link></li>
                        </ul>
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
                hover: false
            }
        },
        methods: {

        },
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
    .container-fluid{
        padding-left: 100px!important;
        padding-right: 100px!important;
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

    @media all and (max-width: 1366px) {
        .logo {
            height: 55px;
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
            font-size: 18px;
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
        .menu-bar{
            padding-left: 0!important;
        }
        .dropleft .dropdown-menu{
            right: 10% !important;
        }
        .dropdown-menu.show{
            top: 65% !important;
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

</style>
