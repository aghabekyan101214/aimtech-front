<template>
    <div class="container pt-5 pb-5">
        <h2 class="text-center mb-5"><span class="text-blue">Meet Our Team</span></h2>
        <div class="row">
            <div class="col-md-4 position-relative mb-5">
                <div class="img-cont">
                    <img class="img-fluid" src="../../assets/images/about/img1-min.jpeg" alt="Worker">
                </div>
                <div class="about position-absolute text-center pt-1 pb-1">
                    <p class="m-0">Name Surname</p>
                    <p class="m-0">Web Developer</p>
                </div>
            </div>
            <div class="col-md-4 position-relative mb-5">
                <div class="img-cont">
                    <img class="img-fluid" src="../../assets/images/about/img1-min.jpeg" alt="Worker">
                </div>
                <div class="about position-absolute text-center pt-1 pb-1">
                    <p class="m-0">Name Surname</p>
                    <p class="m-0">Web Developer</p>
                </div>
            </div>
            <div class="col-md-4 position-relative mb-5">
                <div class="img-cont">
                    <img class="img-fluid" src="../../assets/images/about/img1-min.jpeg" alt="Worker">
                </div>
                <div class="about position-absolute text-center pt-1 pb-1">
                    <p class="m-0">Name Surname</p>
                    <p class="m-0">Web Developer</p>
                </div>
            </div>
            <div class="col-md-4 position-relative mb-5">
                <div class="img-cont">
                    <img class="img-fluid" src="../../assets/images/about/img2-min.jpg" alt="Worker">
                </div>
                <div class="about position-absolute text-center pt-1 pb-1">
                    <p class="m-0">Name Surname</p>
                    <p class="m-0">Web Developer</p>
                </div>
            </div>
            <div class="col-md-4 position-relative mb-5" >
                <div class="img-cont">
                    <img class="img-fluid" src="../../assets/images/about/img3-min.jpg" alt="Worker">
                </div>
                <div class="about position-absolute text-center pt-1 pb-1">
                    <p class="m-0">Name Surname</p>
                    <p class="m-0">Web Developer</p>
                </div>
            </div>
            <div class="col-md-4 position-relative mb-5">
                <div class="img-cont">
                    <img class="img-fluid" src="../../assets/images/about/img2-min.jpg" alt="Worker">
                </div>
                <div class="about position-absolute text-center pt-1 pb-1">
                    <p class="m-0">Name Surname</p>
                    <p class="m-0">Web Developer</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Team"
    }
</script>

<style scoped>
    .img-cont{
        overflow: hidden;
    }
    .img-cont img {
        transition: .5s;
    }
    .img-cont img:hover{
        transform: scale(1.05);
    }
    .about{
        width: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: #0c4a80;
    }
    .about p {
        color: white;
        font-size: 15px;
    }
    .about p:first-child{
        font-family: robotolight, sans-serif;
    }
</style>
