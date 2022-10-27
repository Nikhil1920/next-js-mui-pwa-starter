import { getInitColorSchemeScript } from "@mui/material/styles";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <meta name="theme-color" content="#1976d2" />
                <meta name="color-scheme" content="dark light" />
            </Head>
            <body>
                {getInitColorSchemeScript()}
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
