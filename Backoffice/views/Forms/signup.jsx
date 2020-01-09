import React from 'react';

export default() => 
<div>
   <form action="/signup" method="post" required>
       <input type="text" name="name" placeholder="name" required/>
       <input type="text" name="firstname" placeholder="firstname" required/>
       <input type="text" name="nickname" placeholder="nickname" required/>
       <input type="password" name="password" placeholder="password" required/>
       <input type="email" name="email" placeholder="email" required/>
       <textarea name="cursus" placeholder="Décrivez en quelques ligne votre cursus" cols="30" rows="10" required></textarea>
       <input type="text" name="promotion_name" placeholder="Name of your promotion" required/>
       <input type="number" name="promotion_year" placeholder="Year of your promotion" required/>
       <input type="submit" value="signup" name="signup"/>
   </form>
</div>