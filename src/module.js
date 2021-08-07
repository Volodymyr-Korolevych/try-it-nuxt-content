// module.js
const { resolve, join } = require('path')
const { readdirSync } = require('fs')

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
    'store/index.js',
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
  // move static files to root
  path = resolve(__dirname, 'assets/images')
  for (const file of readdirSync(path)) {
    this.addTemplate({
      src: resolve(path, file),
      fileName: join('../assets/images', file)  // resolve(path, '../../assets/images', file)
    })
    console.log(resolve(path, file), join('../assets/images', file))
  }
}
module.exports.meta = require('./package.json')
