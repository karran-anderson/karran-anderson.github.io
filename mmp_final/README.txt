###

documenting the process of installing serialport and p5bots packages using npm
OS: Windows 10


References:

https://github.com/sarahgp/p5bots
https://p5js.org/libraries/

###

Prerequisites:
Node 0.12.x+
NPM 2.0.x+

1. Using either the command prompt of Visual Studio (I used the 2019 version) install the below tools: 

Desktop development with C++VS 2019 
C++ x64/x86 build tools


2. using npm execute the below command in your terminal.

npm init
npm install -g p5bots-server --save



3. the index file in the main diretory connects the scripts.js, p5.js and p5.bots.js, and a pointer to socket.io. 


4. to start the server use bots-go -d <the directory the files are stored>
ex: bots-go -d '~/Documents/'
