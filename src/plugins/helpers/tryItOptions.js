// plugins/helpers/options.js
// set tryIt options based on nuxt.config.js

export const tryOptions =  (moduleOptions, tryItOptions) => {

// if tryIt options are missed in nuxt.config.js
const tOptions = tryItOptions || {}
const tOptButtons = (tOptions.buttons) ? tOptions.buttons : {}
const mOptButtons = (moduleOptions.buttons) ? moduleOptions.buttons : {}
console.log("setOptions", moduleOptions, tOptions)

  let options = {
    buttons: {
      tryIt: "TryIt",
      run: "Run",
      reset: "Reset",
      value: "Evaluate",
      fullScreen: "FullScreen",
      backToRead: "BackToRead"
    }, 
    page: 'code',
    theme: 'default'
  }
   options.buttons = { ...options.buttons, ...tOptButtons, ...mOptButtons }
  options.page =  tOptions.page || moduleOptions.page || options.page 
  options.theme =  tOptions.theme || moduleOptions.theme || options.theme 

  console.log('tryIt options=', options)
  return options
 }
