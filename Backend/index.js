const express = require('express');
const dotenv=require('dotenv')
const connectDb=require('./config/db')
const cors=require('cors');
const { verify } =require('jsonwebtoken');
const to = require('await-to-js').default;

dotenv.config({
    path: './config/config.env'
});
const app = express();

app.use(cors());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json([]))
app.use(express.json({
    extended:true
}))
connectDb();

//import routes
const signupLoginRoute = require('./routes/SignUpLoginroute')
const mentorRoute = require('./routes/Mentorsroute')
const eventRouter = require('./routes/eventRouter')
const historyRouter = require('./routes/historyRouter')
const resourceRouter=require('./routes/resourcesRouter')
const blogRouter=require('./routes/blogRouter')
const roadmapRoute=require('./routes/roadmap-routes');

app.use('/api/auth', signupLoginRoute);
app.use('/api/mentors', mentorRoute);
app.use('/api/events', eventRouter);
app.use('/api/history', historyRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/blog', blogRouter);
app.use('/api/roadmap' , roadmapRoute);

const verifyToken = async (token) => verify(token, process.env.Key);

app.get('/verify/:token', async(req,res) => {
    const token = req.params.token;

    const [err, data] = await to(verifyToken(token));
    
    if (err) {
        return res.status(200).send("<h1>Invalid Token</h1>");
    }

    return res.redirect("http://localhost:3000/becomementor/?email="+data.email+"&pass="+data.password);

})


const PORT = 5000||process.env.PORT;
app.listen(PORT, console.log("Server is running")); 

