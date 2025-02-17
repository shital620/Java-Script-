// Fetch helps JavaScript download data from the internet, like checking the weather ☁️ or getting news 📰.
// fetch()....insert, update,read,delete
//fetch.....syntax
//fetch();
// fetch(file/url);
//fetch(file/url).then();
//fetch(filr/url).then(funcation(response){return response.data});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    for (var x in data) {
      document.write(`${data[x].name}-${data[x].email}`);
    }
  });
// .catch((error) => document.write("can't fetch data"));
