#Creating a regenerating object
##I had this cog that I wanted to regenerate and go across the screen in order to serve as an obstacle for my character
![yo]
(http://i.imgur.com/Lg4Rtm9.png)

I imported in my cog as a still image. Then I used Unity's animation tool to animate the rotation

![yes]
(http://i.imgur.com/f5bww1U.png)

I made my cog into a prefab and named it Spawner. Then I wrote a script that a Lynda.com video provided.
http://www.lynda.com/Unity-2D-tutorials/Making-obstacles-recyclable/185319/386655-4.html?autoplay=true

![script]
(http://i.imgur.com/y1R1Ga0.png)

The script sets up the delay range for the spawn regeneration and it instatiates the cog at the set point in which I physically placed it at. I made the cog a prefab and attached the script to it.

![unity1]
(http://i.imgur.com/PWJ5Qr6.png)

The cog has a rigidbody and a velocity script which allow it to go across the screen. I gave it a velocity of -4.

![velocity]
(http://i.imgur.com/mnuVkso.png)

This is a screenshot of how it looks inside the game.

![screenshot]
(http://i.imgur.com/e61Imyt.png)
