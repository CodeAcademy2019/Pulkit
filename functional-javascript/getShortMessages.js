function getShortMessages(messages) {
    return messages.filter(messages=>messages.message.length<50).map(message=>message.message)
  }

  module.exports = getShortMessages