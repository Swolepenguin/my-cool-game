# my-cool-game
PONG SWITCHAROO
 
 HTML-
    The html was the least stressfull part of my project all it holds is the title of my game which is Pong Switcheraoo, the links to my style sheet and my javascript as well as the canvas where my game is drawn on.
 CSS-
    In my style sheet i have the basic styling of my game. i set the whole DOM backround to red and added red and black to my reset button, as well as a warm gold and large size to the winner statement.
Javascript-
    This is where it all went down my javascript is broken down into chapters
    Declarations-
    Objects-
    Game Functions-
    Collision detection-
    Scoring and winning functions-
    Event listeners-
    Render function-

    In my Declerations i have 
    const canvas = document.getElementById("table");
    const ctx = canvas.getContext('2d');
    const reset = document.getElementById("reset")
    const statement = document.querySelector('.statement') 

    My objects were my ball, player, AI, and my net. 
    Within them i had the key value pairs that would determine how each of them rendered as well as their positions on the canvas which would be used later. 

    My game functions were responsible for drawing the different parts of my game as well as resetting the ball.
    they drew my paddles, ball and net
    
    the collision dectection was especially brutal because the collidepoint, angle and direction would change depending on how the ball hit the paddle 

    the scoring and winning functions would add a point to the AI whenever ball.x - ball radius which is 10 became less than 0 and give a point to the player whenever ball.x + ball radius became greater than the canvas width.
    The winner would create a p tag and attach it to the DOM and display either player or AI wins whenever someone reaches 10 points 

    The two event listeners were for moving the players paddle and the reset button for resetting the game after a winner was declared. 

    The render function calls all my game functions and renders them
