import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Title from "../components/Title"
import Home from "./Home"
import Insights from "./Insights"
import Edited from "./Edited"
import { clearSessionStorage, getList, getLocalVersion, saveVersion } from "../functions/utils"
import ListNull from "./ListNull"
import Changelog from "../components/Changelog"
import SideBar from "../components/SideBar"
import Comparison from "../components/Comparison"



function App(){
    const [pageSelected, setPageSelected] = useState('home')
    const [showChangelog, setShowChangelog] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const closeSidebar = () => setIsSidebarOpen(false)

    

    const getListInserted = () => {
        setPageSelected('insights')
        
    }

    const handleSideBar = (buttonClicked: string) =>{
        console.log('corrigir', buttonClicked)
        setIsSidebarOpen(true)
    }

    const handlePageSelected = (PageClicked: string) =>{
        setPageSelected(PageClicked)
        console.log(PageClicked)
        if(PageClicked == 'home'){
            clearSessionStorage()
        } else if(PageClicked == 'close'){
            setShowChangelog(false)
            saveVersion()
            setPageSelected('home')
        }
    }

    useEffect(()=>{
        setShowChangelog(getLocalVersion())
    },[])

    return(
        <>
            <div className="bg-no-repeat flex bg-cover bg-[url(./assets/bg.png)] w-full h-dvh">
                <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
                <div className="w-full h-dvh max-h-dvh bg-white/35 backdrop-blur-[2px] flex flex-col">
                    {showChangelog ? (
                        <>
                            <div className="flex w-full h-full fixed inset-0 z-[500] bg-white/35 backdrop-blur-2xl">
                                <Changelog onClickButton={handlePageSelected}/>
                            </div>
                        </>
                    ) : null}
                    
                    
                    <div className="flex-shrink-0">
                        <Title onClickButton={handleSideBar}/>
                    </div>
                    {pageSelected == 'home' ? (
                        <>
                            <Home onClickButton={getListInserted}/>
                        </>
                    ) : pageSelected == 'insights' ? (
                        getList() != null ? 
                        <>
                            <Insights />
                        </> : <>
                                <div className="flex pt-20 px-3">
                                    <Comparison ida={0} volta={0} vespertino={0} />
                                </div>
                            </>
                    ) : pageSelected == '05h' || pageSelected == '12h' || pageSelected == '17h' ? (
                        getList() !=null ?
                        <>
                            <div className="flex-grow min-h-0" >
                                <Edited hour={pageSelected} /> 
                                
                            </div>
                        </> : <>
                                <ListNull />
                            </>
                    ) : null}
                    <div className="w-full px-3 pb-4 fixed bottom-0 z-50 flex-shrink-0">
                        <NavBar onClickButton={handlePageSelected} buttonSelected={pageSelected} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App