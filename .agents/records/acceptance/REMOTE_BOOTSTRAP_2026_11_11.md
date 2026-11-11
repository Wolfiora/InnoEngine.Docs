# First remote documentation bootstrap

## Actual result

The engine implementation was pushed to `ai-pipeline` at `80fbbb550f0de634b04605b31abc4d96b3d526f6` and opened as [draft PR 83](https://github.com/Wolfiora/InnoEngine/pull/83). Docs was pushed at `8971f84b882b942e1201d0e317f6eabd0fc23b60` and opened as [draft PR 1](https://github.com/Wolfiora/InnoEngine.Docs/pull/1). These references do not certify merge readiness or publication.

The first [Docs push run](https://github.com/Wolfiora/InnoEngine.Docs/actions/runs/42934117286) passed dependency installation, all 24 Node tests and managed tooling compilation. It failed at catalog preparation with `Project manifest does not match the engine binding.` The aggregate correctly failed and the site steps did not run. This was not a third-party Native compilation failure.

The generated project inventory used CRLF locally. Its binding hashed those local bytes, but Git's declared LF normalization stored different bytes. All ten API captures already matched their Git blobs; the project inventory was the only bound reference with this mismatch. The correction writes the inventory in canonical UTF-8/LF, then computes its hash. Projection checks now reject noncanonical project/API JSON even if the local hash matches; the regression fixture passed with the other eleven projection tests.

The corrected local index parsed zero pages and reused all 5,195; only the bound inventory identity changed. Product documentation content, declarations and examples did not require regeneration or recompilation. First remote decoded logs are retained in `artifacts/remote-docs-first-failure-42934117286.log` and the GitHub run.

Push and PR events originally duplicated Docs work for the migration branch. Push validation now applies only to `main`; PR and merge-group validation remain active without top-level path filters. This removes the duplicate strategy rather than relaxing the required aggregate.

## Owned cache retirement

The existing engine cache owner/lease protocol inventoried only this Docs checkout's registered `artifacts/documentation-query` boundary. It protected 62,696,450 bytes belonging to the current generation and its dependencies, then retired 21,459 unreferenced entries totaling 608,041,809 bytes. There were no skipped entries, failures or time-limit exhaustion. The current Text task query passed afterward and C-drive free space was approximately 38.07 GiB.

The first maintenance invocation passed a PowerShell null as an empty target filter and failed before deletion. The corrected invocation passed a typed null; planning and execution retained the complete ownership, dependency and active-reader checks. Raw plan/result JSON remains under `artifacts/`. No other checkout, Native cache or first-failure log was deleted. The earlier policy-rejected Identity example-output deletion remains unexecuted.

## Outstanding evidence

The engine's real Windows/macOS PR jobs started, but this record does not certify their results. The corrected remote Docs bootstrap must still finish. Full content coverage, source API evidence, cross-repository App setup, paired PR gates, Pages deployment and draft-release acceptance remain open. Complete publication checks intentionally reject the present 214 missing project entries and Unverified source status.
