const uuidv4 = require('uuid/v4')
/*
createUser
Creates a user
@prop id {string}
@prop name {string}
@param {object}
  name {string}
*/

const createUser = ({ name = "" } = {}) => (
  {
    id: uuidv4(),
    name
  }
)

const createMessage = ({ message = "", sender = ""} = {}) => (
  {
    id: uuidv4(),
    time: getTime(new Date(Date.now())),
    message,
    sender
  }
)

const createChat = ({ messages = [], name = "Community", users = []} = {}) => (
  {
    id: uuidv4(),
    name,
    messages.
    typingUsers: []
  }
)

const getTime = (date) => {
  return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
    createMessage,
    createChat,
    createUser
}
