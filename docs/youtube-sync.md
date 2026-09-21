# YouTube channel gallery

This change follows the owner-supplied channel https://www.youtube.com/@toetagawards.
It resolves the handle through channels.list instead of assuming the old hard-coded channel ID is correct.

The music section displays the latest 12 public uploads, one featured and up to 11 cards. Videos can play inline, and a prominent link opens the channel's full Videos page. Uploads can include podcast clips and other channel content; this is not an automatic music-only classifier. Private/deleted entries are skipped. Embedding restrictions remain controlled by YouTube and the uploader; every video also has an external watch link.

Existing VITE_YOUTUBE_API_KEY configuration is reused. Enable YouTube Data API v3 and ensure the key permits the deployed site's HTTPS referrer. This browser key is visible in the built app, so restrict it to YouTube Data API v3 and intended HTTP referrers; do not use an unrestricted key. No account login, video upload, or OAuth channel-management access is required for the public feed.

Refresh occurs on visits, every 15 minutes while the page is visible, and when returning to the tab if the cache is stale. A fresh 15-minute cache avoids requests on every reload. Saved API results expire after 24 hours. Failed refreshes preserve the current selection with an honest saved-video label and an always-available channel link. No raw API errors or configuration instructions appear to visitors.

## Verification

Run with Node 24: node --test tests/youtube-feed.test.mjs.
Then install the existing locked dependencies and run npm run build in a complete checkout.
This environment blocked dependency downloads, so full React compilation and rendered browser tests remain pending.
Automated API tests use fixtures and do not prove live API access or the channel's current video list.

Before publishing, verify the runtime handle response identifies Toe Tag Awards, the key works on the intended domain, the latest known upload appears, and at least one card plays on desktop and mobile. Test failed requests and unavailable local storage. A new public upload should appear on the next successful refresh, subject to YouTube's own propagation delay.

The website's Firebase App Hosting integration may deploy main automatically. Keep this change in a draft branch until deployment is approved. Booking-form work is separate and not included in this change.

Official references:
- https://developers.google.com/youtube/v3/docs/channels/list
- https://developers.google.com/youtube/v3/docs/playlistItems/list
