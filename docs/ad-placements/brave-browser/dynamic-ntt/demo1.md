---
sidebar_position: 1
---

# Dynamic NTT Demo

This demo showcases the Dynamic NTT interface with interactive widgets and full-screen layout.

import DynamicNTT from '@site/src/pages/dynamic-ntt';

<style>{`
  /* Target the demo page layout specifically */
  .theme-doc-markdown {
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 1000 !important;
  }

  header {  display: none;}

`}</style>

<DynamicNTT backgroundPath="https://02890f7a-5c00-4154-a06e-10a120132f3a.ads-dev.s.brave.io/index.html" />

