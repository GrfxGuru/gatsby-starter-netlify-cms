---
templateKey: blog-post
slug: /development-notes/codenotes-markdown-library/
title: Markdown Support Added to CodeNotes For iOS
date: 2019-06-06-22T17:40:51
description: Markdown Supported. My CodeNotes For iOS now supports markdown in notes. I found the right library
author: Peter Witham
tags: ["Swift"]
---

I have been working for a while on trying out different ways to incorporate Markdown and/or Syntax Highlighting support in my open source code notes application built for iOS.

I am happy to say that I have solved at least half of that puzzle, I have finally settled on a really nice CocoaPods Pod called <a href="https://cocoapods.org/pods/MarkdownKit">MarkdownKit by Ivan Bruel.

This Pod takes a string and parses it into Markdown attributed text that you can then assign as just that to a text field. The end result handles enough tags that I’m happy with it, I do feel I need to play with code markup some more as I don’t care for the background, but I’m still planning to have code handled by a syntax highlighter at some point.

<img class="wp-image-3654" src="https://peterwitham.com/wp-content/uploads/2019/06/Image.jpeg" alt="Markdown Note Demonstrating Tags" />

You can find Ivan’s <a href="https://cocoapods.org/pods/MarkdownKit">MarkdownKit here</a>.

You can find the source code for my <a href="https://github.com/GrfxGuru/CodeNotesForiOS">CodeNotes For iOS</a> application on <a href="https://github.com/GrfxGuru/CodeNotesForiOS">my GitHub here</a>.
