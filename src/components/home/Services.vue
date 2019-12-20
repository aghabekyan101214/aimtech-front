<template>
    <section class="section-second">
        <div class="container">
            <div class="row">
                <div class="mirr-cont">
                    <h2 class="services main-m">Services</h2>
                    <p>Our Team Designs And Develops Lovable Software Expreiences <br> For A Wide Range Of Connected Products.</p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row row-services">
                <div class="col-md-4 col-xs-12 col-sm-6 mb-5">
                    <div class="service-block">
                        <div class="icon-cont">
                            <img class="icon-blue" src="../../assets/images/ios-blue.png" alt="IOS icon blue">
                            <img class="icon-white" src="../../assets/images/ios-white.png" alt="IOS icon white">
                        </div>
                        <h3>IOS Development</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        <hr>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 col-sm-6 mb-5">
                    <div class="service-block">
                        <div class="icon-cont">
                            <img class="icon-blue" src="../../assets/images/android-blue.png" alt="Android icon blue">
                            <img class="icon-white" src="../../assets/images/android-white.png" alt="Adnroid icon white">
                        </div>
                        <h3>Android Development</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        <hr>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 col-sm-6 mb-5">
                    <div class="service-block">
                        <div class="icon-cont">
                            <img class="icon-blue" src="../../assets/images/ui-blue.png" alt="UI/UX icon blue">
                            <img class="icon-white" src="../../assets/images/ui-white.png" alt="UI/UX icon white">
                        </div>
                        <h3>UI/UX Design</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        <hr>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 col-sm-6 mb-5">
                    <div class="service-block">
                        <div class="icon-cont">
                            <img class="icon-blue little" src="../../assets/images/game-blue.png" alt="Game Development icon blue">
                            <img class="icon-white little" src="../../assets/images/game-white.png" alt="Game Development icon white">
                        </div>
                        <h3>Game Development</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        <hr>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 col-sm-6 mb-5">
                    <div class="service-block">
                        <div class="icon-cont">
                            <img class="icon-blue" src="../../assets/images/web-blue.png" alt="Web Development icon blue">
                            <img class="icon-white" src="../../assets/images/web-white.png" alt="Web Development icon white">
                        </div>
                        <h3>Web Development</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        <hr>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 col-sm-6 mb-5">
                    <div class="service-block">
                        <div class="icon-cont">
                            <img class="icon-blue" src="../../assets/images/graphic-blue.png" alt="Graphic Design icon blue">
                            <img class="icon-white" src="../../assets/images/graphic-white.png" alt="Graphic Design icon white">
                        </div>
                        <h3>Graphic Design</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Services"
    }
</script>

<style scoped>
    .icon-cont img {
        height: 50px;
    }
    .section-second{
        padding-top: 70px;
        padding-bottom: 50px;
    }
    .icon-white{
        transition: .3s;
        display: none;
    }
    .icon-blue{
        transition: .3s;
    }
    .icon-cont{
        margin-bottom: 10px;
    }
    .little{
        height: 42px!important;
    }
    .service-block{
        padding: 20px 10px;
        transition: .3s;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
    }
    .service-block span{
        color: #6b6b6b;
        transition: .3s;
    }
    .service-block:hover span {
        color: white;
        transition: .3s;
    }
    .service-block:hover .icon-white{
        display: block;
        transition: .3s;
    }
    .service-block:hover .icon-blue{
        display: none;
        transition: .3s;
    }
    .service-block:hover {
        background-color: #37a7e0;
        transition: .3s;
        color: white;
    }
    .row-services{
        padding-top: 100px;

    }
    /*.row-services > div{*/
    /*    padding: 0 50px;*/
    /*}*/
    .service-block hr {
        margin: 0!important;
        position: relative;
        bottom: -20px;
        width: 100%;
        height: 4px;
        background-color: #37a7e0;
        border-radius: 5px;
        border-top: none;
    }
</style>
