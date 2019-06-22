1. What is the purpose of using sessions?


Sessions allow a server to remember a user as they change between pages, meaning they can stay logged in while navigating your website.


2. What does bcrypt do to help us store passwords in a secure manner.


bcrypt hashes passwords, encrypting them and rendering them unreadable by a human. This ensures that even in the event of a database breach users will not have their passwords compromised.


3. What does bcrypt do to slow down attackers?


Since passwords are encrypted, an attacker would need to encrypt any password attempts with the same hash in order to access a user's account. Since encrypting takes time, this slows attacks down. Passwords can also be encrypted numerous times before being saved, further slowing down attacks.


4. What are the three parts of the JSON Web Token?


Payload: containing information relevant to the purpose of the token, such as a user's username.

Secret: a "password" for the Web Token that makes it harder for attackers to create false tokens.

Options: extra information for the server on how to use the token, for example telling the server to revoke a token after a certain amount of time.
