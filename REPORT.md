First things first, I made a new React app using create-react-app, set up the Git repo, and restructured the src folder. I then removed any unnecessary code for my solution, including some of the manifest.json - I can come back to it once I'm done if I plan on making this a PWA.

The first component I worked on was the date selector (DateSelector). This is composed of a date selector button, a search button, and a text field that displays the selected date range. Thus, it must be a stateful component and does not require props.




The second component I worked on was the single email snippet (EmailSnippet); this is the shortform of the email that is displayed in the list. Each email appears to have a sender, a number of recipients, a subject, a body, and a date. Some also have attachments.