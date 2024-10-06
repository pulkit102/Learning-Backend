import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send('server is ready');
});
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'this is a joke',
        },
        {
            id:2,
            title:'Another joke',
            content:'this is another joke',
        },
        {
            id:3,
            title:'third joke',
            content:'this is a third joke',
        },
        {
            id:4,
            title:'forth joke',
            content:'this is a forth joke',
        },
        {
            id:5,
            title:'fifth joke',
            content:'this is a fifth joke',
        },
    ];
    res.send(jokes);
})
const port= 4000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});