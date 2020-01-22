<template>
    <section class="section-fourth rounded-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-xs-12 text-cont">
                    <h2 class="title mb-5">The Problem-Solving <br> Technology Partnership</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus est iure nihil optio placeat, velit? Consequatur corporis doloremque doloribus ipsum iste nemo optio possimus reprehenderit vero voluptas! Consectetur, facere.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur cumque eaque eum eveniet exercitationem illo incidunt minima nostrum nulla pariatur perferendis praesentium quam quidem, repudiandae sed sequi sunt totam.</p>
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

</style>
