import React from "react";

import { Banner } from "../Sections/Banner";
import {About_Us} from "../Sections/Banner";
import {Leasing_Blew} from "../Sections/Banner";
import {Domains_dolor} from "../Sections/Banner";
import {FormData} from "../Sections/Banner";
import {Feedback} from "../Sections/Banner";
import { Footer } from "../Footer/Footer";
function Home() {
    
    return (
        <>
        
         < Banner/>
         <About_Us/>
         <Leasing_Blew />
         <Domains_dolor />
         <FormData />
         <Feedback />
         <Footer />
        </>
    )

}
export default Home