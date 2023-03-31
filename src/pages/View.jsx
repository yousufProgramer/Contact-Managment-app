import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavBar } from '../Component/Common/NavBar';
import { useUserContext } from '../Context/UserProvider';
// import "./Style/Home.css"
export const ViewPage = () => {
  const [user, setUser] = useUserContext()
  const { id } = useParams();
  const users = user.filter((user) => user.id == id);
  return (
    <div>
      <NavBar />
      <div className="container">
        <h3>View Contact</h3>
        <p className="w-75 paraghap mt-2">
          A contact manager is a software application used to organize and store
          contact information such as names, addresses, phone numbers, and email
          addresses. It allows users to manage their contacts efficiently and
          keep track of their communication history.
        </p>

        <div className="main-view py-3">
          <div className="view">
            <div className="header p-2">
              <h4>{users[0].Position}</h4>
            </div>

            <div className="body d-flex">
              <img
                className="view-img"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt=""
              />

              <div className="body-item ">
                <h2>ID : {users[0].id}</h2>
                <h5>Name : {users[0].name}</h5>
                <h5>Mobile : {users[0].Mobile}</h5>
                <h5>Email : {users[0].Email}</h5>
                <h5>Company : {users[0].company}</h5>
                <h5>Position : {users[0].Position}</h5>

                <Link to="/">
                  <button className="btn btn-primary">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
