module.exports = (app, db) => {
    const assert = require('assert');
    
    // Get Users via get
    app.get('/api/users', (req, res) => {
        const collection = db.collection('users');
        collection.find({}, {projection:{'_id':0}}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            res.send(docs)
        });
    });

    // Add User via post
    app.post('/api/user/:name', (req, res) => {
        // Let's just send a name through
        const collection = db.collection('users');
        let name = req.params.name;
        console.log(name);
        // How to add???
        // Find a way to get to the lastest added item 
        // findOne({}, {sort:{$natural:-1}})
        collection.findOne({},{sort:{$natural:-1},projection:{_id:0,pass:0,type:0}} ,function(err, result) { // find the last item
            assert.equal(err, null);
            console.log("Found the last one");
            let newid = result.id +1;
            let querry = {id:newid, name:name, pass:'123', type:'normal'};
            collection.insertOne(querry, (err,result)=>{
                assert.equal(err,null);
                console.log("ADd succesful");
                res.send({name:name, success:true})
            });
            
        });
    });

    // Update users
    app.put('/api/group/:name', function (req, res) {
        // console.log('update student');
        // let id = req.params.id;
        // let s = students.find(x => x.id == id);
        // s.name = req.body.name;
        // s.gpa = req.body.gpa;
        // res.send(s);
        console.log('update User');
        let index = obj.users.findIndex(x => x.id = req.body.id);
        obj.users[index].type = 'groupadmin';
        fs.writeFile('data.json', JSON.stringify(obj), 'utf8', (err) =>{
            if (err) throw err;
        })
        res.send(obj.users[index]);
    });

    app.delete('/api/user/:name', function (req, res) {
        // When Deleting a User, also check for the users in groups and channels

        // Lets just do users collection for now
        const usercollection = db.collection('users');
        const groupcollection = db.collection('groups');
        const channelcollection = db.collection('channels');
        let name = req.params.name;
        let querry = {name:name}
        console.log('deleting' + querry);
        // Find the users to get id
        // if found in any group delete
        // if found in any channel delete
        // delete that user from user collection 

        usercollection.findOne(querry)
            .then(reponse =>{

            })


        usercollection.deleteOne(querry,function(err, result) {
        assert.equal(err, null);
        console.log("Deleted");
        // console.log(result);
        res.send(result);
        });

    });


};

