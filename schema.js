//It is used for schema validation of listing form data.. Using Joi package
const Joi = require("joi");
const Listing = require("./models/listing");

let listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
  }).required(),
});

module.exports.listingSchema = listingSchema;
// module.exports.reviewSchema = reviewSchema;
