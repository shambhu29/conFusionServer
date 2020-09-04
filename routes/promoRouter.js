const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all promotions data from DB");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotion to DB: " +
        req.body.name +
        " with details : " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res, next) => {
    res.end("DELETING all promotions");
  });

promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "Will send the details of the promotion " +
        req.params.promoId +
        " to you.!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation is not supported on the route /promotions/" +
        req.params.promoId
    );
  })
  .put((req, res, next) => {
    res.write("Updating promotion details... " + req.params.promoId);
    res.end(
      "Will we update the details of promotion: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("DELETING the promotion with id: " + req.params.promoId);
  });

module.exports = promoRouter;
