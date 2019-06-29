# vue-floatl

A Vue component for [floatl package](https://github.com/richardvenneman/floatl) with less and css files (sass is comming soon).

## Demo

Comming soon

## Installation

```js
npm i --S vue-floatl
```

### Browser

Include the script file, then install the component with `Vue.use(VueClock);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-floatl/dist/vue-floatl.min.js"></script>
<script type="text/javascript">
  Vue.use(VueFloatl);
</script>
```

### Module

```js
import VueFloatl from 'vue-floatl';
Vue.use(VueFloatl);
```

### CSS / Less

CSS and Less file are available there :
- dist/vuefloatl.css
- src/less/vuefloatl.less

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-floatl :label="Your email" v-model="email"></v-floatl>
```

## Properties (no one is required)

- label (default: "My label")
- value (or v-model, default : "")
- name: if you want put a name to your input (default: no name attribute)
- inputClass: if you want to add classes to your input (you can use vue class syntax)
- type: type of yout input (default: "text")
