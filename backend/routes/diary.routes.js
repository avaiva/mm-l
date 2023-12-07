const router = require("express").Router();
const mongoose = require("mongoose")
const Diary = require("../models/Diary.model")

router.post("/diary", async (req, res, next) => {
//   const { userID } = req.user;
  const { userID, diaryText } = req.body;

  try {
    const newDiaryEntry = await Diary.create({ userID, diaryText });

    res.status(200).json(newDiaryEntry);
  } catch (err) {
    console.error("An error occurred:", err.message)
    next(err);
  }
});

router.get("/diary/all", async (req, res, next) => {
  const { _id: userID } = req.user;
  try {
    const diaryEntries = await Diary.find(userID);

    if (!diaryEntries) {
      return res
        .status(404)
        .json({ error: "No diary entry found to this user" });
    }

    res.status(200).json(diaryEntries);
  } catch (err) {
    console.error("An error occurred:", err.message)
    next(err);
  }
});

router.get("/diary/:dateNow", async (req, res, next) => {
  const { _id: userID } = req.user;
  const { dateNow } = req.params;
  try {
    const diaryEntryByDate = await Diary.findOne({
      userID: userID,
      date: new Date(dateNow),
    });

    if (!diaryEntryByDate) {
      return res.status(404).json({ error: "Diary entry not found" });
    }

    res.status(200).json(diaryEntryByDate);
  } catch (error) {
    console.error("An error occurred:", err.message)
    next(error);
  }
});

router.get("/diary/:entryID", async (req, res, next) => {
  const { entryID } = req.params;
  
  if( !mongoose.Types.ObjectId.isValid(entryID)) {
    return res.status(400).json({error: "Specified id is not valid"})
    }


  try {
    const foundDiaryEntry = await Diary.findById(entryID);

    if (!foundDiaryEntry) {
      return res.status(404).json({ error: "Diary entry not found" });
    }

    res.status(200).json(foundDiaryEntry);

  } catch (err) {
    console.error("An error occurred:", err.message)
    next(err);
  }
});

router.patch("/diary/:entryID", async (req, res, next) => {
  const { entryID } = req.params;
  const { diaryText } = req.body;

  try {
    const updatedDiaryEntry = await Diary.findByIdAndUpdate(
      entryID,
      { diaryText },
      { new: true }
    );

    if (!updatedDiaryEntry) {
      return res.status(404).json({ error: "Diary entry not found" });
    }

    res.status(200).json(updatedDiaryEntry);

  } catch (err) {
    console.error("An error occurred:", err.message)
    next(err);
  }
});

router.delete("/diary/:entryID", async (req, res, next) => {
  const { entryID } = req.params;

  try {
    const deletedDiaryEntry = await Diary.findByIdAndDelete(entryID);

    if (!deletedDiaryEntry) {
      return res.status(404).json({ error: "Diary entry not found" });
    }

    res.status(200).json({ message: "Diary entry successfully deleted" });
  } catch (err) {
    console.error("An error occurred:", err.message)
    next(err);
  }
});

module.exports = router;
