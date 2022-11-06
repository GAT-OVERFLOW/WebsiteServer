const mongoose = require('mongoose');
const validators = require('./validators')

emailValid = validators.emailValid;
urlValid =  validators.urlValid;

const profileSchema = mongoose.Schema({
    email : {
        type: String,
        trim : true,
        lowercase: true,
        unique : true,
        required: 'Email address is required',
        validate : [emailValid, 'Fill a valid email address!']
    },
    name : String,  
    contribs : [{
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Projects"
    }],
    role: String,
    department : String,
    ghProfile : {
        type: String,
        validate : [urlValid, 'Enter a proper URL']
    }                                                                            
});

const domain = mongoose.Schema({
    category : {
        type : String,
        enum: ['Embedded & IoT','Python','Web','AI & ML','Mobile App Development','Cybersecurity','CAD']
    }
});
const projectSchema = mongoose.Schema({
    title : {
        type: String,
        required: 'Title can\'t be empty'
    },
    description: String,
    ghLink : {
        type: String,
        validate : [urlValid, 'Enter a proper URL']
    },                                                                            
    domains : {
        type: [domain],
    },
    contribs: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Users"
    },
    status: {
        type: String,
        enum: ["Started","In progress","Completed"]
    },
    techUsed:{
        type: String
    }
});

const eventSchema =  mongoose.Schema({
    title: String,
    regLink : {
        type: String,
        required: "Can't have event without a registration link!",
        validate : [urlValid, 'Enter a proper URL']
    },                                                                          
    description : String,
    venue: String,
    teamStrength: String,
    image: String,
    pdf: String,
    date : String
});


module.exports.Users = mongoose.model("Users",profileSchema);
module.exports.Projects = mongoose.model("Projects",projectSchema);
module.exports.Events = mongoose.model("Events",eventSchema);