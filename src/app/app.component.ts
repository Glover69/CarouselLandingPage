import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap, random } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Application } from '@splinetool/runtime';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'CarouselLandingPage';

  ngAfterViewInit(): void {
    this.canRotate();
    // this.splineObj();
  }
  constructor(private el: ElementRef) {}

  splineObj() {
    const canvas = document.getElementById('canvas3d');
    //@ts-ignore
    const spline = new Application(canvas);

    spline
      .load('https://prod.spline.design/G8QSVNiyAnSHfjBC/scene.splinecode')
      .then(() => {
        const globe = spline.findObjectByName('Cube');
        console.log('World object:', globe);

        if (globe) {
          gsap.set(globe.scale, {
            x: 1,
            y: 1,
            z: 1,
          });
          // gsap.to(globe.scale, {
          //   x:2,
          //   y:2,
          //   z:2,
          //   duration: 3

          //   // scrollTrigger: {
          //   //   trigger: '.entire-landing-page',
          //   //   scrub: true,
          //   //   start: 'top center',
          //   //   end: 'bottom bottom'
          //   // }
          // });

          // gsap.to(globe.rotation, {
          //   x: 5,
          //   y: 1,
          //   z: 5,
          //   // z: 50,
          //   duration: 1

          //   // scrollTrigger: {
          //   //   trigger: '.entire-landing-page',
          //   //   scrub: true,
          //   //   start: 'top center',
          //   //   end: 'bottom bottom'
          //   // }
          // });

          gsap.to(globe.rotation, {
            x: 50,
            ease: 'power1.out',
          });

          // gsap.to(globe.position, {
          //   y: -200,
          //   z: 500,
          //   duration: 3

          //   // scrollTrigger: {
          //   //   trigger: '.entire-landing-page',
          //   //   scrub: true,
          //   //   start: 'top center',
          //   //   end: 'bottom bottom'
          //   // }
          // });

          // gsap.set(globe.position,{
          //   x:110,
          //   y:50,

          // });
          // gsap.to(globe, {
          //   x: 50,
          //   rotateY: 360,
          //   duration: 3,
          //   delay: 1,
          //   ease: 'power4.inOut',
          // });
        } else {
          console.error('Object "globe" not found in the Spline scene.');
        }
      });
  }

  canRotate() {
    // const darkScreen = this.el.nativeElement.querySelector('.screen-dark');
    const bottle = this.el.nativeElement.querySelector('.bottle');
    const lightScreen = this.el.nativeElement.querySelector('.screen-light');
    const darkText = this.el.nativeElement.querySelector('.dark-screen-txt');
    const lightText = this.el.nativeElement.querySelector('.light-screen-txt');
    const leavesDark = this.el.nativeElement.querySelector('.leaves-dark');
    const leavesLight = this.el.nativeElement.querySelector('.leaves-light');

    gsap.to(bottle, {
      rotateY: 180,
      duration: 2.5,
      delay: 2,
      ease: 'power4.Out'
    });

    gsap.fromTo(lightScreen, {
      // xPercent: -100,
      width: '0%',
    },
     {
      width: '100%',
     xPercent: 0,
      delay: 2,
      duration: 1.5,
      backgroundColor: '#C0C0C0',
      ease: 'power4.inOut',
    });

    gsap.fromTo(
      darkText,
      {
        right: '',
      },
      {
        right: '100%',
        delay: 2,
        duration: 1.5,
        // color: '#232323',
        ease: 'power4.inOut',
      }
    );

    gsap.fromTo(
      lightText,
      {
        right: '-100%',
      },
      {
        right: 'auto',
        // width: '100%',
        delay: 2,
        duration: 1.5,
        // color: '#232323',
        ease: 'power4.inOut',
      }
    );

    gsap.to(leavesLight, {
      yPercent: -250,
      delay: 2,
      duration: 2,
      ease: 'power4.inOut',
    });

    gsap.fromTo(
      leavesDark,
      {
        yPercent: 250,
      },
      {
        yPercent: 0,
        delay: 2,
        duration: 2,
        ease: 'power4.inOut',
      }
    );
  }
}
