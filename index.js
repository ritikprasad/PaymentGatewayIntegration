let sent = document.getElementById("sent");

    sent.addEventListener("click", () => {
      let allAreFilled = true;
      document
        .getElementById("myForm")
        .querySelectorAll("[required]")
        .forEach(function (i) {
          if (!allAreFilled) return;
          if (!i.value) allAreFilled = false;
        });
      if (!allAreFilled) {
        alert("Fill all the fields");
      } else {
        alert("Message Sent Sucessfully");
      }
    });