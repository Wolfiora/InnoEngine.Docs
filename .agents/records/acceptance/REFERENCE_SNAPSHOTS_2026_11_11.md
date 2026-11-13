# Reference snapshots and selected source comparison

The Docs candidate binds engine/tooling revision `20ca428b9354c6ee587679cf323ee30c4fc1410f`, source tree `ab17e54e8d459fcc97bc071d1ba3393a4c80f61d`. The Architecture and Documentation API captures were refreshed from their actual evaluated source. Unchanged Build CLI and distribution facts retain their earlier capture provenance.

The prepared generation is `54374a3e8077858e6db9bf2c36760595df6d81dac301bd7f6490e59b56caf817`: 2,529 pages, 252 project entries and 12,272 selected API declarations. Source and rendered projection checks passed. The two updated tooling owners passed a real source comparison using protected reference payloads from this exact snapshot; the raw report is [prepared-tooling-comparison.json](prepared-tooling-comparison.json).

## Observed work

The managed adapter bootstrap passed with zero warnings or errors. Following the API page update, explicit preparation parsed 18 changed pages and reused 2,511 pages in 5.951 seconds. The site build completed in 58.59 seconds, including 30.15 seconds for disposable Pagefind search generation. These are individual work observations, not five-sample performance acceptance or a cold/warm comparison.

Existing registered cache maintenance retired 44,575,802 logical bytes and protected 74,528,234 bytes, including the current reference payloads. Physical free space was approximately 35.67 GiB afterward. Logical retirement bytes must not be described as guaranteed physical disk recovery.

The engine's bounded regressions cover unchanged reference sharing, concurrent immutable reads, original checkout removal, corruption, binding mismatches, explicit owner selection and active-reader retirement. No product build or Native preparation ran for this documentation update. Existing JavaScript/browser behavior was unchanged; prior corresponding evidence was not rerun merely because generated API text changed.

## Outstanding gates

Overall source API status remains `Unverified`. Three platform product captures, final example/source certification, migration of legacy engine verification callers, paired repository automation, Windows/macOS CI, actual Pages deployment and release rehearsal remain outstanding. The available projection result does not satisfy the complete publication gate or close engine issue #75.
