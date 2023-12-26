const express = require("express");
const routes = express.Router();
const MovieRoutes = require("./movie.route");
const cinemaRoutes = require("./cinema.route");
const userRoutes = require("./user.route");
const movielistRoutes = require("./movielist.route");
const TicketRoutes = require("./ticket.route");

routes.use("/movie", MovieRoutes);
routes.use("/cinema", cinemaRoutes);
routes.use("/user", userRoutes);
routes.use("/movielist", movielistRoutes);
routes.use("/ticket", TicketRoutes);

module.exports = routes;