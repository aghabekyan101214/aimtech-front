<template>
    <div class="about">
        <div class="container-fluid main-cont rounded-section mt-0">
            <div class="container">
                <div class="row">
                    <h2 class="title">About <span class="text-blue">Us</span></h2>
                </div>
            </div>
        </div>
        <ProductDev/>
        <Team/>
        <Partners/>
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
    }
</style>
