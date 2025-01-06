import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {message:"Type in your URL: ",name: "url" }
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_image.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });