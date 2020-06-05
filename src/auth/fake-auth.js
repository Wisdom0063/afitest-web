

const fakeAuth = {
    isAuthenticated: JSON.parse(localStorage.getItem("user"))?true:false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify({id:1, role:"LAWYER"}))
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      localStorage.removeItem("user")
      setTimeout(cb, 100);
    }
  };

  export default fakeAuth