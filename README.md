# Echo - Frontend Practical Exercise

Echo is an application allowing peers to leave feedback for other team members. For this exercise, you are to
implement the required tasks below, along with any bonus tasks you also have time to complete.

Designs for all tasks are [available in Figma](https://www.figma.com/file/2FIe1jWdbM0lI57ATBxWLL/Fullstack-Exercise---Echo?type=design&node-id=0%3A1&t=1ofIAiPiThukibCz-1), please follow these designs for all tasks.

All work should be done in PRs with thorough descriptions and no unrelated changes, merged to main (**no reviews are required**). Git usage is very important. For this exercise, we won't enforce any style, but we want to get a clear overview of your work just by looking at your commit history.

You are free to make all the changes you want, but keep in mind the trade offs of doing it. For example, if you want to add a global state management library, you should balance the advantages and disadvantages of adding it to a project.

The application has a few small changes from Figma to help in development of the following tasks:


## Task 1: Gather Feedback

A user can provide feedback on other team members (_"Share Feedback" in Figma_). For a selected team member, they will answer a series of questions.

- The questions to ask are included in the repo. Keep in mind that some are _skippable_.
- Create the user interface needed to ask and collect answers for each question for a selected team member.
- Update the app to save the results of the feedback. _The app should allow full navigation without data loss._
- Your data model should support feedback from/to various users.
- The app should be able to have multiple feedback collections (per month) for each user

## Task 2: Display Feedback Given

After having given feedback, a user can review all the feedback they have given to other team members (_"My Feedback" in Figma_).

- Display all feedback given by the current user.
- Include the case of when no feedback has been given.

## Task 3: Display Received Feedback

Besides giving feedback, a user can also see feedback received from their team. (_"Team Feedback" in Figma_)

- Display the feedback received by the current user from other team members.
- Include the case of when no feedback has been received.

## Bonus Tasks (optional)

Feel free to also implement any the following task if you are just getting warmed up:

- [ ] Add Accessibility (A11y) testing and update components to comply
- [ ] Create a dark theme for the project
- [ ] Make the logged user widget, displayed in the upper-right corner the same as in designs
- [ ] Make the app more responsive on various devices
- [ ] Update the app to have multiple feedback collections (per month) for each user
- [ ] Write some tests (jest, cypress, react testing library, etc)
- [ ] Add documentation about your tasks to help other developers understand decisions you made

## Demo video

After you've wrapped up your project, please record a simple video, going through the main flows

- Going through the feedback form
- Giving multiple feedbacks
- Logging out and in with a different user and checking the previously given feedback
- Deploy the application and share a link to the deployed application as part of your submission
- Your solution must use React on the frontend. Our stack is Firebase and Serverless functions hosted on Google Cloud. We would love to see solutions built using this but you are not limited to this.
- Your backend MUST also be built with JavaScript/Typescript

