import Application from "../models/application.js";

const ApplicationController = {
  get: async (req, res) => {
    try {
      const applications = await Application.find({});
      res.json(applications);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  post: async (req, res) => {
    const { timestamp, companyName, jobTitle, Status, Link } = req.body;
    try {
      const newApp = new Application({
        timestamp: timestamp ? new Date(timestamp) : new Date(),
        companyName,
        jobTitle,
        Status,
        Link,
      });
      const savedApp = await newApp.save(); // Save new application to database
      res.status(201).json(savedApp); // Respond with the created application object
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
};

export default ApplicationController;
