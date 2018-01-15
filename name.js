chrome.identity.getProfileUserInfo(function(userInfo) {
 /* Use userInfo.email, or better (for privacy) userInfo.id
    They will be empty if user is not signed in in Chrome */
var username = userInfo.email;
$(".date").append('Welcome ' + username + '"!');
});
