import MDXComponents from '@components/blog/mdx/MDXComponents';
import { runSync } from '@mdx-js/mdx';

import * as runtime from 'react/jsx-runtime';

type MdxComponent = React.ExoticComponent<{
  components: Record<string, any>;
}>;

function MDXRenderer({ code }: { code: string }) {
  const { default: MdxModuleComponent } = runSync(code, runtime) as {
    default: MdxComponent;
  };

  return <MdxModuleComponent components={MDXComponents} />;
}

export default MDXRenderer;
