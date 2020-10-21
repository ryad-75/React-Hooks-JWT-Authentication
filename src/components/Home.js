import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron text-info">
        <h3>{content}</h3>
        <p className="text-secondary mt-4">
        Exemple d'authentification JWT React Hooks avec LocalStorage, React Router, Axios et Bootstrap.
        Barre de navigation dynamique dans l'application React Hooks
        </p>
      </header>
    </div>
  );
};

export default Home;