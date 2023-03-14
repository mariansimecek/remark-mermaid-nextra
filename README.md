# remark-mermaid-nextra

Remark plugin for rendering mermaid diagrams, should work in nextra

# Instalation

`yarn add remark-mermaid-nextra` \
`npm i remark-mermaid-nextra`

# Motivation

I could not find any way to use Mermaid diagrams in nextra.
Then I found [The Guild Component Library](https://github.com/the-guild-org/docs). They have solution to make it works.
I take their code and use only necessary parts to make plugin works.

# Usage

```ts
// next.config.mjs

const withNextra = nextra({
    mdxOptions: {
        remarkPlugins: [remarkMermaid],
    }
    ...

```

~~~mdx
// page.mdx

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
~~~
