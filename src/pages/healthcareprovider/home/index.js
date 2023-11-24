import HealthTabsComponent from "@/components/healthcareprovider/general/HealthTabsComponent"
import HealthCareIndexComponent from "@/components/healthcareprovider/home/HealthCareIndexComponent"


const healthCareProvider = () => {
   return <>
   <HealthCareIndexComponent/>
   <HealthTabsComponent/>
   </>
}

export default healthCareProvider