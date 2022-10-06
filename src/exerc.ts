import * as express from 'express';

const app = express();
const port = 4000;

app.get('/',(request,response) => {
    response.send('HELLO WORLD!')
});

app.get('/bsm',(request,response) => {
    response.send
    ('Behaviour skills anda mentalities: MENTALITIES <br>1=persistence <br>2=personal responsibility' +
    '<br>3=future orientation <br>4=growth mindset <br><br>SKILLS:<br>1=team work <br>2=attention to the details'+
    '<br>3=proactivity <br>4=Communication')
});

app.get('/object', (request,response) => {
    response.send('Objetivo de aprender banco de dados.')
});

app.listen(port, () => {
    console.log(`working ${port}`)
});