<template>
    <div class="jobs">
        <div class="container-fluid pt-5 pb-5">

            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="logo-cont mb-3">
                        <img class="img-fluid" src="../../assets/images/portfolio/slavmed-logo.png" alt="Slavmed Logo Aimtech">
                    </div>
                    <h2 class="title-portfolio mb-3">Doctor's Application</h2>
                    <div class="text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt itaque saepe velit. Architecto asperiores aspernatur autem cum eveniet ex laborum nobis optio quisquam, totam ut veniam, voluptatem. Fugiat, vero?</p>
                    </div>
                    <div class="button-cont">
                        <a href="#">
                            <button class="btn app-store-button"/>
                        </a>
                        <a href="#">
                            <button class="btn play-market-button"/>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 text-lg-right text-md-right">
                    <img class="img-fluid" src="../../assets/images/portfolio/slav-med.png" alt="Slavmed">
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-md-6">
                    <img class="img-fluid" src="../../assets/images/portfolio/my-forest.png" alt="Myforest">
                </div>
                <div class="col-md-6">
                    <div class="logo-cont mb-3 text-lg-right text-md-right">
                        <img class="img-fluid" src="../../assets/images/portfolio/myforest-logo-min.png" alt="Myforest">
                    </div>
                    <h2 class="title-portfolio mb-3 text-lg-right text-md-right">Doctor's Application</h2>
                    <div class="text-container">
                        <p class="text-lg-right text-md-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt itaque saepe velit. Architecto asperiores aspernatur autem cum eveniet ex laborum nobis optio quisquam, totam ut veniam, voluptatem. Fugiat, vero?</p>
                    </div>
                    <div class="button-cont text-lg-right text-md-right">
                        <button class="btn rounded-btn">Visit Website</button>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="logo-cont mb-3">
                        <img class="img-fluid" src="../../assets/images/portfolio/gabig-logo.png" alt="Gabig Creative Logo">
                    </div>
                    <h2 class="title-portfolio mb-3">Doctor's Application</h2>
                    <div class="text-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt itaque saepe velit. Architecto asperiores aspernatur autem cum eveniet ex laborum nobis optio quisquam, totam ut veniam, voluptatem. Fugiat, vero?</p>
                    </div>
                    <div class="button-cont">
                        <button class="btn rounded-btn">Visit Website</button>
                    </div>
                </div>
                <div class="col-md-6 text-lg-right text-md-right">
                    <img class="img-fluid" src="../../assets/images/portfolio/gabig-min.png" alt="Gabig Creative">
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-md-6">
                    <img class="img-fluid" src="../../assets/images/portfolio/abakus-min.png" alt="Abakus">
                </div>
                <div class="col-md-6">
                    <div class="logo-cont mb-3 text-lg-right text-md-right">
                        <img class="img-fluid" src="../../assets/images/portfolio/abakus-logo.png" alt="Abakus logo">
                    </div>
                    <h2 class="title-portfolio mb-3 text-lg-right text-md-right">Doctor's Application</h2>
                    <div class="text-container">
                        <p class="text-lg-right text-md-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt itaque saepe velit. Architecto asperiores aspernatur autem cum eveniet ex laborum nobis optio quisquam, totam ut veniam, voluptatem. Fugiat, vero?</p>
                    </div>
                    <div class="button-cont text-lg-right text-md-right">
                        <button class="btn rounded-btn">Visit Website</button>
                    </div>
                </div>
            </div>

        </div>



    </div>
</template>

<script>
    export default {
        name: "Jobs"
    }
</script>

<style scoped>
    .title-portfolio{
        font-size: 24px;
        color: #0c4a80;
    }
    .logo-cont img{
        height: 60px;
    }
    .app-store-button{
        background-image: url("../../assets/images/portfolio/app-store.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 40px;
        width: 160px;
    }
    .play-market-button{
        background-image: url("../../assets/images/portfolio/play-market.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 40px;
        width: 160px;
    }
    @media all and (max-width: 480px){
        .row.align-items-center{
            margin-bottom: 20px;
        }
    }
</style>
