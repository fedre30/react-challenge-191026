import React from "react";
// import { Link } from "react-router-dom";


export const Login = () => {
  var api_base_url = "http://51.15.215.94:8090/API/server/public";
  var url = "/signup";
  return (
    <>
      <section className="login">
        <h2>Connectez-vous</h2>
        <form method="post" action={api_base_url + url} className="login-form">
          <p className="username-label">Identifiant</p>
          <input type="text" placeholder="Identifiant"></input>
          <p className="password-label">Mot de passe</p>
          <input type="password" placeholder="Mot de passe"></input>
          <button type="submit">Connexion</button>
        </form>
      </section>
    </>
  )
}
