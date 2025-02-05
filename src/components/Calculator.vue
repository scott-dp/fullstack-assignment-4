<script setup lang="ts">
import { ref } from 'vue';
import { roundNumber, isResultValid, evaluateCalculationAsString } from '../utils/calculatorUtils';
const display= defineModel<string>({required:true});
var log = ref("");

function appendToDisplay(event:Event) {
  const target = event.target as HTMLButtonElement;
  display.value += target.innerHTML;
}

function handleKeydownEvent(event:KeyboardEvent){
  event.preventDefault();
  let num = parseInt(event.key);
  if(!isNaN(num)) {
    display.value += num.toString();
  }
  if(event.key =="+"|| event.key =="-"||event.key =="*"|| event.key =="/" || event.key ==".") {
    display.value += event.key;
  }
  else if(event.key == ",") display.value += ".";
  else if (event.key =="Enter") calculateResult();
  else if (event.key == "Backspace") deleteLastCharacterInDisplay();
}

function clearTextArea() {
  display.value =""
}

function deleteLastCharacterInDisplay() {
  display.value = display.value.slice(0, display.value.length-1);
}

function calculateResult() {
  const calculationAsString:string = display.value;
  
  let result = evaluateCalculationAsString(calculationAsString);

  if(!isResultValid(result)) {
    alert("Invalid computation");
    return;
  }

  result = roundNumber(result, 2);//Round result to two decimal points
  let resultString = calculationAsString + " = " + result;
  log.value = resultString + "\n" + log.value;
}
</script>

<template>
    <textarea @keydown="handleKeydownEvent" v-model="display" class="Large-grid-item" width="200"></textarea>
    <button id="CButton" @click="clearTextArea">C</button>
    <button @click="deleteLastCharacterInDisplay">DEL</button>
    <button @click="appendToDisplay">+</button>
    <button @click="appendToDisplay">1</button>
    <button @click="appendToDisplay">2</button>
    <button @click="appendToDisplay">3</button>
    <button @click="appendToDisplay">-</button>
    <button @click="appendToDisplay">4</button>
    <button @click="appendToDisplay">5</button>
    <button @click="appendToDisplay">6</button>
    <button @click="appendToDisplay">*</button>
    <button @click="appendToDisplay">7</button>
    <button @click="appendToDisplay">8</button>
    <button @click="appendToDisplay">9</button>
    <button @click="appendToDisplay">/</button>
    <button @click="appendToDisplay"> </button>
    <button @click="appendToDisplay">0</button>
    <button @click="appendToDisplay">.</button>
    <button @click="calculateResult">=</button>
    <div id="log" class="Large-grid-item">
      <h3>Logg:</h3>
      <p>{{ log }}</p>
    </div>
</template>

<style scoped>
.Large-grid-item {
  grid-column: span 4;
  align-items: center;
}

#CButton {
  grid-column: span 2;
}

p {
  white-space: pre-line
}

#log {
  border: 2px solid black;
  margin:20px;
  width:auto;
}
</style>