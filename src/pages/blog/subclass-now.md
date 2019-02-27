---
templateKey: blog-post
slug: /development-notes/subclass-now-to-save-time-later/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Subclass now to save time later!
date: 2018-09-27T16:36:33
blurb: I Should of Known Better. The moment I realized that subclassing something at the beginning saves you time later.
---

I should have known better after all these years of typing code, but sometimes I still overlook the obvious. I have been working through some problems with my implementation of a theming engine in my [Code Notes For iOS](https://github.com/GrfxGuru/CodeNotesForiOS) application. As I debugged and refactored the code, I found myself in a hole that seemed much harder to get out of than I thought it should have been.

It was at this point, that I like many, switched to Googling my problem and ways to solve it. As I worked through the results, it became painfully obvious to me that I should have subclassed my custom UIViewControllers from a base subclass to begin with. After much forehead slapping and acceptance that the night was going to be longer than I had expected, I set about refactoring my code and solved the problem. So the lesson I learned, and now pass on in this post is a simple one.

If you think there is any chance in the future that you might want to do something across multiple entities, create yourself an empty subclass now and extend from there. You WILL thank yourself later! You could also consider extensions.
