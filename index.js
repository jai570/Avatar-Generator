const download = require("image-downloader");

$(document).ready(function () {
  // generate the image
  $(".gen").click(function () {
    const name = $("#nameid").val();
    if (name) {
      $(".imgchange").attr("src", `https://joeschmoe.io/api/v1/${name}`);
    } else {
      alert("Please Enter Your Name");
    }
  });
  // download the file
  $(".download").click(function () {
    const name = $("#nameid").val();
    if (name) {
      const options = {
        url: `https://joeschmoe.io/api/v1/${name}`,
        dest: "C:Downloads",
      };
      download
        .image(options)
        .then(({ filename }) => {
          console.log("file saved to : " + filename);
        })
        .catch((err) => {
          console.error(err);
        });
      // saveAs(`https://joeschmoe.io/api/v1/${name}`, "image.svg");
    } else {
      alert("Please Enter Your Name");
    }
  });
});
