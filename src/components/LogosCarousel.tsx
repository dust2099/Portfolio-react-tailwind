import { logos } from '../data/data';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const animation = { duration: 5000, easing: (t: number) => t }

export default function App() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 6,
      spacing: 2,
    },
    renderMode: "performance",
    drag: true,
    rtl: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider w-full py-6">
      {logos.map((logo) => (
        <div key={logo.id} className="keen-slider__slide flex flex-col items-center justify-center">
          <img src={logo.src} alt={logo.name} className="h-16 w-16" />
          <span className="mt-2 text-sm text-white">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}
