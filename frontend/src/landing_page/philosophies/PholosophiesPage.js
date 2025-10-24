import React from 'react'
import Annoying from "./Annoying";
import But from "./But";
import Hero from "./Hero";
import Practices from "./Practices";
import PermissionTable from "./PermisionTable";
import ThirdPartyTracker from "./ThirdPartyTracker";
import NoNecessary from "./NoNecessary";
import NoGateKeeping from "./NoGateKeeping";
import Transparency from "./Transparecy";
const PholosophiesPage = () => {
  return (
    <div>
        <Hero/>
        <Practices/>
        <PermissionTable/>
        <ThirdPartyTracker/>
        <Annoying/>
        <NoNecessary/>
        <NoGateKeeping/>
        <Transparency/>
        <But/>
    </div>
  )
}

export default PholosophiesPage;