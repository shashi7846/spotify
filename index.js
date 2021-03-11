var container = document.createElement("div");
container.setAttribute("class", "container");
container.innerHTML="Spotify";


var row = document.createElement("div");


row.setAttribute("class", "row");
row.setAttribute("id", "rowId");

var col = document.createElement("div");
col.setAttribute("class", "col-3 offset-4");

container.append(row, col);
document.body.append(container);

   const clientId = "d9f3f263acfa4933861e6a47d67b6d19";
   const clientSecret = "5579bd9727424e748ba59c9769c83c5c";
   const playlistID = '6PTaicEsFYtQ0M3mCHMEdn';
   
   var getToken = fetch("https://accounts.spotify.com/api/token", {
     method: "POST",
     headers: {
       "Content-Type": "application/x-www-form-urlencoded",
       Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
     },
     body: "grant_type=client_credentials",
   });
   
   getToken
     .then(function (response) {
       return response.json();
     })
     .then(function (response) {
       var token = response.access_token;
       var getPlayList = fetch(
         "https://api.spotify.com/v1/playlists/"+playlistID,
         {
           method: "GET",
           headers: { Authorization: "Bearer " + token },
         }
       );
   
       getPlayList
         .then(function (response) {
           return response.json();
       })
         .then(function (response) {
         console.log(response.followers);
         console.log(response.tracks.items[0].track.name);
         console.log(response.tracks.items[0].track.track_number);
          console.log(response.tracks.items[4].track);
         for(let i=0;i<=response.tracks.items.length;i++)
         {
            var tr=document.createElement("tr");
            document.querySelector(".tablebody").append(tr);
            var td1=document.createElement("td");
            td1.innerHTML=response.tracks.items[i].track.track_number;
            var td2=document.createElement("td");
            td2.innerHTML=response.tracks.items[i].track.name;
            tr.append(td1,td2);
         }

         })
      })
      