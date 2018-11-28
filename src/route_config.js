import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import DevicesIndex from './components/Devices/devices_index';
import DeviceNew from './components/Devices/devices_new';
import DeviceShow from './components/Devices/devices_show';
import DeviceEdit from './components/Devices/devices_edit';

const Routes = () => {
  return(
    <div>
      <Switch>
        
        <Route path="/devices/new" component={DeviceNew} />
        <Route path="/devices/:id/edit" component={DeviceEdit} />
        <Route path="/devices/:id" component={DeviceShow} />
        <Route path="/devices" component={DevicesIndex} />
      </Switch>
      <Route path="/view1" component={view1} />
      <Route path="/view2" component={view2} />
    </div>
  );
}

const view1 = ()=>{
  return(<div>View1</div>);
}

const view2 = ()=>{
  return(<div>View2</div>);
}

export default Routes;