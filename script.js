(() => {
  window.PersonalHomepage = {
    init : () => {
      focus();
      layoutButtons(buttonGroups);
      fillOnClick();
    }
  };

  let buttonGroups = [
    [
      {title: "Sophia Fiori", url: "https://www.sophiafiori.com"},
      {title: "Venetian Jewelers", url: "http://design.sophiafiori.com/sitemap/"},
      {title: "Sophia Fiori Sitemap", url: "https://www.venetianjewelers.com"},
      {title: "Intra", url: "http://intra.sophiafiori.com"},
      {title: "Disney", url: "http://magicaljewelrycollection.com/"},
      {title: "Royal", url: "http://royaldiamonds.com"},
      {title: "Holland", url: "http://diamondsonholland.com"},
    ],
    [
      {title: "Manufacturing", url: "http://www.elbasoft.com/manufacturing/main_login.asp"},
      {title: "Staging", url: "http://staging.elbasoft.com/Login.aspx?gotoscreen=/default.aspxs"},
      {title: "Jira", url: "http://jira.elbasoft.com:8080"},
      {title: "Intra", url: "http://intra.sophiafiori.com"},
      {title: "Athoe", url: "http://athoe.org/index.aspx"},
      {title: "OCN San Dimas", url: "http://www.ocnsandimas.com/"},
      {title: "OCN USA", url: "http://www.ocnusa.com/"},
    ],
    [
      {title: "Art & Diamonds", url: "http://www.artanddiamonds.com"},
      {title: "Critic Hotshot", url: "http://www.critichotshot.com"},
      {title: "Cruise Hotshot", url: "http://www.cruisehotshot.com"},
      {title: "Shopping Hotshot", url: "http://www.shoppinghotshot.com"},
      {title: "SF Jewelry Reviews", url: "http://www.sophiafiorijewelryreviews.com"},
      {title: "SF Reviews", url: "http://www.sophiafiorireviews.com"},
      {title: "Wedding Plan", url: "http://www.weddingplanblog.com"},
    ],
  ];

  let layoutButtons = (buttonGroups) => {
    let stringToAppend = "";
    buttonGroups.forEach((group) => {
    	stringToAppend += "<div class=\"btn-group-vertical bookmark-groups\" role=\"group\">";
    	group.forEach((button) => {
    		stringToAppend += "<button class=\"btn btn-primary btn-lg fill\" type=\"button\" href=\"" +
        button.url + "\">" + button.title + "</button>";
    	})
    	stringToAppend += "</div>"
    })

    return $("#button-container").append($(stringToAppend));
  }

  let focus = () => $("#search").focus();

  let fillOnClick = () => {
    $(".fill").click(function() {
       window.open($(this).attr("href"));
    })
  }
})();
