# Prepared documentation and the engine merge gate

The engine now implements a separate **Documentation pairing** candidate check. Its build/source aggregate can complete and supply evidence before Docs certification, while the pairing gate independently prevents engine merge until the exact verified Docs candidate is prepared on the Docs default branch. A protected Docs completion callback requests reconciliation with a fixed workflow dispatch; it does not certify an engine PR itself or execute candidate code with privileged credentials.

The Docs producer confirms that its tested merge tree equals the immutable head used by pairing and artifact metadata. A changed base must be synchronized and verified; a temporary merge SHA cannot silently stand in for the selected head. Publication records the confirmed head identity.

Local Node regression passed 168 tests, including valid and rejected callbacks, credential separation, fixed dispatch destination and candidate workflow boundaries. Four real Git fixtures passed exact-tree confirmation and changed-tree/nonimmutable rejection. The fixture was removed after boundary-checked cleanup. Engine protocol tests separately cover exact evidence and head/base/metadata changes; their acceptance belongs to the engine record.

The refreshed guides explain prepared-merge ordering and the per-operation App permissions. The new callback requires Engine Actions write, while the independent engine reconciler requests only Docs Actions/Contents read. Candidate execution still has no App credential. GitHub Actions' own engine token writes the exact candidate check.

The authoring catalog binds engine `075bc4a695ff76fa24e4513ad81fcd66a131c57a`, tree `a12d7a800e58f87105a3ae26907b181bec4a5838`, and snapshot `4d339fdb8ddcc40361dee385bc833d764460a2de0a006cf542ac3d1deeee9e08`. Refresh parsed only the two changed guides and reused 2,529 pages, taking 34,263.3468 ms including publication. Astro checking returned zero errors and warnings; the 2,531-page production build took 1m44s, including 52.76s of Pagefind work. The rendered available-projection check passed; source API state remains Unverified. These are preparation/build observations, not prepared-query timings or complete source certification.

Registered retirement reclaimed 22,111,906 logical bytes from superseded query generations and protected the current generation, with no skipped candidates. Branding files match their preserved Git-source identities; Windows worktree CRLF normalization does not replace the original licensed payload bytes in Docs.

This is local implementation evidence. Required branch status configuration, protected default-branch activation, App provisioning, real callback execution and deployment remain external/hosted completion gates. Neither PR has been merged automatically, and no successful Pages deployment or engine release is claimed.
