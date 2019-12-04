import React from 'react';

export default() => 
<div>
   <form action="/signup" method="post">
       <input type="text" name="name" placeholder="name"/>
       <input type="text" name="firstname" placeholder="firstname"/>
       <input type="text" name="nickname" placeholder="nickname"/>
       <input type="password" name="password" placeholder="password"/>
       <input type="email" name="email" placeholder="email"/>
       <textarea name="cursus" placeholder="Décrivez en quelques ligne votre cursus" cols="30" rows="10"></textarea>
       <input type="submit" value="signup" name="signup"/>
   </form>
</div>