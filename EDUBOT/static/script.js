function send() {
  let msg = document.getElementById("msg").value;
  fetch("/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message: msg})
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("chatbox").innerHTML += 
      "<p><b>You:</b> " + msg + "</p><p><b>EduBot:</b> " + data.reply + "</p>";
  });
}
