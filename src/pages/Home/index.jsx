import React, { useState } from 'react';
import { GrView } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import './Home.css';
import { Link, useParams } from 'react-router-dom';
import { NavBar } from '../../Component/Common/NavBar';
import { useUserContext } from '../../Context/UserProvider';

export const HomePage = () => {
  const [user, setUser] = useUserContext();

  const [search, setSearch] = useState('');
  // const {id} = useParams()
  const handle = (id) => {
    const filter = user.filter((user) => user.id !== id);
    setUser(filter);
  };

  //  searching
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="header-content d-flex mt-3">
          <h2>Contact Manager</h2>
          <Link to="/create">
            <button className="btn header-btn text-white bg-primary ms-2">
              + New
            </button>
          </Link>
        </div>

        <p className="w-75 paraghap mt-2">
          A contact manager is a software application used to organize and store
          contact information such as names, addresses, phone numbers, and email
          addresses. It allows users to manage their contacts efficiently and
          keep track of their communication history.
        </p>

        <form action="">
          <div className="d-flex search">
            <input
              type="text"
              placeholder="Search Name"
              className="form-control w-25  search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="row mt-4 py-3">
          {user
            .filter((user) => {
              return search.toLowerCase() === ' '
                ? user
                : user.name.toLowerCase().includes(search);
            })
            .map((user) => (
              <div className="col-12 col-lg-6 card medium-sereen">
                <div className="row card-body">
                  <div className="col-3 img">
                    <img
                      className="teamImg"
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      alt=""
                    />
                  </div>

                  <div className="col-8 mt-3">
                    <div className="list-group">
                      <div className="list-group-item list-group-item-action p-2 mt-1">
                        <span>Name :{user.name}</span>
                        <br />
                        <span> Email :{user.Email}</span>
                        <br />
                        <span>Mobile : {user.Mobile}</span>
                        <br />
                        <span>Company : {user.company}</span>
                        <br />
                        <span>Position : {user.Position}</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-1 icon-body">
                    <Link to={'/view/' + user.id}>
                      <button className="one">
                        <GrView />
                      </button>
                    </Link>

                    <Link to={'/edit/' + user.id}>
                      <button className="two">
                        <AiOutlineEdit />
                      </button>
                    </Link>

                    <button className="there" onClick={() => handle(user.id)}>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <div className='card w-50 mt-3 card-design'>
            <div className='card-body'></div>

            <div className="row">
              <div className="col-4">
                <img src="" alt="" />
              </div>
              <div className="col-6">

              </div>
              <div className="col-2">

              </div>
            </div>
           </div> */}
      </div>
    </div>
  );
};
