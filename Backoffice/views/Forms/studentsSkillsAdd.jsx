import React from 'react';

export default({id}) => 
<div>
   <form action={`/students/${id}/skills/add`} method="post">
       <input type="text" name="skill_name" placeholder="skill name" required/>
       <input type="text" name="skill_category" placeholder="skill category" required/>
       <input type="submit" value="signup" name="signup"/>
   </form>
</div>