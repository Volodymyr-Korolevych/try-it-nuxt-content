
const htmlTemplate =
   '<html>' +
   '<head><link rel="stylesheet" href="/myConsole.css"></head>' +
   '<body><div id="console"><code></code></div>' +
   '<script src="/myConsole.js" type="text/javascript"></script>' +
   '<script>INSERT</script></body>' +
   '</html>'

export const evalCode = (text) => {
  // console.log('runCode', this.codeText)
  const codeT =
   'try{console.log(' +
   text.split(';').join('\n') +
   ')}catch(err){console.error(err)}'
  return htmlTemplate.replace('INSERT', codeT)
}

export const runCode = (text) => {
  return htmlTemplate.replace('INSERT', text)
}

export const iFrameText = (elem, text) => {
  elem.querySelector('iframe').remove()
  const iframe = elem.appendChild(document.createElement('iframe'))

  // load custom html to i-frame
  const frame = iframe.contentWindow
    ? iframe.contentWindow
    : iframe.contentDocument.document
      ? iframe.contentDocument.documenty
      : iframe.contentDocument
  frame.document.open()
  frame.document.write(text)
  frame.document.close()
  return false
}

export const iFrameReset = (elem) => {
  elem.querySelector('iframe').remove()
  elem.appendChild(document.createElement('iframe'))
}

export const langDetect = (elem) => {
  const classes = [...elem.querySelector('pre code').classList]
  const classes_string = classes.concat([...elem.querySelector('pre').classList]).join(' ')
  if (classes_string.includes('language-html')) {
    return 'html'
  } else if (classes_string.includes('language-javascript') || classes_string.includes('language-js')) {
    return 'javascript'
  } else {
    return false
  }
}
