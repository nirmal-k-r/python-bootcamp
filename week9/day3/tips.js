name='john doe';
password='12345';

name=encodeURIComponent(name);
password=encodeURIComponent(password);
var link=`http://google.com/contact?name=${name}&password=${password}`;
console.log(link);



// let finalLink=encodeURI(link);
// console.log(finalLink);

