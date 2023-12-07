const router = require("express").Router();
const mongoose = require("mongoose");
const Gratitude = require("../models/Gratitude.model");
const isAuthenticated = require("../middleware/isAuthenticated");

// Create a new gratitude entry:
router.post("/gratitude", isAuthenticated, (req, res, next) => {
  const { gratitudeText } = req.body;
  const { _id: userID } = req.user;

  Gratitude.create({ userID, gratitudeText })
    //PROBLEM: cannot test if userID is correctly attached, need middleware
    .then((newGratitudeEntry) => res.status(200).json(newGratitudeEntry))
    .catch((err) => res.json(err));
});

//show me all gratitude entries from a specific user:
router.get("/gratitude/all", isAuthenticated, (req, res, next) => {
  const { _id: userID } = req.user;

  Gratitude.find({ userID }) //make condition: if no entry is found, show error message
    .then((allGratitudeEntries) => res.json(allGratitudeEntries))
    .catch((err) => res.json(err));
});

router.get(
  "/gratitude/time/:dateNow",
  isAuthenticated,
  async (req, res, next) => {
    const { _id: userID } = req.user;
    const { dateNow } = req.params;
    const startDate = new Date(dateNow);
    const endDate = new Date(dateNow + "T23:59:59.999Z");

    try {
      const gratitudeEntryByDate = await Gratitude.findOne({
        userID: userID,
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });

      console.log();

      if (!gratitudeEntryByDate) {
        return res.status(404).json({ error: "Gratitude entry not found" });
      }

      res.status(200).json(gratitudeEntryByDate);
    } catch (error) {
      console.error("An error occurred:", error.message);
      next(error);
    }
  }
);

//show me a specific entry by entry ID (currently ignoring the user):
router.get("/gratitude/:entryID", isAuthenticated, (req, res, next) => {
  const { entryID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(entryID)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Gratitude.findById(entryID)
    .then((foundEntryID) => {
      if (!foundEntryID) {
        res.status(404).json({ message: "This entry does not exist" });
        return;
      }
      res.json(foundEntryID);
    })
    .catch((err) => res.json(err));
});

//delete a specific entry by entry ID:
router.delete("/gratitude/:entryID", isAuthenticated, (req, res, next) => {
  const { entryID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(entryID)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Gratitude.findByIdAndDelete(entryID)
    .then(() => res.json({ message: `Diary entry successfully deleted` }))
    .catch((err) => res.json(err));
});

//edit a specific entry by entry ID:
router.patch("/gratitude/:entryID", isAuthenticated, (req, res, next) => {
  const { entryID } = req.params;
  const { gratitudeText } = req.body;

  if (!mongoose.Types.ObjectId.isValid(entryID)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Gratitude.findByIdAndUpdate(entryID, { gratitudeText }, { new: true })
    .then((updatedGratitudeEntry) => res.json(updatedGratitudeEntry))
    .catch((err) => res.json(err));
});

module.exports = router;
