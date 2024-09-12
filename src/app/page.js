'use client'
import { useEffect } from "react";
import Home from "@/components/Home";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (typeof window !== 'undefined' && window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
      });

      tl.fromTo(".banner-content .reliable-content",
        { y: "-60px" },
        {
          autoAlpha: 1,
          y: "0",
          duration: 1.5,
        }
      );
      tl.fromTo(".banner-content strong",
        { y: "10px" },
        {
          autoAlpha: 1,
          y: "0",
          duration: 1.5,
        }, '-=1.5'
      );
      tl.fromTo(".banner-content h1",
        { y: "-70px" },
        {
          autoAlpha: 1,
          y: "0",
          duration: 1.5,
        }, '-=1.5'
      );
      tl.fromTo(".banner-content p",
        { x: "70px" },
        {
          autoAlpha: 1,
          x: "0",
          duration: 1.5,
        }, '-=1.5'
      );
      tl.fromTo(".banner-content .btn-filled",
        { x: "-10px" },
        {
          autoAlpha: 1,
          x: "0",
          duration: 1.5,
        }, '-=1.5'
      );

      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-wrapper",
          start: '40px',
          end: '+=50',
          pin: true,
          // markers: true,
          scrub: 1,
        },
      });

      t2.to(".banner-content .reliable-content", {
        autoAlpha: 0.5,
        y: "-300px",
        duration: 1.5,
      });
      t2.to(".banner-content strong", {
        autoAlpha: 0.5,
        y: "-400px",
        duration: 1.5,
      }, '-=1.5');
      t2.to(".banner-content h1", {
        autoAlpha: 0.5,
        y: "-500px",
        duration: 1.5,
      }, '-=1.5');
      t2.to(".banner-content p", {
        autoAlpha: 0.5,
        y: "-700px",
        duration: 1.5,
      }, '-=1.5');
      t2.to(".banner-content .btn-filled", {
        autoAlpha: 0.5,
        y: "-900px",
        duration: 1.5,
      }, '-=1.5');
      t2.to(".banner-img", {
        autoAlpha: 0.5,
        y: "-900px",
        duration: 1.5,
      }, '-=1.5')

      t2.to(".customers", {
        autoAlpha: 1,
      }, '-=1.5')
      t2.fromTo(".customers-content-cirle-imgs",{autoAlpha: 0,
        y: '200px',}, {
        autoAlpha: 1,
        duration: 1.5,
        y: '0',
      }, '-=1');
      t2.fromTo(".customers-white-cirle",{
        autoAlpha: 0,
      }, {
        duration: 1.5,
        autoAlpha: 1,
      }, '-=1');
      t2.fromTo(".customers-green-cirle", {autoAlpha: 0,},{
        duration: 1.5,
        autoAlpha: 1,
      }, '-=1');
      t2.to(".customers-white-cirle", {
        autoAlpha: 1,
        rotation: -100,
        y: '0px',
        duration: 1.5,
      }, '-=1.5');
      t2.to(".customers-green-cirle", {
        autoAlpha: 1,
        rotation: -125,
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".manufacturing-companies-wrapper",{autoAlpha: 0,y: "80px",}, {
        autoAlpha: 1,
        y: "0",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".finance-companies-wrapper",{autoAlpha: 0,x: "400px",
        y: "150px",}, {
        autoAlpha: 1,
        x: "0",
        y: "0",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".media-resources-wrapper",{autoAlpha: 0,x: "200px",}, {
        autoAlpha: 1,
        x: "0",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".healthcare-organizations-wrapper",{autoAlpha: 0,x: "320px",
        y: "-80px",}, {
        autoAlpha: 1,
        x: "0",
        y: "0",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".construction-companies-wrapper",{autoAlpha: 0, x: "0",
        y: "0",}, {
        autoAlpha: 1,
        x: "30px",
        y: "-30px",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".booking-services-wrapper",{autoAlpha: 0,
        x: "-270px",
        y: "200px",}, {
        autoAlpha: 1,
        x: "0",
        y: "0",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".product-companies-wrapper", { autoAlpha: 0,
        x: "-190px",},{
        autoAlpha: 1,
        x: "0",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".online-stores-wrapper", { autoAlpha: 0,x: "-150px",
        y: "-100px",},{
        autoAlpha: 1,
        x: "0",
        y: "0",
        duration: 1.5,
      }, '-=1.5');
      t2.fromTo(".customers-content-last-info",{ autoAlpha: 0,
        y: "120px",}, {
        autoAlpha: 1,
        y: "0",
        duration: 1.5,
      }, '-=1.5');

    }
  }, []);

  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <>
      <Home />
    </>
  );
}
