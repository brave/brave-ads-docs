# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm install
```

### Local Development

```
$ pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

# Contribution
All files added to this repository should be written in markdown. <br />
All markdown features supported in Docusaurus can be found: https://docusaurus.io/docs/markdown-features

## Creating Docs
Docs provides users with a way to organize Markdown files in a hierarchical format

A simple structure would be:
```markdown
brave-ads-docs
├── docs
│   └── my-new-markdown.md
├── ...
```

With an example document:
```markdown
---
sidebar_position: 1
---

# My Page

This will be the "title" of your document

## Headers

This will show up on the table of contents on the upper right

### Only h2 and h3 will be in the table of contents by default.
- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times
```

- `sidebar_position` is used to determine what order the content will show up in.

## Folder Structure

How the Markdown files are arranged under the docs folder can have multiple impacts on Docusaurus content generation

### Doc URL
A document's URL location is its file path relative to the docs folder

```markdown
brave-ads-docs
└── docs
    └── ad-placements
        └── brave-browser
            └── brave-search
                └── keyword.md
```

- Results in: http://localhost:3000/ad-placements/brave-browser/brave-search/keyword

Each document folder location should have a file `_category_.json` which contains:
```json
{
  "label": "My Human Readable Name",
  "position": 1
}
```
- **label**: will be what the directory is displayed as to the end user
- **position**: where you want that directory in the navigation bar



