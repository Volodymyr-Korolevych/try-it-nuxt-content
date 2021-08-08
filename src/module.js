// module.js
const { resolve, join } = require('path')
const { readdirSync, existsSync, openSync, mkdirSync } = require('fs')

export default function (moduleOptions) {
  // get all options for the module
  const options = {
    ...moduleOptions,
    ...this.options.tryIt
  }
  const namespace = 'tryIt'

  // add all of the initial plugins
  const pluginsToSync = [
    'components/index.js',
    'store/index-try-it.js',
    'plugins/index.js',
    'plugins/codemirror.client.js'
    
  ]
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
    console.log(__dirname, resolve(__dirname, pathString), join(namespace, pathString))
  }
  // make sure 'store/index.js' exists
  const path_store = 'store/index.js'
  try {
    if (!existsSync(path_store)) {
      console.log('No file "store/index.js". Create empty file. PLEASE RESTART, VUEX is REQUIRED!')
      if (!existsSync('store')) mkdirSync('store');
      openSync(path_store, 'a')
      process.exit() 
    } 
  } catch(err) {
    console.error('try to catch file "store/index.js"')
  }

  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/)
  const foldersToSync = ['plugins/helpers', 'store/modules', 'components/lib']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options
      })
    }
  }
  // move static files to root
  let path = resolve(__dirname, 'static')
  for (const file of readdirSync(path)) {
    this.addTemplate({
      src: resolve(path, file),
      fileName: join('../static', file) // resolve(path, '../static', file)
    })
    console.log(resolve(path, file), join('../static', file))
  }
  // make sure 'assets/images/' exists to support <img> 
  try {
    if (!existsSync('assets/images')) {
      console.log('No dir "assets/images". Create empty dir ')
      if (!existsSync('assets/images')) mkdirSync('assets/images', { recursive: true });
    }
  } catch(err) {
    console.error('try to create dir "assets/images"')
  }

}
module.exports.meta = require('./package.json')
