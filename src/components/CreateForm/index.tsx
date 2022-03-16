import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import logoImg from "../../../public/assets/logo.svg";

import { Container } from "./styles";
import { api } from "../../services/api";
import User from "../../Schemas/User";

export function CreateForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const session = useSession();
  const router = useRouter();

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post("/users/create", { userName, password });

      console.log(`Usuário criado com sucesso.`);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container onSubmit={handleCreateUser}>
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
        placeholder="Digite sua senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Criar conta</button>
    </Container>
  );
}
