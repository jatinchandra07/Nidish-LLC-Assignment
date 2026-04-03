const { validateContent } = require("../utils/validators.js");

exports.createContent = async (req, res, next) => {
  try {
    const { heading, paragraph, image, color } = req.body;

    // Validate
    const error = validateContent({ heading, paragraph, image, color });
    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Content processed successfully",
      data: { heading, paragraph, image, color },
    });
  } catch (err) {
    next(err);
  }
};