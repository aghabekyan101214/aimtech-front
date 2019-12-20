<template>
    <section class="section-third">
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
                            <div>
                                <h2 class="slider-title mb-3">Doctor's Application</h2>
                                <p class="slider-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci animi assumenda consectetur deserunt dolorem ducimus eum, id ipsa, ipsam iusto minus modi nemo nobis quae repellat sit voluptates?</p>
                            </div>
                            <img class="col-md-6" src="../../assets/images/slider1.png" alt="">
                        </slide>
                        <slide>
                            <div>
                                <h2 class="slider-title mb-3">MyForestArmenia</h2>
                                <p class="slider-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci animi assumenda consectetur deserunt dolorem ducimus eum, id ipsa, ipsam iusto minus modi nemo nobis quae repellat sit voluptates?</p>
                            </div>
                            <img class="col-md-6" src="../../assets/images/slider2.png" alt="">
                        </slide>
                        <slide>
                            <img class="col-md-6" src="../../assets/images/slider3.png" alt="">
                            <div>
                                <h2 class="slider-title mb-3">Abakus</h2>
                                <p class="slider-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci animi assumenda consectetur deserunt dolorem ducimus eum, id ipsa, ipsam iusto minus modi nemo nobis quae repellat sit voluptates?</p>
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
        font-size: 20px;
        letter-spacing: 2px;
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
