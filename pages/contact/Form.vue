<template>
  <div class="form-container">
    <div>
      <form @submit.prevent="sendEmail">
        <input
          type="text"
          v-model="name"
          name="full name"
          placeholder="Full Name"
        />

        <input type="email" v-model="email" name="email" placeholder="Email" />
        <input type="text" v-model="title" name="title" placeholder="Title" />

        <input type="phone" v-model="phone" name="phone" placeholder="Phone" />

        <input
          type="text"
          v-model="department"
          name="department"
          placeholder="Department"
        />

        <div class="form-additional">
          <span>Additional Questions</span>
          <textarea
            name="purposevideo"
            v-model="purposevideo"
            cols="30"
            rows="5"
            placeholder="What's the purpose of the video?"
          />
          <textarea
            name="targetaudience"
            v-model="targetaudience"
            cols="30"
            rows="5"
            placeholder="Who is your target audience? "
          />
          <textarea
            name="keymessages"
            v-model="keymessages"
            cols="30"
            rows="5"
            placeholder="What are your key mdessages that need to be included in the video? "
          />
          <textarea
            name="keydates"
            v-model="keydates"
            cols="30"
            rows="5"
            placeholder="Are there any key dates, times, and locations that need to be listed in the video?"
          />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
    <div class="form-select">
      <h3>Services Needed</h3>
      <i>Select all that apply</i>
      <span>
        <input
          type="checkbox"
          id="preProduction"
          value="Pre-Production"
          v-model="services"
        />
        <label for="Pre-Production">Pre-Production</label>
      </span>
      <span>
        <input
          type="checkbox"
          id="postProduction"
          value="Post-Production"
          v-model="services"
        />
        <label for="Post-Production">Post-Production</label>
      </span>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      title: "",
      phone: "",
      department: "",
      purposevideo: "",
      targetaudience: "",
      keymessages: "",
      keydates: "",
      services: []
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        name: this.name,
        email: this.email,
        title: this.title,
        phone: this.phone,
        department: this.department,
        purposevideo: this.purposevideo,
        targetaudience: this.targetaudience,
        keymessages: this.keymessages,
        keydates: this.keydates,
        services: this.services
      };

      emailjs
        .send(
          "service_fyk1zx8",
          "template_en7macy",
          templateParams,
          "user_NQL7fEugMmR23QDAgtXU3"
        )
        .then(
          response => {
            console.log("SUCCESS!", response.status, response.text);
          },
          err => {
            console.log("FAILED...", err);
          }
        );
    }
  }
};
// Reset form field
</script>

emailjs.send("service_fyk1zx8","template_en7macy",{ email: "jonDoe@test.com",
title: "Depart of Pixar", department: "Testing Pixar contact", message: "Just
testing from the form", first: "Jon", last: "Doe", phone: "8883334932", });

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.form {
  &-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;

    div {
      span {
        font-size: 18px;
        font-weight: bold;
      }
      &:first-child {
        max-width: 70%;
        min-width: 380px;
      }

      &:last-child {
        flex: 1;
      }

      @media only screen and (max-width: 600px) {
        div {
          width: 100%;
          min-width: 100%;
        }
      }
    }
  }
  &-additional {
    margin: 20px 0;
  }
  &-select {
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    height: fit-content;
    padding: 25px;
    align-self: flex-end;

    span {
      display: flex;
      margin: 20px 0 5px;

      input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }
    }
  }
}

form {
  padding-right: 25px;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
[type="phone"],
textarea {
  width: 100%;
  padding: 12px;
  border: 0px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 25px;
  resize: vertical;
  outline: none !important;
  opacity: 0.8;
  transition: 0.4s border ease-in-out;

  &:focus {
    opacity: 1;
    border-bottom: 1px solid #111;
  }
}

textarea {
  border: 1px solid #ccc;
  transition: 0.4s border ease-in-out;
  opacity: 0.8;
  margin-top: 15px;

  &:focus {
    opacity: 1;
    border: 1px solid #111;
  }
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
