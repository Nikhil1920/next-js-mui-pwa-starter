import { Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Copyright from "../components/Copyright";
import ModeSwitcher from "../components/ModeSwitcher";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Next App with mui and pwa configured</title>
                <meta
                    name="description"
                    content="Next App with mui and pwa configured"
                />
            </Head>
            <Container
                maxWidth="lg"
                sx={{
                    marginTop: "2rem",
                }}
            >
                <ModeSwitcher />
            </Container>

            <footer>
                <Copyright />
            </footer>
        </>
    );
};

export default Home;
