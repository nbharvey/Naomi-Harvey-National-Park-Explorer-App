import NationalParksMap from "./NationalParksMap";
// import { BasicMenu } from "../../components/BasicMenu";

const MapsHome = () => {

    return (
        <>
            <div className="w-full min-h-screen bg-green">
                <h1 className='font-bold text-3xl text-center pt-4 pb-4 text-white'>Maps of USA National Parks</h1>
                <p className="text-center text-white">Click on an arrowhead to view information about the 63 USA National Parks.</p>
                {/*TODO: implement filter options on map at a later time*/}
                {/* <div className="w-full flex flex-wrap justify-center gap-8 p-4">
                <BasicMenu label={"Designation"} options={['National Park', 'National Battlefield', 'National Monument']} />
                <BasicMenu label={"State/Territory"} options={['Arizona', 'Arkansas', 'Alabama']} />
                    
                    </div> */}
                <NationalParksMap />
            </div>
            </>
            
    )
}

export default MapsHome;


