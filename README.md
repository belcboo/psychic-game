# psychic-game


<h4>Basic project on Java Script realized as homework #3.</h4>

<p>This is a game that requires the user to type letters from A to Z to try to gess the value assigned randomly to the system. If the user guess before 9 attemps the user wins and get 1 point, if the user is unable to guess after 9 attemps the system wins and 1 point is added to losses.</p>

<p>The html is pretty basic, no CSS was used. All the text is updated using the <a href=https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML  target="_blank">innerHTLM</a> function in js. A function was created at the beggining, this function updates all the lines of text in html every time is invoqued.</p>

<p> The random value is assigned to the system using the following function:</p> 

<strong>variable = [Math.floor(Math.random())]</strong> //If you use it like this it will generate a random number.

<strong>variable = [Math.floor(Math.random() * X )]</strong> /* If you use it like this, X = Number that you want to limit the range, for example in my excersice this is limited to 29. X also can be another variable, for example if you have a variable that is an index, you can use the variable.lenght, etc */

And that's the most "advanced" in my code, after that I only use a couple of if to evaluate if the user wins or losses, and if the letter typed is a valid letter.

