<template>
    <section class="section-fifth rounded-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-cont mb-5">
                    <h2 class="title mb-3">What We Do</h2>
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
                    <b-progress class="mt-2" :max="120">
                        <b-progress-bar v-for="(bar, i) in bars" :key="i" :value="bar.value" :variant="bar.variant"/>
                    </b-progress>
                </div>
                <div class="col-md-12 mt-5 slider-cont">
                    <carousel :perPage="1" @pageChange="handleChange" :paginationEnabled="false" ref="carousel">

                        <slide>
                            <div class="col-lg-3 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/whatwedo/discovery-min.jpg')" alt="a">
                            </div>
                            <div class="col-md-6 slider-text-cont pl-lg-5 pl-md-3">
                                <p class="slider-title mb-3">Discovery Phase</p>
                                <p class="slider-text">We give the utmost importance to understand a client’s product vision, design, and branding preferences. Here’s when we learn about your goals, talk about any challenges and opportunities, and work with you on an initial feature list.</p>
                                <p class="slider-text"> We work in a collaborative approach involving key stakeholders ensuring that we develop the product that our client and end users really need.</p>
                            </div>
                        </slide>

                        <slide>
                            <div class="col-lg-3 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/whatwedo/planning-min.jpg')" alt="a">
                            </div>
                            <div class="col-md-6 slider-text-cont pl-lg-5 pl-md-3">
                                <p class="slider-title mb-3">Planning</p>
                                <p class="slider-text">Our web development and design services emphasize on well-defined project planning and leave nothing for assumption to avoid miscommunication.</p>
                                <p class="slider-text"> We write down how we are going to proceed further, define detailed technical specifications and get confirmation and approval from the clients’.</p>
                            </div>
                        </slide>

                        <slide>
                            <div class="col-lg-3 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/whatwedo/design-min.jpg')" alt="a">
                            </div>
                            <div class="col-md-6 slider-text-cont pl-lg-5 pl-md-3">
                                <p class="slider-title mb-3">Design</p>
                                <p class="slider-text">We provide clients with Web, Tablet, and Mobile-specific UI designs of the projects based on the approved wireframes and design guidelines. </p>
                                <p class="slider-text">We deliver clickable prototype on Invision platform and the source files in either Photoshop or Sketch format. Getting system UI designs approved and confirmed by the client is one of our objectives at this stage.</p>
                            </div>
                        </slide>

                        <slide>
                            <div class="col-lg-3 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/whatwedo/development-min.jpg')" alt="a">
                            </div>
                            <div class="col-md-6 slider-text-cont pl-lg-5 pl-md-3">
                                <p class="slider-title mb-3">Development</p>
                                <p class="slider-text">At this stage, we cater requirements for frontend, backend, web services, and API development integration. Along with preparing a strategy for Agile Scrum methodology, we factor the aspects of scalability, multi-tenancy, 3rd party integration, and craft an optimized clean code structure using cutting-edge technologies.</p>
                                <p class="slider-text">We make sure to involve and implement clients’ reviews in each sprint/milestone</p>
                            </div>
                        </slide>

                        <slide>
                            <div class="col-lg-3 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/whatwedo/testing-min.jpg')" alt="a">
                            </div>
                            <div class="col-md-6 slider-text-cont pl-lg-5 pl-md-3">
                                <p class="slider-title mb-3">Testing</p>
                                <p class="slider-text">We test each feature manually, report bugs and add those to product backlog. Once the bug fixing is done, we provide the quality release and then the final demo of the feature is sent for clients’ approval.</p>
                                <p class="slider-text">We make sure to do regression testing to ensure proper functioning of the previously approved milestones/sprints.
                                    Depending on the application size, the available budget and some other factors a decision is made regarding developing automated tests as well.</p>
                            </div>
                        </slide>

                        <slide>
                            <div class="col-lg-3 col-md-5 p-0">
                                <img class="img-fluid" v-lazy="require('../../assets/images/whatwedo/maintenance-min.jpg')" alt="a">
                            </div>
                            <div class="col-md-6 slider-text-cont pl-lg-5 pl-md-3">
                                <p class="slider-title mb-3">Maintenance</p>
                                <p class="slider-text">Our work doesn’t end with development, we go the extra mile for our clients. We ensure product enhancement by identifying areas where it could be better. We do regular Security Audits, Bi-weekly code backups, and constant system upgradation.</p>
                                <p class="slider-text"> Our support team monitors the traffic and server load, accordingly optimizing it and ensuring the smooth operation of the application.</p>
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
            Slide,
        },
        data: () => {
            return {
                points: [
                    {name: "Discovery", class: "active"},
                    {name: "Planning", class: ""},
                    {name: "Design", class: ""},
                    {name: "Development", class: ""},
                    {name: "Testing", class: ""},
                    {name: "Maintenance", class: ""},
                ],

                bars: [
                    { variant: 'empty', value: 0 },
                    { variant: 'primary', value: 20 },
                    { variant: 'empty', value: 100 },
                ],
                def_name: 'Discovery'
            }
        },
        methods: {
            change(n) {
                let first = n * this.bars[1].value;
                let third = 120 - (first + 20);
                this.bars[0].value = first;
                this.bars[2].value = third;
                console.log(first, third);
                this.points.forEach((e, i) => {
                    e.class = "";
                    if(n == i) {
                        e.class = "active";
                        this.def_name = e.name;
                    }
                });
                this.$refs.carousel.goToPage(n)
            },
            handleChange() {
                this.change(this.$refs.carousel.currentPage);
            }

        },

    }
</script>

<style scoped>
    .section-fifth{
        padding: 30px 0 50px 0;
        background: #fff;
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
        font-size: 32px;
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
        font-family: 'robotolight', sans-serif;
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
        color: white!important;
    }
    .point-box > p{
        text-align: center;
    }

    .text{
        text-align: center;
        font-size: 16px!important;
        letter-spacing: 2px;
    }
    .slider-points-cont{
        display: flex;
        justify-content: space-around;
    }

    .slider-text-cont{
        padding-left: 0;
    }
    .slider-title{
        color: #36a8e0;
        font-size: 18px;
        margin-bottom: 3px!important;
        letter-spacing: 2px;
    }
    .slider-text{
        color: #1e3e55;
        font-size: 14px!important;
        letter-spacing: 2px;
    }
    .VueCarousel-slide{
        display: flex;
    }
    @media all and (min-width: 1200px) {
        .point-box:hover .number-box{
            background-color: #36a8e0;
            color: white;
        }
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
            font-family: robotolight, sans-serif;
        }
        .number-box{
            width: 45px;
            height: 45px;
        }
    }
</style>
