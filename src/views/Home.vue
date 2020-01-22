<template>
    <div class="home">
        <Menu/>
        <section class="section-first rounded-section mt-0">
            <div class="container">
                <div class="row section1-text-row">
                    <div class="section1-text-container col-md-9">
                        <h1>Helping Your <br> <span class="text-blue">Business Grow</span></h1>
                        <p class="mt-lg-5 section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur deserunt dolorem doloremque eos expedita itaque libero modi nam non nostrum obcaecati, placeat quidem sapiente ullam vel velit, veniam voluptas.</p>
                    </div>
                    <div class="col-md-12">
                        <router-link to="/" class="btn rounded-btn">Our Projects</router-link>
                    </div>
                </div>
            </div>
        </section>
        <LittleSection/>
        <Services/>
        <Portfolio/>
        <About/>
        <WhatWeDo/>
        <ContactUs/>

    </div>
</template>

<script>
    import Menu from "../components/home/Menu"
    import Services from "../components/home/Services"
    import Portfolio from "../components/home/Portfolio";
    import About from "../components/home/About";
    import WhatWeDo from "../components/home/WhatWeDo";
    import ContactUs from "../components/home/ContactUs";
    import LittleSection from "../components/home/LittleSection";

    export default {
        name: 'home',
        components: {
            LittleSection,
            Menu,
            WhatWeDo,
            Services,
            Portfolio,
            About,
            ContactUs
        },
    }
</script>
<style>
    .section-first{
        height: 100vh;
        background-image: url("../assets/images/section1-bg.jpeg");
        background-size: cover;
        display: flex;
        align-items: flex-end;
    }
    .section1-text-container{
        width: 58%;
    }
    .section1-text-container h1{
        color: #ffffff;
        font-size: 52px;
        letter-spacing: 5px;
        font-family: 'robotolight', sans-serif;
    }
    .section1-text-container span{
        font-size: 60px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
    .text-blue{
        color: #2fa9de;
    }
    .section-first > .container{
        position: relative;
        bottom: 20%;
    }
    .section-text{
        font-size: 20px;
        color: #ffffff;
    }
    .mirr-cont{
        position: relative;
        width: 100%;
        text-align: center;
    }
    .mirr-cont p{
        color: #6b6b6b;
        font-size: 16px;
        letter-spacing: 2px;
    }
    .main-m{
        position: relative;
        z-index: 2;
        color: black;
        font-size: 30px;
        text-align: center;
        width: 100%;
        letter-spacing: 5px;
    }
    .VueCarousel-pagination{
        position: absolute!important;
        width: auto!important;
        left: 0!important;
        bottom: 100px!important;
    }
    .VueCarousel-pagination button {
        border: 2px dotted #7e7e7e!important;
        height: 12px!important;
        width: 12px!important;
        padding: 0!important;
        margin-right: 10px;
    }
    .VueCarousel-pagination button{
        outline: none!important;
    }
    .text-cont p{
        color: #1e3e55;
        font-size: 16px;
    }

    @media all and (max-width: 1366px) {
        .section1-text-container h1 {
            font-size: 45px;
        }
        .section1-text-container span {
            font-size: 55px;
        }

    }
    @media all and (max-width: 460px) {
        .section-text {
            font-size: 14px;
        }
        .VueCarousel-pagination {
            position: relative!important;
            bottom: 0!important;
        }
        .VueCarousel h2{
            text-align: center;
        }
        .VueCarousel-slide{
            flex-direction: column;
        }
        .section-first{
            clip-path: polygon(0% 0%,100% 0%,100% 96%,0 100%);
        }
    }
    @media all and (max-width: 320px){
        .section-first > .container{
            bottom: 5%;
        }
    }
</style>
