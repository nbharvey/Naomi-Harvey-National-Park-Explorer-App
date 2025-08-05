import NationalParksMap from "./NationalParksMap";
// import { BasicMenu } from "../../components/BasicMenu";

const MapsHome = () => {

    return (
        <>
            <div
                style={{
                    backgroundImage: "url('/images/nightSky.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.9,
                }}
            >
                <div className="text-center pr-10 pl-10 pt-10">
                <h2 className="text-xl font-bold text-white">Maps of USA National Parks</h2>
                <p className="text-center text-white">Click on an arrowhead to view information about the 63 USA National Parks</p>
            </div>
                <NationalParksMap />
                 {/*TODO: implement filter options on map at a later time*/}
                {/* <div className="w-full flex flex-wrap justify-center gap-8 p-4">
                <BasicMenu label={"Designation"} options={['National Park', 'National Battlefield', 'National Monument']} />
                <BasicMenu label={"State/Territory"} options={['Arizona', 'Arkansas', 'Alabama']} />
                    
                    </div> */}
            </div>
            </>
               
           
            
    )
}

export default MapsHome;


