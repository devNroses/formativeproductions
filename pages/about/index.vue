<template>
<div>

    <div class="about-landing">
        <div class="about-landing-content">
            <p>
                “Whether you’re starting
with a vague idea or a
<br>fully-fleshed out concept,
<span class="about-landing-content-highlight">Formative Productions</span>
can bring your vision
to life.”</p>
        </div>
    </div>

      <div class="about-section">
            <div>
                <div class="ourMission-img"> Image </div>
            </div>
            <div>
                <div class="ourMission-content">
                    <p class="about-section-header">
                        OUR MISSION
                    </p>
                    <p class="about-section-content">
                        To produce visual content that resonates with viewers,
regardless of genre, scale or platform. From creating
the overall strategy, to organizing and executing the
shoot, to managing the multifaceted post-production
process, we ensure our clients’ projects are seamless
from start to finish.
</p>
                </div>
            </div>
            </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="scss" scope>
    .about{
        &-landing{
            background-image: url(~/assets/img/about-landing.jpg);
            background-size:cover;
            background-repeat: no-repeat;
            background-position: center center;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 60px;
            width: 100%;

            &-content{
                color: white;
                font-weight: bolder;
                font-size: 38px;
                line-height: 1.25em;
                word-wrap: break-word;
                margin: 200px 0px 0px;
                max-width: 500px;
                min-width: 300px;
                width: 100%;
                -webkit-hyphens: none;
-moz-hyphens: none;
hyphens: none;

&-highlight{
    color: #E3B047;
}

            }
        }

        &-section{
            border: 2px solid hotpink;
            display: flex;
            justify-items: baseline;
            align-items: flex-start;
            flex-wrap: wrap;
            padding: 60px;

            div{
                flex: 1 1 0;
                min-width: 380px;
            }

            &-header{
                font-size: 36px;
                font-weight: bolder;
                margin-bottom: 15px;
                text-transform: capitalize;
            }

            &-content{
                font-size: 18px;
                width: 85%;
                line-height: 1.45em;
            }

        }
    }

    .ourMission{
        &-img{
             background-image: url(~/assets/img/about-img1.jpg);
            background-size:cover;
            background-repeat: no-repeat;
            background-position: center center;
            width: 100%;
            height: 580px;
        }

        &-content{
            height: 500px;
            padding: 120px 40px;
        }
    }
</style>
