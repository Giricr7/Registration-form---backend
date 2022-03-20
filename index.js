const express = require('express');
const app = express();
const db = require("./database");
const routes = require('./routes');
const cors = require('cors');





loadApp=async()=>{

    try
    {
        // connecting Database
        await db.connect(function (err) {
            if (err) {
                return console.error('error: ' + err.message);
            }
            console.log('Connected to the MySQL Database.');
        });
       
        //cors authentication
        app.use(cors({
            origin: 'http://localhost:3000',
            Credential: true,
            PermissionStatus:200
        }))

        // converting the input from client to json format 
        app.use(express.json());

        // all routes
        app.use('/', routes);
        
        // port declaration for server
        app.listen('5000', (req, res) =>{
            console.log("server connected")
        })
    } catch (err) {
        console.log(err);
    }

}

loadApp()