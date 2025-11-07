# dchecketts.github.io

A personal site to show off some things I've learned with programming things.

 !!! warning ""  
    I'm using the Markdown Extended VS Code extension to mess with how markdown works, and I'm not sure how well that'll play with Eleventy, but let's see how things go.

!!! note Note  
    As it turns out, Github doesn't work with admonitions

## Tools

- **Eleventy** for static site generation
- **Tailwind** for styling
- **HTMX** for interactivity
- **Sublime Text** for writing the markdown files

## Post formatting

All posts must be markdown documents with the following at the top:

```markdown
---
title: "Post Title"
description: "A short description of the post"
tags: ["htmx", "tailwind", "markdown"]
image: "/images/thumbnail.png"
date: YYYY-DD-MM

---
```

After that, you can freely write a markdown file to make a post.

### Syntax Tips

[MarkdownGuide.org](markdownguide.org/basic-syntax/ "Basic Syntax") has a really good page about the syntax of the markdown language. I read through that page and made this table to use.[^1]

Rendered | Markdown | Keybind | Note
:--- | :--- | :---: | :---
Heading | `# Heading` | --- | There are six levels of headings. You must include a space between your text and the # used.
Plain Text | `Plain Text` | --- | By default, text contained in a markdown document will be styled this way.
Line Break | `Double space` | --- | Usually, markdown dislikes paragraphs immediately adjacent to each other and spaces at the end of lines, but this permits the proximity.
**Bold Text** | `**Bold Text**` | --- | All text between the * will be bolded, even if you have spaces.
*Italic Text* | `*Italic Text*` | --- | Likewise, all the text will be italicized.
***Bold and Italic*** | `***Bold and Italic***` | --- | Combines both of the above.
~~Strikethrough Text~~ | `~~Strikethrough Text~~` | ---- | Self-descriptive.
Block Quotes | `>` | --- | Every line included in a block quote must begin with >. They can be nested, and can include most other markdown elements.
Ordered List | `1.` | --- | Each item in an ordered list must have a number followed by a period, and then you can include the text you want there. Intended lists are supported.
Unordered List | `- * +` | --- | -, *, and + can be used to create unordered lists. Just be consistent with the character you choose. Indented lists are supported. If you want to start the list item with a number (i.e. `- 1984`) You must use a \ to escape the formatting with a period. (i.e. `- 1984\.`)
`Code` | ` `` ` | --- | Enclose the code in `. If you have code inside that you want to not be code, enclose it in ``. If you want to make a code block, use ```. With code blocks, you can specify the language used, and it will highlight with the correct syntax.
Horizontal Rule | Lines across the page | --- | Use *** with no other characters on the line and empty lines on either side. As a general rule, have everything have empty lines on either side
[Linked text](dchecketts.github.io "A link to my site") | `[Linked text](dchecketts.github.io "A link to my site")` | --- | Link text in the [], and the url is required in the ().You can use spaces in the []. You can add a tooltip to it by including the tooltip text in "" inside the () too. Links can be formatted with bold and italics just like normal text.
Full URL text: <https://dchecketts.github.io> | `<https://dchecketts.github.io>` | --- | Use this to make text in a URL or email a link. It will show the whole thing and works on lines with other text.
[Reference-style link][1] | `[Reference-style link][1] ... [1]: <https://www.markdownguide.org/basic-syntax/#reference-style-links> "Reference-style links on MarkdownGuide.org"` | --- | Doesn't look any different from normal linked text, but it improves readability of the document itself. Additionally, try to use the hexadecimal encoding for any ascii characters such as spaces or () in the link. (%20, %28 and %29 respectively)
![A baby chicken](/src/images/20250908_102638.jpg "A baby chicken") | `![A baby chicken](/src/images/20250908_102638.jpg "A baby chicken")` | --- | Literally just linked text with an ! in front. You can make it a link by putting it inside [] and the link in (), just like linking text.
Escape | `\` | --- | You can use the \ to escape from \, `, *, _, {}, [], <>, (), #, +, -, ., !, and \|.
[Link to a Header](#dcheckettsgithubio) | `[Link to a Header](#dcheckettsgithubio)` | ---- | Like linked text, you can link to a heading in your markdown document.
---- | ---- | ---- | ----

[1]: <https://www.markdownguide.org/basic-syntax/#reference-style-links> "Reference-style links on MarkdownGuide.org"
[^1]: To be honest, MarkdownGuide.org already has its own page with a quick cheat-sheet. <https://www.markdownguide.org/cheat-sheet/>
