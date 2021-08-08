// store/index.js
import tryItModule from './modules/tryIt'

// get the options out using lodash templates
const options = JSON.parse('<%= JSON.stringify(options) %>')
// create the plugin
export default ({ store }, inject) => {
  // register the module using namespace as the name.
  // counter module takes the options object and returns an object that is a
  // vuex store defenition
  store.registerModule('tryIt', tryItModule(options))
}
