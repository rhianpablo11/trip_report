import ListEdited from "../components/ListEdited"
import NavBar from "../components/NavBar"
import Panorama from "../components/Panorama"
import Title from "../components/Title"
import Input from "../components/ui/Input"


function Test(){

    return(
        <>
            <div className="w-96 h-fit bg-[#F4F4F4]">
                <Panorama isFullPanorama={true} ida={15} volta={14} vespertino={9} />
                <ListEdited />
            </div>
        </>
    )
}

export default Test