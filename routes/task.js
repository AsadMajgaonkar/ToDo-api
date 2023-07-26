const {Router} = require('express')
const router = Router()
const {Task} = require('../model/task')

router.get('/',async (req,res)=>{
    const tasks = await Task.find()
    res.send(tasks)
})

router.post('/',async (req,res)=>{
    const task = new Task({
        description:req.body.description
    })
    const result = await task.save();
    res.send(result)
})

router.post('/:id',async (req,res)=>{
    const task = await Task.findById(req.params.id);
    task.set({
        description:req.body.description
    })
    const result = await task.save();
    res.send(result);
})

router.delete('/:id',async (req,res)=>{
    try{
        await Task.deleteOne({_id:req.params.id});
        res.send('deleted succesfully')
    }
    catch(err){
        res.send('task not found')
    }
})

module.exports = router