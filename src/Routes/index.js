import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Pages/Home/Dashboard';
import Main from '../Layout/Main';

const MainRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route path="/" element={<Navigate replace to="home/dashboard" />} />
          <Route exact path="/home/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default MainRoutes;