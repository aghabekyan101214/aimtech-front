<template>
    <div class="section rounded-section">
        <div class="container pt-5 pb-5">
            <h2 class="text-center mb-5"><span class="text-blue">Meet Our Team</span></h2>
            <div class="row">

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/mariana.jpg" alt="Marianna Atshemyan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">Marianna Atshemyan</p>
                        <p class="m-0">Front End and Wordpress Developer</p>
                    </div>
                </div>

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/zara.jpg" alt="Zara Tunyan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">Zara Tunyan</p>
                        <p class="m-0">Android Developer</p>
                    </div>
                </div>

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/eduard.jpg" alt="Eduard Shahnazaryan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">Eduard Shahnazaryan</p>
                        <p class="m-0">IOS Developer</p>
                    </div>
                </div>

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/armenuhi.jpg" alt="Armenuhi Mkrtchyan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">Armenuhi Mkrtchyan</p>
                        <p class="m-0">IOS Developer</p>
                    </div>
                </div>

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/ania.jpg" alt="Aniya Gharibyan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">Aniya Gharibyan</p>
                        <p class="m-0">Graphic Designer</p>
                    </div>
                </div>

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/pargev.jpg" alt="Pargev Aghabekyan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">Pargev Aghabekyan</p>
                        <p class="m-0">Full Stack Developer</p>
                    </div>
                </div>

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/davit.jpg" alt="David Kocharyan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">David Kocharyan</p>
                        <p class="m-0">Full Stack Developer</p>
                    </div>
                </div>

                <div class="col-md-4 position-relative mb-5">
                    <div class="img-cont">
                        <img class="img-fluid" src="../../assets/images/about/sona.jpg" alt="Sona Sargsyan">
                    </div>
                    <div class="about position-absolute text-center pt-1 pb-1">
                        <p class="m-0">Sona Sargsyan</p>
                        <p class="m-0">IOS Developer</p>
                    </div>
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
    .section {
        background: #fff;
    }
</style>
