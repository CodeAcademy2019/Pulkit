function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function checkUserValid(subUser){
          return goodUsers.some(function goodUserCheck(goodUser)
          {
              return subUser.id === goodUser.id;
          })
      })
    };
  }

  module.exports = checkUsersValid