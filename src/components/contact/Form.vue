<template>
    <div class="contact-form rounded-section overflow-hidden">
        <section class="map-section">
            <div class="layout-op position-absolute"></div>
            <div class="container p-5">
                <div class="row">
                    <div class="contact-cont p-5">
                        <div class="text-cont">
                            <h3 class="text-blue"><p class="dots float-left mt-2  mr-2"/>Contact us</h3>
                            <p>We are here to answer your all the questions</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="full_name" class="inp">
                                            <input type="text" id="full_name" placeholder=" ">
                                            <span class="label">Full Name</span>
                                            <span class="border"/>
                                        </label>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="phone" class="inp">
                                            <input type="text" id="phone" placeholder=" ">
                                            <span class="label">Phone Number</span>
                                            <span class="border"/>
                                        </label>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="email" class="inp">
                                            <input type="text" id="email" placeholder=" ">
                                            <span class="label">Email</span>
                                            <span class="border"/>
                                        </label>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="email" class="inp">
                                            <input type="text" id="email" placeholder=" ">
                                            <span class="label">Email</span>
                                            <span class="border"/>
                                        </label>
                                    </div>

                                    <div class="col-md-12">
                                        <label for="message" class="inp message">
                                            <textarea name="message" id="message"/>
                                            <span class="label">Message</span>
                                            <span class="border"/>
                                        </label>
                                    </div>

                                    <div class="send-part col-md-12 mt-5">
                                        <button class="rounded-btn send btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 p-lg-5 p-md-5 d-none d-xl-block d-md-block d-sm-block">
                                <div class="contact-icons-cont p-4">
                                    <div class="text-area">
                                        <div class="reach">
                                            <h3 class="text-blue"><p class="dots float-left mt-2  mr-2"/>Reach us</h3>
                                        </div>
                                        <p class="mb-4"><img height="25" class="mr-3" src="../../assets/images/contact/phone.svg"/> +374 55 55 77 44</p>
                                        <p class="mb-4"><img height="30" class="mr-3" src="../../assets/images/contact/email.svg"/> info@aimtech.am</p>
                                        <p class="mb-4"><img height="35" class="mr-3" src="../../assets/images/contact/address.svg"/> Hakob Hakobyan 3, Yerevan, Armenia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Form"
    }
</script>

<style scoped>
    .map-section{
        width: 100%;
        background-image: url("../../assets/images/contact/map.svg");
        background-size: cover;
        position: relative;
        background-repeat: no-repeat;
    }
    .layout-op{
        height: 100%;
        width: 100%;
        opacity: .9;
        background-color: #fff;
    }
    .contact-cont{
        background-color: #fff;
        width: 100%;
        position: relative;
        z-index: 10;
        box-shadow: 1px 5px 18px grey;
    }

    .dots{
        height: 13px;
        width: 13px;
        background-color: #37a7e0;
        border-radius: 50%;
    }
    label{
        max-width: 100% !important;
    }
    /*input part*/
    .inp {
        position: relative;
        margin: auto;
        padding-top: 35px;
        width: 100%;
        max-width: 400px;
        margin-left: 0;
    }

    .inp .label {
        position: absolute;
        top: 40px;
        left: 0;
        font-size: 17px;
        color: #0c4a80;
        font-weight: 300;
        transform-origin: 0 0;
        transition: all 0.2s ease;
    }
    .inp .border {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: #07f;
        transform: scaleX(0);
        transform-origin: 0 0;
        transition: all 0.15s ease;
    }
    .inp input, .inp textarea {
        -webkit-appearance: none;
        width: 100%;
        border: 0;
        font-family: inherit;
        padding: 12px 0;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 2px solid #0c4a80;
        background: none;
        border-radius: 0;
        color: #0c4a80;
        transition: all 0.15s ease;
        overflow: hidden;
    }
    .inp input:not(:placeholder-shown) + span{
        color: #0c4a80;
        transform: translateY(-20px) scale(0.75);
    }
    .inp input:focus, .inp textarea:focus {
        background: none;
        outline: none;
    }
    .inp input:focus + span, .inp textarea:focus + span {
        color: #0c4a80;
        transform: translateY(-10px) scale(0.75);
    }
    .inp input:focus + span + .border{
        transform: scaleX(1);
    }
    .contact-icons-cont{
        background-color: #0c4a80;
        border-radius: 0 85px 5px 0;
        box-shadow: 1px 5px 18px grey;
    }
    .contact-icons-cont h3, .contact-icons-cont p{
        color: white!important;
    }
</style>
