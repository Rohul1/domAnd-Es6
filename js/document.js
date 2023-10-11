document.getElementById("apply-bg").addEventListener("click", function () {
    let allFriend = document.getElementsByClassName("friends");
    for (friends of allFriend) {
        friends.style.backgroundColor = "lightblue"
    }
})
document.getElementById("center-third").addEventListener("click", function () {
    let thirdFriend = document.getElementById("third-friend");
    thirdFriend.style.textAlign = "center"
})
document.getElementById("add-friend").addEventListener("click", function () {
    console.log("add friend")
})