---
templateKey: blog-post-swift
link: https://peterwitham.com/swift-archives/intermediate/alert-with-user-entry/
author: Peter Witham
slug: /swift-archives/intermediate/alert-with-user-entry/
tags: ["Swift"]
title: Display an Alert with Text Field Entry
date: 2015-01-06T07:30:12
blurb: In this post I will show you how to display a text entry field in an alert to get input from the user and use that input back in the application.
---

In my previous post titled ['Display an Alert or Action Sheet Using Swift in iOS 8'](https://peterwitham.com/swift/intermediate/display-an-alert/) I showed you how to create and display an alert using Swift and iOS 8. In this post I will take that a step further and show you how to display a text entry field in an alert to get input from the user and use that input back in the application. In this example we will simply take the entered text and change a label on the view, however these simple principles apply for using the data any way you wish.

Let's get started.

First off, I created a new Swift based _Single View Application_ and added one button and one label to the display. I also took advantage of Xcode and let it assign missing constraints for me so the view stays nice at any device size and rotation, I also added an _@IBOutlet_ for the label and an _@IBAction_ for the button. These should be familiar to you by now, if not please [see my other Swift posts](/tags/swift/)

![01 - Storyboard with label and button.](img/post_images/01-Storyboard-with-label-and-button..png)

From this point onwards we will be entering code in the button _@IBAction_ that we created.

We need to create a variable to hold our instance of the _UIAlertController_

```swift
    var alertController:UIAlertController?
```

Now we create the instance giving it the title and message to display.

```swift
    alertController = UIAlertController(title: "Enter Text",
        message: "Enter some text below",
        preferredStyle: .Alert)
```

So far all we have created is an alert that shows a message, now we add the text entry field to capture the users input. The _placeholder_ is a text prompt that will be displayed by default and will be replaced once the user starts typing on the keyboard.

```swift
        alertController!.addTextFieldWithConfigurationHandler(
            {(textField: UITextField!) in
                textField.placeholder = "Enter something"
        })
```

Next we need to create an action button that will perform the magic for us, for this we create a variable of type _UIAlertAction_. We give a label to the button along with a style and then the code to be executed when the button is touched. Note that the alert contains an array of text fields, since our dialog only has one we reference the first element in that array to access the correct text field even if there is only one by using _theTextFields[0].text_.

```swift
        let action = UIAlertAction(title: "Submit",
                                   style: UIAlertActionStyle.Default,
                                   handler: {[weak self]
                                   (paramAction:UIAlertAction!) in
            if let textFields = alertController?.textFields{
                let theTextFields = textFields as [UITextField]
                let enteredText = theTextFields[0].text
                self!.displayLabel.text = enteredText
            }
        })
```

With all the creation code done, the action needs to be added to the _UIAlertController_ view.

```swift
        alertController?.addAction(action)
```

Finally we display the alert on the screen.

```swift
    self.presentViewController(alertController!,
                               animated: true,
                               completion: nil)
```

So the entire code content for the button should look like this

```swift
    @IBAction func buttonTouched(sender: AnyObject) {

        var alertController:UIAlertController?
        alertController = UIAlertController(title: "Enter Text",
            message: "Enter some text below",
            preferredStyle: .Alert)

        alertController!.addTextFieldWithConfigurationHandler(
            {(textField: UITextField!) in
                textField.placeholder = "Enter something"
        })

        let action = UIAlertAction(title: "Submit",
                                   style: UIAlertActionStyle.Default,
                                   handler: {[weak self]
                                   (paramAction:UIAlertAction!) in
            if let textFields = alertController?.textFields{
                let theTextFields = textFields as [UITextField]
                let enteredText = theTextFields[0].text
                self!.displayLabel.text = enteredText
            }
        })

        alertController?.addAction(action)
        self.presentViewController(alertController!,
                                   animated: true,
                                   completion: nil)
    }
```

![02 - Code in ViewController for Alert](img/post_images/02-Code-in-ViewController-for-Alert.png)

Save the project and run in either the simulator or your device and try it out. Click the button on the view and the alert should appear waiting for some input.

![03 - iOS Simulator - iPhone 6](img/post_images/03-iOS-Simulator-iPhone-6-iPhone-6-iOS-8.1-12B411.png)

Enter some text and touch / click _Submit_

![04 - iOS Simulator Alert Entry with text](img/post_images/04-iOS-Simulator-Alert-Entry-with-text.png)

You should now see the text you entered on the view displayed in the label.

![05 - iOS Simulator displaying text entered from alert](img/post_images/05-iOS-Simulator-displaying-text-entered-from-alert.png)
