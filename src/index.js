import {getUsers, getImages} from './api/userApi';

//Populate table with users information vis API Call
getUsers().then(result => {
  getImages().then(imageLinkArray => {
  let usersBody = "";
//var hello = imageLinkArray[0];
//console.log(hello); //eslint-disable-line no-console
var _img = document.getElementById('id1');

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  var table = global.document.getElementById('users');
  table.innerHTML = usersBody;

  for(var i = 0; i < table.rows.length; i++)
  {
    var newImg = new Image;
    newImg.onload = function() {
        _img.src = this.src;
      }
    newImg.src = imageLinkArray[i].filePath;
    newImg.style.width = '10%';
    newImg.style.height = '10%';
    table.rows[i].appendChild(newImg);
  }


/*
  for(var i = 0; i < table.rows.count; i++)  {
      var newImg = new Image;
      newImg.onload = function() {
        //_img.src = this.src;
      }
      newImg.src = imageLinkArray[i];
      table.rows[i].appendChild(newImg);
  }*/

  })
});
