---
templateKey: blog-post-swift
slug: /swift-archives/basics/swift-4-codable-json-handling-made-easy/
author: Peter Witham
tags: ["Swift"]
title: Swift 4 Codable, JSON Handling Made Easy
date: 2017-06-27T23:41:49
blurb: Swift 4 finally has it’s own data parser for JSON. Here’s how you use it with a simple example.
---

## Data Can Make You Cry

New to Swift 4 is a way to deal with encoding and decoding your data with minimal effort. Yes, there are plenty of third party libraries out there, but it really should be something Swift can just do for us. Let’s take a look at these new Protocols.

### The Problem

So here is the problem, we want to consume and send data in JSON, a very popular and efficient data type loosely describing data used by just about platform out there. So this is great, we have a way to deal with data and be friendly to the World. But the problem is, currently we have to do a lot of fancy coding to encode and decode it in Swift 3. Then, what if the data structure changes or has to be changed? We have to go back and change it all over again. If only there was a better way to have this new smart language take care of the details.

### The Solution

Swift 4 gives us a solution, the best part, it’s just one word _Codable_ Yep, one word for two Protocols. Just by adopting _Codable_ we tell the Swift compiler that we need it to create an encoder and decoder for us, and if it could please take care of mapping the data nicely as well that would be great. Example time!

### Setup

Say we have a struct called _Person_, we want to be able to send and receive JSON data in a format that is compatible with our struct. So first, we will create our data container.

``` swift
struct Person: Codable {
enum Gender: String, Codable {
case Male, Female, Alien
}
    var name: String
    var userName: String
    var gender: [Gender]
}
```

It will contain a name, username, and gender. Note the gender is an _enum_ because we really only have limited options, on this planet at least :) For this example, we will create just one instance of _Person_

``` swift
let person1 = Person(name: "Peter", userName: "pwitham", gender: [.Alien])
```

### Encoding to JSON

To perform the magic, first we will create an instance of the _JSONEncoder_, then we create a new constant to hold our encoded data and just for this example we will create a string to display what the encoded version looks like.

``` swift
// Encode to JSON
let jsonEncoder = JSONEncoder()
let jsonData = try jsonEncoder.encode(person1)
let jsonString = String(data: jsonData, encoding: .utf8)
print(jsonString)
```

### Decoding from JSON

To decode a JSON object we just reverse the process. In this example, I have created a _JSONDecoder_ and then create a constant to hold the decoded data. Finally, I print the properties just to show it worked correctly.

``` swift
let jsonDecoder = JSONDecoder()
let person = try jsonDecoder.decode(Person.self, from: jsonData)
print(person.name)
print(person.userName)
print(person.gender[0])
```

### The Wrap

That is really all that you need to do to work with the new protocols. Any changes in the structure of the data are automatically handled for you, so if you change the _struct_ to include something like age, it will be taken care of automatically when encoding or decoding thanks to Swift 4. Now that was better than choosing from the tons of 3rd party libraries right!
