const { technologyController,bollywoodController,hollywoodController, foodCcontroller, sportsController, dataController, blogController } = require('../controller/categorycontroller');
const {bollywood,hollywood,fitness} = require ('../routing/dummyData')
const categoryRouter = require ("express").Router();
const auth = require('../middleware/auth')
categoryRouter.get("/bollywood/:id",bollywoodController);
categoryRouter.get("/hollywood",hollywoodController);
categoryRouter.get("/technology",technologyController);
categoryRouter.get("/food",foodCcontroller);
categoryRouter.get("/sports",sportsController);
categoryRouter.get("/blog",blogController)


// categoryRouter.get('/blog',blogcontroller)
// categoryRouter.get("/data/:id",dataController);

module.exports = categoryRouter