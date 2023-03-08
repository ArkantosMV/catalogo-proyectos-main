import React from 'react'
import { Button, Dropdown, Navbar } from 'react-bootstrap';
import { useProSidebar } from 'react-pro-sidebar';

import { faBars, faBoxArchive, faBriefcase, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { toggleSidebar } = useProSidebar();

  return (
    <Navbar className='bg-white px-4 py-3'>
      <Button className="d-md-none" onClick={() => toggleSidebar()}><FontAwesomeIcon icon={faBars} /></Button>
      <Navbar.Brand>Universidad Politécnica de Tapachula</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Dropdown className="d-inline mx-2" align="end">
          <Dropdown.Toggle id="dropdown-autoclose-true" variant='secondary'>
            <FontAwesomeIcon icon={faBriefcase} className='me-2' />
          </Dropdown.Toggle>
          <Dropdown.Menu className='p-2'>
            <Dropdown.Item className='drop'>
              <Link to={'/CompanyProfile'} className='text-muted text-decoration-none'>
                <FontAwesomeIcon icon={faUser} className='me-2 me-3' />Perfil
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className='drop'>
              <Link to={'/CompanyProject'} className='text-muted text-decoration-none'>
                <FontAwesomeIcon icon={faBoxArchive} className='me-2 me-3' /> Proyectos
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className='drop'>
              <Link to={'/'} className='text-muted text-decoration-none'>
                <FontAwesomeIcon icon={faRightFromBracket} className='me-2 me-3' />Cerrar Sesión
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;