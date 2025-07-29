import NationalParksMap from "./NationalParksMap";
import { BasicMenu } from "../../components/BasicMenu";

const MapsHome = () => {

    return (
        <>
            <div className="w-full min-h-screen bg-white">
                <h1 className='font-bold text-3xl text-center pt-10'>National Park Maps</h1>

                <div className="w-full flex flex-wrap justify-center gap-8 p-4">
                <BasicMenu label={"Designation"} options={['National Park', 'National Battlefield', 'National Monument']} />
                <BasicMenu label={"State/Territory"} options={['Arizona', 'Arkansas', 'Alabama']} />
                    
                    </div>
                <NationalParksMap />
            </div>
            </>
            
    )
}

export default MapsHome;


