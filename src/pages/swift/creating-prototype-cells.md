---
templateKey: blog-post
slug: /swift-archives/intermediate/creating-and-using-ios-prototype-cells-with-swift/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Creating and Using iOS Prototype Cells with Swift
date: 2015-07-20T08:08:10
blurb: Prototype cells in iOS tables do have a learning curve for those not familiar with how they work. I'm going to show you how to create and use them without the pain. Learn once, use many!
---

Prototype cells in iOS tables do have a learning curve for those not familiar with how they work. I'm going to show you how to create and use them without the pain. Learn once, use many!

Before we start there are a few assumptions made although you can easily follow along regardless of experience.

  * First, you are familiar with creating new classes.
  * Also you are with familiar creating functions.
  * Lastly we will be using to a small degree constraints.

With that out the way, what are we going to do and why?

Prototype cells are a way to layout the look and feel of a cell inside a table view, they allow us to get a representation of how things are going to work when the application runs and data is passed into the table. These Prototype cells allow for complex layout beyond the basic table view.

In this example I am going to display two labels powered by data from our table data source. This will get you thinking about how you can use them, remember you can place all sorts of things inside a table cell not just text!

The outline of the steps we are going to perform are as follows

  1. Add a table view to our view controller.
  2. Add a prototype cell to our table and add the content we need, in this example it is two label objects.
  3. Create a class for our cell to use, this gives us many abilities going forward but for now it simply gives us a way to create _@IBOutlets_ for our labels to receive data.
  4. Make our view a delegate for the table view, I chose not to use a _tableViewController_ since many times people will want more than just a table on the view.
  5. Create a struct to control the data we will use.
  6. Create a data object and populate it using our struct as the template.
  7. Finally we will tell our table all about the data by telling it how many cells to create and what should go in them based on our prototype cell class we created.

Sounds like a lot? It really is not going to take long, I just want to make sure that all the steps are explained for those starting from scratch. Remember you can always come back to this post anytime you need something, and please share with friends!

## Creating the basic layout

First create a new single view application making sure to use the _Swift_ language. Then add a _Table View_ to the _View Controller_. Now add a _Table View Cell_ to the table, dragging from the objects library to the table on a storyboard is probably the quickest way. You should have something like this

![Storyboard with Table and empty prototype cell](https://peterwitham.com/wp-content/uploads/2015/07/Storyboard-with-Table-and-empty-prototype-cell-1024x601.png)

At this point we need to give our prototype cell a _reuse identifier_ so it can be referenced in code later on. With the new prototype cell selected go to the _utilities panel_ and select the _attributes inspector_, in there at the top is a section called 'Table View Cell' and an entry field labelled as 'Identifier' enter a name, I went with 'myProtoCell'

![attribute inspector showing prototype cell reuse identifier name](https://peterwitham.com/wp-content/uploads/2015/07/attribute-inspector-showing-prototype-cell-reuse-identifier-name.png)

Now we get to start designing our prototype cell. Drag a label to the cell and place it in the top left corner. There is probably no room left so we need to expand the height of the cell by hovering the mouse over the bottom edge of the cell where it should change and let us click and drag to a height big enough for two labels. Do this and then drag a second label below the first.

![Prototype cell with two labels.](https://peterwitham.com/wp-content/uploads/2015/07/Prototype-cell-with-two-labels.-1024x601.png)

That is the layout taken care of, now to the code!

## Create a new class for our prototype cell

Now we need to create a new class that our prototype cell is going to use, this gives us a convenient way to hook up our labels to _@IBOutlets_ so we can send data into each cell as it is being created.

Create a new file of type _Cocoa Touch Class_ that subclasses _UITableViewCell_ ensuring again that it uses the _Swift_ language. ![Xcode - New class file creation window](https://peterwitham.com/wp-content/uploads/2015/07/Xcode-New-class-file-creation-window.png)

Now we need to go back to our storyboard to assign this new class and make some additions to it.

Back in the storyboard file select the _Table View Cell_, personally I find the best way is to click on it in the document outline view.

![Document outline view with table view cell selected.](;pwv/wp-content/uploads/2015/07/Document-outline-view-with-table-view-cell-selected..png)

With the _table view cell_ selected go to the _utilities panel_ and change to the _identity inspector tab_ if not already selected, note that there is a dropdown labelled 'Class', in there either by using the dropdown or by typing select the new class you just created.

![Utilities tab with new class name selected](https://peterwitham.com/wp-content/uploads/2015/07/Utilities-tab-with-new-class-name-selected.png)

## Hook up our cell text labels using IBOutlets

Open the _Assistant Editor_ with the table cell selected and you should see the new class appear with the starting code. If the editor does not automatically show the class file then you can use the navigation bar above the editor to select the file so we can start editing.

Either right click or control and click from each of the text labels in the cell to the editor window to create two _@IBOutlets_.

![Storyboard with labels and outlets](https://peterwitham.com/wp-content/uploads/2015/07/Storyboard-with-labels-and-outlets-1024x601.png)

## Data source creation

For this simple example I am going to use a struct and create our array of data in the controller, clearly this is not something I would expect in the real World but it gets us what we need to make this all work and for me to get the idea across.

Open the _ViewController.swift_ and you should see the standard code that gets created for us.

We are going to use a simple _struct_ as the template for our data source. Just inside the opening _class_ tag add

``` swift
Struct MyData {
    var firstRowLabel:String
    var secondRowLabel:String
}
```

This gives us two string variables that will store our data. In order to use this new struct and to power the table we will need an array. Below the struct we just created, create a new variable which will be an array that holds a type of our struct.

``` swift
var tableData: [MyData] = []
```

The code for your view controller should now look something like this

``` swift
//
//  ViewController.swift
//  PrototypeCellBasics
//
//  Created by Peter Witham on 7/19/15.
//  Copyright © 2015 Peter Witham. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    struct MyData {
        var firstRowLabel:String
        var secondRowLabel:String
    }
    
    var tableData: [MyData] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
```

The last part is to actually add some data to our array, inside the _viewDidLoad()_ function let's add some rows of data, remember that our struct is going to make it simple! So here is the entire code for the _viewDidLoad()_ function, be sure to use any names that might be different from the ones I have used. I added three items of data to the array.

``` swift
override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    tableData = [
        MyData(firstRowLabel: "The first row", secondRowLabel: "Hello"),
        MyData(firstRowLabel: "The second row", secondRowLabel: "There"),
        MyData(firstRowLabel: "Third and final row", secondRowLabel: "https://peterwitham.com")
    ]
}
```

## Table delegation and data source

With our data created we now need to be responsible for our table and that means delegation!

We need to change our _ViewController.swift_ to act as the delegate and data source for our table, this is done in the usual way by changing

``` swift
class ViewController: UIViewController {
```

to

``` swift
class ViewController:UIViewController, UITableViewDelegate, UITableViewDataSource {
```

At this point Xcode will start complaining that we have not satisfied the requirements to be a table delegate and we should now make it happy by adding the required functions to do that. First we will add them and then we will customize them to suit what we need, so go ahead if you want and just paste the code below into the view controller. Note that Xcode is still going to complain since we have not completed the code in these functions.

``` swift
func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {

}
    
 func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
}
```

## Completing the code

Now we are ready for the final steps, we have our view taken care of along with a data source, all we need to do is plug them into each other by editing the _tableView_ functions.

We will start with returning the number of items in our data array to give the total number of cells we need to create in the table.

``` swift
func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return tableData.count
}
```

The last one is a little more complicated, we create a cell and populate it with data from our data source and then finally return that to be added to the display. This function is called for each cell in the display automatically. I have added code comments to explain what is happening.

``` swift
func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
    // Create a new cell with the reuse identifier of our prototype cell
    // as our custom table cell class
    let cell = tableView.dequeueReusableCellWithIdentifier("myProtoCell") as! MyTableCell
    // Set the first row text label to the firstRowLabel data in our current array item
    cell.lblFirstRow.text = tableData[indexPath.row].firstRowLabel
    // Set the second row text label to the secondRowLabel data in our current array item
    cell.lblSecondRow.text = tableData[indexPath.row].secondRowLabel
    // Return our new cell for display
    return cell
}
```
Anyone that has used tables before and delegation will notice there is one more step, we need to tell our table that our view controller is going to act as the delegate and data source (now that we have completed the code).

To do that you need to either right click or control click on the table and drag up to the View Controller icon at the top of our view controller on the storyboard. When you do this you will get two options, we actually need to do it twice and select both.

![](https://peterwitham.com/wp-content/uploads/2015/07/Table-view-dragging-to-view-controller.png)

![](https://peterwitham.com/wp-content/uploads/2015/07/Table-view-setting-View-Controller-as-delegate-and-dataSource.png"><img src="https://peterwitham.com/wp-content/uploads/2015/07/Table-view-setting-View-Controller-as-delegate-and-dataSource.png)

##Run it!

With everything done go ahead and run the application, I am using the iPhone 5 simulator so I can get the screenshot.

![](https://peterwitham.com/wp-content/uploads/2015/07/Simulator-iPhone-5-Truncated-labels.png)

## Wait a minute! You forgot something!

I did not forget, I wanted to see if anyone would notice! To make everything size correctly we need to use some constraints. The clue was in my assumption list at the beginning of the post!

To make the labels stretch correctly and see our content on any rotation of any size device we need to assign constraints. Thankfully the ones for this application are really simple.

Ensuring that you have the view controller selected go down to the bottom right of the storyboard window and look for the icon on the far right. Click it and a menu should appear with the option 'Add Missing Constraints' in the all views section, simply click that and Xcode is smart enough to fix the problems for you (but it does not always work so be aware of that in the future!).

![](https://peterwitham.com/wp-content/uploads/2015/07/Add-missing-constraints-menu.png)

Run the application again and now everything should work just fine at any size and any rotation.

![](https://peterwitham.com/wp-content/uploads/2015/07/Simulator-iPhone-5-3-rows-vertical-table.png)

![](https://peterwitham.com/wp-content/uploads/2015/07/Simulator-iPhone-5-iPhone-5-horizontal-table-cells.png)

## Well done!

Congratulations on making it to the end, yes we covered a lot and you should always come back to this article if you hit a problem or forget something in the future (Pro Tip, I use my own blog posts as reference materials) and please always share with friends on the Internet!

We covered many things but all of them are pretty much standard in iOS development so consider this almost a mini course on getting started.
