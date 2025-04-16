import React from 'react'
import TabCivil from './TabCivil'
import TabTICS from './TabTICS'

function Tabs() {
    return (
        <div className='border'>
            
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <TabCivil />
                </div>
                

            </div>
        </div>
    )
}

export default Tabs