// plugins/helpers/message.js
// funtion to allow a user to console.log() a value,
// prefixing that value with the namespace option of our module.
export const message = ({ string }) => {
  return console.log( string )
}
