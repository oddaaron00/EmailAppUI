First things first, I made a new React app using create-react-app, set up the Git repo, and restructured the src folder. I then removed any unnecessary code for my solution, including some of the manifest.json - I can come back to it once I'm done if I plan on making this a PWA.

The first component I worked on was the date selector (DateSelector). This is composed of a date selector button, a search button, and a text field that displays the selected date range. Thus, it must be a stateful component and does not require props.




There are really two cases here: one for no emails, and one for at least one email. For both cases, a data selector is required, so this is the first component I worked on. It consists of a a date selector button, a search button, and a text field that displays the selected date range. These items are displayed horizontally so I used a flexbox. I put the PDF document into an image manipulation program to get the exact dimensions for margin and font size, so these should look more or less exactly the same. I used an online tool to find a font smiliar to the one used here and did this for the rest of the components in this solution. At this point, I added some dummy state - a start and end date - and two dummy functions that would, once implemented, open the calender, and filter the emails by date, respectfully.
The rest of this case was simple to complete. I made the component EmailCount, which displays the number of emails in the date range, and added the logo to the center of the screen. Since EmailCount depends on the date range selected in the DateSelector component, I then raised the DateSelector state to the containing component, App.






The second component I worked on was the single email snippet (EmailSnippet); this is the shortform of the email that is displayed in the list. Each email appears to have a sender, a number of recipients, a subject, a body, and a date. Some also have attachments.