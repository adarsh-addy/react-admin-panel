import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/maincontent.css";

export default function Maincontent() {
  return (
    <div className="maincontent">
      <div className="container-sm">
        <div className="row">
          <div className="col">
            <Card body className='mt-4'>
              <div className="row">
                <div className="col">
                  <div className="parent-btn">
                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>

                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>
                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>

                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="parent-btn">
                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>

                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>
                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>

                    <button type="submit" class="btn1">
                      <span class="plusSymbol">+</span>
                      <br />
                      <span class="btn1-name">New Lead</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className="col">
                  <div class="container-fluid pt-4 px-4">
                    <div class="bg-info text-center rounded p-4">
                      <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Recent Salse</h6>
                        <a href="/#">Show All</a>
                      </div>
                      <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                          <thead>
                            <tr class="text-white">
                              <th scope="col"><input class="form-check-input" type="checkbox" /></th>
                              <th scope="col">Date</th>
                              <th scope="col">Invoice</th>
                              <th scope="col">Customer</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input class="form-check-input" type="checkbox" /></td>
                              <td>01 Jan 2045</td>
                              <td>INV-0123</td>
                              <td>Jhon Doe</td>
                              <td>$123</td>
                              <td>Paid</td>
                              <td><a class="btn btn-sm btn-primary" href="/#">Detail</a></td>
                            </tr>
                            <tr>
                              <td><input class="form-check-input" type="checkbox" /></td>
                              <td>01 Jan 2045</td>
                              <td>INV-0123</td>
                              <td>Jhon Doe</td>
                              <td>$123</td>
                              <td>Paid</td>
                              <td><a class="btn btn-sm btn-primary" href="/#">Detail</a></td>
                            </tr>
                            <tr>
                              <td><input class="form-check-input" type="checkbox" /></td>
                              <td>01 Jan 2045</td>
                              <td>INV-0123</td>
                              <td>Jhon Doe</td>
                              <td>$123</td>
                              <td>Paid</td>
                              <td><a class="btn btn-sm btn-primary" href="/#">Detail</a></td>
                            </tr>
                            <tr>
                              <td><input class="form-check-input" type="checkbox" /></td>
                              <td>01 Jan 2045</td>
                              <td>INV-0123</td>
                              <td>Jhon Doe</td>
                              <td>$123</td>
                              <td>Paid</td>
                              <td><a class="btn btn-sm btn-primary" href="/#">Detail</a></td>
                            </tr>
                            <tr>
                              <td><input class="form-check-input" type="checkbox" /></td>
                              <td>01 Jan 2045</td>
                              <td>INV-0123</td>
                              <td>Jhon Doe</td>
                              <td>$123</td>
                              <td>Paid</td>
                              <td><a class="btn btn-sm btn-primary" href="/#">Detail</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div class="container-fluid pt-4 px-4">
                    <div class="row g-4">
                      <div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-info rounded p-4">
                          <div class="d-flex align-items-center justify-content-between mb-2">
                            <h6 class="mb-0">Messages</h6>
                            <a href="/#">Show All</a>
                          </div>
                          <div class="d-flex align-items-center border-bottom py-3">
                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-0">Jhon Doe</h6>
                                <small>15 minutes ago</small>
                              </div>
                              <span>Short message goes here...</span>
                            </div>
                          </div>
                          <div class="d-flex align-items-center border-bottom py-3">
                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-0">Jhon Doe</h6>
                                <small>15 minutes ago</small>
                              </div>
                              <span>Short message goes here...</span>
                            </div>
                          </div>
                          <div class="d-flex align-items-center border-bottom py-3">
                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-0">Jhon Doe</h6>
                                <small>15 minutes ago</small>
                              </div>
                              <span>Short message goes here...</span>
                            </div>
                          </div>
                          <div class="d-flex align-items-center pt-3">
                            <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-0">Jhon Doe</h6>
                                <small>15 minutes ago</small>
                              </div>
                              <span>Short message goes here...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-info rounded p-4">
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="mb-0">Calender</h6>
                            <a href="/#">Show All</a>
                          </div>
                          <div id="calender"></div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-info rounded p-4">
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="mb-0">To Do List</h6>
                            <a href="/#">Show All</a>
                          </div>
                          <div class="d-flex mb-2">
                            <input class="form-control bg-dark border-0" type="text" placeholder="Enter task" />
                            <button type="button" class="btn btn-primary ms-2">Add</button>
                          </div>
                          <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox" />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 align-items-center justify-content-between">
                                <span>Short task goes here...</span>
                                <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox" />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 align-items-center justify-content-between">
                                <span>Short task goes here...</span>
                                <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox" checked />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 align-items-center justify-content-between">
                                <span><del>Short task goes here...</del></span>
                                <button class="btn btn-sm text-primary"><i class="fa fa-times"></i></button>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox" />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 align-items-center justify-content-between">
                                <span>Short task goes here...</span>
                                <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center pt-2">
                            <input class="form-check-input m-0" type="checkbox" />
                            <div class="w-100 ms-3">
                              <div class="d-flex w-100 align-items-center justify-content-between">
                                <span>Short task goes here...</span>
                                <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
