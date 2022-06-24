import React from 'react'
import HomeSection from './MainSection/HomeSection'
import DownloadInfo from './DownloadInfoSection/DownloadInfo'

import './Home.css'


function Home() {
  return (
    <>
    <div className="mainContainer common-padding">
          <HomeSection />
    </div>
    <div className="downloadInfoContainer common-padding">
          <DownloadInfo />
    </div>
    </>
  )
}

export default Home