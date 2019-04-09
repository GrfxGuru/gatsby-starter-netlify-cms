---
templateKey: blog-post-swift
slug: /swift-archives/install-new-swift-versions-xcode/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How To Install New Swift Versions in Xcode
date: 2016-05-24T00:05:45
blurb: Xcode ships with Swift, but you are not limited to just that version. In fact, you may not be aware of this, but you can have multiple versions of Swift installed at any one time. Here's how!
---

Xcode ships with Swift, but you are not limited to just that version. In fact, you may not be aware of this, but you can have multiple versions of Swift installed at any one time. Once installed you can use Xcode to manage which version of the language, debugger, and compiler you are running with just a few clicks. For this example let’s install the Swift 3.0 development trunk in Xcode 7.3.1 which is the latest release version as of this post.

### Download Swift

  1. Go to <https://swift.org> and click on ‘DOWNLOAD’ then ‘Snapshots’ from the left navigation menu.

![](https://peterwitham.com/wp-content/uploads/2016/05/Swift.org-Download-Swift.jpeg)

  2. You will see a table with a version for Xcode and Ubuntu. Click on ‘Xcode’, be sure to NOT click on ‘Debugging Symbols’ as that is a different file.

![](https://peterwitham.com/wp-content/uploads/2016/05/Swift.org-Download-Swift-2.jpeg)

  3. Once downloaded run the installer.
  4. Installer completed and you are ready to switch to Xcode.

### Configure Xcode

  1. Open Xcode and go to the ‘Preferences’.
  2. Change to the ‘Components’ tab. You will notice a sub tab called ‘Toolchains’, click on it.

![](https://peterwitham.com/wp-content/uploads/2016/05/Xcode-Components.png)

  3. Surprise! You now have a new option to use a Swift Development Snapshot, must be something you just installed right?
  4. Now you can switch between versions by choose either the default or any that you install. Note that you will need to restart Xcode when changing choices.

### This sucks, I want to go back to stock!

OK so eventually you could end up with either redundant versions installed or you just want to get rid of everything and go back to stock Swift installed with Xcode. As with all things Xcode, there are some hidden options until you roll over one of the installed toolchains. Hover over one of the listed items and look to the right of the name (before Origin). Do you see that little gear icon? That one little icon will let you verify the install, go to the files in the finder or remove the install.

![](https://peterwitham.com/wp-content/uploads/2016/05/Screen.jpeg)

You will not be able to remove the currently selected (duh!) so just choose either the default or something else and then you can remove any installs.

### You are so cutting edge!

That’s it; now you can see all the things about to ruin your day when new releases like Swift 3 finally hit the release versions.
