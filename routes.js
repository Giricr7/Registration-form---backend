const router = require('express').Router();
const db = require('./database');




// add a new user
router.post('/adduser', async (req, res) => {
    
        let name = req.body.name;
        let email = req.body.email;
        let mobile = req.body.mobile;
        let dob = req.body.dob;
        let jobType = req.body.jobType;
        let location = req.body.location;
        let image = req.body.image;
        
        await db.query(`INSERT INTO DETAILS (name,email,mobile,dob,jobType,location,image) VALUES ('${name}','${email}','${mobile}','${dob}','${jobType}','${location}','${image}')`,function(err, rows){
            if (err) {
                console.log(err)
                res.send({ msg: 'user already exists' });
            } else {
                console.log(rows)
                if(rows)
                res.send({ msg: 'user registered' });
            }
            });
    
   
})


// retrieve existing users from DB
router.get('/getUsers', async (req,res) => {
try{ await db.query('select * from details',function(err, rows){
    if (err) {
        throw err;
    } else {
        res.send(rows)
    }
    })    
    }
catch (err) {
    console.error(err)
    }
})


//update a user
router.put('/modifyUser', async (req, res) => {
    
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let dob = req.body.dob;
    let jobType = req.body.jobType;
    let location = req.body.location;
    let image = req.body.image;
    
    await db.query(`UPDATE details SET name='${name}',mobile='${mobile}',dob='${dob}',jobType='${jobType}',location='${location}',image='${image}' WHERE email='${email}'`,function(err, rows){
        if (err) {
            console.log(err)
            res.send({ msg: 'user updation unsuccessfull' });
        } else {
            console.log(rows)
            if(rows)
            res.send({ msg: 'user updated' });
        }
        });


})

//delete a user
router.delete(`/deleteUser/:email`, async (req, res) => {
    
    
    let email = req.params.email;
    
    console.log(email);
    await db.query(`DELETE FROM details WHERE email='${email}'`,function(err, rows){
        if (err) {
            console.log(err)
            res.send({ msg: 'user deletion unsuccessfull' });
        } else {
            console.log(rows)
            if(rows)
            res.send({ msg: 'user deleted' });
        }
        });


})




module.exports=router