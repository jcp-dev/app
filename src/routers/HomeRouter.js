import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EmployeesScreen from '../components/employees/EmployeesScreen';
import NewEmployee from '../components/employees/NewEmployee';
import { Navbar } from '../components/UI/Navbar';
import UploadScreen from '../components/upload/UploadScreen';


export const HomeRouter = () => {
  return (

    <div>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={EmployeesScreen} />
          <Route exact path="/newemployee" component={NewEmployee} />
          <Route exact path="/upload" component={UploadScreen} />

          <Redirect to='/' />
        </Switch>
      </div>

    </div>

  )
}


export default HomeRouter
