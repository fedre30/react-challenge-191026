import React from 'react';

export default() => 
<div>
   <form action="/promotions/add" method="post">
       <input type="text" name="name" placeholder="name"/>
       <input type="number" name="year" placeholder="year" mix="2000" max="3000" maxLength="4" minLength="4"/>
       <input type="submit" value="signup" name="signup"/>
   </form>
</div>