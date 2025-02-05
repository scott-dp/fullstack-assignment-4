<script>
export default {
    props: {
        label:{
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: ""
        }
    }
}
</script>

<template>
    <label>{{ label }}</label>
    <input 
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    >
</template>
