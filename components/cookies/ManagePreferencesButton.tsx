"use client";

export default function ManagePreferencesButton() {
  function openPrefs() {
    // Tell CookieBanner to open the preferences modal
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  }
  return (
    <button onClick={openPrefs} className="underline text-sky-700">
      Manage cookie preferences
    </button>
  );
}
