---
templateKey: blog-post-swift
slug: /development-notes/create-a-gitignore-for-swift/
author: Peter Witham
tags: ["Development Notes", "Swift", "Xcode", "Source Control", "Git"]
title: Create a gitignore file for Swift and Xcode development
date: 2017-10-10T00:28:58
blurb: Somethings Should be Ignored. Especially when it comes to source control. So here is how you set up for Xcode and Swift using gitignore.io.
---

As I have previously mentioned, [everyone should be using source control](/development-notes/3-reasons-you-should-use-source-control/). One problem that does come with using source control is avoiding adding files that you should not be tracking. These files can include items like binaries, hidden system files, and personal IDE settings.

If you are using git, this is easily solved by setting up what is called a _git ignore file_. This file contains a specially formatted list of files and folders to be ignored by the source control application. You can use this file to control what is monitored or allowed to be added, this can be done both at a machine and project level.

A perfect example of a file type to be ignored and not added to source control is binary files. These should not be needed as anyone should be able to download the source and build the application. Not to mention that they can grow rather large and are hard to track changes in as the whole file is considered to be changed every time it is built.

You can create a _.gitnignore_ file by hand, or use tools to make it easier and faster. One tool I like to use is <https://www.gitignore.io>

### Using gitignore.io to generate a Swift and Xcode file

Using the gitignore.io web application makes the process of creating the pattern matches simple, and it actually works for any language or tool. All you need to do is enter in the box the languages and tools you plan to use and click _Create_. So for most of us, it will be Swift and Xcode.

![](/img/post_images/swift/GitInore_io-with-swift-xcode-1024x424.png)

The newly generated file appears in the browser ready to save. Simply save the file with the name _.gitignore_ in your project folder and the work is done. Remember that it will be a hidden file in the finder unless you are set to show them. Here is the code that gitignore.io generated so you can easily copy and paste if you prefer not to create one.

``` bash
# Created by https://www.gitignore.io/api/swift,xcode

### Swift ###
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## Build generated
build/
DerivedData/

## Various settings
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata/

## Other
*.moved-aside
*.xccheckout
*.xcscmblueprint

## Obj-C/Swift specific
*.hmap
*.ipa
*.dSYM.zip
*.dSYM

## Playgrounds
timeline.xctimeline
playground.xcworkspace

# Swift Package Manager
#
# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.
# Packages/
# Package.pins
.build/

# CocoaPods - Refactored to standalone file

# Carthage - Refactored to standalone file

# fastlane
#
# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the
# screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control

fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots
fastlane/test_output

### Xcode ###
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## Build generated

## Various settings

## Other

### Xcode Patch ###
*.xcodeproj/*
!*.xcodeproj/project.pbxproj
!*.xcodeproj/xcshareddata/
!*.xcworkspace/contents.xcworkspacedata
/*.gcno

# End of https://www.gitignore.io/api/swift,xcode
```

Now when you next go to use source control, Git will read the file and follow the instructions. This is a great way to keep junk from building up in your repositories, something your team and community members will greatly appreciate. p.s. it is also a great way to not accidentally upload credentials, I have actually seen DB usernames and passwords in repository code.
