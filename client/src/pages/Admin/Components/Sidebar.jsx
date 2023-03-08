import { Container, Image } from 'react-bootstrap';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import Navigation from './Navbar';

import logoUpTap from '../../../assets/logoUpTap192.png'

import { faBriefcase, faDatabase, faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarMenu = () => {
    const { collapseSidebar } = useProSidebar();

    return (
        <>
            <div style={{ display: 'flex', height: '100%' }}>

                <Sidebar backgroundColor='#28a745'
                    onMouseLeave={() => collapseSidebar(true)}
                    onMouseOver={() => collapseSidebar(false)}
                    customBreakPoint="800px"
                    style={{minHeight:'100vh'}}
                >
                    <Menu className='menu'>
                        <MenuItem disabled className='pt-3 pb-5' style={{ color: 'white' }} >
                            <Image src={logoUpTap} style={{ maxWidth: '40px' }} className='me-2' />
                            Catálogo de Proyectos
                        </MenuItem>
                        <div className='text-center'>
                            <MenuItem icon={<FontAwesomeIcon icon={faHome} />} component={<Link to="/AdminHome" />} className='menuitem my-2'> Inicio</MenuItem>
                            <MenuItem icon={<FontAwesomeIcon icon={faGraduationCap} />} component={<Link to="/AdminStudents" />} className='menuitem my-2'> Estudiantes</MenuItem>
                            <MenuItem icon={<FontAwesomeIcon icon={faBriefcase} />} component={<Link to="/AdminCompanys" />} className='menuitem my-2'> Empresas</MenuItem>
                            <MenuItem icon={<FontAwesomeIcon icon={faDatabase} />} component={<Link to="/AdminProjects" />} className='menuitem my-2'> Proyectos</MenuItem>
                        </div>
                    </Menu>
                </Sidebar>

                <Container className='p-0 m-0 mw-100'>
                    <Navigation />
                    <Outlet />
                </Container>
            </div>
        </>
    )
}

export default SidebarMenu;