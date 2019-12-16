---
templateKey: blog-post-swift
slug: /swift-archives/documenting-swift-code-in-xcode/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Documenting Code in Xcode the Right Way
date: 2017-08-03T01:43:44
blurb: Documenting Code is Vital. In this tutorial, I am going to demonstrate how to create inline rich documentation and help for use in Xcode and as standalone documents.
---

Xcode 7 onwards gave us the ability to document our code beyond just simple comments. Using Markdown, we can write structured documents that are both accessible right within Xcode’s Editor and as standalone documentation. We can use this feature to document classes, functions, parameters, literally anything that we feel needs to be explained or referenced.

This enables us to better share code with team members, or refer back in the future to what something does and why. If your are writing API’s that will be used by other developers, documentation is a must! To take full advantage of rich documentation you need to understand at least the basics of [Markdown](https://daringfireball.net/projects/markdown/syntax).

Apple also has a [reference document](https://developer.apple.com/library/content/documentation/Xcode/Reference/xcode_markup_formatting_ref/index.html) that you can read to understand which tags are supported and how to use them, I will not go over the markdown language specifics in this article.

Once you have documented code it will appear in the quick help inspector panel and in the code editor. Working through the example below will help demonstrate this. There is a system of keywords than can be used to highlight particular parts of our code like parameters and returns. Here are a few examples,

- Parameter someParameterName:
- Returns:
- Remark:
- SeeAlso:
- Todo:
- Warning:
- Version:
- Author:
- Note:

The names should explain their purpose, for example, we can put an author name in function documentation so we know who wrote it along with a version number. Let’s try and example and see how this all works for our benefit.

## Example Time

For this example I have created a very simple one screen application with one button, one text entry field, and one display label. Plus one function that gets called. Not exactly a viral app, but it serves our purpose for adding documentation. I am going to use the keyboard shortcut inside the code editor to generate document block templates. To do this, all we need to do is place the cursor before the item we want to document. I’m going to start with the action for the button.

I’ll use the keyboard shortcut _Command + Option + /_ and template code will be generated for me.

![](img/post_images/ScreenFlow.gif)

Now all I have to do is enter the information just as I would when filling in a functions parameters. Try to make your comments meaningful, try to describe the purpose of the code and what it will do. I’ll repeat the process for the _concatText_ function. This completes the documentation, I have included the code and generated documentation below.

```swift
/// Touching the button will call the _concatText_
/// function and use the return to set the display
/// label.
///
/// - Parameter sender: _
@IBAction func btnDisplayText(_ sender: UIButton) {
lblDisplayText.text = concatText(inputString: txtInput.text!)
}


/// Takes a string argument and returns a concatenated
/// String.
///
/// - Parameter inputString: Any string as input
/// - Returns: Returns a new string
func concatText(inputString:String) -> String {
let newText = "The Text is: " + inputString
return newText
}
```

If I now hold down the option key and click the cursor on the call to _concatText_ in my button function, I get the following documentation.

![](/img/post_images/XcodeShowingDocumentation.jpg)

So there is a simple example of creating code documentation. As you can see it is very useful if you were sharing code with a team and they needed to know what something does. We should all document our code, this just makes life a little easier for us and removes the excuses to not do it.

### Standalone Documents

Using a 3rd party tool we can create standalone documentation that can be viewed in a web browser. To do this we need to install a tool called _Jazzy_. So let’s do that real fast. Jazzy is a terminal tool. We need to install the Ruby gem, so at the terminal type

````bash
    $sudo gem install jazzy
    ```

  Now with the tool installed, navigate to the project folder that you want to generate documentation for and run Jazzy

``` bash
    $jazzy --min-ac internal
````

To see available options for Jazzy and what they mean you can use the help system.

```bash
    $jazzy --help
```

Jazzy should have created a folder called _docs_, in there will be the newly created documentation that you can open in any HTML viewer like a Web browser. You will see something along these lines as Jazzy is running

```bash
    Running xcodebuild
    Parsing ViewController.swift (1/2)
    Parsing AppDelegate.swift (2/2)
    13% documentation coverage with 13 undocumented symbols
    included 15 internal, public, or open symbols
    building site
    building search index
    downloading coverage badge
    jam out ♪♫ to your fresh new docs in docs
```

## The Wrap

So that is a quick introduction to documenting code within Xcode. This is only the beginning of a beautiful journey to well-documented code, welcome aboard.

I have made a [GitHub repository](https://github.com/GrfxGuru/CodeDocumentationExample) with this example for you to play around with, you can [download it here](https://github.com/GrfxGuru/CodeDocumentationExample).
