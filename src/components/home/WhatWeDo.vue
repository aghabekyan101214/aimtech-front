<template>
    <section class="section-fifth">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-cont mb-5">
                    <h2 class="title mb-5">What We Do</h2>
                    <p class="text">Consistency and transparency are key to our delivery proces, so we follow the same
                        <br> framework regardless of the project.</p>
                </div>
                <div class="col-md-12 mb-3 mobile-navi">
                    <p class="text-center text" v-html="def_name"/>
                </div>
                <div class="col-md-12 slider-points-cont">
                    <div v-for="(point, i) in points" class="point-box" @click="change(i)">
                        <div :class="'number-box mb-3 ' + point.class">
                            <p class="m-0">{{ i + 1 }}</p>
                        </div>
                        <p v-html="point.name"/>
                    </div>
                </div>
                <div class="col-md-12">
                    <b-progress class="mt-2" :max="100">
                        <b-progress-bar v-for="(bar, i) in bars" :key="i" :value="bar.value" :variant="bar.variant"/>
                    </b-progress>
                </div>
                <div class="col-md-12 mt-5 slider-cont">
                    <carousel :perPage="1" :paginationEnabled="false" :touchDrag="false" :mouseDrag="false" ref="carousel">
                        <slide>
                            <div class="col-lg-5 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/pre-discovery.jpg')" alt="a">
                            </div>
                            <div class="col-md-5 slider-text-cont pl-lg-5">
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                            </div>
                        </slide>
                        <slide>
                            <div class="col-lg-5 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/pre-discovery.jpg')" alt="a">
                            </div>
                            <div class="col-md-5 slider-text-cont pl-lg-5">
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                            </div>
                        </slide>
                        <slide>
                            <div class="col-lg-5 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/pre-discovery.jpg')" alt="a">
                            </div>
                            <div class="col-md-5 slider-text-cont pl-lg-5">
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                            </div>
                        </slide>
                        <slide>
                            <div class="col-lg-5 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/pre-discovery.jpg')" alt="a">
                            </div>
                            <div class="col-md-5 slider-text-cont pl-lg-5">
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                            </div>
                        </slide>
                        <slide>
                            <div class="col-lg-5 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/pre-discovery.jpg')" alt="a">
                            </div>
                            <div class="col-md-5 slider-text-cont pl-lg-5">
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                                <p class="slider-title mb-3">Pre-Discovery</p>
                                <p class="slider-text">Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project</p>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: "WhatWeDo",
        components: {
            Carousel,
            Slide
        },
        data: () => {
            return {
                points: [
                    {name: "Requirement <br> Engineering", class: "active"},
                    {name: "Prototyping <br> and UXD", class: ""},
                    {name: "Development and Solution <br> Implementation", class: ""},
                    {name: "QA and Testing", class: ""},
                    {name: "Maintenance and <br> Support", class: ""},
                ],
                bars: [
                    { variant: 'empty', value: 0 },
                    { variant: 'primary', value: 20 },
                    { variant: 'empty', value: 80 },
                ],
                def_name: 'Requirement <br> Engineering'
            }
        },
        methods: {
            change(n) {
                let first = n * this.bars[1].value;
                let third = 100 - (first + 20);
                this.bars[0].value = first;
                this.bars[2].value = third;
                this.points.forEach((e, i) => {
                    e.class = "";
                    if(n == i) {
                        e.class = "active";
                        this.def_name = e.name;
                    }
                });

                this.$refs.carousel.goToPage(n)
            },
        },
    }
</script>

<style scoped>
    .section-fifth{
        padding: 50px 0;
    }
    .bg-primary{
        background-color: #36a8e0!important;
    }
    .mobile-navi{
        display: none;
    }
    .bg-empty{
        background-color: #e9ecef!important;
    }
    .title{
        text-align: center;
        font-size: 40px;
    }
    .progress{
        border-radius: 10px;
    }
    .number-box{
        height: 55px;
        width: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        color: #1e3e55;
        border: 3px solid #36a8e0;
        border-radius: 5px;
    }
    .point-box p{
        font-family: 'robotoregular', sans-serif;
        font-size: 18px;
    }
    .point-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
    .active{
        background-color: #36a8e0;
        color: white;
    }
    .point-box > p{
        text-align: center;
    }
    .point-box:hover .number-box{
        background-color: #36a8e0;
        color: white;
    }
    .text{
        text-align: center;
        font-size: 20px!important;
        letter-spacing: 2px;
    }
    .slider-points-cont{
        display: flex;
        justify-content: space-around;
    }

    .slider-text-cont p{
        font-size: 20px;
        font-family: 'robotoregular', sans-serif;
    }
    .slider-text-cont{
        padding-left: 0;
    }
    .slider-title{
        color: #36a8e0;
        margin-bottom: 3px!important;
    }
    .slider-text{
        color: #1e3e55;
        font-size: 19px!important;
    }
    .VueCarousel-slide{
        display: flex;
    }
    @media all and (max-width: 460px){
        .slider-text-cont{
            margin-top: 20px;
            padding-right: 55px;
        }
        .point-box > p{
            display: none;
        }
        .mobile-navi {
            display: block;
        }
        .mobile-navi p{
            color: #36a8e0;
            font-family: robotoregular, sans-serif;
        }
    }
</style>
