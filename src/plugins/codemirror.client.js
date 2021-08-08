import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
// codemirror language
import 'codemirror/mode/vue/vue.js'
// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js'
// more codemirror resource...
// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'

Vue.use(VueCodemirror)
