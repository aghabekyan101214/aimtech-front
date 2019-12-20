<template>
    <section class="section-fifth">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-cont mb-5">
                    <h2 class="title mb-5">What We Do</h2>
                    <p class="text">Consistency and transparency are key to our delivery proces, so we follow the same
                        <br> framework regardless of the project.</p>
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
                    <carousel :perPage="1" :paginationEnabled="false">
                        <slide>
                            <img class="col-md-6 p-0 img-responsive" src="../../assets/images/pre-discovery.jpg" alt="a">
                            <div>
                                <h2 class="slider-title mb-3">Doctor's Application</h2>
                                <p class="slider-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci animi assumenda consectetur deserunt dolorem ducimus eum, id ipsa, ipsam iusto minus modi nemo nobis quae repellat sit voluptates?</p>
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
                    {name: "Protoyping <br> and UXD", class: ""},
                    {name: "Development and Solution <br> Implementation", class: ""},
                    {name: "QA and Testing", class: ""},
                    {name: "Maintenance and <br> Support", class: ""},
                ],
                bars: [
                    { variant: 'empty', value: 0 },
                    { variant: 'primary', value: 20 },
                    { variant: 'empty', value: 80 },
                ],
                sliders: [
                    {img: "/pre-discovery.jpg", data: [
                            {title: "Pre-Discovery", text: "Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project"},
                            {title: "Pre-Discovery", text: "Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project"},
                            {title: "Pre-Discovery", text: "Consistency and Transparency Are Key To Our Delivery Process, So We Follow The Same Framework Regardless Of The Project"},
                        ]
                    },

                ]
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
                    }
                });
            },
            getImgUrl(pic) {
                return require('../../assets/images/'+pic)
            }
        }
    }
</script>

<style scoped>
    .section-fifth{
        padding: 50px 100px;
    }
    .bg-primary{
        background-color: #36a8e0!important;
    }
    .bg-empty{
        background-color: #e9ecef!important;
    }
    .title{
        text-align: center;
        font-size: 50px;
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
        font-size: 26px;
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
        font-size: 24px!important;
        letter-spacing: 2px;
    }
    .slider-points-cont{
        display: flex;
        justify-content: space-around;
    }
    .slider-cont img{
        height: 300px;
    }
</style>
