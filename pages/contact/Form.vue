<template>
  <div class="form-container">
    <form @submit.prevent="sendEmail">
      <label>Full Name</label>
      <input
        type="text"
        v-model="name"
        name="full name"
        placeholder="Full Name"
      />

      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
      />
      <label>Title</label>
      <input type="text" v-model="title" name="title" placeholder="Title" />

      <label>Phone</label>
      <input type="phone" v-model="phone" name="phone" placeholder="Phone" />

      <label>Department</label>
      <input
        type="text"
        v-model="department"
        name="department"
        placeholder="Department"
      />
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>

      <input type="submit" value="Send" />
    </form>
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
      message: ""
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        name: this.name,
        email: this.email,
        title: this.title,
        phone: this.phone,
        department: this.department
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
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
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
