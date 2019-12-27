<template>
    <section ref="map_cont" class="section-sixth container-fluid" id="map_cont">
        <div class="contact">
            <div class="form col-md-6 pl-0">
                <h3>Contact Us</h3>
                <div class="form-part">
                    <label for="full_name" class="inp">
                        <input type="text" id="full_name" placeholder=" ">
                        <span class="label">Full Name</span>
                        <span class="border"></span>
                    </label>

                    <label for="phone" class="inp">
                        <input type="text" id="phone" placeholder=" ">
                        <span class="label">Phone Number</span>
                        <span class="border"></span>
                    </label>

                    <label for="email" class="inp">
                        <input type="text" id="email" placeholder=" ">
                        <span class="label">Email</span>
                        <span class="border"></span>
                    </label>

                    <label for="country" class="inp">
                        <input type="text" id="country" placeholder=" ">
                        <span class="label">Country</span>
                        <span class="border"></span>
                    </label>

                    <label for="company" class="inp">
                        <input type="text" id="company" placeholder=" ">
                        <span class="label">Company</span>
                        <span class="border"></span>
                    </label>

                    <label class="space"></label>

                    <label for="message" class="inp message">
                        <input type="text" id="message" placeholder=" ">
                        <span class="label">Message</span>
                        <span class="border"></span>
                    </label>

                    <label class="space"></label>

                    <label class="fileContainer col-md-6">
                        Add an attachment
                        <input type="file" class="file"/>
                    </label>

                    <div class="checkbox-part col-md-12">
                        <input type="checkbox" id="check">
                        <label for="check">I want to receive and updates once in a while</label>
                    </div>
                    <div class="send-part col-md-12">
                        <button class="rounded-btn send btn btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
            <div  class="map col-md-4">
                <Map v-if="map_show" />
            </div>
        </div>
    </section>
</template>

<script>

    import Map from "./Map"

    export default {
        name: "ContactUs",
        components: {
            Map
        },
        data: () => {
            return {
                map_show: false,
                map_pos: -1
            }
        },
        methods: {
            handleScroll (event) {
                let doc_pos = document.documentElement.scrollTop;

                if(doc_pos >= (this.map_pos - 600)) {
                    this.map_show = true;
                    window.removeEventListener('scroll', this.handleScroll);
                }
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        mounted() {
            this.map_pos = (document.getElementById("map_cont").offsetTop - document.getElementById("map_cont").clientHeight);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .section-sixth {
        height: auto;
        min-height: 855px;
        background-image: url("../../assets/images/contact-us.jpg");
        background-color: #326d97;
        background-size: cover;
        padding-bottom: 15px;
    }
    .contact {
        width: 100%;
        padding-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .map {
        padding-top: 100px;
        margin: 0;
    }
    .form {
        height: auto;
    }
    .form-part {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    /*input part*/
    .inp {
        position: relative;
        margin: auto;
        padding-top: 50px;
        width: 100%;
        max-width: 400px;
        margin-left: 0;
    }
    .space {
        position: relative;
        margin: auto;
        width: 100%;
        max-width: 400px;
    }
    .inp .label {
        position: absolute;
        top: 40px;
        left: 0;
        font-size: 20px;
        color: white;
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
    .inp input {
        -webkit-appearance: none;
        width: 100%;
        border: 0;
        font-family: inherit;
        padding: 12px 0;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 2px solid white;
        background: none;
        border-radius: 0;
        color: white;
        transition: all 0.15s ease;
    }
    .inp input:not(:placeholder-shown) + span {
        color: white;
        transform: translateY(-20px) scale(0.75);
    }
    .inp input:focus {
        background: none;
        outline: none;
    }
    .inp input:focus + span {
        color: white;
        transform: translateY(-10px) scale(0.75);
    }
    .inp input:focus + span + .border {
        transform: scaleX(1);
    }

    /*input type file */
    .fileContainer {
        padding: 50px 0 50px 100px;
        color: white;
        font-size: 20px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
    }
    .fileContainer [type=file] {
        cursor: inherit;
        display: block;
        filter: alpha(opacity=0);
        opacity: 0;
        position: absolute;
        left: 0;
        text-align: left;
    }

    /*checkbox part*/
    .checkbox-part {
        /*display: block;*/
        /*padding: 0 0 25spx 25px;*/
    }
    .checkbox-part input {
        height: 50px;
        width: 50px;
        display: none;
        cursor: pointer;
    }
    .checkbox-part label {
        position: relative;
        cursor: pointer;
        color: white;
        letter-spacing: 2px;
    }
    .checkbox-part label:before {
        content: '';
        -webkit-appearance: none;
        background-color: transparent;
        border: 2px solid white;
        padding: 10px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
    }
    .checkbox-part input:checked + label:after {
        content: '';
        display: block;
        position: absolute;
        top: 4px;
        left: 9px;
        width: 6px;
        height: 14px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    /*send button part */
    .send-part{
        padding-top: 50px;
    }
    .form > h3 {
        font-size: 32px;
        color: white;
    }
    @media all and (max-width: 460px) {
        .map{
            display: none;
        }
        .send-part{
            text-align: center;
        }
        .section-sixth {
            background-image: none;
        }
    }
</style>
