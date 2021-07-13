# Teams Clone Project
- [Website 1 : AWS Amplify](https://main.d2elfmh3h63jsw.amplifyapp.com/) (preferred)
- [Website 2 : Heroku](https://teamsclone2021.herokuapp.com/) (takes time to load)
- Video Demo

**![](https://lh5.googleusercontent.com/Okcu5cVZRIjzOgxEByHniitcHUl3C7NOSuV3URodHa3V7bvcg1b4NPgvI_m2jiWgiTu58cWPYBeNgnLoj4jZ-5W3chYbnNQOIOIPT-KOkiDIP-XzI2eG_60KcfZH9-Akn4eoashb)**
Microsoft Teams Clone is an attempt to bring the features to life of the robust and popular video conferencing application - Microsoft Teams. 
This project was done as a part of 1 month Microsoft Engage program 2021 , in which all candidates were given a task to make a video calling application and last week had a surprise adopt feature to add chatting feature.

>**Aim:**  While the world has crumbled down because of the ongoing pandemic, the only thing that is binding us together right now is being connected through social media platforms and get a chance to talk to our friends, family and co-workers through video conferencing platforms such as Microsoft Teams.

>**Solution:**  This application uses a quick and easy way to connect 

>**Learnings:**  I would like to thank my mentors - Ankur Singh and Ayush Meghwani ,  I was able to progress myself from just knowing very few or nothing about web development to making a fully responsive React application. Their valuable opinions after each sprint help me make this application reach its current potential.

# Features and Installation

>These details have been been given in  DesignDocument.pdf in an elaborate manner.


# Technological Stack Selection
My aim was to be able to create an application that can serve purpose to maximum amount of users. Hence a web application suited the purpose as a browser is something that is common in almost any smart device. Moreover  , there are very few web applications that are able to run a video call perfectly in a mobile device.
>-   Language and Frameworks used
    -   React framework using HTML, CSS, Javascript, JSX
    -   Redux for local user state management
>-   Twilio Programmable Video SDK
    -   video, audio, and data streams management
    -   for seamless data transfer between a group of users.
>-   Google Firebase and Firestore database
    -   user authentication system
    -   for handling user data, messages, channel history
>-   AWS Amplify console (primary deployment)
>-   Heroku Cloud Platform (backup deployment)

## Why Twilio?

 >- Its WebRTC based.
 >- All Video , Audio , Screen and user data tracks can be controlled by you.
 >- Can help me connect upto 50 participants easily.
 >- Highly customizable
 >- Highly Documented
 >- Provides access to their STUN/TURN servers
 >- Can set your own server option , (Peer-to-peer or Server based group call)
 >- Basically  , anything that we could do using WebRTC API , but in a much easier and manageable manner.

 ## Why AWS Amplify ? (For Deployment)
 

 >- It doesn't sleep your application servers (This is one of the main issues with Heroku) 
 >- Hence the load times and connection times are significantly less. This therefore improves the user experience drastically.

## Usage of Agile Methodology

After taking the session on Agile 101, I understood how modern software is developed and how agile methodologies are applied in Microsoft to deliver great products.

I set up  sprint period of one week each and focused on finishing a certain task each week perfectly. Review the product towards the end of the sprint and add necessary changes as per the mentor suggestions before the next sprint begins.
**![](https://lh4.googleusercontent.com/d-y5hISukg_ITiy7i8IIlFqW9PSInDOhvjyk7Z608DWOMZtn2rQe3rDqvffYKyfdvujPl0sCYn-GBO7rIsLgVwy8qgIHJZDaHHH_Izj7vsHYzKQKKPqo7iU7Ng8mMerzTYK8L3Lt)**
This disciplined process upon MS Teams Clone development gave me the following benefits:

>-   It made my development process  highly efficient.
>-   It made my development process easy to handle, flexible .
>- Allowed me to easily adapt during the adopt phase. (where we had to add a chat functionality).

## Challenges faced ( My Journey )

Being inclined in doing competitive programming most of my time  , it was a very new for me to enter into software development. I had to begin everything from scratch and learn JavaScript and react during the first week. I couldn't initially understand any documentation and I could feel the pressure soaring. However , doing one fixed task at a time really worked out in long run.

>My second week was inclined in seting up the minimum features demanded by the program. Once it was set , i tested it , took feedback from my mentors and added additional features and made sure it works well without any bugs.

>Although we had limited time , I wanted to  make sure that the application that should be usable in any device. I gave intense care during building the UI/UX features of the application (during 3rd week) and tested the application in mobile , Tablets as well as large screen computers. It was very challenging to set up a grid based flexbox system to arrange each components to work perfectly in any device dimension.

>Deployment was a very new thing for me and it was hard to figure out initially , however everything went smooth once i got hold of how to set up the express server.

>During the Adopt phase , I was happy that the additional feature was to set up a chat since I already had it. However , being able to chat before and after the meet was something I did not set up , neither was I expecting.
My Mentors assisted me greatly with their suggestions during this phase to motivate me to build the feature using Firebase. ( Learned the basics and about handling the database  using the first 2-3 days of Week 4).

>All these challenges were less of challenges and more of lessons, lessons to help me have an even better development process in the future so that I can incorporate the customers' requests and requirements easily and efficiently. 

## Features to be added in future.

 - Ability to make Host control , to mute other participants.
 - Screen Record the Meeting.
 - Ability to set video quality manually.
 - More themes. (Light and Dark theme are already present)
 - Ability to delete a Channel
 - Separate Classroom channel for Schools
 - A Online Interview system with Integrated Text editor.
 - Noise Cancellation and video Overlays.

## Screenshots

>Host Meeting Page ( PC - light Mode)
**![](https://lh5.googleusercontent.com/rGNVWLfe3aTwSetW-66qusJDy8fWmhBhB9Fvi6jimZGPwxCi_QcUxyfgFinOvNZqSB-zEXlrJ7ywgtg5OHHxCyUhhZ5_uRNMgGJkNNmy_7fljk3Fzxl-YOIsqZeO016eaa2eWH-E)**

>Home Page (mobile - Dark Mode)
**![](https://lh4.googleusercontent.com/XhFO7nuPzjUpGUzEHC8Aximbne37-gnQ8gM3zvnIc_Im0l71WuOOlbBVq3BD5-pNhF1mLs_kWdk0jqS0X-pta6Vo6TGGAelJb-QzER9OP0fCV7gxAjZY-IIQQFhc4AL4cLL_PB2-)**

>Host Meeting Page (Mobile - Dark Mode)
**![](https://lh6.googleusercontent.com/1xPiVV2QxQ_yt3UORDRKfygTuifxzEDZWF_FA5XMX6OcstsM1EvCIq9JUlt5RKq5KQ_X4nqC6WC_g5mE8QcL3Ux28cw7ppkztspu3rmVB9qN7EY7qW0DTPfhhV4Nlulr-xUKOfEj)**

>Channel (PC - light Mode)
**
![](https://lh4.googleusercontent.com/zIkH6Q0sKGq0lipxWkzVhdcl-PRhAmFPcHqjYAJlcyXKJo33TmQs9n6aK4wSV7tprx_-fJLR0Loi3BiVFvJTOvlKaqMcXayUA9NvVUaGrpS_i4MuznT35-Lnjx_Z7QSyrRP-Sy_Y)**
# Support and Contact
>Incase you find any bugs or have any suggestions to improve it.

Email : shobitnair10@gmail.com | 2019csb1121@iitrpr.ac.in


**![](https://lh5.googleusercontent.com/qBolOl1dbP-lruf6-3RgB9MIFwuQqv2jRk7sacYeh--YxSljr0QJPBTmVMFVAAam8dwrUt1yB3hrysDfQmN1_v49-4uH84lpZZ40oA4KuxGeJwQcIhRo6_lpPSSerBLGYWa6_N67)**
