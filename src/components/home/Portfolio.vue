<template>
    <section class="section-third rounded-section">
        <div class="container-fluid">
            <div class="row">
                <div class="mirr-cont">
                    <h2 class="services main-m mb-5">Portfolio</h2>
                </div>
            </div>
            <div class="row">
                <div class="slider-containter">
                    <carousel :perPage="1" :paginationActiveColor="'#3daad9'" :paginationColor="'transparent'">

                        <slide>
                            <div class="col-md-6">
                                <img class="img-fluid slider-logo mb-4" src="../../assets/images/portfolio/slavmed-logo.png" alt="Slavmed Logo Aimtech">
                                <h2 class="slider-title mb-5">AAC Promoitalia</h2>
                                <p class="slider-subtitle mb-1">Project Overview</p>
                                <p class="slider-text mb-4">AAC Promoitalia is an application for users seeking for cosmetic services provided by Slavmed. Using the application, user may search and get educated about all the service, and book an appointment.</p>
                                <p class="slider-subtitle mb-1">Technical Aspects</p>
                                <p class="slider-text">AAC Promoitalia app is developed for both ios and android platforms using SWIFT and Kotlin respectively. While the admin can access the admin dashboard through a web based friendly interface developed using PHP with Laravel Framework.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/slav-med.png')" alt="Portfolio image">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <img class="img-fluid slider-logo mb-4" src="../../assets/images/portfolio/myforest-logo-min.png" alt="Myforestarmenia logo">
                                <h2 class="slider-title mb-5">My Forest Armenia</h2>
                                <p class="slider-subtitle mb-1">Project Overview</p>
                                <p class="slider-text mb-4">myforestarmenia.org is a web platform that is designed for promoting reforestation in Armenia and fighting to recover the CO2 levels created by humans.MyForestArmenia raises awareness that each of us is responsible for the pollution we cause by our regular daily actions.</p>
                                <p class="slider-subtitle mb-1">Technical Aspects</p>
                                <p class="slider-text">It offers tools like the carbon calculator which calculates the amount of CO2 emission caused by each individual, based on the flights, rides and other factors, and then offsets the number of trees which need to be plated to recover and eventually it calculates the cost and lets the user do a donation.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/my-forest.png')" alt="Portfolio image">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <img class="img-fluid slider-logo mb-4" src="../../assets/images/portfolio/birdline-logo.png" alt="Birdline logo">
                                <h2 class="slider-title mb-5">Birdline</h2>
                                <p class="slider-subtitle mb-1">Project Overview</p>
                                <p class="slider-text mb-4">Birdline is a platform for android and ios which allows users to create and design postcards through the app and mention to whom they want to send. The recipient will receive a physical printed version of the postcard in an envelope to their post box, similar to the traditional method.</p>
                                <p class="slider-subtitle mb-1">Technical Aspects</p>
                                <p class="slider-text">Birdline app is developed for both ios and android platforms using SWIFT and Kotlin respectively. While the admin can access the admin dashboard through a web based friendly interface developed using Node.js</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/birdline.png')" alt="Portfolio image">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <img class="img-fluid slider-logo mb-4" src="../../assets/images/portfolio/abakus-logo.png" alt="Abakus logo">
                                <h2 class="slider-title mb-5">Abakus Europe-Kuwait</h2>
                                <p class="slider-subtitle mb-1">Project Overview</p>
                                <p class="slider-text mb-4">Abakus Europe – Kuwait, founded on the principle of believing on a child’s improvement and development. They provide to the children with unparalleled opportunities, to learn and develop their cognitive and intellectual abilities.</p>
                                <p class="slider-subtitle mb-1">Technical Aspects</p>
                                <p class="slider-text">Through the website, users may learn in detail about their services, check the curriculum, contact for booking, download brochure of the franchise and a lot more.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/abakus-min.png')" alt="Portfolio image">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <img class="img-fluid slider-logo mb-4" src="../../assets/images/portfolio/meet-me-live.png" alt="Meet Me Live logo">
                                <h2 class="slider-title mb-5">Meet Me Live</h2>
                                <p class="slider-subtitle mb-1">Project Overview</p>
                                <p class="slider-text mb-4">Meet Me Live is a toolkit for storytellers. Create beautiful and engaging stories and connect with the creative community. Export your stories in high resolution for seamless sharing to other platforms.</p>
                                <p class="slider-subtitle mb-1">Technical Aspects</p>
                                <p class="slider-text">Meet Me Live app is developed the ios platform using SWIFT, and Ruby on Rails for the backend.MML360 supports capturing videos in movie mode in the form of QuiBis.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/meet-me-live-min.png')" alt="Meet Me Live">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <img class="img-fluid slider-logo mb-4" src="../../assets/images/portfolio/worldOdColors-logo-min.png" alt="World of Colors logo">
                                <h2 class="slider-title mb-5">World of Colors</h2>
                                <p class="slider-subtitle mb-1">Project Overview</p>
                                <p class="slider-text mb-4">World of Colors (Գոյներու Աշխարհ) is an educational game aimed at teaching colors to children.The game features Lala and Ara, two main characters who will guide children through the various levels of the application.</p>
                                <p class="slider-subtitle mb-1">Technical Aspects</p>
                                <p class="slider-text">The game is developed using Unity3d supporting both android and ios platforms for mobile devices and tablets.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/word-of-colors-600-min.png')" alt="World of Colors">
                            </div>
                        </slide>

                    </carousel>
                </div>
                <div class="col-md-12 text-center">
                    <router-link to="/portfolio" class="btn rounded-btn">All Projects</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: "Portfolio",
        components: {
            Carousel,
            Slide
        },
        data: () => {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>
    .section-third {
        padding-top: 80px;
        padding-bottom: 50px;
        /*background-image: url("../../assets/images/third.jpg");*/
        background: #fff;
        background-size: cover;
        height: 80%;
    }
    .slider-title{
        color: black;
        font-size: 26px;
    }
    .mirr-cont h2,p{
        color: black;
    }
    .slider-containter {
        width: 100%;
    }
    .slider-text{
        color: black;
        font-size: 16px;
        letter-spacing: 2px;
    }
    .slider-containter .img-fluid {
        max-height: 550px;
    }
    .slider-logo{
        height: 80px;
    }
    .VueCarousel-slide{
        display: flex;
        align-items: center;
    }
    p{
        font-family: 'robotolight', sans-serif;
    }
    @media all and (max-width: 460px) {
        .slider-containter {
            padding: 15px;
        }
        .VueCarousel-slide {
            flex-direction: column;
        }
    }
    .slider-subtitle{
        letter-spacing: 2px;
        font-size: 20px;
        font-weight: 600;
        color: #36a8e0;
    }

</style>
