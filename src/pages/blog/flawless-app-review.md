---
templateKey: blog-post
slug: /xcode/flawless-app-review/
author: Peter Witham
tags: ["Development Notes", "Design", "Reviews"]
title: Flawless App Tutorial and Review
date: 2018-05-28T19:09:48
blurb: Pixel Perfect Layouts. Thanks to Flawless App we can now take those designs and get them pixel perfect accurate in our applications.
---

Has this ever happened to you? A designer gives you a great looking series of images that you need to convert to a working application, you then spend days tweaking the code or storyboard to get the layout just right. Constantly switching between images and apps.

This is where [Flawless App](https://vrlps.co/C18wV1u/cp) comes in, using just the iOS simulator you can view both your working app and the images from the designer at the same time. Overlaying both to check for pixel perfect layouts. Let’s take an in-depth look at both the app and the workflows.

## The Design

My designer has come to me with a layout for our new news application. They build the design using Sketch. Here is the design they supplied.

![](https://peterwitham.com/wp-content/uploads/2018/05/iPhone-X.png)

As you can see they want three panels with stories in, a button to add a new story, and navigation will be via a tab bar.

## Basic Xcode layout

Let’s get started by adding the needed controls to a new view in Xcode.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_02-44-07_AM-458x1024.png)

## Flawless App Time

Now is time to start the magic. Be sure to open the Xcode iOS simulator before you open Flawless App. The easiest way is to just run the application being developed in Xcode, this will automatically open or update the simulator with the new view.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_02-47-00_AM-579x1024.png)

Run the Flawless application, you will see an icon in the macOS system bar. If you click on the icon you will see the Flawless application window.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_02-50-02_AM.png)

This is the main interface to the app, clicking the gear icon will open the settings.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_02-51-29_AM.png)

Looking through the options, I suggest leaving ‘Keep window opened if focus changed’ turned on, this will always show the window as you work. You could alternatively have the window appear only when the iOS simulator is showing.

## Time To Compare

There are a couple of different ways we can add the file from our designer to the simulator. We can either drag and drop the file on to the application icon in the system tray, or we can click on ‘Choose Designs’ in the application window. File formats supported by Flawless App include Sketch, JPG, PNG, TIFF, and GIF. Since the designer supplied the Sketch file, let’s add that to Flawless App. Note that you can include more than one design file if you wish, for this application we just have one for now.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_02-59-06_AM.png)

The iOS simulator will restart with support for our new compare modes. At first it will look no different, but let’s try the different modes right now! In the application window there are three ‘Modes’. By default the hidden mode is selected which shows no overlay, this is the button to the far right. This is the standard simulator view that shows our screen.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_02-47-00_AM-1-579x1024.png)

The mode to the left of the is a split view, this is my personal favorite. I can use a handle on the simulator to drag left and right to view either the standard view or the overlaid design from the Sketch file. This is perfect for quickly switching views.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_03-07-56_AM-579x1024.png)

Finally the middle icon is ‘Overlay’ mode. When selecting this mode a draggable bar appears in the Flawless App window that allows us to change the alpha opacity of the design in the simulator window.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_03-09-38_AM.png)

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_03-09-56_AM-579x1024.png)

This covers the basic use of Flawless App for comparing application views and designs. But we can take it up a level and use some more cool features!

## Cool Features

So you thought it was a cool app so far right? Well now we can take it even further.

### Automatic Animated Screen Review

Many times it is easier to just show someone an image or animation to get a concept across. This is where automation also helps our workflow. On the application window you may of noticed a camera icon to the right of our design file in the ‘Choose Designs’ table. This will export an animated file for us using our selected compare mode. Just click the camera and a file is exported to share.

![](https://peterwitham.com/wp-content/uploads/2018/05/iPhone-X-iPhone-X-28-May-2018-03-16-55-473x1024.gif)

![](https://peterwitham.com/wp-content/uploads/2018/05/iPhone-X-iPhone-X-28-May-2018-03-17-23-473x1024.gif)

### Measurement Tool

To the left of the camera icon is the measurement tool. This is a recent feature that was requested by users. Side note, the developers are very response to their customers wishes! If you turn on the measurement tool, you can draw on the simulator window to measure anything and everything. Just click and drag to get a smart measurement, you can repeat this as many times as needed.

![](https://peterwitham.com/wp-content/uploads/2018/05/Capto_Capture-2018-05-28_03-20-53_AM-579x1024.png)

### Dynamic Design Generation

If you are a Sketch user or are given a Sketch file that makes use of dynamic resizing constraints then you are in luck. A new feature in Flawless App means you no longer need to have the Sketch application to see the process in action. Flawless App is smart enough to know which device you have selected in the simulator and translate Sketches constraint system to work for you automatically.

### The Future

There are a couple of cool features in the works including the ability to compare separate UI elements and not just a whole screen. This gives even more precision by allowing the developer to focus on specific elements. Rulers and guides are a much requested feature and a natural extension from the current measurement tool. Finally, the developers have been paying attention to the every growing desire to have interactive prototypes from designs.

## The Wrap

Flawless App is an important tool for developers and designers alike, the ability to review in real-time layouts speeds the process to a final working design. You can [buy the application for $30 on the site here](https://vrlps.co/C18wV1u/cp).

The application is also part of the [SetApp](https://pw.d.pr/7f31K6) service, for just $10 a month this and lots more applications are available for macOS users. [More details here](https://pw.d.pr/7f31K6).
