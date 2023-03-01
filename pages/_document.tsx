import { AppType } from "next/dist/shared/lib/utils";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript as NextScriptComponent,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

declare const __non_webpack_require__: typeof require;

export default class MyDocument extends Head {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  getDynamicChunks(files: any) {
    const dynamicScripts = super.getDynamicChunks(files);
    try {
      // get chunk manifest from loadable
      const loadableManifest = __non_webpack_require__(
        "../../react-loadable-manifest.json"
      );
      // search and filter modules based on marker ID
      const chunksToExclude = Object.values(loadableManifest).filter(
        (manifestModule) =>
          (manifestModule as any).id?.startsWith?.("lazy") || false
      );
      const excludeMap: any = chunksToExclude?.reduce?.((acc: any, chunks: any) => {
        if (chunks.files) {
          acc.push(...chunks.files);
        }
        return acc;
      }, []);
      const filteredChunks = dynamicScripts?.filter?.(
        (script) => !excludeMap?.includes(script?.key)
      );

      return filteredChunks;
    } catch (e) {
      // if it fails, return the dynamic scripts that were originally sent in
      return dynamicScripts;
    }
  }

  render(): JSX.Element {
    const NextScript = NextScriptComponent as any; // add this line
    const backupScript = NextScript.getInlineScriptSource;
    NextScript.getInlineScriptSource = (props: { __NEXT_DATA__: { dynamicIds?: string[] } }) => {
      // dont let next load all dynamic IDS, let webpack manage it
      if (props?.__NEXT_DATA__?.dynamicIds) {
        const filteredDynamicModuleIds = props?.__NEXT_DATA__?.dynamicIds?.filter?.(
          (moduleID: string) => !moduleID?.startsWith?.('lazy'),
        );
        if (filteredDynamicModuleIds) {
          // mutate dynamicIds from next data
          props.__NEXT_DATA__.dynamicIds = filteredDynamicModuleIds;
        }
      }
      return backupScript(props);
    };

    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
