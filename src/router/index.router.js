import Baglamamharadadır from "../pages/Baglamamharadadır/Baglamamharadadır";
import HOME from "../pages/HOME/HOME";
import KALKULYATOR from "../pages/KALKULYATOR/KALKULYATOR";
import KARGOMAT from "../pages/KARGOMAT/KARGOMAT";
import MAGAZALAR from "../pages/MAGAZALAR/MAGAZALAR";
import SiteRoot from "../pages/SiteRoot";
import TARİFLER from "../pages/TARİFLER/TARİFLER";
import XƏBƏRLƏR from "../pages/XƏBƏRLƏR/XƏBƏRLƏR";
import ƏLAQƏ from "../pages/ƏLAQƏ/ƏLAQƏ"




const ROUTER=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<HOME/>
    },{
        path:"TARİFLER",
        element:<TARİFLER/>

    },{
        path:"KALKULYATOR",
        element:<KALKULYATOR/>
    },{
        path:"MAGAZALAR",
        element:<MAGAZALAR/>
    },{
        path:"XƏBƏRLƏR",
        element:<XƏBƏRLƏR/>
    },{
        path:"ƏLAQƏ",
        element:<ƏLAQƏ/>
    },{
        path:"KARGOMAT",
        element:<KARGOMAT/>
    },{
        path:"Baglamamharadadır",
        element:<Baglamamharadadır/>
    }]

}]
export default ROUTER