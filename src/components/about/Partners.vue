<template>
    <div class="container-fluid">
        <div class="container">
                <div class="row">
                    <div class="col-md-12 m-auto">
                        <carousel :perPage="1" :paginationEnabled="false" :perPageCustom="[[320, 1], [768, 2], [1024, 4]]" >
                            <slide class="text-center p-3">
                                <img class="img-fluid" src="../../assets/images/about/abakus-logo-min.png" alt="Abakus Logo">
                            </slide>
                            <slide class="text-center p-3">
                                <img class="img-fluid" src="../../assets/images/about/smooshop-logo-min.png" alt="Smooshop Logo">
                            </slide>
                            <slide class="text-center p-3">
                                <img class="img-fluid" src="../../assets/images/about/abakus-logo-min.png" alt="Abakus Logo">
                            </slide>
                            <slide class="text-center p-3">
                                <img class="img-fluid" src="../../assets/images/about/smooshop-logo-min.png" alt="Smooshop Logo">
                            </slide>
                        </carousel>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: "Partner",
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped>
    .container-fluid{
        background-image: url("../../assets/images/about/partners-bg-min.jpg");
        background-size: cover;
        height: 181px;
    }
    .container, .row{
        height: 100%;
    }
</style>
