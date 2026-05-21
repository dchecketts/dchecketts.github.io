// src/lib/rehypeWrapCode.mjs
import { visit } from 'unist-util-visit';

export default function rehypeWrapCode() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      // Only interested in <pre> elements
      if (!parent || node.type !== 'element' || node.tagName !== 'pre') return;

      // Find a <code> child inside the <pre>
      const codeChild = (node.children || []).find(
        (c) => c.type === 'element' && c.tagName === 'code'
      );
      if (!codeChild) return;

      // Extract language from className like "language-js" or "lang-js"
      let lang = 'text';
      const className = codeChild.properties && codeChild.properties.className;
      if (Array.isArray(className)) {
        const joined = className.join(' ');
        const m = joined.match(/(?:language|lang)-([a-zA-Z0-9_+-]+)/);
        if (m) lang = m[1];
      } else if (typeof codeChild.properties?.['data-language'] === 'string') {
        lang = codeChild.properties['data-language'];
      }

      // Build an MDX JSX flow element that will render <CodeBlock language="...">...original pre...</CodeBlock>
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

      // Replace the original <pre> node with the mdxJsxFlowElement
      parent.children.splice(index, 1, mdxNode);

      // Skip visiting children of the new node
      return visit.SKIP;
    });
  };
}