<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useNameAndEmailStore } from "../stores/formInformationStore";
import {checkIfFormIsValid, isApiResponseSuccessful} from '../utils/FeedbackFormUtils'
import axios from 'axios';


export default defineComponent({
  name: 'FeedbackForm',
  setup() {
    const nameAndEmailStore = useNameAndEmailStore();
    const name = ref(nameAndEmailStore.name);
    const email = ref(nameAndEmailStore.email);
    const message = ref("");
    let formIsValid = ref(false);
    function validateForm() {
        formIsValid.value = checkIfFormIsValid(name, email, message);
    }

    async function sendForm() {
        nameAndEmailStore.saveNameAndMailInStore(name.value, email.value);
        message.value = "";
        const sendFormResponse = await axios.get("http://localhost:3000/sendForm");
        if (isApiResponseSuccessful(sendFormResponse)) {
            alert("Form sent");
        } else {
            alert("Couldnt send form");
        }

    }

    return { name, email, message, validateForm, formIsValid, sendForm };
  },
});
</script>

<template>
    <div>
        <label>name</label>
        <input id="name" 
        placeholder="name"
        v-model = "name"
        @input="validateForm"
        >
    </div>
    <div>
        <label>email</label>
        <input 
        id="email" 
        placeholder="email"
        v-model = "email"
        @input="validateForm"
        >
    </div>
    <div>
        <label>message</label>
        <input 
        id="message" 
        placeholder="message"
        v-model = "message"
        @input="validateForm"
        >
    </div>
    <button id="sendFormButton" :disabled="!formIsValid" @click="sendForm">Send form</button>
</template>

<style scoped>
</style>
