---
templateKey: blog-post-swift
slug: /swift-archives/how-to-theme-an-ios-app-using-uiappearance/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How to Theme an iOS App Using UIAppearance
date: 2018-03-14T13:48:14
blurb: Theming An Application Need Not Be Hard. Here is a simple approach using UIAppearance to create and apply a theme.
---

Something that has become a big thing in iOS applications is ‘dark mode’. But just how do you do theming on iOS. Well here is a simple way using Swift. There are many ways you can go about creating a theme using particular color sets and switch between them in iOS applications. This is my suggestion for a simple fast system that uses _UIAppearance_ with some _Structs_ to change the colors of components on the fly.

### The Idea

So the idea is that there are a series of Structs containing the defined color set that will act as a theme. The application UI will be using these colors via UIAppearance to set the look for components used in the UI. In this example, I will use buttons to trigger the theme change. Most of the time I would expect to see a setting in the application to decide which theme to use.

### The Application Setup

For creating and testing our themes we only need a simple application, I have included two views with some of the same components appearing on each view to demonstrate that the color changes are global in nature. Two buttons will be used to switch between the two themes. Each view controller has a _UIViewController_ which will contain the code for reacting to the user and calling the theme switcher. The theme switcher will be a Struct containing both the colors and the code to update the components displayed colors.

![](/img/post_images/2ViewControllersWithControls-squashed.png)

### Create The Themes and Switcher

First up we will create our new Struct file with the color themes. For this, I created a file called _Styles.swift_ I created a Struct called _Theme_ and inside there I created two functions for each of the two themes, _defaultTheme()_ and _darkTheme()_. These two functions assign a _UIColor_ to each of the properties that I also defined inside the Struct.

```swift
import Foundation
import UIKit

struct Theme {

    static var backgroundColor:UIColor?
    static var buttonTextColor:UIColor?
    static var buttonBackgroundColor:UIColor?

    static public func defaultTheme() {
        self.backgroundColor = UIColor.white
        self.buttonTextColor = UIColor.blue
        self.buttonBackgroundColor = UIColor.white
        updateDisplay()
    }

    static public func darkTheme() {
        self.backgroundColor = UIColor.darkGray
        self.buttonTextColor = UIColor.white
        self.buttonBackgroundColor = UIColor.black
        updateDisplay()
    }

    static public func updateDisplay() {
        let proxyButton = UIButton.appearance()
        proxyButton.setTitleColor(Theme.buttonTextColor, for: .normal)
        proxyButton.backgroundColor = Theme.buttonBackgroundColor

        let proxyView = UIView.appearance()
        proxyView.backgroundColor = backgroundColor
    }
}
```

To break the code down a little, there are some static properties with meaningful names that I will reference in the application code. This way I can _get_ one of the colors using something like _Theme.backgroundColor_ for example. The reason this is important is simple, the code of the application will have access to a color if it is needed. The color itself will be set by the functions inside the struct, so I can add as many different themes as I want without ever having to change the references inside my application code where I assign the properties to control properties.

The last function in the struct _updateDisplay_ creates a proxy control for each of the controls I want to set the theming for. In this example, I have two buttons and I also set the view background color. The colors are taken from the properties in the struct and assigned.

### Create the function to switch themes and update the view

On the buttons in the first view using _view1ViewController_ I now need to create _@IBActions_.

```swift
@IBAction func darkButton(_ sender: UIButton) {
    Theme.darkTheme()
    self.loadView()
}

@IBAction func lightButton(_ sender: UIButton) {
    Theme.defaultTheme()
    self.loadView()
}
```

Each button function calls the appropriate theme function inside the _Theme_ Struct, then it calls _self.loadView()_ to update the currently displayed view. One last little touch is needed, I set the default theme in the _AppDelegate_ inside the _application_ function.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions:
                  [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
// Override point for customization after application launch.
    Theme.defaultTheme()
    return true
}
```

Now time to run and test.

![](/img/post_images/Capture.gif)

### The Wrap

That my friend, is all you need to get a simple theming system working using Swift for iOS. You could argue with some success that the draw back to this method is that you need to assign the property for each control within the application. Yes, that could probably be done better, but once you have it setup it will just work. There are some third party libraries out there that will do a more complicated theming system if that is what you need, but this way you get to use just the libraries built into the Swift language, plus you get an understanding of how _UIAppearance_ works. So how do you create your theming systems, share in the comments below along with any feedback.
