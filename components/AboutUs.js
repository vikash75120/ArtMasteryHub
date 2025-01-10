import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="image-1">
        <img
          src="https://d2gk6qz8djobw9.cloudfront.net/slider/15803070886079251.jpg"
          alt="AboutUS-Banner"
        />
      </div>
      <div className=" container-1 ">
        <div className="container-2 ">
          <h2 className=" heading text-3xl font-bold">ABOUT DAILY SKETCH PRACTICE</h2>
          <div className="content-1">
            <p className="para-1">
              <strong>Scott Eaton's Bodies in Motion</strong> is an ongoing
              photographic project that aims to document the power, beauty and
              possibility of the human body in motion. Scott began shooting
              photography for Bodies in Motion in 2009 to support his renowned
              Anatomy for Artists course. Inspired by the work of Eadweard
              Muybridge, Scott began to photograph high-resolution sequences of
              athletes and dancers in motion. These photos have been used for
              years in his anatomy courses to help art students deepen their
              understanding of form, function and anatomy of the figure. The
              project has continued to grow over subsequent years and the Bodies
              in Motion library is now online to share these images with current
              and future generations of artists.
            </p>
            <div className="image-2">
              <img
                src="https://www.bodiesinmotion.photo/img/about-1.jpg"
                alt="image-1"
              />
            </div>
          </div>
          <div className="content-2">
            <p className="para-2">
              In many ways this site is a continuation of Muybridge's work,
              though updated for the 21st century with the latest DSLR cameras
              and flashes as well as sophisticated 3d scanning technology. The
              site was built by an artist with artists in mind. The library is
              expansive and growing monthly, but is narrowly focused on the
              isolate figure in motion. Scott is meticulous about lighting each
              photographic sequence or 3d scan. He attempts to sculpt the forms
              of the body with his lighting to highlight the contours and
              anatomy which expose the workings of the beautiful machine that is
              the human body. Each Motion and Scan contains countless lessons of
              anatomy, form, balance, gesture, and animation and we hope that
              the Bodies in Motion library will inspire artists and aspiring
              artists to study and appreciate the human figure.
            </p>
            <div className="image-3">
              <img
                src="https://www.bodiesinmotion.photo/img/about-2.jpg"
                alt="image-2"
              />
            </div>
          </div>
          <div className="container-3">
            <h2 className="heading-2">About the Photographer</h2>
            <div className="container-4">
            <div className="image-4">
              <img
                src="https://www.bodiesinmotion.photo/img/ScottEaton.jpg"
                alt="image-3"
              />
            </div>
              <p className="para-3">
                Scott Eaton is a sculptor, designer, photographer, and educator
                based in London, UK. His work focuses on the form, motion and
                anatomy of the human figure. Scott studied drawing and sculpture
                in Florence, Italy, and received his design and computer
                graphics education at the MIT Media Lab. 
                <br/><br/>
                Scott?s sculpture and
                design projects have been featured in Wired Magazine, Vogue,
                Vanity Fair, the New York Times, and across the internet. In
                addition to his own work, Scott frequently collaborates with
                other artists and studios. Recent collaborations include work
                with legendary artist Jeff Koons, Turner prize-winner Mark
                Wallinger, French crystal company Lalique for Elton John, Nike,
                the Sochi Winter Olympics, and Academy Award winning visual
                effects studios Framestore and ILM.
                <br/><br/>
                When not busy with Bodies in
                Motion and project, Scott teaches widely on anatomy, digital
                sculpture, and character design. Entertainment clients include
                Pixar, Industrial Light & Magic, Disney, Sony, Warner Bros,
                Electronic Arts, Ubisoft, and many other visual effects,
                animation and games studios.
              </p>
              <div className="image-5">
              <img
                src="https://www.bodiesinmotion.photo/img/ScottEaton.jpg"
                alt="image-3"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs