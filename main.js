const LinksSocialMedia = {
  github: 'Renan-dossantos',
  youtube: 'watch?v=GsF05B8TFWg&list=RDGsF05B8TFWg&start_radio=1',
  facebook: 'renanaugustodossantos.santos/',
  instagram: 'renan.dossantos_',
  twitter: 'renanvulgobeico'
}

function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
ChangeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
