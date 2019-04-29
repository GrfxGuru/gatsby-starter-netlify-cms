---
templateKey: blog-post-swift
slug: /swift-archives/basics/functions/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Swift Functions - The Basics
date: 2014-07-01T14:22:12
blurb: Think of functions as blocks of code (not to be confused with the confusing _Blocks_ in Objective-C. They perform a task and often return something to the code calling them. Let's take a look.)
---

Functions are next up on the basics list, in a class you'll see them called _Methods_. Think of functions as blocks of code (not to be confused with the confusing _Blocks_ in previous iOS releases) that perform a task and either return something back or adjust something elsewhere in your program. Functions can be called with parameters that are used in the functions code. Often the function returns some meaningful data back from the call that can then be used for it's desired purpose.

To put it another way, think of a function as being a dish washer and the dirty plates going in as the parameters. The dish washer does it's thing and then returns back a clean set of plates ready to be used for something else. In a sudo code language it might be something like this.

``` swift
    function DishWasher( itemsToClean) {
            cleanItems = new Array of items
            for each dirtyItem in itemsToClean {
                hotWater
                scrubbingBubbles
                cleanItems add(dirtyItem)
            }
            return cleanItems
        }
```

**_The Basics of Creation_**

In Swift we use the keyword _func_ to define a new function.

So let's build a new function in Swift using our dish washer sudo code idea as the template.

``` swift
    func dishWasher() {
            // Exciting code on the way!
        }
```

But it does nothing, accepts nothing as parameters and returns us nothing, so it's pretty lame yeah! Let's tell the function to return something to us when it is finished. In our case we will want an array of strings back, so we use the _->_ to say "Hey give me back something" and then say it is an array of Strings. At this time we also create a variable in the function called cleanItems with is an array to hold our cleaned items and then use the _return_ keyword to tell it to return that array when the function has finished.

``` swift
    func dishWasher() -> [String] {
            var cleanItems = [String]();
            return cleanItems
        }
```

That's better, now it knows to return an array to us when the exciting code has finished and we are ready to exit the function. But now we need to give it a way to take some input to work with so lets tell it to expect an array of strings.

``` swift
    func dishWasher(dirtyItems:[String]) -> [String] {
            var cleanItems = [String]();
            return cleanItems
        }
```

For now lets assume that the new dish washer is not installed yet, plumbers are expensive at the weekends and its a Saturday, so lets just println each of the dirty items as we don't have hot water or scrubbing bubbles available at this time.

``` swift
    func dishWasher(dirtyItems:[String]) -> [String] {
            var cleanItems = [String]();
            for dirtyItem in dirtyItems {
                println(dirtyItem)
            }
            return cleanItems
        }
```

_hey fool, the cleanItems are still empty at the end and we won't care about printing the items to the screen when the dishWasher is installed on Monday!_

Yeah I know, let's take care of that and add each item after it has been cleaned to the array that gets returned at the end of the function and remove the println.

``` swift
    func dishWasher(dirtyItems:[String]) -> [String] {
            var cleanItems = [String]();
            for dirtyItem in dirtyItems {
                cleanItems.push(dirtyItem)
            }
            return cleanItems
        }
```

Here we are simply using the _push_ command to add the just cleaned _dirtyItem_ to the _cleanItems_ array each time we loop through the array.

**_Play time_**

Now let's try using the function by creating a new array of items of type _String_ and sending it as an argument, time to crack open your playground and explore!

``` swift
    func dishWasher(dirtyItems: [String]) -> [String] {
            var cleanItems = [String]();
            for dirtyItem in dirtyItems {
                cleanItems += dirtyItem
            }
            return cleanItems
        }

        let myDirtyList = ["Plate", "Cup", "Saucer"]
        let myCleanList = dishWasher(myDirtyList)
```

**_Default values in parameters_**

There are times you might not have a value to send for a particular parameter or you may find you send the same value over and over. For that you could use a default value, in this example we give the parameter _name_ a default string value and then call it without providing a parameter value. If you do send a parameter value then it will replace the default. By the way using the name of the parameter as you call the function can really help out in more complicated scenarios, so you really should get used to thinking that way.

``` swift
    func helloTo(name: String = "Stranger") -> String {
            return "Hello there " + name
        }

        helloTo() // Prints to the screen "Hello there Stranger"
        helloTo(name: "Peter") // Prints to the screen "Hello there Peter"
```

**_Multiple Parameters_**

Sending more than one argument to a function is super easy just separate them with a comma. Notice on the third call we switched the parameters around the other way, but since we named them everything works as expected, see I told you it was worth it! On the fourth call we do not send a name so the default is used however we use the parameter value for the greeting.

``` swift
    func helloToGreeting(name: String = "Stranger", greeting: String = "Welcome") -> String {
            return "Hello there " + name + " " + greeting
        }

        helloToGreeting()
        helloToGreeting(name: "Peter", greeting: "Go Away!")
        HelloToGreeting(greeting: "Come on in!", name: "Paul")
        HelloToGreeting(greeting: "Come on in!")
```

**_Returning Multiple Values a.k.a. Hello Mr Tuple_**

Swift has something cool, it allows us to return multiple values using something called a _Tuple_. We do not have to do any clever tricks like we do with other languages to get multiple values returned....rejoice! Now tuples can get as complicated as you want them to be, but here we will go over the basics to get you up and running. To return a tuple you simply use a comma separated list in the return type.

``` swift
    func myFunction() -> (String, Int) {
            return ("Age", 50)
        }
```

But how do you get to the values you ask, well you _decompose_ them, try this out using the above function

``` swift
    let (dataItem, personsAge) = myFunction()
        println("Data item: \(dataItem) n")
        println("Data value: \(personsAge)")
```

But that's not all! If you name the values in the return then you can use cleaner code to access them.

``` swift
    func myFunction() -> (dataItem: String, dataValue:Int) {
            return ("Age", 50)
        }

        let myReturn = myfunction()
        println("Data item: \(myReturn.dataItem) n")
        println("Data value: \(myReturn.dataValue)")
```

Now that looks cleaner and easier to understand does it not? Hey in life it's the small things, and in code those small things can prevent big disasters when the code gets complicated because those project requirements change...never happens right? :)
