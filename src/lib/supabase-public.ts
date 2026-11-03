// The public (anon) address and key of SmartPath's database: the same pair
// every app bundle carries. Row-level security and the functions themselves
// decide what it may do; the only thing this site calls with it is
// partner_dashboard, which answers only to a partner's secret link.
export const SUPABASE_URL = "https://mxzghknsqxpxzgxtasjw.supabase.co";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14emdoa25zcXhweHpneHRhc2p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzODg4MzAsImV4cCI6MjEwNDk2NDgzMH0.VuIeWApW5B1KMtCvfjL5IdXgBECWPx9CtkAcjjuBG2s";
