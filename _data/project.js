async function load(user) {
  let url = 'https://api.github.com/users/' + user +'/repos';
  return await (await fetch(url)).json();
}

const main = async () => {
  let gh_user = ["...", "..."];
  let data = [];
  while (gh_user.length) {
    let user = gh_user.pop();
    let res = await load(user);
    console.log(res.length);
    data = data.concat(res);
  }
  console.log(data);
}

main()
