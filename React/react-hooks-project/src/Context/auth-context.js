import React from "react";

//create context object

const AuthContext = React.createContext({
  //globallly avaliable  javascript object (doesnt have to be an object p.s) that can be passed around components without using props.
  authenticated: false,
  login: () => {}
});

export default AuthContext;
