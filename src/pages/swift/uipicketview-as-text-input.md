---
templateKey: blog-post-swift
slug: /swift-archives/how-to-use-a-uipickerview-as-input-for-a-uitextfield/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How to Use a UIPickerView as Input For a UITextField Using Swift
date: 2018-04-07T22:57:37
blurb: There are times you want to give a user options for entry rather than rely on freeform typing. A picker is a great way to get predictable and manageable results.
---

**[ Updated for Xcode 9 and Swift 4 ]**

I have previously posted on how to use the UIPickerview. One of the more interesting uses I have found to solve a user interaction problem is using a picker as the entry selector for a text field. Here is how you do that.

### The Problem

So you need a user to input something in a text field, but you want to be sure they are following your desired format. Or maybe you want to restrict their options of what they can put in the text field. In other words, freeform entry is not what you want. A good example of this is my Code Notes application that I am building ([Github link](https://github.com/GrfxGuru/CodeNotesForiOS)). I want the user to select a programming language, but I want to be sure they do not add ‘JavaScript’ and ‘Java Script’. So I used a picker with a defined list. Let’s look at how you can do that.

### The Solution

I have created a simple one screen application with a text field. The end goal is for the user to touch on the text field where they will be presented with a list of options to choose from, the currently selected option will appear in the text field. Currently, I have the textfield and no code.

![](/img/post_images/swift/Xcode-with-Empty-TextField-squashed.png)

Firstly, I need to create an outlet for the UITextfield so that when the selection in the picker changes, I can update the displayed text.

``` swift
@IBOutlet weak var theTextfield: UITextField!
```

Next, I need to create a _UIPickerView_ in my _viewDidLoad()_ function. This serves as the picker that will be displayed when needed. Note that we create this instance in code rather than add to the storyboard. The reason for this is simple, I do not want the picker to appear all the time, only when the text field is selected.

``` swift
let thePicker = UIPickerView()
```

With everything in place, we now need to tell the text field that the picker view will be used as the input method when a user touches on it. To do that we assign the picker as the _inputView_ for the text field. This is very straight forward, in the _viewDidLoad()_ we just need to add one more line.

``` swift
theTextfield.inputView = thePicker
```

In this case, I gave my text field outlet the name _theTextField,_ and my picker instance _thePicker_. If you run the application now, everything should do what you expect. You touch on the text field and a picker appears, but yes … it is blank. We still need to give the picker some data to display! There are a couple of steps we need to do here. We need to make use of our good iOS friend, the _delegate_. We need to make our view the delegate data source for the picker control. Then we need to provide it some data. To do this, we need to say our class will conform to _UIPickerViewDelegate_ and _UIPickerViewDataSource_. So look for the line of code with

``` swift
class ViewController: UIViewController {
```

And change it to

``` swift
class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {
```

The first thing that will happen is we will get an error indicator that says something like Type ‘ViewController’ does not conform to the protocol ‘UIPickerViewDataSource’ This simply means we need to implement the requirements to act as the delegate.Lucky for us, I know that we need to add the following functions according to the Swift documentation. If you are using Xcode 9 the code editor will offer an option to 'Fix' the problem by adding the protocol stubs for you.

![](/img/post_images/swift/XC9FixProtocol-1024x96.png)  

``` swift
// MARK: UIPickerView Delegation

func numberOfComponents(in pickerView: UIPickerView) -> Int {
}

func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
}

func pickerView( _ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
}

func pickerView( pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
}
```

Right now, this is still wrong, the functions are expecting to return something, and we need to add the rest of our code. We will fix all that now. Before working on the functions, let’s get some data we can work with. For this example, I am going to use a simple _String_ array. So inside the top of the class add the following,

``` swift
    let myPickerData = [String](arrayLiteral: "Peter", "Jane", "Paul", "Mary", "Kevin", "Lucy")'
```

Now that we have some data we can fill in those functions.

``` swift
// MARK: UIPickerView Delegation

func numberOfComponents(in pickerView: UIPickerView) -> Int {
    return 1
}

func pickerView( pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
    return myPickerData.count
}

func pickerView( _ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
 return myPickerData[row]
}

func pickerView( pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
    theTextField.text = myPickerData[row]
}
```

With the functions in place we have now satisfied the delegation, so all that remains is to tell our picker that this _viewController_ is acting as it’s delegate. Back in the _viewdidLoad()_ is where we do that.

``` swift
thePicker.delegate = self
```

Our work is complete, if you run the application and touch on the text field, a view picker should appear with our list in it. If you change the selection, the text field should update.

![](/img/post_images/swift/Xcode11Simulator-592x1024.png)

### The Wrap

How cool is that? I bet you thought it was going to be harder and more involved. This can serve as a great way to get user input, but with predictable results. I have uploaded the project used in this example to [Github](https://github.com/GrfxGuru/SwiftUIPickerViewAsUITextFieldEntry), feel free to [download](https://github.com/GrfxGuru/SwiftUIPickerViewAsUITextFieldEntry).
