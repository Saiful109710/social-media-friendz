const express= require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = 3000


//middleware
app.use(express.json())
app.use(cors())



const uri = "mongodb+srv://socialFriendz:NuO3oNbp7Mz6RLmf@cluster0.92ej0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const postCollection = client.db('SocialMedia').collection('posts')


    app.post('/createPost',async(req,res)=>{
        const newPost = req.body
        const result = await postCollection.insertOne(newPost)
        console.log('New Post Created')
        res.json(result)
    })

    app.get('/getPosts',async(req,res)=>{
        const posts = await postCollection.find().sort({_id:-1}).toArray()
        res.json(posts)
    })

    app.patch('/getPosts/:id',async(req,res)=>{
        const id = req.params.id
        const query = {_id:new ObjectId(id)}
        const updatedData = req.body
        const updatedDoc = {
            $set:updatedData
        }
        const result = await postCollection.updateOne(query,updatedData)
        res.send(result)
    })
    app.delete('/posts/:id',async(req,res)=>{
        const id = req.params.id
        const query = {_id:new ObjectId(id)}
        const result = await postCollection.deleteOne(query)
        res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// socialFriendz
// NuO3oNbp7Mz6RLmf
