<template>
    <section class="section-fourth rounded-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-xs-12 text-cont">
                    <h2 class="title mb-5">The Problem-Solving <br> <span class="text-blue">Technology Partnership</span></h2>
                    <p> <span class="text-blue">“</span> Communication is the foundation of success <span class="text-blue">”</span> ~ Gary Vaynerchuk</p>
                    <p> <span class="text-blue">“</span> Saying hello doesn’t have an ROI. It’s about building relationships <span class="text-blue">”</span> ~ Gary Vaynerchuck</p>
                    <p>Communication is what makes Aimtech unique. We invest our time in deeply understanding our clients and their needs. We study their industry, analyze the market and propose our suggestions to our clients which clarifies what and how they want their product to be and that’s how we build solid and meaningful relationships.</p>
                </div>
                <div class="col-md-6 col-xs-12">
                    <img class="img-fluid" v-lazy="require('../../assets/images/problem-solving.jpg')" alt="">
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .section-fourth{
        background-color: #f0f0f0;
        padding: 50px 0;
    }
    .title{
        text-align: center;
        font-size: 32px;
        letter-spacing: 2px;
        color: #011f34;
    }

    @media all and (max-width: 460px) {
        .title {
            font-size: 32px;
        }

    }
    .text-cont .text-blue{
        font-size: 22px;
    }

</style>
