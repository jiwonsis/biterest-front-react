import hello from 'hellojs';

hello.init({
  facebook: '349338872208528',
  google: '362113895985-rr3icb4an5hsbj6lpl90687fbuoi5ltv.apps.googleusercontent.com'
}, {
  redirect_uri: '/redirection.html'
});

export default(function() {
  return {
    // facebook: () => {
    //   return new Promise((resolve, reject) => {
    //     // hellojs 는 일반 Promise 가 아닌 Promise A+ 를 사용하므로, Promise 로 감싸줌
    //     hello.login('facebook', {
    //       scope: 'email'
    //     }).then(
    //       auth => resolve(auth.authResponse.access_token),
    //       e => reject(e)
    //     )
    //   })
    // },
    // google: () => {
    //   return new Promise((resolve, reject) => {
    //     hello.login('google', {
    //       scope: 'email'
    //     }).then(
    //       auth => resolve(auth.authResponse.access_token),
    //       e => reject(e)
    //     )
    //   })
    // },
    login: (type) => {
      return new Promise((resolve, reject) => {
        // hellojs 는 일반 Promise 가 아닌 Promise A+ 를 사용하므로, Promise 로 감싸줌
        hello
          .login(type, {
            scope: 'email'
          }).then(
            auth => resolve(auth.authResponse.access_token),
            e => reject(e)
        )
      })
    },
    logout: (type) => {
      return new Promise((resolve, reject) => {
        hello
          .logout(type)
          .then(
            succeed => resolve('succeed'),
            e => reject(e)
        )
      })
    }
  }
})();