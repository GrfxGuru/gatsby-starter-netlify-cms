---
templateKey: blog-post-swift
slug: /swift-archives/calculate-date-swift-3-using-calendar-components/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How to Calculate a Date in Swift 3 Using Calendar Components
date: 2016-11-17T09:23:55
blurb: Learn how to calculate a future date and time in Swift 3 using calendar components.
---

As a follow-up to my article on [calculating a date using Swift](/swift/basics/how-to-add-a-future-date-in-swift/). A few readers and Twitter followers pointed out (thank you to all of you), you can also do the same thing using another popular method that involves calendar components. So let’s do it again using Calendar Components and Swift 3. But this time let’s mix it up a little and also introduce a stepper for hours as well as days.

[[Download the example project from GitHub](https://github.com/GrfxGuru/DateCalculationUsingComponents)]

### The Set-Up

For this exercise, I created a new single view iPhone application. I have added two steppers, a date selector, and several labels to the storyboard. I also added the _@IBOutlets_ and _@IBActions_ for each component. See the screenshot for reference. By now if you have been following my other articles this should all be very familiar. If not, I recommend reading some of my other articles [here](/swift/).

![](https://peterwitham.com/wp-content/uploads/2016/11/Storyboard-with-Starting-Code.jpg)

I also added some code to the viewDidLoad() method to set some initial display labels and the values of the steppers.

``` swift
dayStepper.value = 0
hourStepper.value = 0
displayDayStepperValue.text = "0"
displayHourStepperValue.text = "0"
displayDate.text = displayTheDate(theDate: dateSelector.date)
```

I added a method that takes a date for an argument and returns a formatted string to be used for display. It creates a new _dateFormatter_ object and sets the _dateFormat_ to “MM-DD-YYYY | hh-mm”. That date is then converted to a string and returned. This method is called in the _viewDidLoad()_ and will also be used when our date is changed by the user interacting with the UI.

``` swift
func displayTheDate(theDate:Date) -> String {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "MM-dd-YYYY | hh-mm"
    let strDate = dateFormatter.string(from: theDate)
    return strDate
}
```

Now all that is left to do is add the code for when the stepper values and date component values change. Since these three components essentially trigger the same action, which is to calculate the new date, they will all call one method so we do not repeat code. **Remember, code duplication is bad!** For the two stepper functions I also added the code to change the displayed value, since the stepper value is an _Int_ I cast it to a string for display.

``` swift
@IBAction func dayStepperChanged(_ sender: UIStepper) {
    displayDate.text = displayTheDate(theDate: calculateNewDate())
    displayDayStepperValue.text = String(dayStepper.value)
}

@IBAction func hourStepperChanged(_ sender: UIStepper) {
    displayDate.text = displayTheDate(theDate: calculateNewDate())
    displayHourStepperValue.text = String(hourStepper.value)
}

@IBAction func dateSelectorChanged(_ sender: UIDatePicker) {
    displayDate.text = displayTheDate(theDate: calculateNewDate())
}
```

We still need to create the _calculateNewDate()_ method but let’s break down the line in each of the methods above. _displayDate.text_ gets assigned a return from the _displayTheDate()_ method which formats a date object as mentioned earlier. That date object is coming from a call to the new _calculateNewDate()_ method. This new method will gather up data from the UI components and perform a date calculation then return the new date and time. Time to create the new method and make that calculation!

### Date Calculation Using Calendar Components

``` swift
func calculateNewDate() -> Date {
    let date = dateSelector.date
    let calendar = NSCalendar.current
    var components = DateComponents()
    components.day = Int(dayStepper.value)
    components.hour = Int(hourStepper.value)
    let newDate = calendar.date(byAdding: components, to: date)
    return newDate!
}
```

Let's break this all down and make sense of it. First, a new date object is created and assigned the value from the date selector. Next, a new _NSCalendar_ component is created along with a _DateComponents_ object. There are many different components you can use, in this instance I have used both the _.day_ and _.hour_, both expect and _Int_ value.

I set them to the _dayStepper_ and _hourStepper_ values respectively. Note, they have to be cast to _Int_ instead of their native _Double_ value types. Finally I created a new date object and assign the value of _calendar_ plus the component values (_byAdding: components, to: date_). The calculated date is returned from the method. So the entire viewController code looks like this

``` swift
//
//  ViewController.swift
//  FutureDateUsingComponents
//
//  Created by Peter Witham on 11/15/16.
//  Copyright © 2016 Peter Witham. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var displayDate: UILabel!
    @IBOutlet weak var displayDayStepperValue: UILabel!
    @IBOutlet weak var displayHourStepperValue: UILabel!
    @IBOutlet weak var dayStepper: UIStepper!
    @IBOutlet weak var hourStepper: UIStepper!
    @IBOutlet weak var dateSelector: UIDatePicker!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        dayStepper.value = 0
        hourStepper.value = 0
        displayDayStepperValue.text = "0"
        displayHourStepperValue.text = "0"
        displayDate.text = displayTheDate(theDate: dateSelector.date)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func dayStepperChanged(_ sender: UIStepper) {
        displayDate.text = displayTheDate(theDate: calculateNewDate())
        displayDayStepperValue.text = String(dayStepper.value)
    }

    @IBAction func hourStepperChanged(_ sender: UIStepper) {
        displayDate.text = displayTheDate(theDate: calculateNewDate())
        displayHourStepperValue.text = String(hourStepper.value)
    }

    @IBAction func dateSelectorChanged(_ sender: UIDatePicker) {
        displayDate.text = displayTheDate(theDate: calculateNewDate())
    }

    func displayTheDate(theDate:Date) -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM-dd-YYYY | hh-mm"
        let strDate = dateFormatter.string(from: theDate)
        return strDate
    }

    func calculateNewDate() -> Date {
        let date = dateSelector.date
        let calendar = NSCalendar.current
        var components = DateComponents()
        components.day = Int(dayStepper.value)
        components.hour = Int(hourStepper.value)
        let newDate = calendar.date(byAdding: components, to: date)
        return newDate!
    }
}
```

### Wrap-Up

Hopefully you can see that it is straight forward to calculate a new date once you understand how to use the calendar components. As a side note, notice how I structured the code in an almost functional way to both prevent repetition and enable easy code changes if needed. It may seem silly to have a method with just one line to call another method, but in the long run you will appreciate the portability and test ability of the code. Not to mention those late night coding sessions to make big changes from marketing ;)

You can [download the example Xcode project from GitHub](https://github.com/GrfxGuru/DateCalculationUsingComponents).
