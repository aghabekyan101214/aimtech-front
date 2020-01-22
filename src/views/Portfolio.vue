<template>
    <div class="about">
        <div class="container-fluid main-cont rounded-section mt-0">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="title">Our <span class="text-blue">Work</span></h2>
                    </div>
                </div>
            </div>
        </div>
        <Jobs/>
    </div>
</template>

<script>
    import Jobs from "../components/portfolio/Jobs";

    export default {
        name: "Portfolio",
        components: {
            Jobs
        }
    }
</script>

<style scoped>
    .main-cont{
        height: 390px;
        background-image: url("../assets/images/about/header-img-min.jpg");
        background-size: cover;
        display: flex;
        align-items: center;
    }
    .title{
        text-transform: uppercase;
        color: white;
    }
    .section-title2 img{
        height: 40px;
        width: 40px;
    }
    p{
        color: #1e3e55;
        letter-spacing: 2px;
    }
</style>
