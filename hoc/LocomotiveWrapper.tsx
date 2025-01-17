import Footer from '@/components/common/Footer';
import React, { useEffect, useRef } from 'react';

const withLocomotiveScroll = (WrappedComponent: React.ComponentType<any>) => {
  const LocomotiveWrapper: React.FC = (props) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      let scroll: any;

      const initializeScroll = async () => {
        if (scrollRef.current) {
          const { default: LocomotiveScroll } = await import('locomotive-scroll');
          const { default: imagesLoaded } = await import('imagesloaded');

          scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            getSpeed: true,
            getDirection: true,
            multiplier: 0.4,
          });
          imagesLoaded(scrollRef.current, { background: true }, () => {
            scroll.update();
          });

          const resizeObserver = new ResizeObserver(() => {
            scroll.update();
          });
          resizeObserver.observe(document.body);

          return () => {
            resizeObserver.unobserve(document.body);
            scroll?.destroy();
          };
        }
      };

      initializeScroll();

      return () => {
        scroll?.destroy();
      };
    }, []);

    return (
      <div ref={scrollRef} data-scroll-container>
        <div data-scroll-section>
          <WrappedComponent {...props} />
        <Footer/>
        </div>
      </div>
    );
  };

  return LocomotiveWrapper;
};

export default withLocomotiveScroll;
