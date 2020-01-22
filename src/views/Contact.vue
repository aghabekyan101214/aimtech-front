<template>
    <div class="contact">
        <div class="container-fluid main-cont">
            <div class="container">
                <div class="row">
                    <h2 class="title">Contact <span class="text-blue">Us</span></h2>
                </div>
            </div>
        </div>
        <Form/>
    </div>
</template>
<script>

    import Form from "../components/contact/Form";

    export default {
        name: "Contact",
        components: {
            Form
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
    .contact p{
        color: #1e3e55;
    }
</style>
