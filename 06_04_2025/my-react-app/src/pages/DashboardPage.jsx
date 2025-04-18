import React from "react";
import OverviewCards from "../components/OverviewCards";
import DataTable from "../components/DataTable";
import EditModal  from "../components/EditModal";
import Avatar313 from "../assets/Avatar313.png";
import Question from "../assets/Question1.png"
import Bell from "../assets/Bell1.png"



 function DashboardPage() {
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedCustomer, setSelectedCustomer] = React.useState(null);

    const handleEdit = (customerData) => {
        setSelectedCustomer(customerData);
        setModalShow(true);
    };

    const handleSave = (updatedData) => {
        alert('Changes saved successfully!');
        console.log('Updated Data:', updatedData);
    };

    return (
        <div className="col-md-10 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 style={{color:'#F7A8C4'}} className="text-2xl font-bold">Dashboard</h2>
                <div className="d-flex align-items-center">
                    <div className="input-group me-2" style={{ width: '400px' }}>
                        <input type="search" className="form-control col-7" placeholder="Search..." />
                        <span className="col-1"></span>
                        <img className="col-1" src={Bell}></img>
                        <img className="col-1" src={Question}></img>
                    </div>
                    <i className="fas fa-bell mx-2"></i>
                    <i className="fas fa-question-circle mx-2"></i>
                    <img src={Avatar313} className="rounded-circle" alt="User" />
                </div>
            </div>
            <hr></hr>
            <OverviewCards/ ><br></br>
            <hr></hr>
            <DataTable onEdit={handleEdit} />
            <EditModal
                show={modalShow}
                onClose={() => setModalShow(false)}
                customerData={selectedCustomer}
                onSave={handleSave}
            />
        </div>
    );
}

export default DashboardPage;