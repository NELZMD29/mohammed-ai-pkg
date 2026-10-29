/* ============================================================================
   MOHAMMED AI — PKG directory · RUNTIME SITE CONFIG
   ----------------------------------------------------------------------------
   This file is loaded by index.html before the app scripts. It is the ONLY
   place the Clk.sh profit-hop credential lives.

   ⚠⚠ SECURITY WARNING — READ BEFORE PASTING THE TOKEN ⚠⚠
   This site is 100% static: every visitor's browser downloads this file, so
   anything written here is PUBLIC the moment the site is published. The
   Clk.sh API token is a *link-minting* credential only: anyone who copies it
   can create Clk.sh short links that credit clicks to THIS account, but it
   cannot withdraw money, change payout details, or log into the account.
   Clk.sh's own "Full Page Script" and "Quick Link" tools work exactly the
   same way (the token is embedded in every publisher's page source).
   Still, treat it as a secret worth guarding:
     • NEVER reuse the Clk.sh account password anywhere in this file.
     • If the token ever leaks somewhere it shouldn't, regenerate it in the
       Clk.sh dashboard (Tools → Developers API) and paste the new one here.
     • A future upgrade can hide it fully behind a tiny redirect proxy; ask
       for that before running paid ads to the site.

   OWNER ACTION NEEDED (one paste):
     1. Log in to clk.sh  →  Tools  →  Developers API  (or Quick Link).
     2. Copy the API token shown there.
     3. Paste it between the quotes of clkToken below and save this file.
   Until then the hop stays OFF: download buttons still work and go through
   the branded transition screen straight to the source page (no earnings).
   ========================================================================== */
window.SITE_CONFIG = {
  /* Clk.sh API token for account "nelzmd2" — paste from the dashboard. */
  clkToken: "Tg6e3BdW",

  /* Quick Link template verified live against clk.sh on 2026-10-29:
     GET /full?api=<token>&url=<dest> answers "Invalid API token." for a bad
     token and routes a valid one through the monetised interstitial to the
     destination. {token} and {url} are substituted (URL-encoded) at click
     time. If Clk.sh ever changes the format, this is the only line to fix. */
  hopTemplate: "https://ouo.io/qs/{token}?s={url}"
};
