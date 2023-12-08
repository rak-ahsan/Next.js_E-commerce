"use client";
import React from "react";
import Image from "next/image";
import {
  faHeart,
  faThumbsUp,
  faHeadphones,
  faMoneyBill,
} from "@fortawesome/free-regular-svg-icons";
faHeadphones;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carosol from "./Carosol";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const Topbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p style={{ fontsize: "14px" }}>Welcome to Fig and Fit shop</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div>
              <a href="#" className="nav-link">
                about us
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                contact us
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                login
              </a>
            </div>
          </div>
        </div>
        <div className="row flex justify-content-center align-items-center">
          <div className="col-md-3">
            <Image
              src="/logo.jpg"
              width={160}
              height={60}
              alt="Picture of the author"
            />
          </div>
          <div className="col-md-6">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-md-3 d-flex justify-content-between">
            <div className="col-md-4">
              <span>Call Us Now</span>
              <br />
              <span>01775566772</span>
            </div>
            <div className="col-md-4" style={{ fontSize: "20px" }}>
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <br />
              <span>0</span>
            </div>
            <div className="col-md-4">
              <span>Cart amount</span>
              <br />
              <span>0</span>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <Carosol />
        </div>
        <h4>Top Categories</h4>

        <div className="container">
          <div className="row d-flex mb-3">
            <a href="" className="nav-link col p-3 hov">
              <Image
                src="/cata1.webp"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </a>
            <a href="" className="nav-link col p-3 hov">
              <Image
                src="/cata1.webp"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </a>
            <a href="" className="nav-link col p-3 hov">
              <Image
                src="/cata1.webp"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </a>
            <a href="" className="nav-link col p-3 hov">
              <Image
                src="/cata1.webp"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </a>
            <a href="" className="nav-link col p-3 hov">
              <Image
                src="/cata1.webp"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </a>
          </div>
        </div>
        <h4>Top Selling Products</h4>

        <div className="container mt-5 mb-5">
          <div className="row text-center">
            <Card
              style={{ width: "15rem", marginRight: "10px" }}
              className="mb-3"
            >
              <Card.Img variant="top" src="cata1.webp" />
              <Card.Body>
                <Card.Title className="text-truncate">
                  Premium Quality White Hoodie For Men,s
                </Card.Title>
                <Card.Text>$690</Card.Text>
                <Button variant="danger">Order Now</Button>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "15rem", marginRight: "10px" }}
              className="mb-3"
            >
              <Card.Img variant="top" src="cata1.webp" />
              <Card.Body>
                <Card.Title className="text-truncate">
                  Premium Quality White Hoodie For Men,s
                </Card.Title>
                <Card.Text>$690</Card.Text>
                <Button variant="danger">Order Now</Button>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "15rem", marginRight: "10px" }}
              className="mb-3"
            >
              <Card.Img variant="top" src="cata1.webp" />
              <Card.Body>
                <Card.Title className="text-truncate">
                  Premium Quality White Hoodie For Men,s
                </Card.Title>
                <Card.Text>$690</Card.Text>
                <Button variant="danger">Order Now</Button>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "15rem", marginRight: "10px" }}
              className="mb-3"
            >
              <Card.Img variant="top" src="cata1.webp" />
              <Card.Body>
                <Card.Title className="text-truncate">
                  Premium Quality White Hoodie For Men,s
                </Card.Title>
                <Card.Text>$690</Card.Text>
                <Button variant="danger">Order Now</Button>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "15rem", marginRight: "10px" }}
              className="mb-3"
            >
              <Card.Img variant="top" src="cata1.webp" />
              <Card.Body>
                <Card.Title className="text-truncate">
                  Premium Quality White Hoodie For Men,s
                </Card.Title>
                <Card.Text>$690</Card.Text>
                <Button variant="danger">Order Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 text-center p-3">
              <FontAwesomeIcon icon={faThumbsUp} />
              <h5>High-quality Goods</h5>
              <span>Enjoy top quality items for less</span>
            </div>
            <div className="col-md-3 text-center p-3">
              <FontAwesomeIcon icon={faThumbsUp} />
              <h5>24/7 Live chat</h5>
              <span>Get instant assistance whenever you need it</span>
            </div>
            <div className="col-md-3 text-center p-3">
              <FontAwesomeIcon icon={faThumbsUp} />

              <h5>Express Shipping</h5>
              <span>Fast & reliable delivery options</span>
            </div>
            <div className="col-md-3 text-center p-3">
              <span>
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <h5>Secure Payment</h5>
              <span>Multiple safe payment methods</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container p-5">
          <div className="row text-white">
            <div className="col-md-4 flex flex-colum p-3">
              <Image
                src="/logo.jpg"
                width={150}
                height={50}
                alt="Picture of the author"
              />
              <div>
                Fig and Fit is a complete e-commerce website. Here, consumers of
                all ages can buy every essential product of the day, from
                gadgets, electronics, home appliances, leather goods, jewelry,
                baby accessories, cosmetics, fashion, and lifestyle products to
                affordable prices at home
              </div>
            </div>
            <div className="col-md-2 p-5">
              <span>Quicks Link</span>
              <br />
              <span>Home Page</span>
              <br />
              <span>User Login</span>
              <br />
              <span>User Regirstration</span>
            </div>
            <div className="col-md-2 p-5">
              <span>Quicks Link</span>
              <br />
              <span>Home Page</span>
              <br />
              <span>User Login</span>
              <br />
              <span>User Regirstration</span>
            </div>
            <div className="col-md-2 p-5">
              <span>Quicks Link</span>
              <br />
              <span>Home Page</span>
              <br />
              <span>User Login</span>
              <br />
              <span>User Regirstration</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
