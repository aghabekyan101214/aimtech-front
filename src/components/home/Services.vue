<template>
    <section class="section-second rounded-section">
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

                <div class="col-md-6 col-lg-4 col-12 col-sm-6 mb-5" >
                    <div class="service-block" ref="block" >
                        <div class="hover" @mousemove="effect" @mouseleave="leave"></div>
                        <div class="icon-cont">
                            <img class="icon-blue" v-lazy="require('../../assets/images/ios-blue.png')" alt="IOS icon blue"/>
                            <img class="icon-white" v-lazy="require('../../assets/images/ios-white.png')" alt="IOS icon white"/>
                        </div>
                        <h3>IOS Development</h3>
                        <span>As a reliable IOS app development company, we transform your iOS app ideas to stunning realities which are App Store approved.</span>
                        <hr>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 col-12 col-sm-6 mb-5">
                    <div class="service-block" ref="block2" @mouseleave="leave">
                        <div class="hover" @mousemove="effect"></div>
                        <div class="icon-cont">
                            <img class="icon-blue" v-lazy="require('../../assets/images/android-blue.png')" alt="Android icon blue">
                            <img class="icon-white" v-lazy="require('../../assets/images/android-white.png')" alt="Adnroid icon white">
                        </div>
                        <h3>Android Development</h3>
                        <span>We engineer native Android apps that solve users’ pain-points bringing delight in their day-to-day life.</span>
                        <hr>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 col-12 col-sm-6 mb-5">
                    <div class="service-block" ref="block3" @mouseleave="leave">
                        <div class="hover" @mousemove="effect"></div>
                        <div class="icon-cont">
                            <img class="icon-blue" v-lazy="require('../../assets/images/ui-blue.png')" alt="UI/UX icon blue">
                            <img class="icon-white" v-lazy="require('../../assets/images/ui-white.png')" alt="UI/UX icon white">
                        </div>
                        <h3>UI/UX Design</h3>
                        <span>UI/UX design is all about the end user. First, we analyze what users want to see and experience and then we bring the design to life.</span>
                        <hr>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 col-12 col-sm-6 mb-5">
                    <div class="service-block" ref="block4" @mouseleave="leave">
                        <div class="hover" @mousemove="effect"></div>
                        <div class="icon-cont mb-8">
                            <img class="icon-blue little" v-lazy="require('../../assets/images/game-blue.png')" alt="Game Development icon blue">
                            <img class="icon-white little" v-lazy="require('../../assets/images/game-white.png')" alt="Game Development icon white">
                        </div>
                        <h3>Game Development</h3>
                        <span>Our experience in Unity3d goes back to 2006! We design and create 2D, 3D, AR, VR video games for huge list of platform Unity3d supports.</span>
                        <hr>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 col-12 col-sm-6 mb-5">
                    <div class="service-block" ref="block5" @mouseleave="leave">
                        <div class="hover" @mousemove="effect"></div>
                        <div class="icon-cont">
                            <img class="icon-blue" v-lazy="require('../../assets/images/web-blue.png')" alt="Web Development icon blue">
                            <img class="icon-white" v-lazy="require('../../assets/images/web-white.png')" alt="Web Development icon white">
                        </div>
                        <h3>Web Development</h3>
                        <span>Your website is your online presence and identity. We ensure your website serves your customers more than what they want to see.</span>
                        <hr>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 col-12 col-sm-6 mb-5">
                    <div class="service-block" ref="block6" @mouseleave="leave">
                        <div class="hover" @mousemove="effect"></div>
                        <div class="icon-cont">
                            <img class="icon-blue" v-lazy="require('../../assets/images/graphic-blue.png')" alt="Graphic Design icon blue">
                            <img class="icon-white" v-lazy="require('../../assets/images/graphic-white.png')" alt="Graphic Design icon white">
                        </div>
                        <h3>Graphic Design</h3>
                        <span>We understand the importance of your brand identity for your business success Hence we are here to take care of it professionally.</span>
                        <hr>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Services",
        data: () => {
            return {
                s_height: 0,
                s_width: 0
            }
        },
        methods: {
            getHeight() {
                let height = this.$refs.block.clientHeight;
                let width = this.$refs.block.clientWidth;
                if(height && width) {
                    this.s_height = height / 2;
                    this.s_width = width / 2;
                    window.removeEventListener("mouseover", this.getHeight);
                }
            },
            effect(event){
                let x = event.layerX;
                let y = event.layerY;
                let rotate_x = ( this.s_height - y ) * ( 10 / this.s_height);
                let rotate_y = ( this.s_width - x ) * ( 30 / this.s_width) * -1;
                event.target.parentElement.style.transform = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg) scale(1.05)";
                event.target.parentElement.style.boxShadow = (rotate_y * -1) + "px " + (rotate_x + 14) + "px 34px 0 rgba( 0, 0, 0, 0.3 )";
            },
            leave(event) {
                event.target.style.transform = "rotateX(0) rotateY(0)";
                event.target.parentElement.style.transform = "rotateX(0) rotateY(0)";
                event.target.parentElement.style.boxShadow = "none";
                event.target.style.boxShadow = "none";
            }
        },
        mounted () {
            window.addEventListener('mouseover', this.getHeight);
        },
        destroyed () {
            window.removeEventListener('mouseover', this.getHeight);
        }
    }
</script>

<style scoped>
    .icon-cont img {
        height: 50px;
    }
    .hover{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .service-block h3 {
        color: #484848;
        transition: .3s;
    }
    .section-second{
        padding-top: 40px;
        padding-bottom: 50px;
        background: #fff;
    }
    .mb-8{
        margin-bottom: 18px!important;
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
        padding: 20px 15px;
        transition: .3s;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
    }
    .service-block span{
        color: #6b6b6b;
        transition: .3s;
        display: block;
        min-height: 100px;
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
    }
    .service-block:hover h3 {
        color: white;
        transition: .3s;
    }
    .row-services{
        padding-top: 50px;

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
    @media all and (max-width: 460px) {
        .main-m{
            font-size: 32px;
        }
        .mirr-cont p{
            padding: 0 3px;
            font-size: 15px;
        }
        .row-services{
            padding-top: 0;
        }
    }
</style>
