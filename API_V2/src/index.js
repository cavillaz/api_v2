import app from './app/app.js';

const port=process.env.SERVER_PORT || 3001;

app.listen(port,()=>{
    console.log(`Connected Server .....${port}`);
});