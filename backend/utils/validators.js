exports.validateContent = ({ heading, paragraph, image, color }) => {
  if (!heading || !paragraph || !image || !color) {
    return "All fields are required";
  }

  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
  if (!hexRegex.test(color)) {
    return "Invalid HEX color";
  }

  const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;
  if (!urlRegex.test(image)) {
    return "Invalid image URL format";
  }

  return null;
};