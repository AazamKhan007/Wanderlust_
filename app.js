const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listings = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("server is working");
});

//Middleware to (validate for schema) listing data using joi schema
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  console.log(error);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listings.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listings.findById(id);
    res.render("listings/show.ejs", { listing });
  })
);

//Create Route
app.post(
  "/listings",
  validateListing, //middleware to (validate for schema) listing data
  wrapAsync(async (req, res) => {
    // let {title, description, image, price, country, location} = req.body;
    let listing = req.body.listing;
    const newListing = new Listings(listing);
    await newListing.save();
    console.log(newListing);
    res.redirect("/listings");
  })
);

//Edit Route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listings.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

//Update Route
app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listings.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

//Delete Route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "Send valid data for listing");
    }
    let { id } = req.params;
    await Listings.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

//handle all unmatched routes
// to avoid path-to-regexp parsing issues (some versions reject bare "*" patterns).
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

//expresserror.js will handle the error
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Somthing went wrong" } = err;
  res.status(statusCode); //To view the status code in hoppscotch.io
  res.render("error.ejs", { message });
});

// app.get("/testLising", async (req, res) => {
//   const sampleListings = new listing({
//     title: "test listing04",
//     description: "this is a test listing",
//     price: 100,
//     location: "test location",
//     country: "test country",
//   });
//   await sampleListings.save();
//   console.log(sampleListings);
//   res.send("successful testing");
// });

app.listen(8080, () => {
  console.log("server is listning to port 8088");
});
