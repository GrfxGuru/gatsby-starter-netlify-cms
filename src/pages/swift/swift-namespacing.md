---
templateKey: blog-post-swift
slug: /swift-archives/namespacing-with-swift/
author: Peter Witham
tags: ["Swift"]
title: Namespacing with Swift
date: 2018-01-18T15:21:12
blurb: There is a simple technique you can use to create namespaces with Swift. Take a look at this example.
---

Name spaces are a way to group items together without fear of them treading on the toes of other items. Let’s take a look at this concept using Swift. Swift does not have a _namespace_ keyword like some other languages, but we can implement the ideas using either a _struct_ or _enumeration_ to encapsulate the items into that namespace. One common use can be to group together constants, in the example below I have grouped my name, web site and twitter name into an _enum_ called _myDetails_. This acts like a namespace when it comes to accessing the properties.

``` swift
enum myDetails {
    static let Name = "Peter Witham"
    static let WebSite = "https://www.peterwitham.com"
    static let Twitter = “@compileswift”
}

myDetails.Name     // Peter Witham
myDetails.WebSite // https://www.peterwitham.com
myDetails.Twitter   // @compileswift
```

Now because I used an _enum_ here, you cannot instantiate it, unlike a _struct_. You can only access the data. Perfect for constants or say API functionality that you want to expose. You can take this further of course, what if we add an _enum_ inside the _enum_

``` swift
enum myDetails {
    static let Name = "Peter Witham"
    static let WebSite = "https://www.peterwitham.com"
    static let Twitter = "@compileswift"
    enum Location {
        static let State = "Texas"
        static let Country = "USA"
    }
}

myDetails.Location.State   // Texas
myDetails.Location.Country // USA
````

The other advantage is that I can now have the same property names somewhere else in my application without having to worry about conflicts.

### The Wrap

So there you have it, a simple example of name spacing data using enums. Grouping data into logical name spaces can be a good way to move data around easier when you need to without having to go find it.
