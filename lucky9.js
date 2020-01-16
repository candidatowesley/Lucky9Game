//all cards
var cards = [
'A1.png' ,
'A2.png',
'A3.png',
'A4.png',
'2Club.png',
'2Dia.png',
'2Heart.png',
'2Spad.png',
'3Club.png',
'3Dia.png',
'3heart.png',
'3Spade.png',
'4club.png',
'4dia.png',
'4Heart.png',
'4spade.png',
'5club.png',
'5dia.png',
'5heart.png',
'5spade.png',
'6club.png',
'6dia.png',
'6heart.png',
'6spade.png',
'7club.png',
'7dia.png',
'7heart.png',
'7pade.png',
'8club.png',
'8dia.png',
'8heart.png',
'8spade.png',
'9clubs.png',
'9dia.png',
'9heart.png',
'9spade.png',
'10club.png',
'10dia.png',
'10heart.png',
'10spade.png',
'jclub.png',
'jdia.png',
'jheart.png',
'jspade.png',
'qclub.png',
'qdia.png',
'qheart.png',
'qspade.png',
'kclub.png',
'kdia.png',
'kheart.png',
'kspade.png',
]

var card1 = 0, card2 = 0
function Play() {
    card1 = Math.floor((Math.random()*13) + 1) //random number generators for card
    card2 = Math.floor((Math.random()*13) + 1)
    var total = 0;
    var img1 = document.createElement('img');
    var img2 = document.createElement('img');
  
    // set image source to be same as selected card
    img1.src = cards[card1];
    img2.src = cards[card2];
  
    // select cards holding elements
    var holder1 = document.getElementById('card1');
    var holder2 = document.getElementById('card2');
  
    // clear images from previous game
    holder1.innerHTML = "";
    holder2.innerHTML = "";
  
    // add images to it's holders
    holder1.appendChild(img1);
    holder2.appendChild(img2);
    total = card1 + card2
    //condition to check if player wins or loses
    if (total == 9) {
        document.getElementById('description').innerHTML = "Nice, You're one lucky guy!"
    }
    else{
        document.getElementById('description').innerHTML = "Awww, try again for more chances of winning !"
      }
      //1st card conditons!
      if(card1 == 1) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "A1.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "A2.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "A3.png";
        } else {
            document.getElementById("card1").src = "A4.png";
        }
    } else if (card1 == 2) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "2Club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "2Dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "2Heart.png";
        } else {
            document.getElementById("card1").src = "2Spad.png";
        }
    } else if (card1 == 3) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "3Club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "3Dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "3heart.png";
        } else {
            document.getElementById("card1").src = "3Spade.png";
        }
    }  else if (card1 == 4) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "4club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "4dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "4Heart.png";
        } else {
            document.getElementById("card1").src = "4spade.png";
        }
    }  else if (card1 == 5) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "5club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "5dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "5heart.png";
        } else {
            document.getElementById("card1").src = "5spade.png";
        }
    }  else if (card1 == 6) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "6club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "6dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "6heart.png";
        } else {
            document.getElementById("card1").src = "6spade.png";
        }
    }  else if (card1 == 7) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "7club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "7dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "7heart.png";
        } else {
            document.getElementById("card1").src = "7pade.png";
        }
    }  else if (card1 == 8) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "8club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "8dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "8heart.png";
        } else {
            document.getElementById("card1").src = "8spade.png";
        }
    }  else if (card1 == 9) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "9clubs.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "9dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "9heart.png";
        } else {
            document.getElementById("card1").src = "9spade.png";
        }
    }  else if (card1 == 10) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "10club.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "10dia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "10heart.png";
        } else {
            document.getElementById("card1").src = "10spade.png";
        }
    }  else if (card1 == 11) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "jclub.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "jdia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "jheart.png";
        } else {
            document.getElementById("card1").src = "jspade.png";
        }
    }  else if (card1 == 12) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "qclub.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "qdia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "qheart.png";
        } else {
            document.getElementById("card1").src = "qspade.png";
        }
    }  else if (card1 == 13) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card1").src = "kclub.png";
        } else if (type == 2) {
            document.getElementById("card1").src = "kdia.png";
        } else if (type == 3) {
            document.getElementById("card1").src = "kheart.png";
        } else {
            document.getElementById("card1").src = "kspade.png";
        }
    } else { }
    //2nd card conditions!
    if(card2 == 1) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "A1.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "A2.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "A3.png";
        } else {
            document.getElementById("card2").src = "A4.png";
        }
    } else if (card2 == 2) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "2Club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "2Dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "2Heart.png";
        } else {
            document.getElementById("card2").src = "2Spad.png";
        }
    } else if (card2 == 3) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "3Club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "3Dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "3heart.png";
        } else {
            document.getElementById("card2").src = "3Spade.png";
        }
    }  else if (card2 == 4) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "4club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "4dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "4Heart.png";
        } else {
            document.getElementById("card2").src = "4spade.png";
        }
    }  else if (card2 == 5) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "5club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "5dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "5heart.png";
        } else {
            document.getElementById("card2").src = "5spade.png";
        }
    }  else if (card2 == 6) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "6club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "6dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "6heart.png";
        } else {
            document.getElementById("card2").src = "6spade.png";
        }
    }  else if (card2 == 7) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "7club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "7dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "7heart.png";
        } else {
            document.getElementById("card2").src = "7pade.png";
        }
    }  else if (card2 == 8) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "8club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "8dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "8heart.png";
        } else {
            document.getElementById("card2").src = "8spade.png";
        }
    }  else if (card2 == 9) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "9clubs.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "9dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "9heart.png";
        } else {
            document.getElementById("card2").src = "9spade.png";
        }
    }  else if (card2 == 10) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "10club.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "10dia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "10heart.png";
        } else {
            document.getElementById("card2").src = "10spade.png";
        }
    }  else if (card2 == 11) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "jclub.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "jdia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "jheart.png";
        } else {
            document.getElementById("card2").src = "jspade.png";
        }
    }  else if (card2 == 12) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "qclub.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "qdia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "qheart.png";
        } else {
            document.getElementById("card2").src = "qspade.png";
        }
    }  else if (card2 == 13) {
        var type = Math.floor((Math.random() * 4) + 1)
        if( type == 1) {
            document.getElementById("card2").src = "kclub.png";
        } else if (type == 2) {
            document.getElementById("card2").src = "kdia.png";
        } else if (type == 3) {
            document.getElementById("card2").src = "kheart.png";
        } else {
            document.getElementById("card2").src = "kspade.png";
        }
    } else { }
}