// plugins/index.js
import * as helpers from './helpers/index.js'
// create the plugin
export default ({ store }, inject) => {
  // inject an object of functions into the app
  inject('tryIt', {
    waitFor (conditionFunction) { return helpers.waitFor(conditionFunction) },
    findEl (elem) { return helpers.findEl(elem) },
    evalCode (text) { return helpers.evalCode(text) },
    runCode (text) { return helpers.runCode(text) },
    iFrameText (elem, text) { return helpers.iFrameText(elem, text) },
    iFrameReset (elem) { return helpers.iFrameReset(elem) },
    langDetect (elem) { return helpers.langDetect (elem) }
  })
}
