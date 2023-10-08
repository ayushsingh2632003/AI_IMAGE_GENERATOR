const json = {
    html: "<div class='test'>Hello, world!</div>",
    css: ".test { background-color: green; }"
  };
  
  const username = "a304359a-5b2b-485f-aa28-d59522d245a9";
  const password = "api-key";
  
  const options = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ":" + password)
    }
  }
  
  fetch('https://hcti.io/v1/image', options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then(data => {
      // Image URL is available here
      console.log(data.url)
    })
    .catch(err => console.error(err));
  