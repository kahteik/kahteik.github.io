async function load(user) {
  let url = 'https://api.github.com/users/' + user + '/repos';
  return await (await fetch(url)).json();
}

const main = async () => {
  let gh_user = ["...", "..."];
  let data = [];
  while (gh_user.length) {
    let user = gh_user.pop();
    let res = await load(user);
    console.log(res.length);
    let repoInfo = [];
    res.forEach(item => repoInfo.push(
      Object.keys(item)
      .filter(key => ["html_url", "description", "name"].includes(key))
      .reduce((obj, key) => {
        obj[key] = item[key];
        return obj;
      }, {})
    ));
    data = data.concat(repoInfo);
  }
  console.log(data);
}

main()
