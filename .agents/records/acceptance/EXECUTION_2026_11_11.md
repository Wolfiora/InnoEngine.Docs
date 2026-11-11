# Execution, coroutines and jobs migration

Three task guides explain owned asynchronous work, frame-driven coroutines and bounded frame jobs. A separate architecture page connects revocable access, owner-thread pumping and dependency-safe retirement. Three authoritative project entries and nineteen type pages preserve all 98 declarations from the corresponding baseline pages, with no missing or changed signatures.

Source facts were captured from engine `0a857166e14c83e44feb557768cb9d01d4383135`, tree `26ffb626c616ff9dc42f793a0c366c5bfc059b37`. The actual six-node SDK graph took 0.387 seconds to evaluate and 0.686 seconds to capture; the capture is retained in `artifacts/execution-api.log`. It extracts CLR declarations and XML, not a runtime behavior certificate or script-export manifest.

## Semantic review

The migration explains distinctions that were absent or misleading in older prose/XML:

- Queue/admission limits apply to both scheduler strategies; worker count is specific to the worker pool and capped at 64.
- Pending retirement preserves the current owner and remaining dependencies, including failures wrapped in an exception tree.
- `YieldInstruction` has an internal abstract factory and is not an external custom-wait extension point.
- Direct `Task` and `CoroutineHandle` yields are supported; task completion does not observe its result, and an unsupported yielded object terminates the routine.
- Coroutine owner stops use reference identity and defer currently executing-stack cleanup until the callback returns.
- `JobHandle.isValid` only checks identifier shape. It does not prove ownership, successful completion or current liveness.
- A pending main-thread callback advances before the next bounded queue snapshot is selected.
- Runtime retirement deadlines do not interrupt arbitrary blocking code and do not impose short timeouts on legitimate compiler processes.

Only XML comments changed in engine production source. Product signatures and implementation remain unchanged. The original source identities, exact declaration comparison and reviewed destinations are in [migration provenance](../../../reference/provenance/execution-migration.json).

## Local evidence

| Check | Result |
| --- | --- |
| Managed Build CLI compilation | Passed, zero warnings/errors, 47.29 seconds; no Native product preparation. |
| Three host example groups | Passed; one six-node SDK context, 0.340-second evaluation and 0.626-second capture. Examples compiled but were not executed. |
| Canonical source projection | Passed, 5,428 pages and 13,018 matching bound declarations. |
| Production site and rendered projection | Passed, 5,428 rendered pages; 104-second site build including 66.26-second disposable Pagefind indexing. |
| Task query | `stop frame-driven coroutines` returned the task guide first, marked Excerpt with a continuation and Unverified source status. |
| Local visual review | Coroutine guide in light mode and LifetimeScope reference in dark mode, both one H1 and no document overflow at the observed 883-pixel viewport. |

The browser override limitation remains: these observations do not certify the required desktop/tablet/mobile matrix. The preview theme was restored to light. No website deployment, source API certificate, Windows/macOS matrix or paired-release certification is inferred.

The current inventory has 66 project entries and 186 missing entries. Overall migration remains incomplete. Tooling revision is independently pinned to `c48b7d11fd48d8de21aaf94e416c73c37d70df26`; changed source binding does not rewrite unchanged earlier API captures.

## Preserved failures and ownership

The first reference-generation attempt correctly rejected a missing surface association in the project inventory. Adding the association initially serialized a one-element PowerShell array as a scalar; the index rejected that invalid shape. The corrected inventory keeps arrays and derives each association from exact extracted project/path/model identities. The original index failure log is retained as `artifacts/execution-bound-index.log`; no incomplete generation replaced the previous reader snapshot.

Raw example evidence, first failure, site output and projection reports remain under owned `artifacts/` paths. The separate [writer comparison](DOCUMENTATION_WRITER_2026_11_11.json) retains all five before/after samples and distinguishes cumulative worker measurements from wall time. No temporary source checkout or Native output was created for these task queries.
