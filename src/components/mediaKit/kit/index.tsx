import {
  ClearSpaceIcon,
  ClearSpaceLogo,
  Logo,
  LogoType,
  LogoVertical,
  LogoWithLightText,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Kit = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  const isInView1 = useIsInViewport(ref1);
  const isInView2 = useIsInViewport(ref2);
  const isInView3 = useIsInViewport(ref3);

  const categories = [
    {
      name: "Logo",
      scrollId: "logo",
      active: isInView1,
    },
    {
      name: "Clear Space",
      scrollId: "clearSpace",
      active: isInView2,
    },
    {
      name: "Assets",
      scrollId: "assets",
      active: isInView3,
    },
  ];

  return (
    <section className={styles.kitBg}>
      <div className={`siteWrapper ${styles.kit}`}>
        <div className={styles.kitCategory}>
          {categories.map((item, index) => (
            <p
              key={index}
              className={item.active ? styles.active : ""}
              role="button"
              tabIndex={0}
              onClick={() => scrollToCategory(item.scrollId)}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className={styles.kitWrap}>
          <div ref={ref1} id="logo">
            <p className={styles.categoryTtl}>Logo</p>
            <div className={styles.logoSec}>
              <p className={styles.logoTxt}>
                Our logo is made up of two parts; our icon (we like to call it
                The Cluster) and the logotype that uses work sans bold. Our logo
                is very important to us, do not attempt to modify or recreate
                it. Always use the provided brand assets.
              </p>
              <div className={styles.logo}>
                <LogoWithLightText />
              </div>
            </div>
          </div>
          <div ref={ref2} id="clearSpace">
            <p className={styles.categoryTtl}>Clear Space</p>
            <div className={styles.clearSpaceSec}>
              <p className={styles.logoTxt}>
                Our logo always needs to be visible, it needs some space. The
                mimimum clear space that must surround the logo is equivalent to
                the height of the “n”
              </p>

              <ClearSpaceLogo className={styles.clearSpaceLogo} />
              <ClearSpaceIcon className={styles.clearSpaceIcon} />
            </div>
          </div>
          <div ref={ref3} id="assets">
            <p className={styles.categoryTtl}>Assets</p>
            <div className={styles.assetsSec}>
              <div className={styles.assetWrap}>
                <p>MAIN LOGO</p>
                <LogoWithLightText />
                <div className={styles.assetsBtnSec}>
                  <button className={styles.assetsBtn}>PNG</button>
                  <button className={styles.assetsBtn}>SVG</button>
                </div>
              </div>
              <div className={styles.assetWrap}>
                <p>LOGOMARK</p>
                <Logo />
                <div className={styles.assetsBtnSec}>
                  <button className={styles.assetsBtn}>PNG</button>
                  <button className={styles.assetsBtn}>SVG</button>
                </div>
              </div>
              <div className={styles.assetWrap}>
                <p>LOGOTYPE</p>
                <LogoType />
                <div className={styles.assetsBtnSec}>
                  <button className={styles.assetsBtn}>PNG</button>
                  <button className={styles.assetsBtn}>SVG</button>
                </div>
              </div>
              <div className={styles.assetWrap}>
                <p>VERTICAL LOCKUP</p>
                <LogoVertical />
                <div className={styles.assetsBtnSec}>
                  <button className={styles.assetsBtn}>PNG</button>
                  <button className={styles.assetsBtn}>SVG</button>
                </div>
              </div>
            </div>
            <div className={styles.colorSec}>
              <div className={styles.blue}></div>
              <div>
                <p className={styles.colorName}>Nebula Blue</p>
                <p className={styles.colorCode}>#21A8F4</p>
              </div>
            </div>
            <div className={styles.colorSec}>
              <div className={styles.purple}></div>
              <div>
                <p className={styles.colorName}>Nebula Purple</p>
                <p className={styles.colorCode}>#7B61FF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Kit };

const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  React.useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
