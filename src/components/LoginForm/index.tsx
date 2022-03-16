import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import logoImg from "../../../public/assets/logo.svg";
import { api } from "../../services/api";

import { Container } from "./styles";

export function LoginForm() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState<null | string>(null);

  // const router = useRouter();

  // async function handleSignIn(event: FormEvent) {
  //   try {
  //     event.preventDefault();
  //     await api.post("/users/login", { userName, password });

  //     await signIn("credentials", {
  //       redirect: false,
  //       userName,
  //       password,
  //     });

  //     router.push("/dashboard");
  //   } catch (err: any) {
  //     console.log(err.response);
  //     setError(err.response.data);
  //   }
  // }

  return (
    <Container>
      <header>
        <Image src={logoImg} alt="dtmoney" />
      </header>
      {/* <input
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
        placeholder="Digite sua senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {error && <span>{error}</span>} */}

      <div className="signInButton">
        {/* <button type="submit">Entrar</button>
        <p>ou</p> */}
        <button
          type="button"
          className="githubButton"
          onClick={() => signIn("github")}
        >
          <FaGithub />
          Entre com o Github
        </button>
      </div>

      {/* <div>
        <Link href="/forgot">
          <a className="forgotPassword">Esqueci minha senha.</a>
        </Link>
        <Link href="/create">
          <a className="signUp">Registre-se.</a>
        </Link>
      </div> */}
    </Container>
  );
}
