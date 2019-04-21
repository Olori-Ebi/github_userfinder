// Init Github
const github = new Github;
// init UI
ui = new UI;
//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !=='') {
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not found') {
        //show Alert
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        //show Profile
        ui.showProfile(data.profile);
      };
    })
  } else {
    // clear profile
    ui.clearProfile();
  }
});