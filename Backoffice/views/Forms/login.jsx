import React from 'react';

export default() => 
<div>
   <form action="/login" method="post" required>
       <input type="email" name="email" placeholder="email" required/>
       <input type="password" name="password" placeholder="password" required/>
       <input type="submit" value="login" name="login"/>
   </form>
</div>