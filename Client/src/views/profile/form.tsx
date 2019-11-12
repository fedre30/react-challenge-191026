import React from "react";

import { TextField } from "styles/molecules";

export const Form = () => (
  <>
    <TextField label="Nom" placeholder="exemple : Te" required />
    <TextField label="Prénom" placeholder="exemple : Marie" required />
    <TextField
      label="Adresse e-mail"
      placeholder="exemple : exemple@mail.com"
      required
      type="email"
    />
  </>
);
