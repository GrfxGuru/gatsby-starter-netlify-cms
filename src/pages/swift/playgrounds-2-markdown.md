---
templateKey: blog-post-swift
slug: /swift-archives/playgrounds-2-markdown/
author: Peter Witham
tags: ["Swift", "iPad"]
title: Swift 2 Playground Comments with Markdown
date: 2015-06-20T10:52:26
blurb: Swift Playgrounds 2 has some great new features, one of them is the ability to use a variant of the markdown language to create richer comments more inline with documenation. Read on to learn more!
---

One of the new features coming with Xcode 7 and Swift 2 playgrounds is the ability to use a variant of the _markdown_ language to create richer comments more akin to documentation than standard comments.

Let’s take a look at how it works with the Beta 1 release

Standard code comments can take the form of a single or multiple lines (block) like these examples

```markdown
    // A single line comment
    /*
    A block comment
    over two lines
    */
```

Now with Xcode 7 we can enhance the look and readability by simply adding a : to the comment line.

```markdown
    //: _Rich text_ single line *comment* thanks to __Markdown__
```

To see how the text renders you need to go to the menu and choose _Editor > Show Rendered Markup_ then you should get the following results in the playground.

![Swift 2 Playground.playground](/img/post_images/Swift-2-Playground.playground-1024x601.png)

So far I have had mixed results with the block comment version so left it out of this example hoping that maybe it is just some early Beta issues. If you are not familiar with the _markdown_ syntax then there are lots of resources on the Web to help you, personally I use it all the time and am very happy to see it making it’s way into Xcode.
