const router = require("express").Router();
const mongoose = require("mongoose");
const Gratitude = require("../models/Gratitude.model");

// Create a new gratitude entry:
router.post("/gratitude", (req, res, next) => {
  const { gratitudeText } = req.body;
  const { userID } = req.user;

  Gratitude.create({ userID, gratitudeText })
    //PROBLEM: cannot test if userID is correctly attached, need middleware
    .then((newGratitudeEntry) => res.status(200).json(newGratitudeEntry))
    .catch((err) => res.json(err));
});

//show me all gratitude entries from a specific user:
router.get("/gratitude/all", (req, res, next) => {
  const { userID } = req.user;

  Gratitude.find(userID) //make condition: if no entry is found, show error message
    .then((allGratitudeEntries) => res.json(allGratitudeEntries))
    .catch((err) => res.json(err));
});

//show me a specific entry by entry ID (currently ignoring the user):
router.get("/gratitude/:entryID", (req, res, next) => {
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
router.delete("/gratitude/:entryID", (req, res, next) => {
  const { entryID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(entryID)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Gratitude.findByIdAndDelete(entryID)
    .then(() => res.json({ message: `Entry with ${entryID} is removed.` }))
    .catch((err) => res.json(err));
});

//edit a specific entry by entry ID:
router.patch("/gratitude/:entryID", (req, res, next) => {
  const { entryID } = req.params;
  const {gratitudeText} = req.body;

  if (!mongoose.Types.ObjectId.isValid(entryID)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Gratitude.findByIdAndUpdate(
    entryID,
    { gratitudeText},
    { new: true }
  )
    .then((updatedGratitudeEntry) => res.json(updatedGratitudeEntry))
    .catch((err) => res.json(err));
});

module.exports = router;
