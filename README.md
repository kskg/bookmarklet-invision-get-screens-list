📖 English / [Japanese](./README_JP.md)  
  
# InVision Screens List Bookmarklet
![Cover image](cover.jpg)
Photo by [Leah Smit](https://unsplash.com/@4cats?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/owl?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)

## Overview
This is a bookmarklet that retrieves a list of screens from an InVision project and formats them.  
There are two types of pages to be retrieved: project pages and screens displayed on shared pages.

e.g.
```
---

# Project Title

## Divider Title 1

Screens Title A
https://projects.invisionapp.com/share/[Share ID]]#/[Screnn ID]

Screens Title B
https://projects.invisionapp.com/share/[Share ID]]#/[Screnn ID]

## Divider Title 2

Screens Title A
https://projects.invisionapp.com/share/[Share ID]]#/[Screnn ID]

Screens Title B
https://projects.invisionapp.com/share/[Share ID]]#/[Screnn ID]

---
```

## Features
- Get the project name, divider name, screen name and screen URL and format it.
- [main.js](./main.js)directly to change the prefix and suffix for each item.

## Usage

### Preparation
- Drag and drop the link from [this page](https://kskg.github.io/bookmarklet-invision-screens-list/) to your browser's bookmarks bar to save it.
- Or rewrite the address of the unwanted bookmark into the code of [main.min.js](./main.min.js). <sup><a name="1">[^1](#notes_1)</a></sup>

### Get the screen of the project page.
1. open a project in InVision
2. make sure the URL is `https://projects.invisionapp.com/d/main#/projects/prototypes/[Project ID]`.
3. run the bookmarklet.

### Get the screen of the shared page.
1. Open an InVision project
2. Press the "Share" button in the header.
3. Press the "public share link" or "Link Settings" link at the bottom of the modal to publish the share URL.
4. Access the shared URL and press the "Screens" button in the lower right corner of the screen.
5. Make sure the URL is `https://projects.invisionapp.com/share/[Share ID]#/screens?browse`.
6. Run a bookmarklet.

## Development Environment
- MacOS 10.15.6
- Safari 14.0
- jQuery 2.2.4

It has been tested in Safari and Google Chrome on Mac OS.

## Notes
Due to changes in InVision's specifications, it may not work.

## Footnotes
<a name="notes_1">[^1](#1)</a>: We use [Closure Compiler] (https://closure-compiler.appspot.com/home) to compress and optimize the code for speed.

## Author
- [GitHub](https://github.com/kskg)
- [Twitter](https://twitter.com/kskg)

Please feel free to give me your comments and suggestions. We'll use it as a reference for development🤓

## License
MIT