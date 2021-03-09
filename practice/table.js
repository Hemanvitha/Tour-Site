import React from 'react';
import ReactDom from 'react-dom';
import  members from './student.json';
const intro = <h1>Table example</h1>;
console.log(members);
let table = members.map(function(u){
    return <tr key = {u.netId}><td>{u.netId}</td><td>{u.firstName}</td><td>
    {u.lastName}</td></tr>;
});

let member = <table className="table">
   <thead><tr><th>NetId</th><th>FirstName</th><th>LastName</th></tr></thead> 
<tbody>{table}</tbody>
</table>;
ReactDom.render(<section>
    {intro}
    {member}
</section>,
    
   document.getElementById('root'));

   
