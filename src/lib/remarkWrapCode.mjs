// src/lib/remarkWrapCode.mjs
export default function remarkWrapCode() {
  return (tree) => {
    function walk(node, parent, index) {
      if (!node || typeof node !== 'object') return;

      if (node.type === 'code') {
        const lang = (node.lang || 'text').toString().trim().toLowerCase();

        const mdxNode = {
          type: 'mdxJsxFlowElement',
          name: 'CodeBlock',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'language',
              value: lang || 'text'
            }
          ],
          children: [
            {
              type: 'code',
              lang: node.lang,
              meta: node.meta,
              value: node.value
            }
          ]
        };

        if (parent && Array.isArray(parent.children)) {
          parent.children.splice(index, 1, mdxNode);
        }
        return;
      }

      if (Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          walk(node.children[i], node, i);
        }
      }
    }

    walk(tree, null, null);
  };
}