require('dotenv').config()
// Get dependencies
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const checkUserAuthenticatedMiddleware = require('./middlewares/checkUserAuthenticated.middleware');
//const morgan=require('morgan');
//const helmet = require('helmet');
//CREATE EXPRESS
const app = express();

// app.use(helmet());
// app.use(morgan('dev'));

// CORS MIDDLEWARE MIDDLEWARE
app.use( cors({origin: true, credentials: true}) )

// SERVE JSON REQUESTS
app.use( express.json() )

// SERVE POST FORM REQUESTS
app.use( express.urlencoded({ extended: false }) )

// COOKIE PARSER MIDDLEWARE
app.use( cookieParser() )

// app.use((req,res,next)=>{
//     console.log(req.headers.authorization);
//     console.log(req.header('auth-token'));
//     next();
// })
// Get port from environment and store in Express.
const port = process.env.PORT || 4318;


// ROUTES
app.use('/auth', require('./routes/auth.route'))
app.use('/overview', require('./routes/overview.route'))

app.use('/topic', require('./routes/topic.route'))
app.use('/course', require('./routes/course.route'))

app.use('/lesson', require('./routes/lesson.route'))

app.use('/progress', require('./routes/progress.route'))
app.use('/quiz',require('./routes/quiz.route'))

//app.use('/lesson', require('./routes/lesson.route'))


process.on('uncaughtException', (error)  => {
    console.log('Alert! ERROR : ',  error);
    process.exit(1); // Exit your app 
 })


process.on('unhandledRejection', (error, promise)  => {
    console.log('Alert! ERROR : ',  error);
    process.exit(1); // Exit your app 
 })

// Listen on provided port, on all network interfaces.
app.listen(port, () => console.log(`API running on localhost:${port}`));
