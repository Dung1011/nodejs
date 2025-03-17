import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    return app.use("/", router);
}
router.get('/homepage', (req, res) => {
    res.render('homepage');  
});

module.exports = initWebRoutes;