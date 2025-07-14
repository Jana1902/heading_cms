import Heading from "../model/heading.model.js";

export const updateHeading = async (req, res) => {
  const { text } = req.body;
  try {
    if (!text) {
      console.log("Heading is missing");
      return res.status(400).json({ message: "Heading is missing" });
    }
    let headingObj = await Heading.findOne();

    if (!headingObj) {
      headingObj = new Heading({ text });
    } else {
      headingObj.text = text;
    }
    await headingObj.save();
    res.status(200).json({ message: "Heading updated successfully" });
  } catch (error) {
    console.log("Error in post: ", error);
    res.status(400).json({ error });
  }
};

export const getHeading = async (req, res) => {
  const heading = await Heading.findOne();
  res.status(200).json({ text: heading?.text || "" });
};
