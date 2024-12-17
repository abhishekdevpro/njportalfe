import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaTachometerAlt, FaStore, FaUsers, FaUserTie, FaBriefcase, FaBell, FaUserPlus, FaTasks, FaWallet, FaUserGraduate 
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [showTeamSubmenu, setShowTeamSubmenu] = useState(false);
  const [showTeamSubmenu1, setShowTeamSubmenu1] = useState(false);
  const [showTeamSubmenu2, setShowTeamSubmenu2] = useState(false);
  const [showTeamSubmenu3, setShowTeamSubmenu3] = useState(false);
  const [showTeamSubmenu4, setShowTeamSubmenu4] = useState(false);
  const [showTeamSubmenu5, setShowTeamSubmenu5] = useState(false);
  const [showTeamSubmenu6, setShowTeamSubmenu6] = useState(false);
  const [showTeamSubmenu7, setShowTeamSubmenu7] = useState(false);

  const navLinkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: location.pathname === path ? '#1C2957' : 'transparent',
    color: location.pathname === path ? 'white' : 'black',
    padding: '10px 15px',
    textDecoration: 'none',
  });

  const iconStyle = {
    marginRight: '10px',
  };

  useEffect(() => {
    if (location.pathname.startsWith("/admin/vendor"))
      setShowTeamSubmenu5(true);
    if (location.pathname.startsWith("/admin/team")) setShowTeamSubmenu(true);
    if (location.pathname.startsWith("/admin/jobs")) setShowTeamSubmenu3(true);
    if (location.pathname.startsWith("/admin/notifications"))
      setShowTeamSubmenu4(true);
    if (location.pathname.startsWith("/admin/jobseekers"))
      setShowTeamSubmenu1(true);
    if (location.pathname.startsWith("/admin/employer"))
      setShowTeamSubmenu2(true);
    if (location.pathname.startsWith("/admin/wallet"))
      setShowTeamSubmenu6(true);
    if (location.pathname.startsWith("/admin/CompanyNameAdmin"))
      setShowTeamSubmenu6(true);
  }, [location.pathname]);

  const handleTeamClick = () => {
    setShowTeamSubmenu(!showTeamSubmenu);
  };
  const handleTeamClick1 = () => {
    setShowTeamSubmenu1(!showTeamSubmenu1);
  };
  const handleTeamClick2 = () => {
    setShowTeamSubmenu2(!showTeamSubmenu2);
  };
  const handleTeamClick3 = () => {
    setShowTeamSubmenu3(!showTeamSubmenu3);
  };
  const handleTeamClick4 = () => {
    setShowTeamSubmenu4(!showTeamSubmenu4);
  };
  const handleTeamClick5 = () => {
    setShowTeamSubmenu5(!showTeamSubmenu5);
  };
  const handleTeamClick6 = () => {
    setShowTeamSubmenu6(!showTeamSubmenu6);
  };
  const handleTeamClick7 = () => {
    setShowTeamSubmenu7(!showTeamSubmenu7);
  };

  return (
    <Nav className="flex-column bg-light h-screen gap-3 h-full">
      <Nav.Link
        as={NavLink}
        to="/admin/dashboard"
        style={navLinkStyle("/admin/dashboard")}
        className="ps-4"
      >
        <FaTachometerAlt style={iconStyle} /> Dashboard
      </Nav.Link>

      <div>
        <Nav.Link
          onClick={handleTeamClick5}
          as={NavLink}
          to="/admin/vendor"
          style={navLinkStyle("/admin/vendor")}
          className="ps-4"
        >
          <FaStore style={iconStyle} /> Vendor
        </Nav.Link>
        {showTeamSubmenu5 && (
          <>
            <Nav.Link
              as={NavLink}
              to="/admin/listvendor"
              style={navLinkStyle("/admin/listvendor")}
              className="ps-5"
            >
              <FaStore style={iconStyle} /> List Vendor
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/admin/addvendor"
              style={navLinkStyle("/admin/addvendor")}
              className="ps-5"
            >
              <FaUsers style={iconStyle} /> Add Vendor
            </Nav.Link>
          </>
        )}
      </div>

      <div>
        <Nav.Link
          onClick={handleTeamClick3}
          as={NavLink}
          to="/admin/jobs"
          style={navLinkStyle("/admin/jobs")}
          className="ps-4"
        >
          <FaBriefcase style={iconStyle} /> Jobs
        </Nav.Link>
        {showTeamSubmenu3 && (
          <>
            <Nav.Link
              as={NavLink}
              to="/admin/listalljobs"
              style={navLinkStyle("/admin/listalljobs")}
              className="ps-5"
            >
              <FaUsers style={iconStyle} /> List All
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/admin/addjobs"
              style={navLinkStyle("/admin/addjobs")}
              className="ps-5"
            >
              <FaBriefcase style={iconStyle} /> Add Jobs
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/admin/bulkUploadjobs" style={navLinkStyle("/admin/bulkUploadjobs")} className='ps-5'>
              <FaUsers style={iconStyle} /> Bulk Upload
            </Nav.Link> */}
          </>
        )}
      </div>

      {/* <div>
        <Nav.Link
          onClick={handleTeamClick4}
          as={NavLink} to="/admin/notifications"
          style={navLinkStyle("/admin/notifications")}
          className='ps-4'
        >
          <FaBell style={iconStyle} /> Notifications
        </Nav.Link>
        {showTeamSubmenu4 && (
          <>
            <Nav.Link as={NavLink} to="/admin/team/listallnotificationss" style={navLinkStyle("/admin/team/listallnotificationss")} className='ps-5'>
              <FaUsers style={iconStyle} /> List notifications
            </Nav.Link>
          </>
        )}
      </div> */}

      <div>
        <Nav.Link
          onClick={handleTeamClick1}
          as={NavLink}
          to="/admin/jobseekers"
          style={navLinkStyle("/admin/jobseekers")}
          className="ps-4"
        >
          <FaUserGraduate style={iconStyle} /> JobSeekers
        </Nav.Link>
        {showTeamSubmenu1 && (
          <>
            <Nav.Link
              as={NavLink}
              to="/admin/listalljobseeker"
              style={navLinkStyle("/admin/listalljobseeker")}
              className="ps-5"
            >
              <FaUsers style={iconStyle} /> List All
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/admin/Addjobseeker"
              style={navLinkStyle("/admin/Addjobseeker")}
              className="ps-5"
            >
              <FaUserGraduate style={iconStyle} /> Add Job Seeker
            </Nav.Link>
            {/*  <Nav.Link as={NavLink} to="/admin/bulkUpload" style={navLinkStyle("/admin/bulkUpload")} className='ps-5'>
              <FaUsers style={iconStyle} /> Bulk Upload
            </Nav.Link> */}
          </>
        )}
      </div>

      <div>
        <Nav.Link
          onClick={handleTeamClick2}
          as={NavLink}
          to="/admin/employer"
          style={navLinkStyle("/admin/employer")}
          className="ps-4"
        >
          <FaUserTie style={iconStyle} /> Employer
        </Nav.Link>
        {showTeamSubmenu2 && (
          <>
            <Nav.Link
              as={NavLink}
              to="/admin/employeelist"
              style={navLinkStyle("/admin/employeelist")}
              className="ps-5"
            >
              <FaUsers style={iconStyle} /> List All
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/admin/team/addemployers"
              style={navLinkStyle("/admin/team/addemployers")}
              className="ps-5"
            >
              <FaUsers style={iconStyle} /> Add Employers
            </Nav.Link>
            {/*<Nav.Link as={NavLink} to="/admin/team/bulkUploademployers" style={navLinkStyle("/admin/team/bulkUploademployers")} className='ps-5'>
              <FaUsers style={iconStyle} /> Bulk Upload
            </Nav.Link> */}
          </>
        )}
      </div>

      {/*
     
       <div>
        <Nav.Link
          onClick={handleTeamClick6}
          as={NavLink} to="/admin/wallet"
          style={navLinkStyle("/admin/wallet")}
          className='ps-4'
        >
          <FaWallet style={iconStyle} /> Wallet
        </Nav.Link>
        {showTeamSubmenu6 && (
          <>
            <Nav.Link as={NavLink} to="/admin/team/totaltransaction" style={navLinkStyle("/admin/team/totaltransaction")} className='ps-5'>
              <FaUsers style={iconStyle} /> Total Transaction
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/team/credit" style={navLinkStyle("/admin/team/credit")} className='ps-5'>
              <FaUsers style={iconStyle} /> Credit
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/team/debit" style={navLinkStyle("/admin/team/debit")} className='ps-5'>
              <FaUsers style={iconStyle} /> Debit
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/team/filters" style={navLinkStyle("/admin/team/filters")} className='ps-5'>
              <FaUsers style={iconStyle} /> Filters like Week, Month, source
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/team/upcomingdebits" style={navLinkStyle("/admin/team/upcomingdebits")} className='ps-5'>
              <FaUsers style={iconStyle} /> Upcoming Debits
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/team/upcomingcredits" style={navLinkStyle("/admin/team/upcomingcredits")} className='ps-5'>
              <FaUsers style={iconStyle} /> Upcoming credits
            </Nav.Link>
          </>
        )}
      </div>
     
     <Nav.Link as={NavLink} to="/admin/assignrole" style={navLinkStyle("/admin/assignrole")} className='ps-4'>
        <FaTasks style={iconStyle} /> Assign Role
      </Nav.Link>
      <Nav.Link as={NavLink} to="/admin/assigntask" style={navLinkStyle("/admin/assigntask")} className='ps-4'>
        <FaTasks style={iconStyle} /> Assign Task
      </Nav.Link> */}
    </Nav>
  );
};

export default Sidebar;
