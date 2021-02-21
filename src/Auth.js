const auth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
      //replace with call to flask
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
      //replace with call to flask
    }
  }

export default auth