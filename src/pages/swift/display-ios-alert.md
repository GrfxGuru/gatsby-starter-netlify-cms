---
templateKey: blog-post-swift
slug: /swift-archives/intermediate/display-an-alert/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Display an Alert or Action Sheet Using Swift in iOS
date: 2014-12-22T08:03:27
blurb: In this example I will show you how to make an alert appear in a Swift based iOS application.
---

In this example I will show you how to make an alert appear in a Swift based iOS application. Very straight forward and something you are going to need at some point. For this example I will make an alert appear showing the text entered as the message along with two possible actions, one clears the text and the other is a simple cancel button.

First, I created a new single view application, I added text entry and button controls to the screen also creating an _@IBOutlet_ and _@IBAction_ for both controls.

![](img/post_images/02-Storyboard-with-outlet-and-action..png)

The alert view and action sheet both use the _UIAlertController_ class, the class will provide you an instance that you use to present your alert. So let's create an instance when the user touches the button.

```swift
var alertController:UIAlertController?
alertController = UIAlertController(title: "Alert",
                                    message: textEntryField.text,
                                    preferredStyle: .Alert)
```

There are some straightforward arguments to complete of which the first one speaks for it's self. The second is the message, I simply assign the current value of the text entry field and the third is the style we want in this case _.Alert_.

Now we need to add any actions that we want to the alert view (or action sheet!), these would normally be buttons, so we create instances of the _UIAlertAction_ class and use the _addAction:_ method to strangely enough add them! The first action will simply do nothing which makes the alert disappear, the second will clear the contents of the text entry field.

```swift
// The cancel button
let firstAction = UIAlertAction(title: "OK",
    style: UIAlertActionStyle.Cancel,
    handler: nil
)

// The clear text button
let secondAction = UIAlertAction(title: "Clear Text",
    style: UIAlertActionStyle.Default,
    handler: {(paramAction:UIAlertAction!) in
    selt.textEntryField.text = ""
})
```

The final stage in preparing the alert is to add the actions to the alert.

```swift
alertController!.addAction(firstAction)
alertController!.addAction(secondAction)
```

Then finally, we need to present the alert view as the last part of the code when the button is touched. We do this by telling the current viewController _self_ to present it.

```swift
self.presetViewController(alertController!,
                          animated: true,
                          completion: nil)
```

So the entire contents of the button action should look like this

```swift
@IBAction func btnDisplayAlert(sender: AnyObject) {
var alertController:UIAlertController?
alertController = UIAlertController(title: "Alert",
                                    message: textEntryField.text,
                                    preferredStyle: .Alert)

let firstAction = UIAlertAction(title: "Cancel",
    style: UIAlertActionStyle.Cancel,
    handler: nil
)

let secondAction = UIAlertAction(title: "Clear Text",
style: UIAlertActionStyle.Default,
handler: {(paramAction:UIAlertAction!) in
self.textEntryField.text = ""
})

alertController!.addAction(firstAction)
alertController!.addAction(secondAction)
self.presentViewController(alertController!,
                          animated: true,
                          completion: nil)
}
```

![](img/post_images/03-Storyboard-and-complete-code.png)

Now run the application and enter some text and touch the button, you should see the sheet appear with the two possible options.

![](/img/post_images/04-iOS-Simulator-iPhone-6-Alert-Sheet.png)

Try a button then the other.

Hopefully this short introduction to displaying an alert has given you everything you need to get started, as with everything iOS there are many ways and many uses for things, play around and see what you can come up with.
