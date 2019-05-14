---
templateKey: blog-post-swift
slug: /swift-archives/basics/dictionaries-swift-basics/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Dictionaries in Swift - The Basics
date: 2014-09-22T05:51:38
blurb: Dictionaries in Swift can be a very powerful asset when managing data. Each item in a dictionary is a pair of data, a key and a value. Let's take a look at creating and using them.
---

Dictionaries in Swift can be a very powerful asset when managing data. For those of you coming from other languages you may already of encountered them by a different name _associate arrays_.

At the heart of a dictionary is a very simple concept, each item in the dictionary is a pair, however unlike an _array_ the can be any kind of object, _BUT_ all the keys _MUST_ be the same kind of object, this also applies to the values. Keys and values _do not_ have to be the same type though which can be handy.

So with the basic rules out of the way here is an example of creating a Dictionary.

``` swift
    var states = ["AZ" : "Arizona", "CA" : "California", "TX" : "Texas", "NY" : "New York"]
```

In the above scenario the keys and values are both strings so type inference will make them strings. However there will be times that you want to be absolutely certain what the types are in the dictionary and you can do that by setting the types when declaring, for example the following creates a dictionary with a key type of _Int_ and a value type of _String_.

``` swift
    var states : [ Int:String]
```

So now that we know how to create a dictionary, how do we go about accessing their contents? Fire up those playgrounds and follow along at home!

Create a new dictionary

``` swift
    var states = ["AZ" : "Arizona", "CA" : "California", "TX" : "Texas", "NY" : "New York"]
```

Now lets get the value for “TX”, important to note here that you get back an Optional, you can read my post [Optionals](/swift/intermediate/optionals/) if you are not familiar with them.

``` swift
    println(states["TX"])
```

But what if you try something that does not exist like

``` swift
    println(states["MA"])
```

Opps! We never like the look of nil at runtime!

Now let’s stop here for a second and remember that Swift is all about safe code, so really should do the _println_ above in a safer way since there is a chance that we try to access something that does not exist. So let’s follow a pattern that you will start seeing a lot where we test and unwrap the optional at the same time.

``` swift
    if let stateName = states ["TX"] {
        println("The state name is \(stateName)")
    } else {
        println("State name not found")
    }
```

So now we create a constant and attempt to set it to the value in the dictionary for our key, but if that returns _nil_ we are covered because we can handle the situation.

So how do we add, change or remove items from our dictionary? There are some simple ways to do that.

If we try to define an item that already exists then it will simply update the value for the key, however if the item does not exist then it will be created for us. Try these two examples,

``` swift
    states["TX"] = "Texas Ya'll"
    states["FL"] = "Florida"
```

A quick note to say there is another way to do the samething that you might see or use.

states.updateValue(“Florida”, forKey:“FL”)

Now try let’s see the contents of the dictionary but this time we will loop through the contents, which gives us an opportunity to learn how to do that. We will use a for loop and assign _myKey_ and _myValue_ to the key value pairs in the _states_ dictionary and print them out.

``` swift
    for (myKey, myValue) in states {
        println("\(myKey) has the full name of \(myValue)")
    }
```

To remove an item from the dictionary there are again two ways to do it and we will also check the _count_ of the dictionary before and after removing two different items to indeed see that they have been removed completely.

``` swift
    states.count // Will be 5
    states["FL"] = nil
    states.removeValueForKey("TX")
    states.count // Will now be 3
```

Hopefully this basic run down on dictionaries has helped those of you that the concept might be new too. As you can see the syntax and concept is very straight forward once you have played with them for a while. Here is a [link to Apple’s Swift Programming Language Collection Types](https://developer.apple.com/library/prerelease/mac/documentation/Swift/Conceptual/Swift_Programming_Language/CollectionTypes.html) to provide further information.
