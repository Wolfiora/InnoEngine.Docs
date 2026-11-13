# Generic API display names and live access

The canonical generator now derives generic type labels from the captured C# declaration instead of dropping XML arity markers or rendering them as numeric suffixes. The site and prepared AI catalog share those labels. Types with identical readable labels use their qualified names. Existing addresses remain stable, including `editoraction-59a990be6ea3`, whose visible title is now `EditorAction<TTarget, TArgument>`.

The tooling binding is `95c3884efaf28e6a4eb485a7c7e0391f922c250f`; captured API source inputs are unchanged. Synchronization updated 57 registered type titles and 73 generated files. All 17,971 registered symbol paths are unchanged, and all six manual fragments match their previous Git bytes. No product API, source declaration, authored contract or executable example was changed.

Local functional acceptance passed:

- 48 tool synchronization regressions, covering nested types, delegates, keyword identifiers, disambiguation, parameter renames, query output and manual preservation.
- Canonical coverage/link validation and rendered HTML validation for all 2,613 pages.
- Production Astro/Starlight build and Pagefind projection.
- Nine changed-page browser checks across desktop/tablet/mobile, including light/dark reading, exact titles and navigation through the existing deep link.

The ignored `artifacts/api-generic-*` reports retain these results. They do not certify a subsequent hosted run or imply that this correction has already been published. No performance, stress, Native product or full engine matrix was executed locally.

The reported `ERR_CONNECTION_CLOSED` occurred before an HTTP page response. Initial local browser visits reproduced it. Subsequent default-browser, explicit-proxy and direct visits returned HTTP 200, and opening the live site in the user's in-app browser displayed the documentation homepage. No proxy, DNS, firewall or browser-security setting was modified. The exact transient network cause was not established; the earlier successful deployment was not evidence that every client connection would succeed.
