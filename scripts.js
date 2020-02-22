const listOfRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then(res => res.json())
    .catch(error => console.log(error));

  const markup = repos
    .map(
      repo => `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
    (🌟 ${repo.stargazers_count})
    </li>`
    )
    .join("");

  const content = document.getElementById("content");
  content.innerHTML = `<ul>${markup}</ul>`;
};

listOfRepos("americanwebbery");
