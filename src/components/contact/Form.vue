<template>
    <div class="contact-form rounded-section overflow-hidden">
        <section class="map-section">
            <div class="layout-op position-absolute"></div>
            <div class="container p-5">
                <div class="row">
                    <div class="contact-cont p-lg-5 p-4 col-md-8">
                        <div class="text-cont">
                            <h3 class="text-blue"><p class="dots float-left mt-2  mr-2"/>Contact us</h3>
                            <p>We are here to answer your all the questions</p>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="full_name" class="inp">
                                            <input type="text" v-model="full_name" id="full_name" ref="full_name"
                                                   placeholder=" " required>
                                            <span class="label">Full Name <i class="text-danger">&#42;</i></span>
                                            <span class="border"/>
                                        </label>
                                        <p class="text-danger" ref="err_name"></p>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="phone" class="inp">
                                            <input type="text" v-model="phone" id="phone" ref="phone" placeholder=" "
                                                   required>
                                            <span class="label">Phone Number <i class="text-danger">&#42;</i></span>
                                            <span class="border"/>
                                        </label>
                                        <p class="text-danger" ref="err_phone"></p>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="company" class="inp">
                                            <input type="text" v-model="company" ref="company" id="company"
                                                   placeholder=" ">
                                            <span class="label">Company Name</span>
                                            <span class="border"/>
                                        </label>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="email" class="inp">
                                            <input type="email" v-model="email" ref="email" id="email" placeholder=" ">
                                            <span class="label">Email <i class="text-danger">&#42;</i></span>
                                            <span class="border"/>
                                        </label>
                                        <p class="text-danger" ref="err_email"></p>
                                    </div>

                                    <div class="col-md-12">
                                        <label for="message" class="inp message">
                                            <textarea v-model="message" ref="message" name="message" id="message"
                                                      placeholder=" "/>
                                            <span class="label">Message</span>
                                            <span class="border"/>
                                        </label>
                                    </div>

                                    <div class="send-part col-md-12 mt-5">
                                        <button class="rounded-btn send btn btn-primary" ref="rounded_button"
                                                @click="send">Send Message
                                        </button>
                                        <img src="/loader.gif" class="send-loader" ref="loader" alt="Loader">
                                    </div>
                                    <div class="resp text-uppercase" ref="resp">
                                        thank you for your message. it has been sent!
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

    import axios from "axios";

    export default {
        name: "Form",
        data: () => {
            return {
                full_name: "",
                phone: "",
                company: "",
                email: "",
                message: ""
            }
        },
        methods: {
            send() {
                if (this.full_name == "") {
                    this.$refs.full_name.style.borderBottom = "2px solid red";
                    this.$refs.err_name.innerHTML = "Full name field must required!";
                    this.$refs.err_name.style.display = "block";
                    return;
                } else if (this.phone == "") {
                    this.$refs.phone.style.borderBottom = "2px solid red";
                    this.$refs.err_phone.innerHTML = "Phone number field must required!";
                    return;
                } else if (this.email == "") {
                    this.$refs.email.style.borderBottom = "2px solid red";
                    this.$refs.err_email.innerHTML = "Email field must required!";
                    return;
                } else if (this.email != "") {
                    if (this.validateEmail(this.email) === false) {
                        this.$refs.email.style.borderBottom = "2px solid red";
                        this.$refs.err_email.innerHTML = "Please enter valid email!";
                        return;
                    }
                }
                this.$refs.rounded_button.style.display = "none";
                this.$refs.loader.style.display = "block";
                this.$refs.err_email.style.display = "none";
                this.$refs.err_name.style.display = "none";
                this.$refs.err_phone.style.display = "none";
                this.$refs.full_name.style.borderBottom = "2px solid #0c4a80";
                this.$refs.phone.style.borderBottom = "2px solid #0c4a80";
                this.$refs.email.style.borderBottom = "2px solid #0c4a80";

                axios.post('https://emails.aimtech.am/index.php', {
                        full_name: this.full_name,
                        phone: this.phone,
                        company: this.company,
                        email: this.email,
                        message: this.message,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                    })
                    .then((response) => {
                        this.$refs.resp.style.display = "block";
                        this.$refs.rounded_button.style.display = "block";
                        this.$refs.loader.style.display = "none";
                        this.full_name = "";
                        this.phone = "";
                        this.company = "";
                        this.email = "";
                        this.message = "";
                        setTimeout(() => { this.$refs.resp.style.display = "none"; }, 20000)
                    })
                    .catch((error) => {
                        this.$refs.rounded_button.style.display = "block";
                        this.$refs.loader.style.display = "none";
                    });

            },
            validateEmail(mail) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                    return true;
                }

                return false;
            }
        }
    }
</script>

<style scoped>
    .map-section {
        width: 100%;
        background-image: url("../../assets/images/contact/map.svg");
        background-size: cover;
        position: relative;
        background-repeat: no-repeat;
    }

    .layout-op {
        height: 100%;
        width: 100%;
        opacity: .9;
        background-color: #fff;
    }

    .contact-cont {
        background-color: #fff;
        width: 100%;
        position: relative;
        z-index: 10;
        box-shadow: 1px 5px 18px grey;
        margin: 0 auto;
    }

    .dots {
        height: 13px;
        width: 13px;
        background-color: #37a7e0;
        border-radius: 50%;
    }

    .send-loader {
        height: 30px;
        display: none;
    }

    label {
        max-width: 100% !important;
    }

    /*input part*/
    .inp {
        position: relative;
        margin: auto;
        margin-top: 35px;
        width: 100%;
        max-width: 400px;
        margin-left: 0;
    }

    .inp .label {
        position: absolute;
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

    .inp input:not(:placeholder-shown) + span, .inp textarea:not(:placeholder-shown) + span {
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

    .inp input:focus + span + .border {
        transform: scaleX(1);
    }

    .contact-icons-cont {
        background-color: #0c4a80;
        border-radius: 0 85px 5px 0;
        box-shadow: 1px 5px 18px grey;
    }

    .contact-icons-cont h3, .contact-icons-cont p {
        color: white !important;
    }

    .resp {
        display: none;
        border: 2px solid green;
        padding: 5px 10px;
        margin-top: 20px;
        width: 100%;
        text-align: center;
    }
</style>
