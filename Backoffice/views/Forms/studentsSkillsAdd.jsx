import React from 'react';

export default() => 
<div>
   <form action="/students/1/skills/add" method="post">
       <input type="text" name="skill_name" placeholder="skill name" required/>
       <input type="text" name="skill_category" placeholder="skill category" required/>
       <input type="submit" value="signup" name="signup"/>
   </form>
</div>