
// Change Theme

function changeTheme(fileLocation) {

  // Original CSS Links (light.css and dark.css)
  var originalLink1 = document.getElementsByTagName("link").item(2);
  var originalLink2 = document.getElementsByTagName("link").item(3);

  // New CSS Link (both variables are the same)
  var newLink1 = document.createElement("link");
  newLink1.setAttribute("rel", "stylesheet");
  newLink1.setAttribute("type", "text/css");
  newLink1.setAttribute("href", fileLocation);

  var newLink2 = document.createElement("link");
  newLink2.setAttribute("rel", "stylesheet");
  newLink2.setAttribute("type", "text/css");
  newLink2.setAttribute("href", fileLocation);

  // Replace Old Links With New Links
  document.getElementsByTagName("head").item(0).replaceChild(newLink1, originalLink1);
  document.getElementsByTagName("head").item(0).replaceChild(newLink2, originalLink2);

};
