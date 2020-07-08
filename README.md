# Node.js_001
Starting with a simple server using the Node.js environment and the Express framework.

This server supports http requests for some basic CRUD operations.

## Tracing My Steps
After creating the directory, I initialized npm with `npm init --yes`.
The `--yes` or `-y` flag will automatically accept all the defaults, so you're not prompted to customize the initialization.

Then, I installed the Express framework with `npm i express`.

Then, I started working on the "index.js" file, where I've left comments in the code to explain what I did.

After including an express object .get and .listen function in index.js, you can perform a one time startup by entering `node index.js` into the commandline. The terminal should respond with your listening message. For example, "Server is listening on port 3000...". And you can navigate to `localhost:#portNumber` in a web browser, and see the result of your callback function in the .get function.

You can then define more routes or endpoints that can be accessed with http requests. For example, `http://someDomain.com/api/resources`. The `/api/resources` will serve as one of my route endpoints.

In order to save yourself the trouble of stopping and restarting your server every time you make a change to "index.js", you can install an npm package called nodemon with `npm i -g nodemon`. The `-g` flag will install this package globally, so we can access it anywhere on the machine we're working on. Since, we're using the global flag, you'll want to prepend your command with `sudo` to grant npm access to make changes in your /usr/local/lib directory.

With **nodemon**, you can initialize your server once with the command `nodemon index.js`, and it will watch for changes inside the directory where your "index.js" file is and restart automatically.

Ports will dynamically be assigned based on the hostmachine preferences. You can simulate this by using a command, like `set PORT=5000` on Windows or `export PORT=5000` on unix-like machines (including MacOS). These are only temporary variables for your session, so if you close the command prompt or terminal, these variables will not be persistent for you to use on your next session. To make variables permanent, you'll need to access your ~/.bashrc or ~/.bash_profile documents on *nix machines or use the `setx` command or edit the registry on Windows.

For POST/PUT validation, I installed Joi with  `npm i @hapi/joi`. This allows me to define a shape or schema for what kind of input my server should be receiving from the client. With Joi, I can easily validate input to prevent any errors with my data.

I created endpoints for the basic CRUD operations and refactored a bit for readability.

---------------------------------------
Thanks for the [tutorial](https://www.youtube.com/watch?v=pKd0Rpw7O48), Mosh!