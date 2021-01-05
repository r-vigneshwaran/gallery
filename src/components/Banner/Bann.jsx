import React from 'react'
import Banner from 'react-banner'
import Headroom from 'react-headroom'
import 'react-banner/dist/style.css'


const Bann =() => {
    return (
    <Headroom style={{'position': 'relative', 'marginBottom': '50px'}}>
        <Banner
          logo="Gallery"
          searchBar={false}
        url = { window.location.pathname }
          items={[
            { "content": "Collection 1", "url": "/" },
            { "content": "Collection 2", "url": "/collection" },
           
          ]}
        />
        </Headroom >
      )
}
export default Bann