---
templateKey: blog-post-swift
slug: /swift-archives/multiline-strings-in-swift/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Multiline Strings in Swift
date: 2018-11-28T01:39:01
blurb: A neat little trick you might not know. You may not know this one, it's not common among languages but Swift has a cool little string secret. I'm going to share it with you right now.
---

Strings are everywhere, look I just made one! But seriously, there is a cool thing in Swift that I often forget about and I'm betting others do as well. We all have that moment when we have to deal with a multiline string. Oh the decisions, do we let it trail off the screen in our code editors, do we use returns to make it easier to read in code and then discover a problem when we run the app, do we do some Ninja move to make it both easy to read in source code and make our compiler happy?

Well, Swift has a nice answer for all of the above and it goes like this """ Yep, if we wrap our multiline strings in triple quotes then Swift knows we have a multiline string and to handle it accordingly. There are some rules to follow, but let's crack open a playground and try it out.

![Swift Playground with Multiline String squashed](https://peterwitham.com/wp-content/uploads/2018/11/Swift-Playground-with-Multiline-String-squashed.jpg)

The multiline is displayed exactly as we wanted, perfect. Hmmmmm but what about those rules? Well, yes there are a couple. But in this case, they are a good thing. First, as you can tell, the compiler is smart enough to know that it should ignore the """ on the last line, but you might be wondering why I put them on a separate line. Well, there is a reason. The indentation of the last line with """ is an indicator to the compiler that this is the starting point for the text indentation, let me explain with another example.

![Swift Playground with multiline string indented squashed](https://peterwitham.com/wp-content/uploads/2018/11/Swift-Playground-with-multiline-string-indented-squashed.jpg)

You are right if you spotted that the indentation in the source code is respected and retained in the string when it is displayed. That is the magic of using the triple quotes on a separate line, the indented position at which """ starts is the starting point for the indentation of the string.

ALL lines of text in the string should at a minimum start at that point, try if for yourself but moving """ further in than the string and see what happens.

![Swift Playground with multiline string indented wrong squashed](https://peterwitham.com/wp-content/uploads/2018/11/Swift-Playground-with-multiline-string-indented-wrong-squashed.jpg)

Ouch! Yep that is one unhappy compiler. See where the line starting with "Hello" is further to the left than """, that's the problem right there.

The bonus here is that you can format multiline strings right there in the source when it comes to indentation.

Hope this little tip helps you out or at least has you thinking in more ways to use strings with Swift.
