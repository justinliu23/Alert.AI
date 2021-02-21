const auth = {
    isAuthenticated: false,
    authenticate(data) {
      //replace with call to flask
      fetch("http://127.0.0.1:5000/api/auth", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify({
        data
      }),
    }).then((res) => res.JSON())
    .then((data) => {
      if(data.authenticated === true) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    }).then((err) => console.log(err));
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
      //replace with call to flask
    }
  }

export default auth