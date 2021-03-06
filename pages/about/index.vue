<template>
  <div class="about-container">
    <div class="about-landing">
      <div class="about-landing-content">
        <p>
          “Whether you’re starting with a vague idea or a
          <span>fully-fleshed</span> out concept,
          <span class="about-landing-content-highlight"
            >Formative Productions</span
          >
          can bring your vision to life.”
        </p>
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
            To produce visual content that resonates with viewers, regardless of
            genre, scale or platform. From creating the overall strategy, to
            organizing and executing the shoot, to managing the multifaceted
            post-production process, we ensure our clients’ projects are
            seamless from start to finish.
          </p>
        </div>
      </div>
    </div>

    <div class="about-section reverse">
      <div>
        <div class="value-content">
          <p class="about-section-header">
            HOW WE BRING
            <span class="about-landing-content-highlight">VALUE</span>
          </p>
          <p class="about-section-content">
            As true partners and creative problem solvers, we ensure that each
            of our services lead to your satisfaction and success.
          </p>

          <p class="about-section-subHead">
            PRE-PRODUCTION
          </p>
          <p class="about-section-content">
            With a team dedicated to Pre-Production, we guarantee to provide the
            highest quality result for all of our clients. No matter what type
            of project you’re looking to create, we’re here to make it reality.
          </p>
          <p class="about-section-subHead">
            POST-PRODUCTION
          </p>
          <p class="about-section-content">
            When it comes to Post-Production, you can count on us to continue
            working until it’s exactly what you’re looking for while still
            staying within your timeline and budget. If you have questions,
            contact us today.
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
          <div class="members-img">
            <img src="~/assets/img/trentonCotten.png" alt="Trenton Cotten" />
          </div>
          <p class="members-name">
            TRENTON COTTEN
          </p>
          <p class="members-position">
            Creative Director / Producer
          </p>
        </div>
        <div>
          <div class="members-img">
            <img src="~/assets/img/tauraCotten.png" alt="Taura Cotten" />
          </div>
          <p class="members-name">
            Taura Cotten
          </p>
          <p class="members-position">
            Project / Business Manager
          </p>
        </div>
        <div>
          <div class="members-img">
            <img src="~/assets/img/julieRamirez.png" alt="Julie, Producer" />
          </div>
          <p class="members-name">
            Julie Ramirez
          </p>
          <p class="members-position">
            Producer
          </p>
        </div>
      </div>
      <div class="team-members">
        <div>
          <div class="members-img">
            <img src="~/assets/img/LouSo.png" alt="Lou, Marketing Director" />
          </div>
          <p class="members-name">
            LOU SO
          </p>
          <p class="members-position">
            Marketing Director
          </p>
        </div>
        <div>
          <div class="members-img">
            <img src="~/assets/img/Omar.jpg" alt="Omar, Executive Producer" />
          </div>
          <p class="members-name">
            Omar Williams
          </p>
          <p class="members-position">
            Executive Producer
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

export default { transition: 'about' }

<style lang="scss" scope>
.about-enter-active,
.about-leave-active {
  transition: opacity 0.5s;
}
.about-enter,
.about-leave-active {
  opacity: 0;
}
.about {
  &-container {
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
  &-landing {
    background-image: url(~/assets/img/about-landing.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
    padding: 60px;
    width: 100%;

    @media only screen and (max-width: 768px) {
      padding: 0px;
    }

    &-content {
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
      margin: 120px 30px;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 25px;

      &-highlight {
        color: #e3b047;
      }

      @media only screen and (max-width: 768px) {
        font-size: 28px;
        margin: 460px 30px;
      }

      @media only screen and (max-width: 480px) {
        font-size: 20px;
        margin: 300px 25px;
      }
    }
  }

  &-section {
    display: flex;
    justify-items: baseline;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 60px;

    @media only screen and (max-width: 768px) {
      padding: 0px;
      padding-bottom: 60px;
    }

    div {
      flex: 1 1 0;
      min-width: 380px;
    }

    &-header {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 15px;
      text-transform: capitalize;
    }

    &-subHead {
      font-size: 28px;
      font-weight: 600;
      margin: 50px 0px 15px;
      text-transform: capitalize;
    }

    &-content {
      font-size: 20px;
      width: 85%;
      line-height: 1.45em;
    }
  }
}

.ourMission {
  &-img {
    background-image: url(~/assets/img/about-img1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 580px;
  }

  &-content {
    height: 500px;
    padding: 160px 40px;

    @media only screen and (max-width: 768px) {
      padding: 80px 40px 120px;
    }
  }
}

.value {
  &-img {
    background-image: url(~/assets/img/about-img2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 820px;
  }

  &-content {
    height: 820px;
    padding: 100px 40px;

    .about-section-subHead {
      font-size: 22px;
    }

    .about-section-content {
      font-size: 16px !important;
    }

    @media only screen and (max-width: 768px) {
      padding: 80px 40px 10px;
      margin-bottom: -50px;
    }
  }
}

.team {
  &-container {
    display: flex;
    flex-direction: column;
    padding: 0px 60px;
    margin: 40px auto 20px;
  }

  &-members {
    display: flex !important;
    justify-content: space-evenly !important;
    flex-wrap: wrap !important;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 20px;
      width: 300px;
      height: 380px;
      transition: linear 1s;

      &:first-child {
        justify-content: flex-start;
      }
    }
  }
}

.members {
  div {
    flex: none !important;
  }
  &-img {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    overflow: hidden;
    border-radius: 50%;
  }

  &-name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  &-position {
    font-size: 16px;
  }
}

.reverse {
  flex-wrap: wrap-reverse !important;
}
</style>
