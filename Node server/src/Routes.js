const { request, response } = require("express");
const express = require("express");
const schema = require("../assets/schema");
const app = express();

const profileModel = schema.Users;

app.get("/profiles", async(request, response) => {
    const users = await profileModel.find({});

    try{
        response.status(200).send(users);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/profiles/user",  async(request, response) => {
    console.log(request.query.name)
    const users = await profileModel.find({"name":request.query.name});

    try{
        response.status(200).send(users);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/profiles/id",  async(request, response) => {
    console.log(request.query.id)
    const users = await profileModel.find({"_id":request.query.id});

    try{
        response.status(200).send(users);
    }
    catch(error){
        response.status(500).send(error);
    }
})

const projectsModel = schema.Projects;

app.get("/projects", async(request, response) => {
    const projects = await projectsModel.find({});

    try{
        response.status(200).send(projects);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.get("/projects/id",  async(request, response) => {
    console.log(request.query.id)
    const projects = await projectsModel.find({"_id":request.query.id});

    try{
        response.status(200).send(projects);
    }
    catch(error){
        response.status(500).send(error);
    }
})

const eventsModel = schema.Events;

app.get("/events", async(request, response) => {
    const events = await eventsModel.find({});

    try{
        response.status(200).send(events);
    }
    catch(error){
        response.status(500).send(error);
    }
})

module.exports = app;