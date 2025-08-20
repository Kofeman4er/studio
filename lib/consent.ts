// lib/consent.ts
export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

export const CONSENT_COOKIE = "cookie-consent";

export function parseConsentCookie(raw: string | undefined): ConsentState | null {
  if (!raw) return null;
  try {
    const obj = JSON.parse(decodeURIComponent(raw)) as ConsentState;
    if (
      typeof obj === "object" &&
      typeof obj.analytics === "boolean" &&
      typeof obj.marketing === "boolean" &&
      typeof obj.timestamp === "number"
    ) {
      return obj;
    }
    return null;
  } catch {
    return null;
  }
}

// For creating a cookie string (client only, used in the banner)
export function makeConsentCookie(value: ConsentState): string {
  // 6 months expiration
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 180).toUTCString();
  return `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; Path=/; Expires=${expires}; SameSite=Lax`;
}
