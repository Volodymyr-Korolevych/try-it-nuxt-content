export const waitFor = (conditionFunction) => {
  // eslint-disable-next-line
    const poll = (resolve) => {
    if (conditionFunction()) {
      resolve()
    } else {
      setTimeout((_) => poll(resolve), 200)
    }
  }
  return new Promise(poll)
}

// eslint-disable-next-line require-await
export const findEl = async (elem, x) => {
  return (
    elem ||
    new Promise((resolve, reject) => {
      if (x > 50) {
        return resolve()
      }
      setTimeout(() => {
        resolve(findEl(elem, ++x || 1))
      }, 200)
    })
  )
}
// export { waitFor, findEl }
