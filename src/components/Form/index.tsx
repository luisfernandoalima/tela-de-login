import { useState, FormEvent } from "react";
import { User } from "../../types/User";
import { validate } from "../../utils/validate";

import { FormInput } from "./Input";
import { FormCheckBox } from "./CheckBox";
import { FormButton } from "./Button";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    setErrors(null);
    e.preventDefault();

    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return
    }

    setName("")
    setEmail("")
    setAgree(false)

  };

  const handleName = (value: string) => {
    setName(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleAgree = (checked: boolean) => {
    setAgree(checked);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <FormInput
        text="Nome"
        name="nome"
        type="text"
        placeholder="Digite o seu nome"
        value={name}
        onChange={handleName}
      />
      {errors?.name && (
        <span className="text-xs text-red-500 mt-1">{errors?.name}</span>
      )}
      <FormInput
        text="E-mail"
        name="email"
        type="email"
        placeholder="Insira o seu melhor e-mail"
        value={email}
        onChange={handleEmail}
      />
      {errors?.email && <span className="text-xs text-red-500 mt-1">{errors?.email}</span>}
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Leia os termos
        </a>
        <FormCheckBox
          text="Concordo com os termos"
          name="agree"
          value={agree}
          onChange={handleAgree}
        />
      </div>
      {errors?.agree && <span className="text-xs text-red-500 mt-1">{errors?.agree}</span>}
      <FormButton text="Cadastra" />
    </form>
  );
};
