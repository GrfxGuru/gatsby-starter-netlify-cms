---
templateKey: blog-post-swift
slug: /swift-archives/better-print-statements-for-debugging/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Better Print Statements for Debugging
date: 2017-10-13T00:13:14
blurb: Print Statements Can Be Better. A couple of useful built in Swift print statements to improve debugging
---

So we all do it, or have done it. You are trying to debug why some piece of code is not working as you expected, it’s a bug. Maybe you got the logic wrong? Is that variable actually populated with what you think it is? Which function is actually going wrong? We could do it the right way with breakpoints, but no, we throw in some print statements like 

``` swift
    print("HERE!")

    print("NOW HERE!")'

    print("MADE IT THIS FAR")

    print("The value of x is \(x)")

    print("Inside myFunc")
```

  But after a while you forget that you have done this somewhere else, now the problem becomes which one is actually printing to the console?

### Make It Better

There are a couple of things you can do that would make these print statements more useful. Did you know that you can print the line number and function name to the console? I do not mean hardcoded, I mean dynamically. Take a look at this.

``` swift
    func myFunction (textEntered: String) {
    print(#function)
    print(#line)
    print("You entered \(textEntered)")
    }

    myFunction(textEntered: "Hello There!")
```

The output would show

``` swift
    myFunction(textEntered:)
    3
    ”You entered Hello There!”
```

By simply using _#function_ and _#line_ you are telling the compiler to do just that. So now you know exactly which function and line is executing (or not!).
