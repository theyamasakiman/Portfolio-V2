'use client';
import React from 'react';
import Navbar from './components/nav/navbar';
import ProjectCard from './components/card/card';
import '../app/App.css';
import logo from './assets/logo_frame.png';
import CBV from './assets/cote_img.png';
import CGB from './assets/gear.png';
import zest from './assets/zestfriends.jpg';
import pnb from './assets/PNB.png'
import Footer from './components/footer/footer';
import Image from "next/image";



const Home: React.FC = () => {
  
  return (
    <div className="container">
      <Navbar />
      <div id="halo">
        <div className="animate">
          <div className='slide-out'>
            <Image className="arrow" src='/assets/logo_frame.png' alt="stylized 'c' and 'y' for chris' logo" height={200} width={200} />
            <div className="flexy center arrow">
              <div className="design">CHRIS</div>
              <div className="design">YAMASAKI</div>
              <div className="design">DESIGN</div>
            </div>
          </div>   
          <div className='slide-in'>
            <div className="read-text">
              As a UX Architect:
            </div>
            <div className="read-text">
              I create pixel-perfect UIs that match a simple and effortless UX, where less is more.
            </div>
            <div className="read-text">
              As a Front-end Engineer:
            </div>
            <div className="read-text">
              I bring designs to life with React, TypeScript, and Next.js.
            </div>
            <div className='btn'><a  href='/about'>Meet Chris</a></div>
          </div>
        </div>
      </div>
      <main>
        <header className="middle">
        
        </header>

        <div className="title-container">
          <div id="proj" className="title margr">PROJECTS +</div>
          <div className="title">DELIVERABLES</div>
        </div>

        <div className="folio-c">
          <ProjectCard title="My Start Up" image='/assets/PNB.png' link="https://peoplesnotebook.com/" text="Connecting through closed group social reflection"/>
          <ProjectCard title="A winery e-commerce redesign" image='/assets/cote_img.png' link="/Cote" text="Guiding users efficiently towards making a purchase"/>
          <ProjectCard title="Senior capstone" image='/assets/gear.png' link="https://drive.google.com/file/d/1PgSRLDxpOhzBuf-4uHfogZQgflrqt1zg/view?usp=sharing" text="Humanizing and personalizing online interactions"/>
          <ProjectCard title="Zest Friends" image='/assets/zestfriends.jpg' link="https://zestfriends.weebly.com/" text="Helping build community through cooking"/>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Home;