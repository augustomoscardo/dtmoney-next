import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import logoImg from "../../../public/assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal?: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <Container>
      <Content>
        <Image src={logoImg} alt="dt money" />
        <div className="buttons">
          {session ? (
            <div className="signedIn">
              <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
              </button>
              <button type="button" onClick={() => signOut()}>
                Sair
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="signInButton"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <FaGithub />
              Entre com o Github
            </button>
          )}
        </div>
      </Content>
    </Container>
  );
}
