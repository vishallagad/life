const text =
"Look before meeting you I really don't know that we will be get this much close to each other after meeting you also.....I don't never ever thought that you'll become this much imp to me..... 😙😙When I wake up a first thing that pops in my mind is you.  I get so excited to be able to talk to you throughout the day even if I'm not physically with you. Just talking to you makes me happy☺☺ The only thing I wanna say youu that is I loveee youuu alottt jaannaa 💋💋💋 You literally mean alott to me... I love youu beyond belief becoz you keep me happyy everyday... 😚I'm the luckiest girl knowing that I have you I can't believe we have come so far and it makes me so greatful having you .... Your company brings me so muchh happiness and comfort 😌Your personality and your affection makes me love you more each day... I love the time we spend together.... Aur ha sunn...... Tu jaiso bhii bahott sahii haii ek dum kdkk... Mharo haii.....I love the way you're.... Aiso hi reh je hamesha agr thodo bhi change huyo n to 💪🏻💪🏻👊🏻Aurr sunn n.... I miss you every second🥹🥹 when I'm not with you You're the sweetest, most supportive, caring person I've ever met... All memories we've had so far have been a bliss and there are many more to come... Lovee you lala😘😘 and here your dayy started.... Wishhh youyu a mannyyy mannyyy moree happyy returns of the Day Lala 💋💋💋Hope so you're day is amazing as you're💋💋"

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
