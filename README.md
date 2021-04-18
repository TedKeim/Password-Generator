# Random Password Generator

There are numerous hackers of all sorts that are continuosly trying to guess passwords to access sensitive information. One tool people can use in order to have a unique password that makes it nearly impossible to guess, is a random password generator. A random password generator will use certain choices of criteria for a user, and based on how complex the user wants their password to be, more criteria can be used. Based on the choices the user will get a random and secure password.

 # Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

To create this random password generator, first I stated all of my variables that would be used. Then I created a function that states all of the criteria levels for the password (uppercase, lowercase, numbers and symbols). The different criterias are displayed to the user by using window.prompts and confirms. Next I stated all of the info to be used in a password (letters, numbers and symbols).After, I inserted a for-loop that runs through all of the info to randomize it. Finally, I added a window.alert that brings up the randomized password and shows it to the user.

