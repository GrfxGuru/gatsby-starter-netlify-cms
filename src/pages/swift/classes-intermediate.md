---
templateKey: blog-post-swift
slug: /swift-archives/intermediate/classes-intermediate/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Swift Classes - Intermediate
date: 2014-08-05T07:45:52
blurb: A few concepts for taking your understanding of Classes to the next level in Swift.
---

A few concepts for taking your understanding of Classes to the next level in Swift. I am certain many if not all of these are techniques you will use over and over. This post continues on where [Swift Classes - The Basics](/swift-archives/basics/classes/) left off, so if you are not familiar with classes you will want to check out that post as well.

**_Subclassing a Class_**

There are many times you will want to take an existing class that either you or someone else created and change it in some way to suit your current need, to do that we do what is called _subclassing_ where we say ‘I want the functionality of this class but with a little something extra’. Think of it as buying that Ferarri but adding the fluffy dice and peace sign as after market parts!

``` swift
// Create our first class which will be subclassed
class Pet  {
}

// Now let's Subclass it
class Cat : Pet {
    super.init()
}
```

It is worth noting for anyone that is used to Objective-C that we set the properties of the subclass before calling the _init_ of the super class, this is backwards to some other languages as you may have noticed. A class is not considered fully initialized until both it’s own properties and any super class properties have been initialized, you should remember this as you design your inheritance and take it into consideration. You will find that Swift will help you out here but not compiling if you get it wrong!

**_Overriding Properties in Subclasses_**

We can override properties and methods from our super class by simply telling it to do just that, _override_. This is another example of the Swift ‘Safe’ way of doing things.

``` swift
class Pet {
    var description: String {
        return "This is our Pet class"
    }
}

class Cat : Pet {
    override var description: String {
        return "This is our Cat class that subclasses the Pet class"
    }
}
```

**_Property Observers_**

There are times you will want to have some kind of automatic notification when a property changes and maybe even execute some code. To do this we use something called _Property Observers_ it is hard to not think of these as working similar to other languages that use an event system with listeners. There is two parts to this one called _willSet_ and another called _didSet_, I have commented in the example code the differences to better explain what is happening.

In this example we have a class that runs our lottery machine, each time a number comes up the observer kicks in to check and see if it matches the winning number, if it does then we have a winner. The odds are pretty favorable on this lottery, not the greatest business plan :)

``` swift
class Lottery {
    var winningValue: Int;
    init(var winningValue: Int) {
        // In the initializer we set newBall to 0 just for
        // keeping this example simple
        newBall = 0;
        self.winningValue = winningValue
    }
    var newBall: Int {
        willSet {
            // willSet is called before the value is changed
            // we get something called newValue to use here
            if ( newValue == winningValue) {
                println("We have a winner!")
            }
        }
        didSet {
            // didSet is called after the value has changed
            // here we get something called oldValue
        }
    }
}

let thisWeeksLottery = Lottery(winningValue: 25)
thisWeeksLottery.newBall = 10
thisWeeksLottery.newBall = 25
```

Hopefully there are some things to take away from this post for you, in particular subclassing is something you will find yourself doing throughout any programming language.
