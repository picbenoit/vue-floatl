<template>
    <div class="floatl" ref="floatl">
        <label class="floatl__label">{{ label }}</label>
        <input :name="name" class="floatl__input" :class="inputClass" :placeholder="label" :type="type" :value="value" @input="$emit('input', $event.target.value)" />
    </div>
</template>


<script>
    import Floatl from 'floatl';
    export default {
        props: {
            value: {
                default: ""
            },
            name: {
                default: false
            },
            inputClass: {
                default: ""
            },
            type: {
                type: String,
                default: "text"
            },
            label: {
                type: String,
                default: "My label"
            }
        },
        mounted() {
            let fl = new Floatl(this.$el);
            this.$once('hook:beforeDestroy', () => fl.destroy())
        }
    }
</script>