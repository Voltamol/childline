import Navigation from "../navigation";
import { Filter,FilterContainer } from "../resource-filters";
import HCard from "../h-card";
const ResourcesLayout=(props)=>{
    return(
        <div className="row p-2" style={{marginTop:'100px'}}>
            <div className="col-lg-3">
                {props.children[0]}
            </div>
            <div className="col-lg-9">
                {props.children[1]}
            </div>
        </div>
    )
}

const ResourcesPage=(props)=>{
    return(
        <>
            <Navigation/>
            <div className="position-fixed top-0 container-fluid bg-dark" style={{height:'105px'}}></div>
            <ResourcesLayout>
                
                <div>
                    <p className="h2">Filters</p>
                        <FilterContainer>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                        </FilterContainer>
                        <FilterContainer>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                            <Filter title="Social Media"/>
                        </FilterContainer>
                </div>
                <div className="pt-5">
                    <HCard/>
                    <HCard/>
                    <HCard/>
                    <HCard/>
                    <HCard/>
                </div>
            
                        
            </ResourcesLayout>
        </>
    )
}

export default ResourcesPage;