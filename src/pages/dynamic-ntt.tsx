import React, { useState } from 'react';
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
  const [iframeLoaded, setIframeLoaded] = useState(false);

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
          <div className={styles.loadingText}>Loading Brave Demo...</div>
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

      {/* Overlay content */}
      <div className={styles.overlayContent}>
        <div id="root">
          <div className={styles.mainContainer}>
            <div id="main" className={styles.mainContent} data-target="background">
              <header className={styles.header}>   
                {/* Stats section */}
                <div className={styles.statsSection}>
                  <div className={styles.statsContainer}>
                    <ul className={styles.statsList}>
                      <li className={styles.statItem}>
                        <span className={styles.statValue}>33,135</span>
                        <div className={styles.statLabel}>Trackers &amp; ads blocked</div>
                      </li>
                      <li className={styles.statItem}>
                        <span className={styles.statValue}>34.5</span>
                        <span className={styles.statUnit}>MB</span>
                        <div className={styles.statLabel}>Bandwidth saved</div>
                      </li>
                      <li className={styles.statItem}>
                        <span className={styles.statValue}>27</span>
                        <span className={styles.statUnit}>minutes</span>
                        <div className={styles.statLabel}>Time Saved</div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Widgets section */}
                <section className={styles.gridItemWidgetStack}>
                  {/* Rewards widget */}
                  <div>
                    <div className={styles.styledWidget}>
                      <div className={styles.styledTitleTab}>
                        <div className={styles.cardHeaderIcon}>
                          <svg viewBox="0 0 32 32" className={styles.icon}>
                            <path fillRule="evenodd" fill="#fff" d="M9.61 23.25h12.78L16 12 9.61 23.25z"></path>
                            <path d="M3 26.8l7.67-4.52L16 13V4a.45.45 0 00-.38.28l-6.27 11-6.26 11a.48.48 0 000 .48" fill="#ff4724" fillRule="evenodd"></path>
                            <path d="M16 4v9l5.29 9.31L29 26.8a.48.48 0 00-.05-.48l-6.26-11-6.27-11A.45.45 0 0016 4" fill="#9e1f63" fillRule="evenodd"></path>
                            <path d="M29 26.8l-7.67-4.52H10.71L3 26.8a.47.47 0 00.43.2h25.1a.47.47 0 00.43-.2" fill="#662d91" fillRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>Rewards</div>
                      </div>
                    </div>
                  </div>

                  {/* VPN widget */}
                  <div>
                    <div>
                      <div className={styles.styledWidget}>
                        <div className={styles.styledTitleTab}>
                          <div className={styles.vpnIcon}></div>
                          Brave VPN
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Talk widget */}
                  <div>
                    <div className={styles.styledWidgetContainer}>
                      <div className={styles.styledWidget}>
                        <div className={styles.styledCard}>
                          <div className={styles.styledTitle}>
                            <div className={styles.talkIcon}></div>
                            Talk
                          </div>
                          <div className={styles.content}>
                            <div className={styles.welcomeText}>
                              Start a private video call with your friends and colleagues.
                            </div>
                            <div className={styles.actionsWrapper}>
                              <div className={styles.startCallButtonContainer}>
                                <button className={styles.startCallButton}>Start call</button>
                              </div>
                              <div className={styles.privacy}>
                                <a className={styles.privacyLink}>
                                  About your data
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.styledWidgetMenuContainer}>
                        <div className={styles.styledEllipsis}>
                          <button className={styles.iconButton}>
                            <svg viewBox="0 0 24 24" className={styles.moreIcon}>
                              <circle cx="12" cy="0" r="3" fill="currentColor"/>
                              <circle cx="12" cy="12" r="3" fill="currentColor"/>
                              <circle cx="12" cy="24" r="3" fill="currentColor"/>
                            </svg>
                          </button>
                        </div>
                      </div> 
                    </div>
                  </div>
                </section>

                {/* Top sites section */}
                <div className={styles.statsSection}>
                  <div className={styles.topSitesContainer}>
                    <div className={styles.topSitesList}>
                      <div>
                        <a href="/dynamic-ntt-demos/demo1" className={styles.pageLink}>
                          <div 
                            id="page1" 
                            className={styles.topSiteItem} 
                            data-target="page1"
                          >
                            <canvas className={styles.pageImageCanvas} width="140" height="140"></canvas>
                            <img src="/img/_icons/social-brave-release-favicon-fullheight-color.png" alt="" draggable={false} />
                          </div>
                          Demo 1
                        </a>
                      </div>
                      <div>
                        <a href="/dynamic-ntt-demos/demo2" className={styles.pageLink}>
                          <div  id="page2"  className={styles.topSiteItem} data-target="page2">
                            <canvas className={styles.pageImageCanvas} width="140" height="140"></canvas>
                            <img src="/img/_icons/social-bat-favicon-fullheight-color.png" alt="" draggable={false} />
                          </div>
                          Demo 2
                        </a>
                      </div>
                      <div>
                        <a href="/ad-placements/brave-browser/dynamic-ntt" className={styles.pageLink}>
                          <div id="page4" className={styles.topSiteItem} data-target="page4">
                            <canvas className={styles.pageImageCanvas} width="140" height="140"></canvas>
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
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* Footer */}
              <footer className={styles.footer} style={{position: 'relative'}}>
                <div className={styles.searchContainer}>
                  <div className={styles.searchBoxContainer}>
                    <div className={styles.searchBoxContent}>
                      <img src="/img/brave128.png" alt="Brave" className={styles.braveLogo} />
                      <span className={styles.searchText}>Search the web privately</span>
                      <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="#62757E" fillRule="evenodd" d="M10.498 2a8.498 8.498 0 1 0 5.843 14.67l4.292 4.291a.8.8 0 1 0 1.131-1.13l-4.367-4.368A8.498 8.498 0 0 0 10.499 2M3.6 10.498a6.898 6.898 0 1 1 13.797 0 6.898 6.898 0 0 1-13.797 0" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <nav className={styles.settingsContainer}>
                  <div className={styles.settingsIcon} title="Dashboard Settings">
                    <img src="/img/_browser-assets/customize.png" width="80" />
                  </div>
                </nav>
              </footer>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className={styles.gradientOverlay} />
    </div>
  );
} 