# cubee

Cubee waitlist landing page.

This is a static HTML/CSS site for the Cubee moodwear launch waitlist. It is intentionally not an ecommerce storefront: there is no cart, pricing, checkout, or product sale flow.

## Preview

Open `index.html` directly, or run a local static server:

```sh
python3 -m http.server 4173
```

## Waitlist Sheet

Signups are intended to save to this Google Sheet:

https://docs.google.com/spreadsheets/d/1VFXZ1YjyCiMUgk1lwJLL79Nsv3O1L2tpn-CXbXRbYTE/edit

To finish the live connection:

1. Open the Google Sheet.
2. Go to Extensions > Apps Script.
3. Paste the contents of `google-apps-script/Code.gs`.
4. Click Deploy > New deployment.
5. Choose Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Copy the Web app URL.
9. Paste it into `WAITLIST_ENDPOINT` in `index.html`.
10. Commit, push, and redeploy.
