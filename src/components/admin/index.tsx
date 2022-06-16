

import React, { useState } from "react";


import NavBarDesktop from "@components/admin/NavBarDesktop";
import NavBarMobile from "@components/admin/NavBarMobile";


export const AdminCenter: React.FC = () => {
    

    return (
        <div>
       <div className="lg:block hidden">
           <NavBarDesktop />
       </div>

       <div className="lg:hidden">
              <NavBarMobile />
       </div>
       </div>
    );
};

export default AdminCenter;
