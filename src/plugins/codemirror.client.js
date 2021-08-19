import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'

// codemirror languages
import 'codemirror/mode/vue/vue.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js'

// require styles
import 'codemirror/lib/codemirror.css'


Vue.use(VueCodemirror)
