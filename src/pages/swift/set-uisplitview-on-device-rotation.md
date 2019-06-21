---
templateKey: blog-post-swift
slug: /swift-archives/how-to-set-the-display-of-a-uisplitviewcontroller-master-view-on-device-rotation/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How to set the display of a UISplitViewController Master View on Device Rotation
date: 2018-11-08T00:24:26
blurb: How to detect device rotation and adjust. Whilst working on my Code Notes application, I wanted to detect when the iPad rotation changes and show/overlay the master view. Here's my solution using Swift.
---

The UISplitViewController is extremely useful on iPad's and supersized iPhones. For the most part it also works nicely, but there will come a time that you will want to tame the view that appears on the left, commonly referred to as the master view.

You mostly see it being used for lists, which is handy for my [Code Notes for iOS](https://pw.d.pr/W0cEWM) application. But it comes with a complication, when a device rotates to landscape I want to set the master view to show by default, and when in portrait I want to have the master view appear as an overlay that can be dismissed to allow the detail view to take up the full screen.

This little code snippet below will do just that, I added it to my master view controller.

``` swift
    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        super.viewWillTransition(to: size, with: coordinator)
        if UIDevice.current.orientation.isLandscape {
            splitViewController?.preferredDisplayMode = .allVisible
        } else {
            splitViewController?.preferredDisplayMode = .primaryOverlay
        }
    }
```

Hopefully this helps you out keeping that master list display mode under control.
