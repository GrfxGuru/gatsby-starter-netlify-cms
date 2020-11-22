---
templateKey: blog-post-swift
slug: /swift-archives/avoiding-string-literals-with-a-configuration-system/
author: Peter Witham
tags: ["Swift"]
title: Avoiding String Literals with a Configuration System
date: 2018-10-31T00:31:53
blurb: Using a simple configuration system can help keep those string literals out of code and easy to change.
---

When creating an application it is all too easy to do some code hack to fix a problem and then forget to go back and refactor it. Worse, it is all too easy to splash strings around code and then have to go back and find them all to update. We can use a simple approach to fix that by removing those string literals from code and have them in one file, one location and one instance. Here is a quick system I like to use, a struct that becomes my application configuration object. This works across all the languages I develop with.

## Why might you want a configuration class?

To best demonstrate why this is an advantage for your code both now and in the future, let’s take an example from a game I am working on. The game has many configuration items, among those there are some great examples we can use for demonstration in this article. The examples are the URLs used by the game, there might be a reason to change those, especially if the application needs to change the API calls. So the last thing you would want to do is try and track them all down in code, they might exist in multiple places and files. Configuration takes care of this for us.

## An example of a configuration struct/class

### Creating the Configuration Struct

Time for a code example. I’ll use Swift, but this idea can be used with any programming language, certainly the ones I am familiar with. First I’ll create my struct that holds the configuration items, in this case the URL strings. To make this struct easy to access across my application, I am going to make the items in it static. This way, I never have to remember to instantiate the struct and I know only one reference exists to each item. The other advantage is that I can use name spacing to isolate the content should a need exist to have items with the same name for something else.

```swift
struct AppConfiguration {
    public static let webSiteURL: String = "https://www.peterwitham.com"
    public static let blogURL: String = webSiteURL + "/blog"
    public static let contactURL: String = webSiteURL + "/contact"
}
```

I’ll break the code down for those that might not be familiar with Swift (I have a great series of posts [here for you to learn it](/swift-programming-language/getting-started-with-swift/)). I create a struct called ‘AppConfiguration’ and in there I have added 3 constants that are publicly accessible and static. This takes care of making the configuration items available anywhere at any time. _webSiteURL_ is the base URL for my Web site. From there I create two additional strings that use the base URL as a starting point.

### Implementing the Configuration Struct

Time to use the configuration items. For the sake of simplicity in this tutorial, I am using a Swift playground and will simply print out the items.

```swift
print(webSiteURL) // displays: https://www.peterwitham.com
print(blogURL) // displays: https://www.peterwitham.com/blog
print(contactURL) // displays: https://www.peterwitham.com/contact
```

OK, nothing too amazing here. But let’s assume these URLs are used in a whole bunch of places through our application code. What if I now change domains, I need to update all the URLs in the application. Well, thanks to the configuration system, that is a one line change. I simply open my configuration struct file and change the base URL.

```swift
public static let webSiteURL: String = "https://uibuzz.com"
```

With that, I have now changed the domain in every URL throughout my application. This is what makes configuration structs or classes so useful and powerful.

## The Wrap

Another very good example of this is when you use a development flow that includes development, QA, and production servers. By just updating the configuration you can switch platform and build configurations very easily. Do you have a similar system to creating application configuration? I’d love to hear about it in the comments and get a conversation started to help improve development flow for all of us.
