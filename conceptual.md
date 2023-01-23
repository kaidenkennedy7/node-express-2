### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWTs are an open standard and are implemented across technology stacks. These store payloads which are signed and can be validated later (like sessions).

- What is the signature portion of the JWT?  What does it do?
JWT signature uses the header, payload and secret key to verify the sender to be who it says it to be.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
To authenticate a user, a client application must send a JWT in the authorization header of the HTTP request to your backend. The API validates the token on behalf of your API, so you don't have to add any code in your API to process the application.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests test the specific parts of a code, integration tests test the code that has multiple parts and possibly spread out between multiple files. End to end testing tests the entire app.

- What is a mock? What are some things you would mock?
Mock is a type of simulated object that behaves like a real object

- What is continuous integration?
Continuous integration is a process by which developers continuously integrate their code into a shared repository

- What is an environment variable and what are they used for?
Environement variables are variables that descrive the type of environment in which the program runs

- What is TDD? What are some benefits and drawbacks?
Test Driven Development. This is a process by which a developer writes the test first before the actual program. It can make the code simple and elegant. Drawbacks: very time consuming and if the design changes, the tests need to be changed as well.

- What is the value of using JSONSchema for validation?
JSONSchema verifies the user satifies all the constraints of the schema. This avoids corrupt or incomplete data, displaying unhelpful errors, it also reduces the amount of code for processing and validating the data, gives a validation system that is easy to setup and maintain

- What are some ways to decide which code to test?
size of the project, the cost of testing it, time it takes, knowing the edge cases, the most common features

- What does `RETURNING` do in SQL? When would you use it?
the 'RETURNING' clause allows you to retrieve values of columns, and expressions based on columns, that were modified by an insert, delete, or update. 'RETURNING' helps avoid another roundtrip to the database.

- What are some differences between Web Sockets and HTTP?
Websockets are like two way tunnels and are always open for communication. HTTP requests are sent only when the client makes a request to the server

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I like Express better because I don't have to worry about trying to figure out how to get my code from JavaScript to Python.
