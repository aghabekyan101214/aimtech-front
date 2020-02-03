<template>
    <div class="about">
        <div class="container-fluid main-cont rounded-section mt-0">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-right">
                        <img class="img-fluid about-text" src="../assets/images/about/about-text.png" alt="Text">
                    </div>
                </div>
            </div>
        </div>
        <ProductDev/>
        <Team/>
<!--        <Partners/>-->
    </div>
</template>
<script>
    import ProductDev from "../components/about/ProductDev";
    import Team from "../components/about/Team";
    import Partners from "../components/about/Partners";

    export default {
        name: "About",
        components: {
            ProductDev,
            Team,
            Partners
        }
    }
</script>
<style>
    .main-cont{
        height: 290px;
        background-image: url("../assets/images/about/about-background-min.jpg");
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
    .about p{
        color: #1e3e55;
    }
    @media all and (max-width: 460px) {
        .about-text {
            height: 110px;
        }
        .about .main-cont .col-md-12.text-right{
            padding-right: 0;
        }
        .about .container{
            padding-right: 0;
        }

    }
</style>
