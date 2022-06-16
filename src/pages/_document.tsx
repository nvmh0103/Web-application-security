import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { createGetInitialProps } from "@mantine/next";
import { ServerStyles, createStylesServer } from "@mantine/next";

const stylesServer = createStylesServer();

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <ServerStyles
                        html={initialProps.html}
                        server={stylesServer}
                    />
                </>
            ),
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>{CssBaseline.flush()}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
