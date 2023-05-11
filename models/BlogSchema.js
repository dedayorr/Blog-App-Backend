const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },
    img: {
        type : String,
        required : true,
    },
    desc : {
       type : String,
       require : true, 
    },
    date : {
        type : String,
        require : true,
    },
})