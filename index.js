// including dependencies
const Joi = require('@hapi/joi');
const express = require('express');
// initializes the express framework object into var 'app'
const app = express();

// enables middleware interface for json parsing
app.use(express.json());

// temp data to provide return values for http requests
const resources = [
    {id: 1, name: 'resource1'},
    {id: 2, name: 'resource2'},
    {id: 3, name: 'resource3'},
    {id: 4, name: 'resource4'},
];

// accessing the environment variable, PORT, via Node.js's process object,
// or set the port variable to 3000 as a fallback if process.env.PORT hasn't been set
const port = process.env.PORT || 3000;
// when the server is running, it will listen for an inbound http request
// on the port # specified by the first argument
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

// http GET request at 1st argument root '/'
// 2nd argument, route handler, is our callback function to handle the request
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// a route endpoint for a POST http request : CREATE
app.post('/api/resources', (req, res) => {
    // validate and save response with destructuring assignment of an error property
    const {error} = validateResource(req.body);
    // bad request 400
    if (error) return res.status(400).send(error.details[0].message);
    
    // create the resource
    const resource = {
        id: resources.length + 1,
        name: req.body.name,
    };
    // append resources list with new resource
    resources.push(resource);
    // sending the resource back to the client
    res.send(resource);
});

// route endpoint that will access the /api path and then return all resources : READ
app.get('/api/resources', (req, res) => {
    res.send(resources);
});

// route endpoint to return a specified resource for a GET http request : READ 
app.get('/api/resources/:id', (req,res) => {
    // look up resource via id sent in request
    const resource = lookupResource(req.params.id, res);
    // if not found, return; 404 sent in validateResource
    if (!resource) return;
    // send resource back to client
    res.send(resource);
});

// a route enpoint for a PUT http request : UPDATE
app.put('/api/resources/:id', (req, res) => {
    // look up resource via id sent in request
    const resource = lookupResource(req.params.id, res);
    // if not found, return; 404 sent in validateResource
    if (!resource) return;

    // validate and save response with destructuring assignment of an error property
    const {error} = validateResource(req.body);
    // bad request 400
    if (error) return res.status(400).send(error.details[0].message);
    
    // update the resource
    resource.name = req.body.name;
    // return the resource
    res.send(resource);
});

// a route endpoint for a DELETE http request : DELETE
app.delete('/api/resources/:id', (req, res) => {
    // look up resource via id sent in request
    const resource = lookupResource(req.params.id, res);
    // if not found, return; 404 sent in validateResource
    if (!resource) return;

    // delete resource
    const index = resources.indexOf(resource);
    resources.splice(index, 1);

    // return resource
    res.send(resource);
});

// function to look up resource in resources array
function lookupResource(id, res) {
    // look up resource via id sent in request
    const resource = resources.find(r => r.id === parseInt(id));
    // if not found, return 404
    if (!resource) res.status(404).send(`The resource with the id ${id} was not found.`);
    return resource;
}

// function to validate with Joi
function validateResource(resource) {
    // define shape of resource object for validation
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    // return result of Joi comparison the resource (req.body) to the schema defined
    return schema.validate(resource);
}
