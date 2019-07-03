# vue-floatl

A Vue component for [floatl package](https://github.com/richardvenneman/floatl) with less and css files (sass is comming soon).

## Demo

A test is available on test folder (online test comming soon)

## Installation

```js
npm i vue-floatl
```

### Browser

Include the script file, then install the component with `Vue.use(VueFloatl);` e.g.:

```html
<head>
    <link rel="stylesheet" href="/node_modules/vue-floatl/dist/vue-floatl.css">
</head>
<body>
    <div id="app">
        <v-floatl></v-floatl>
    </div>

    <script type="text/javascript" src="/node_modules/vue/dist/vue.min.js"></script>
    <script type="text/javascript" src="/node_modules/vue-floatl/dist/vue-floatl.js"></script>
    <script type="text/javascript">
        Vue.use(VueFloatl);
        const app = new Vue({
            el: '#app',
        });
    </script>
</body>
```

### Module

```js
import Vue from 'vue';
import VueFloatl from 'vue-floatl';
Vue.use(VueFloatl);
```

### CSS / Less

CSS (minified) and Less file are available there :
- dist/vuefloatl.css
- src/vuefloatl.less

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-floatl :label="Your email" v-model="email"></v-floatl>
```

## Properties (no one is required)

- label (default: "My label")
- value (or v-model, default: "")
- required : if input field is required (default: false)
- name: if you want put a name to your input (default: no name attribute)
- inputClass: if you want to add classes to your input (you can use vue class syntax)
- type: type of yout input (default: "text")

## Usage via slot

In some case, you want to have a full access to your input to add some specific other properties.
vue-floatl allow you to define your input via slot. Here an example :

```html
<v-floatl label="Test with sloat">
    <input type="password" class="floatl__input" placeholder="Test with sloat">
</v-floatl>
```

To working, your input must have the "floatl__input" class define and the label placeholder.
