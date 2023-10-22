const { bollywood, hollywood,food, sports, technology, blog, } = require("../routing/dummyData")

const bollywoodController =(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = bollywood.find(item=>item.id==id)
    console.log(data)
    return res.send(data)
    
}

const hollywoodController = (req,res)=>{
    return res.send(hollywood)
}

const technologyController = (req,res)=>{
    return res.send(technology)
}

const foodCcontroller = (req,res)=>{
    return res.send(food)
}

const sportsController = (req,res)=>{
    return res.send(sports)
}

const blogController = (req,res)=>{
    return res.send(blog)
}

// const dataController = (req,res)=>{
//         const id = req.params.id
//         console.log(id)
//         const data = bollywood.find(item=>item.id==id)
//         console.log(data)
// }
module.exports = {bollywoodController,hollywoodController,technologyController,foodCcontroller,sportsController,blogController}