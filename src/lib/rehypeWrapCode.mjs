// src/lib/rehypeWrapCode.mjs
export default function rehypeWrapCode() {
  return (tree) => {
    function walk(node, parent) {
      if (!node || typeof node !== 'object') return;

      if (node.type === 'element' && node.tagName === 'pre') {
        const children = node.children || [];
        const codeChild = children.find(
          (c) => c && c.type === 'element' && c.tagName === 'code'
        );

        if (codeChild) {
          let lang = '';

          const extractFromClass = (cls) => {
            if (!cls) return '';
            const joined = Array.isArray(cls) ? cls.join(' ') : String(cls);
            const m = joined.match(/(?:language|lang)-([a-zA-Z0-9_+-]+)/);
            return m ? m[1] : '';
          };

          // 1) code class/data
          if (codeChild.properties) {
            lang =
              extractFromClass(codeChild.properties.className) ||
              String(codeChild.properties['data-language'] || '');
          }

          // 2) pre class/data
          if (!lang && node.properties) {
            lang =
              extractFromClass(node.properties.className) ||
              String(node.properties['data-language'] || '');
          }

          // 3) look at the raw code text if the fence info was preserved in the node
          if (!lang && typeof codeChild.value === 'string') {
            const firstLine = codeChild.value.trim().split('\n')[0] || '';
            // very small heuristic: if the first line is something like "js" or "javascript"
            if (/^[a-z][a-z0-9+-]*$/i.test(firstLine) && firstLine.length < 20) {
              lang = firstLine;
            }
          }

          lang = String(lang || '').trim().toLowerCase();
          lang = lang.replace(/^(language|lang)-/, '');
          if (lang === 'javascript') lang = 'javascript';
          if (!lang) lang = 'text';

          const mdxNode = {
            type: 'mdxJsxFlowElement',
            name: 'CodeBlock',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'language',
                value: lang
              }
            ],
            children: [node]
          };

          if (parent && Array.isArray(parent.children)) {
            const idx = parent.children.indexOf(node);
            if (idx !== -1) {
              parent.children.splice(idx, 1, mdxNode);
              return;
            }
          }
        }
      }

      if (Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          walk(node.children[i], node);
        }
      }
    }

    walk(tree, null);
  };
}