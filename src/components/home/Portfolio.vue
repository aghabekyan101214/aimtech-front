<template>
    <section class="section-third rounded-section">
        <div class="container-fluid">
            <div class="row">
                <div class="mirr-cont">
                    <h2 class="services main-m">Portfolio</h2>
                </div>
            </div>
            <div class="row">
                <div class="slider-containter">
                    <carousel :perPage="1" :paginationActiveColor="'#3daad9'" :paginationColor="'transparent'">

                        <slide>
                            <div class="col-md-6">
                                <h2 class="slider-title mb-3">Doctor's Application</h2>
                                <p class="slider-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci animi assumenda consectetur deserunt dolorem ducimus eum, id ipsa, ipsam iusto minus modi nemo nobis quae repellat sit voluptates?</p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/slav-med.png')" alt="Portfolio image">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <h2 class="slider-title mb-3">My Forest Armenia</h2>
                                <p class="slider-text">myforestarmenia.org is a web platform that is designed for promoting reforestation in Armenia and fighting to recover the CO2 levels created by humans.</p>
                                <p class="slider-text">MyForestArmenia raises awareness that each of us is responsible for the pollution we cause by our regular daily actions.</p>
                                <p class="slider-text">It offers tools like the carbon calculator which calculates the amount of CO2 emission caused by each individual, based on the flights, rides and other factors, and then offsets the number of trees which need to be plated to recover and eventually it calculates the cost and lets the user do a donation.</p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/my-forest.png')" alt="Myforestarmenia">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <h2 class="slider-title mb-3">Birdline</h2>
                                <p class="slider-text">Birdline is a platform for android and ios which allows users to create and design postcards through the app and mention to whom they want to send. The recipient will receive a physical printed version of the postcard, in an envelope to their post box, similar to the traditional method.</p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/meet-me-live-min.png')" alt="Birdline">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <h2 class="slider-title mb-3">Abakus Europe-Kuwait</h2>
                                <p class="slider-text">Abakus Europe – Kuwait, founded on the principle of believing on a child’s improvement and development. They provide to the children with unparalleled opportunities, to learn and develop their cognitive and intellectual abilities.</p>
                                <p class="slider-text">Through the website, users may learn in detail about their services, check the curriculum, contact for booking, download brochure of the franchise and a lot more.</p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/abakus-min.png')" alt="Abakus">
                            </div>
                        </slide>

                        <slide>
                            <div class="col-md-6">
                                <h2 class="slider-title mb-3">Meet Me Live</h2>
                                <p class="slider-text">Meet Me Live is a place to create videos and images on mobile, express moments in the form of stories, and connect with the creative community. M|ML 360 is the new photo & camera app for the people who love creating and communicating through UGC</p>
                                <p class="slider-text">Capture action & movement with this unprecedented app. Auto-adjust for angle and enhancement for image correction while you shoot. State-of-the-art HDR shooting that automatically assesses the light around you before you snap, guaranteeing sharp results in tricky lighting situations.</p>
                                <p class="slider-text">Meet Me Live is a toolkit for storytellers. Create beautiful and engaging stories. Export your stories in high resolution for seamless sharing to other platforms.</p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" v-lazy="require('../../assets/images/portfolio/meet-me-live-min.png')" alt="Meet Me Live">
                            </div>
                        </slide>

                    </carousel>
                </div>
                <div class="col-md-12 text-center">
                    <router-link to="/" class="btn rounded-btn">All Projects</router-link>
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
        background-image: url("../../assets/images/third.jpg");
        background-size: cover;
        height: 80%;
    }
    .slider-title{
        color: #fff;
    }
    .mirr-cont h2,p{
        color: #ffffff;
    }
    .slider-containter {
        width: 100%;
    }
    .slider-text{
        color: #ffffff;
        font-size: 16px;
        letter-spacing: 2px;
    }
    .slider-containter .img-fluid {
        max-height: 550px;
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

</style>
