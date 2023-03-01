import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiCalculator, BiCake } from 'react-icons/bi';
import './styles.css';

export default function Layout() {
    const { collapseSidebar } = useProSidebar();

    return (
        <>
            <Sidebar id="sidebar" className="border-0 bg-light position-sticky top-0" width="250px" collapsedWidth="80px" >
                <div className="header-height bg-warning">
                    <Button className="btn-warning w-100" onClick={() => collapseSidebar()}>☰</Button>
                </div>
                <Menu>
                    <MenuItem routerLink={<NavLink to="/" />} icon={<BiCalculator size={30} />}>Accueil</MenuItem>
                    <MenuItem routerLink={<NavLink to="/about" />} icon={<BiCake size={30} />}>À-propos</MenuItem>
                    <MenuItem routerLink={<NavLink to="/resume" />} icon={<BiCake size={30} />}>Curriculum Vitæ</MenuItem>
                    <MenuItem routerLink={<NavLink to="/portfolio" />} icon={<BiCake size={30} />}>Portfolio</MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}