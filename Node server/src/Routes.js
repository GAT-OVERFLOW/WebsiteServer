const { request, response } = require("express");
const express = require("express");
const schema = require("../assets/schema");
const app = express();

const profileModel = schema.Users;
const projectsModel = schema.Projects;
const eventsModel = schema.Events;

app.get("/profiles", async(request, response) => {
    const users = await profileModel.where().populate('contribs')

    try{
        response.status(200).send(users);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/profiles",  async(request, response) => {
    console.log(request.query.name)
    const users = await profileModel.find({"name":{$regex:request.query.name}});

    try{
        response.status(200).send(users);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/profile",  async(request, response) => {
    console.log(request.query.id)
    //const users = await profileModel.find({"_id":request.query.id});
    const users = await profileModel.where("id").equals(request.query.id).populate('contribs')
    console.log(users)

    try{
        response.status(200).send(users);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/projects", async(request, response) => {
    const projects = await projectsModel.find({});

    try{
        response.status(200).send(projects);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/project",  async(request, response) => {
    console.log(request.query.id)
    const projects = await projectsModel.where("id").equals(request.query.id).populate('contribs');
    console.log(projects)

    try{
        response.status(200).send(projects);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/events", async(request, response) => {
    const events = await eventsModel.find({});

    try{
        response.status(200).send(events);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/event", async(request, response) =>{
    console.log(request.query.id)
    const events = await eventsModel.find({"_id":request.query.id})
    console.log(events)

    try{
        response.status(200).send(events);
    }
    catch(error){
        response.status(500).send(error);
    }
})

module.exports = app;