import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import dashboardImg from "../../public/assets/dtmoney-dashboard.png";

import { Header } from "../components/Header";

import { Container } from "./homeStyles";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push(`/dashboard`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <>
      <Head>
        <title>dtmoney | Home</title>
      </Head>

      <Header />
      <Container>
        <span>Faça o controle do seu saldo financeiro de maneira simples</span>
      </Container>
    </>
  );
};

export default Home;
