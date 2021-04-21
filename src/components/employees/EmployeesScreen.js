import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

function EmployeesScreen() {
  const { employees } = useSelector(state => state.employees);

  const columnas = [
    {
      name: 'id',
      selector: 'id',
      sortable: true
    },
    {
      name: 'name',
      selector: 'name',
      sortable: true
    },
    {
      name: 'last name',
      selector: 'last_name',
      sortable: true
    },
    {
      name: 'birthday',
      selector: 'birthday',
      sortable: true
    }
  ];


  return (
    <>
      <Link className='btn btn-primary btn-block' to='/newemployee'>New Employe</Link>
      <div className="table-responsive">
        <DataTable columns={columnas} data={employees} title="Employees" pagination fixedHeaderScrollHeight="600px" />
      </div>
    </>
  )
}

export default EmployeesScreen
