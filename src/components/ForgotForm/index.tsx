import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import logoImg from "../../../public/assets/logo.svg";

import { Container } from "./styles";

export function ForgotPasswordForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    router.push("/");
  }

  return (
    <Container onSubmit={handleSignIn}>
      <header>
        <Image src={logoImg} alt="dtmoney" />
      </header>
      <input
        type="text"
        name="username"
        placeholder="Nome do usuário"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="Digite sua nova senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Cadastrar nova senha</button>
    </Container>
  );
}
