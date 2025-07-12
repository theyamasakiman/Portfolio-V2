import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/nav/navbar";
import '../App.css';

import Footer from "../components/footer/footer";

export default function CoteBonnevilleRedesign() {
  return ( 
    <div className="container">
      <Nav />
      <div className="content">
        <div id="halo">

        
        <h1>Meet Chris:</h1>
        <div className="read-text">Hi! When I am not creating digital experiences, you can find me outdoors.</div>
        <div className="read-text">I love to ski, fish, backpack, and explore new places.</div>
        <div className="photos">
          <div className="photo1">
          <Image 
            width = {350}
            height = {350}
            src="/assets/IMG_3572.JPG" 
            alt="Chris skiing in a maroon jacket and yellow pants at Snowbird, UT" 
          />

        </div>

        <div className="photos">
          <div className="photo2">
            <Image 
              width = {150}
              height = {150}
              src="/assets/Belize.JPG" 
              alt="Chris with two barracuda in Belize" 
            />
            <div className="caption">These baby barracuda were made into delicious fish tacos in Belize</div>
          </div>

          <div className="photo2">
            <Image 
              width = {150}
              height = {150}
              src="/assets/Rainier.JPG" 
              alt="Chris taking a selfie with Mt. Rainier in the background" 
            />
            <div className="caption">Pow day at Crystal Mountain with Rainier in the background!</div>
          </div>

          <div className="photo2">
            <Image 
              width = {150}
              height = {150}
              src="/assets/tomato.JPG" 
              alt="Chris taking a selfie covered in tomato sauce at the world's largest tomato fight in Buñol, Spain" 
            />
            <div className="caption"> In the name of culture: participated in the world's largest tomato fight in Buñol, Spain</div>
          </div>

          <div className="photo2">
            <Image 
              width = {150}
              height = {150}
              src="/assets/backpack.jpg" 
              alt="Chris hiking with a large backpack in the enchanted valley in Olympic National Park, WA" 
            />
            <div className="caption">Backpacking in the Enchanted Valley in Olympic National Park, WA</div>

          </div>
        </div>
        
        </div>
        
       
        <h2>Bio</h2>
        <div className="read-text">I grew up in Oregon, and am glad to call the PNW home. I went to the University of Washington
          and graduated with a B.S in Human Centered Design and Engineering in 2024. I have been working as a UX Architect and 
          Front-end Engineer since then. If you have any questions, or would like to work together, please reach out!
        </div>
        </div>
      </div>
      <Footer />
    </div>
  
  );
}