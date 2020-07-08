# Node.js_001
The purpose of this project was to familiarize myself with the Node.js environment and the Express framework by creating a simple server that supports CRUDL operations.

An example of a basic endpoint for an http GET operation that returns a list of resources:

![Basic endpoint for an http GET operation that returns a list of resources](/images/RouteEndpointExample.png)

## Tracing My Steps
In this section, I'll highlight some of the steps I took along with interesting things that I learned throughout the process.

#### Initialize npm
After creating the directory, I initialized npm with this command:
```
npm init --yes
```
> The `--yes` or `-y` flag will automatically accept all the defaults, so you're not prompted to customize the initialization.

#### Installed Express
Then, I installed the Express framework with this command:
```
npm i express
```

After including an express object, I used the .get and .listen functions provided by the framework to provide the scaffolding for my server.

I started the server by entering this command:
```
node index.js
```

The terminal responded with a default string response I provided, "Server is listening on port 3000...", and I navigated to `localhost:#portNumber` in a web browser to see the result of my callback function in the .get function, which simply printed "Hello world!!" to the screen.

Then, I defined more routes or endpoints that can be accessed with http requests.

For example,
```
In http://someDomain.com/api/resources, the "/api/resources" will serve as one of my route endpoints.
```

#### nodemon
In order to save myself the trouble of stopping and restarting your server every time I made a change to "index.js", I used nodemon. I installed this package with the following command:
```
npm i -g nodemon
```

The `-g` flag will install this package globally, so I can access it anywhere on this particular machine. Since, I used the global flag, I prepended my command with `sudo` to grant npm access to make changes to my /usr/local/lib directory.

Instead of using `node index.js`, I initialized my server with the command:
```
nodemon index.js
```

From this point on, nodemon watched for changes inside the directory where my "index.js" file was and restarted automatically whenever I saved.

#### Port Configuration
Port assignment is automatic for most hostmachines. I simulated this by defining my port outside of the program by using a command, `export PORT=5000` (which works well for unix-like machines, even MacOS, but you'll want to use `set PORT=5000` on Windows). These are only temporary variables that are only bound for the duration of a session, so if I were to close the command prompt or terminal, these variables would not persist and be available for my next session. To make variables permanent, I would need to access my ~/.bashrc or ~/.bash_profile documents on *nix machines or use the `setx` command or edit the registry on Windows.

#### Joi
For POST/PUT validation, I installed Joi with the following command:
```
npm i @hapi/joi
```

This allowed me to define a shape (or schema) for the kind of input my server should be receiving from the client. With Joi, I validated test data against the schema to ensure that my server could handle errors.

---------------------------------------
Thanks for the [tutorial](https://www.youtube.com/watch?v=pKd0Rpw7O48), Mosh!