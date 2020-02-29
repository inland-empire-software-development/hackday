<p align="center">
  <img 
    alt="Inland Empire Software Development Logo" 
    src="https://user-images.githubusercontent.com/36907562/55706662-9ae24f80-5996-11e9-9557-3a8440c5926a.png" 
    width="100px" >
</p>
<h1 align="center"> 
  Hack Day
</h1>
<p align="center">
  <a href="https://www.facebook.com/iesdinc/">
    <img 
      alt="Facebook logo" 
      src="https://en.facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png" 
      width="35px">
  </a>
  <a href="https://join.slack.com/t/ie-sd/shared_invite/enQtNTY1NDU3MTg4NDE5LWZiNjViZmQ0ODhmN2Q0NTg1NWQwZTcyODEyYmM4ZGYxNjZkM2UxYzU5OTZkMDY4YzljYjIwZGY4YmEyNzRlNjA">
    <img 
      alt="Slack logo"
      src="https://cdn-images-1.medium.com/max/1600/1*rncLjp_nxRi08Y8AKZCJVA.png"
      width="40px">
  </a>
</p>

<p align="center">
  Welcome to the official repository for the IESD Hack Day event.
</p>


## **Getting Started**

This repository has the resources to get you prepared for this month's Hack Day event. 

**No starter code provided**

If you have any questions, please ask on our [Slack](https://ie-sd.slack.com). We welcome everyone to our Slack, so don't be afraid to join! Have fun coding!

**<a href="https://join.slack.com/t/ie-sd/shared_invite/enQtNTY1NDU3MTg4NDE5LWZiNjViZmQ0ODhmN2Q0NTg1NWQwZTcyODEyYmM4ZGYxNjZkM2UxYzU5OTZkMDY4YzljYjIwZGY4YmEyNzRlNjA">Join our Slack!</a>**

## **Team Skills**

This list provides you an idea of skills that you need for your team to complete the majority of these tasks.
- Documentation writer
- Researcher, to find documentation and filter information. 
- Basic terminal knowledge 
- Basic git knowledge 
- Backend language - Python, C#, Node, Java, etc. 
- Experience with using Slack (helpful)
- Project management 
- Frontend developer 

## **Technology** 

This Hack Day challenge is language agnostic. We will not force you to use a specific stack. Your tech stack is dependent on the composition of your team. Just make sure that you have at least one person with some experience with a backend language. 

## **Challenge**
**Description**: Creation of a Slack bot that helps bring digital communities together through gamification of social interactions.  
 
**Challenge:** Your challenge is to design and build a Slack bot, much like the popular HeyTaco Slack bot, which provides members in a community a chance to reward each other for meaningful contributions to the community. The HeyTaco bot works by allowing people to gift each other digital currency, such as tacos. The application also comes with a basic leaderboard and a view to redeem points for rewards. 

While designing and building this application, ask yourself the following questions:

- How can I make this easy to use?
- Is my design intuitive? 
- Is my code properly documented?

## **Tasks**

**Easy (10pts each)**
- Create a clean repository with an informative README (to be done as the last item). 
- Have a clear commit history with useful messages. 
- Create an operational SlackBot that responds to a command. 
- Design overall look and feel of application -> leaderboard, commands to be used, etc. Provide a rough sketch at the very minimum. 
- Design database table to be used for users. 
- Utilize the project feature (in GitHub) in your repository to track and manage the application.
- Document your repostiory -> add comments where necessary. 

**Intermediate (20pts each)**
- Add new users to database when given points and not found. Otherwise, add to existing amount of points.
- Add the ability for any user to grant another user "points". 
- Create a simple user interface for users to interact with your program - input/output for your program. 
- Create a leaderboard page that displays all members, sorted by their score, in descending order. 

**Advanced (30pts each)**
- Add pagination to the leaderboard page - each page should only show 10 members, sorted by their score, in descending order.
- Add sorting system to the leaderboard page. Possible sorting could include name, last active or most recent. 
- Create a live activity feed that shows community activity - gifting of "points".

**Testing** (2 pts/completed test suite) Using your favorite unit test framework, write the unit tests you feel are necessary to adequately test the code you wrote as your answer to any of the above objectives. In order to get all points, it must fully test the functionality of the objective in question. Make sure your tests have merit and is useful. 

**Presentation Scoring** (total points possible - 5)
- Clear and concise presentation.
- Every group member speaks
- Planned presetation 
- Future updates (What would be in version 2.0) Be creative!

## **Approach**
1. Using the language of your choice, please implement as many of the objectives as you can in the time provided.
2. Submit your code by a public github repository. Your repository should include instructions on how to set up, compile & run your application.  You can assume your instructions will be read by a developer.
3. Winner will be announced the day after, each team will be provided a PDF delineating their scores.
 
## **Scoring**
Your project will be reviewed and given points (not deducted points) if any of the factors below are met or exceeded. 

**Factors in scoring:**
- Code simplicity
- Documentation
- Code commenting
- UI Design / Visualization Design
- Presentation
- Teamwork
- Collaboration (Git & GitHub commit messages, PRs, comments, review, etc)

Simplicity will be favored over complex/clever code. Commenting code will also be highly favored. 

## **Submission**

Once you are ready to submit, please submit a link for your repository in the Slack channel #general - so everyone can take a look.  

## **Presenting** 

- You will be given 3-5 minutes to present
- Make sure you repository reflects all the names of your team members
- Make sure all the tasks you were able to complete and your total score based on the tasks you were able to complete are reflected on your repository ** important ** 
- Use your list of completed tasks to guide your presentation
- Walk the audience through what you were able to complete
- Walk the audience through your design
- State what you think your team did well 

## **Resources**

Tools built by Slack - https://api.slack.com/tools 

**Tutorials**
- Build a Slackbot by Traversy Media - https://www.youtube.com/watch?v=nyyXTIL3Hkw 
- Building a Node.js Slack Bot Before Your Microwave Popcorn Is Ready - https://tutorials.botsfloor.com/building-a-node-js-slack-bot-before-your-microwave-popcorn-is-ready-8946651a5071
- Building a Slack Bot with Modern Node.js Workflows - https://scotch.io/tutorials/building-a-slack-bot-with-modern-nodejs-workflows

**Examples** 
- Python Slack Client - https://github.com/SlackAPI/python-slackclient 
- Bolt - https://github.com/slackapi/bolt 
- Node Slack SDK - https://github.com/SlackAPI/node-slack-sdk 

**Useful Definitions:**

Happy Path: Testing with only the acceptance criteria of the feature.

Edge Cases: Testing outside of the base assumptions, finding different ways to use a feature that were not intended.

Inputs: Where a user can create their own data or interact with the application.

State management: Features that may work in different ways depending on actions taken by the user.
