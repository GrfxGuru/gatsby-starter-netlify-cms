---
templateKey: blog-post
slug: /swift-archives/the-curious-case-of-swift-2-dot-oh/
author: Peter Witham
tags: ["Swift"]
title: The Curious Case of Swift 2 Dot Oh!
date: 2015-07-14T10:08:16
blurb: One of the interesting things that came from the recent Swift 2 Beta is the curious case of splitting one line of code across many to respect those 80 characters!
---

One of the interesting things that came from the recent Swift 2 Beta is the curious case of splitting one line of code across many to respect those 80 characters! Now you can get out of trailing/scrolling hell by splitting those lines and keeping those 80 character old school programmers happy.

In many languages we could split one line of code across multiple lines, partly it was made super easy thanks to _;_ but we don’t have that in Swift so what do we do? Well right now we cry a lot, but with Swift 2.0 there is a solution.

Take a look at an example of the problem with this Swift Playground 1

![Swift 1 Playground line wrap error](https://peterwitham.com/wp-content/uploads/2015/07/Swift-1-Playground-line-wrap-error.png)

Notice that nasty Red dot, well now take a look at this Swift Playground 2

![Swift 2 Playground with line wrap](https://peterwitham.com/wp-content/uploads/2015/07/Swift-2-Playground-with-line-wrap.png)

Problem solved, you can now just ensure that dot is the start of the next line and it continues forward as expected (hoped).

It is things like this that will help smooth the Swift path to maturity as we go forward, there are lots of ‘the little things’ that we are going to appreciate in the Fall with the final v2 release.
