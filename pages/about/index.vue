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
                <div class="ourMission-img" />
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

             <div class="about-section reverse">
                 <div>
                     <div class="value-content">
                          <p class="about-section-header">
                        HOW WE BRING <span class="about-landing-content-highlight">VALUE</span>
                    </p>
                    <p class="about-section-content">
                        As true partners and creative problem solvers,
we ensure that each of our services lead to your
satisfaction and success.
                    </p>

                    <p class="about-section-subHead">
                        PRE-PRODUCTION
                    </p>
                    <p class="about-section-content">
                        With a team dedicated to Pre-Production, we
guarantee to provide the highest quality result for
all of our clients. No matter what type of project
you’re looking to create, we’re here to make it reality.
                    </p>
                    <p class="about-section-subHead">
                        POST-PRODUCTION
                    </p>
                    <p class="about-section-content">
                       When it comes to Post-Production, you can count on
us to continue working until it’s exactly what you’re
looking for while still staying within your timeline and
budget. If you have questions, contact us today.
                    </p>
                    </div>
                </div>
                 <div class="value-img" />
             </div>

                  <div class="team-container">
                    <p class="about-section-header">
                       MEET THE TEAM
                    </p>
                    <div class="team-members">
                        <div>
                            <div class="members-img"><img src="~/assets/img/trentonCotten.png" alt="Trenton Cotten"/></div>
                            <p class="members-name">TRENTON COTTEN</p>
                            <p class="members-position">Creative Director / Producer</p>
                        </div>
                        <div>
                            <div class="members-img"><img src="~/assets/img/tauraCotten.png" alt="Taura Cotten"/></div>
                            <p class="members-name">Taura Cotten</p>
                            <p class="members-position">Project / Business Manager</p>

                        </div>
                        <div>
                            <div class="members-img"><img src="~/assets/img/julieRamirez.png" alt="Julie Ramirez"/></div>
                            <p class="members-name">Julie Ramirez</p>
                            <p class="members-position">Producer</p>

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
            min-height: 90vh;
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
                font-size: 40px;
                font-weight: 800;
                margin-bottom: 15px;
                text-transform: capitalize;
            }

            &-subHead{
                font-size: 28px;
                font-weight: 600;
                margin: 50px 0px 15px;
                text-transform: capitalize;
            }

            &-content{
                font-size: 20px;
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

    .value{
        &-img{
            background-image: url(~/assets/img/about-img2.jpg);
            background-size:cover;
            background-repeat: no-repeat;
            background-position: center center;
            height: 820px;
        }

        &-content{
             padding: 160px 40px;
        }
    }

    .team{
        &-container{
            display: flex;
            flex-direction: column;
            padding: 0px 60px;
            margin: 40px auto 20px;
        }

        &-members{
            display: flex !important;
            justify-content: space-evenly !important;
            flex-wrap: wrap !important;

            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 10px 20px;
                width: 300px;
                height: 380px;
                transition: linear 1s;
            }
        }
    }

    .members{
        div{
            flex: none !important;
        }
        &-img{
             display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    overflow: hidden;
    border-radius: 50%;
        }

        &-name{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
        }

        &-position{
            font-size: 16px;
        }
    }

     .reverse{
                flex-wrap: wrap-reverse !important;
            }
</style>
