const generateApiKey = () => {
  //create a base-36 string that is always 30 chars long a-z0-9
  // 'an0qrr5i9u0q4km27hv2hue3ywx3uu'
  return [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join("");
};

module.exports = generateApiKey;
