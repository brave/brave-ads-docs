import React, { useState, useEffect, useRef } from 'react';
import styles from './dynamic-ntt.module.css';
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";

interface DynamicNTTProps {
  src?: string;
}

// react 18 doesn't permit the (experimental but supported by chromium) csp
// attribute on iframes. Add it so typescript doesn't complain.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace React {
    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
      csp?: string | undefined;
    }
  }
}

export default function DynamicNTT({ src }: DynamicNTTProps): React.JSX.Element {
  console.log('DynamicNTT component is rendering!');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const csp = [
    "default-src 'none';",
    "script-src 'self';",
    "style-src 'self';",
    "img-src 'self';",
    "media-src 'self';",
    "font-src 'self';",
    "base-uri 'none';",
    "form-action 'none';",
  ].join(" ");
  
  return (
    <div className={`${styles.dnttRoot} dynamic-ntt-demo`}>
      {/* Loading spinner */}
      {!iframeLoaded && (
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner}></div>
          <div className={styles.loadingText}>Loading...</div>
        </div>
      )}
      
      {/* NTT content */}
      <iframe
        id="background-iframe"
        src={src}
        className={`${styles.backgroundIframe} ${iframeLoaded ? styles.loaded : ''}`}
        title="Background Content"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
        csp={csp}
        onLoad={() => setIframeLoaded(true)}
      />

      {/* Emulation of browser provided new tab page furniture */}
      <div className={styles.overlayContent}>
        <div id="root">
          <div className={styles.mainContainer}>
            <div id="main" className={styles.mainContent} data-target="background">
              {/* 3x3 Grid Layout */}
              <div className={styles.gridContainer}>
                
                {/* Row 1 */}
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}>
                  <div className={styles.searchBoxContainer}>
                    <div className={styles.searchBoxContent}>
                      <img src="/img/brave128.png" alt="Brave" className={styles.braveLogo} />
                      <div className={styles.searchText}>Ask Brave Search</div>
                    </div>
                  </div>
                </div>
                <div className={styles.gridCell}>
                  <div className={styles.settingsContainer} ref={settingsRef}>
                    <button
                      className={`${styles.settingsButton} ${showSettingsDropdown ? styles.expanded : ''}`}
                      onClick={() => {
                        setShowSettingsDropdown(!showSettingsDropdown);
                      }}
                    >
                      <img src="/img/settings.svg" alt="Settings" className={styles.settingsIcon} />
                      <div className={styles.settingsDropdown}>
                        <a href="/ad-placements/brave-browser/dynamic-ntt" className={styles.pageLink} target="_blank" rel="noopener noreferrer">
                          <div className={styles.topSiteItem}>
                            <svg className={styles.homeIcon} viewBox="0 0 24 24">
                              <defs>
                                <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="3%" stopColor="rgb(250, 114, 80)" />
                                  <stop offset="40%" stopColor="rgb(255, 24, 147)" />
                                  <stop offset="99%" stopColor="rgb(167, 138, 255)" />
                                </linearGradient>
                              </defs>
                              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="url(#homeGradient)"/>
                            </svg>
                          </div>
                          Home
                        </a>
                        <a href="/demos/dynamic-ntt/pan-and-zoom" className={styles.pageLink} target="_blank" rel="noopener noreferrer">
                          Pan&Zoom
                        </a>
                        <a href="/demos/dynamic-ntt/pan-and-zoom-2" className={styles.pageLink} target="_blank" rel="noopener noreferrer">
                          Pan&Zoom 2  
                        </a>
                        <a href="/demos/dynamic-ntt/carousel-autofade" className={styles.pageLink} target="_blank" rel="noopener noreferrer">
                          Carousel
                        </a>
                        <a href="/demos/dynamic-ntt/slider" className={styles.pageLink} target="_blank" rel="noopener noreferrer">
                          Slider
                        </a>
                        <a href="/demos/dynamic-ntt/digital-rain" className={styles.pageLink} target="_blank" rel="noopener noreferrer">
                          Digital Rain
                        </a>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Row 2 - Empty cells (70% height) */}
                <div className={styles.gridCell}></div>
                <div className={`${styles.gridCell} ${styles.middleCell}`}></div>
                <div className={styles.gridCell}></div>

                {/* Row 3 */}
                <div className={styles.gridCell} style={{gridArea: 'bottom-full'}}>
                  <div className={styles.widgetContainer}>
                    <div className={styles.widget}>
                      <div className={styles.widgetInner}>
                        <div></div>
                        <div className={styles.widgetTitle}>STATS</div>
                        <div className={styles.widgetData}>
                          <div className={styles.widgetDataInner}>
                            <div>
                              <div className={`${styles.value} ${styles.valueFont}`}>111</div>
                              Trackers &amp; ads blocked
                            </div>
                            <div>
                              <div className={`${styles.value2} ${styles.valueFont}`}> 4.4 
                                <span className={`${styles.units} ${styles.unitsFont}`}>MB</span>
                              </div>
                              <div>Bandwidth saved</div>
                            </div>
                            <div>
                              <div className={`${styles.value3} ${styles.valueFont}`}>6 
                                <span className={`${styles.units3} ${styles.unitsFont}`}>seconds</span>
                              </div>
                              Time saved
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.widget}>
                      <div className={styles.widgetInner}>
                        <div></div>
                        <div className={styles.widgetTitle}>NEWS</div>
                        <div className={styles.optIn}>
                          <div className={styles.graphic}></div>
                          <div className={styles.text}>Turn on Brave News, and never miss a story</div>
                          <div className={styles.actions}>
                            <button className={styles.newsButton}>
                              Turn on Brave News
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.widget}>
                      <div className={styles.widgetVPNInner}>
                        <div className={styles.stackTabs}>
                          <button className={styles.activeVpnButton}>
                            <div className={styles.activeVpnButtonIcon}></div>
                          </button>
                          
                          <button className={styles.inactiveVpnButton}>
                            <div className={styles.inactiveVpnButtonIcon}></div>
                          </button>
                          
                          <button className={styles.inactiveVpnButton}>
                            <div className={styles.inactiveVpnButtonIcon2}></div>
                          </button>
                        </div>
                        <div className={styles.widgetDataVPN}>
                          <div className={styles.widgetDataInnerVPN}>
                            <div className={styles.widgetTitle} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                              <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <div className={styles.activeVpnButtonIconGradient}></div>
                                BRAVE VPN
                              </span>
                              <span className={styles.provider}>Powered by 
                                <div className={styles.guardianIcon}></div>
                              </span>
                            </div>
                            <div className={styles.vpnContent}>
                              <div className={styles.vpnFeatures}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                  <div className={styles.shieldIcon}></div>
                                  <span>Extra privacy &amp; security online</span>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                  <div className={styles.shieldIcon}></div>
                                  <span>Hide your IP &amp; change your location</span>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                  <div className={styles.shieldIcon}></div>
                                  <span>Protect every app on your device</span>
                                </div>
                              </div>
                              <div className={styles.vpnPurchaseActions}>
                                <div className={styles.actions}>
                                  <button className={styles.newsButton}>
                                    Start free trial
                                  </button>
                                </div>
                                <span className={styles.vpnRestore}>Already purchased?</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay */}
      <div className={styles.gradientOverlay} />
    </div>
  );
}