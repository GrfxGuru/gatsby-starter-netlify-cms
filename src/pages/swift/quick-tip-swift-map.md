---
templateKey: blog-post-swift
slug: /swift-archives/basics/quick-tip-swift-map/
author: Peter Witham
tags: ["Swift"]
title: Quick Tip - Swift Map
date: 2016-03-24T00:37:25
blurb: Save some lines of code on those for loops by using Swift map. Here is a quick example of how you can reduce code and maybe increase readability.
---

Something you hear a lot about these days is _map_. I have lost count of how many times I see it appearing in Swift examples now, so let’s take a quick look at what it can do for us.

One thing map can do is reduce the amount of code needed to loop through an array. Consider this very simple example,

``` swift
let myArray = [1, 2, 3, 4, 5]

var forArray = [Int]()

for item in myArray {
    forArray.append(item+1)
}
myArray // outputs [1, 2, 3, 4, 5]
forArray // outputs [2, 3, 4, 5, 6]
```

But let’s try that loop again using _map_

``` swift
let myArray = [1, 2, 3, 4, 5]

let mapArray = myArray.map {item in item + 1}
mapArray // outputs [2, 3, 4, 5, 6]
```

A one line wonder to get the same job done!

It is possible to chain _map_ but is not recommended based on what I have read in various posts around the Web.

Be careful though, do not go replacing all those for loops with map, if you need to do a lot of manipulation it might serve to just use the for loop instead.
