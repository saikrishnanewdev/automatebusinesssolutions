"use client";

import { useEffect } from 'react';

/**
 * A plain load (no #hash in the URL) must always start at the top of
 * the page. Without this, browsers can reopen the tab at the scroll
 * position where it was left — e.g. down at the contact form — which
 * looks like the site "opens on the form". Links with a hash
 * (#contact, #services, ...) are left alone so they still land
 * where they point.
 */
export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if (window.location.hash) return;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);
  return null;
}
