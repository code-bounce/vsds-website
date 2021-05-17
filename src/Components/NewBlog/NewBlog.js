import React from "react";
import "./NewBlog.scss";
import BookIcon from "@material-ui/icons/Book";
import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import Image5 from '../../assets/About/image2.JPG'

function NewBlog() {
  return (
    <div className="newblog">
      <div className="back">
        <Link to='/'>
        <IconButton className="icon__btn">
          <ArrowBack />
        </IconButton>
        </Link>
      </div>
      <div className="newblog__head">Essential Driving tips.</div>
      <div className="newblog__content">
        <div className="newblog1">
          <div className="newblog1__top">
            <div className="head">
              5 Car Driving Tips That Make You a Better Driver
            </div>
            <div className="sub">
              There’s no age for learning, and the scope of learning is always
              infinite. When it comes to drivi...
            </div>
            <div className="read">
              <div className="icon__box">
                <BookIcon className="icon" />
              </div>
              <Button className="read__more">
                <Link
                  to={{
                    pathname: "/blog_content",
                    index: 1,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </div>
            <hr />
          </div>
          <div className="newblog1__bottom">
            <div className="head">Driving School – Why is it important?</div>
            <div className="sub">
              Learning how to drive successfully is a daunting task, but an
              important one nonetheless. The respo...
            </div>
            <Button className="btn">
              <Link
                to={{
                  pathname: "/blog_content",
                  index: 2,
                }}
              >
                Read More
              </Link>
            </Button>
          </div>
        </div>
        <div className="newblog2">
          <div className="newblog2__top">
            <img
              src="https://images.unsplash.com/photo-1583393311863-078df2c6c90a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="newblog2__bottom">
            <div className="head">
              Mistakes that most people make while driving
            </div>
            <div className="sub">
              We must admit that each and every one of us is guilty of making
              errors while driving. The lessons learned at a driving school are
              executed based ...
            </div>
            <div className="read">
              <div className="icon__box">
                <BookIcon className="icon" />
              </div>
              <Button className="read__more">
                <Link
                  to={{
                    pathname: "/blog_content",
                    index: 3,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="newblog3">
          <div className="newblog3__top">
            <div className="top">
              <img
                src="https://images.unsplash.com/photo-1597322563092-8f68d0062d26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80"
                alt=""
              />
            </div>
            <div className="bottom">
              <div className="head">
                How to obtain a commercial driving licence in India
              </div>
              <Button className="btn">
                <Link
                  to={{
                    pathname: "/blog_content",
                    index: 4,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </div>
          </div>
          <div className="newblog3__bottom">
            <div className="top">
              <img
                src={Image5}
                alt=""
              />
            </div>
            <div className="bottom">
              <div className="head">
              How a simulator helps you before you start driving
              </div>
              <Button className="btn">
                <Link
                  to={{
                    pathname: "/blog_content",
                    index: 5,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="newblog4">
          <div className="newblog4__top">
            <div className="head">
              Why theory is as important as practical to learn driving?
            </div>
            <div className="sub">
              In order to be a good driver, one must always equip oneself with
              all the theory lessons while learning to drive. And one of the
              best ways to ....
            </div>
            <div className="read">
              <div className="icon__box">
                <BookIcon className="icon" />
              </div>
              <Button className="read__more">
                <Link
                  to={{
                    pathname: "/blog_content",
                    index: 6,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </div>
            <hr />
          </div>
          <div className="newblog4__top">
            <div className="head">
            Presenting the Maruti Suzuki Driving School
            </div>
            <div className="sub">
            With an aim to help India become good at driving, Maruti Suzuki India Limited introduced the Maruti Driving School in 2005. By offering a structured and contemporary ....
            </div>
            <div className="read">
              <div className="icon__box">
                <BookIcon className="icon" />
              </div>
              <Button className="read__more">
                <Link
                  to={{
                    pathname: "/blog_content",
                    index: 7,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBlog;
