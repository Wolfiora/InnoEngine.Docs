# Protected evidence import and partial validation resumption

Documentation projection and source certification now have separate jobs. Projection performs the actual website build, rendered checks and browser journeys once. Certification consumes that exact artifact ID, verifies its authenticated archive digest and boundary, attaches a protected source certificate through the canonical library, and verifies full coverage before freezing a publishable artifact. It does not rerun the website build or browser tests.

## Credential and retry ownership

The protected source-evidence receiver uses the restricted installation only to read the engine's successful source certificate. Candidate workflows have Contents read and Actions read in their own repository and no App credential. A separate protected completion workflow reads candidate bindings as bounded JSON, then resumes only a failed evidence-selection job whose head, base, engine binding, prior projection and current attempt remain applicable. It records the newly available import as the retry reason. Unrelated failures, changed bases, forks, earlier artifacts, expired evidence and already-running retries cannot qualify.

The engine's relay and Docs receiver independently inspect producer metadata. Default-branch workflows must be merged before automatic workflow-run delivery operates. Approved migration branches retain explicit manual bootstrap; this does not bypass missing credentials or source checks.

## Local evidence

- The full existing Node suite plus initial relay/resumption coverage passed: 130 cases, `artifacts/relay-full-node-tests.log`.
- Two additional internal-PR source selection cases and three workflow privilege/reuse boundary cases passed in `relay-source-candidate-tests.log` and `workflow-boundary-tests.log`. All 40 source selection cases passed in that final targeted run.
- The engine passed fourteen independent relay protocol cases; no real cross-repository dispatch is inferred.
- All four Docs workflow YAML files parsed with duplicate-key rejection. Candidate workflows contain no App acquisition or secret reference; the privileged receiver/resumer do not install or execute candidate code.
- Registered Docs retirement reclaimed 44,804,099 logical bytes while protecting the current generation. Registered exited-process retirement in the engine reclaimed 49,839,800 logical bytes and reported one unverifiable metadata owner, which was retained. A broader pressure preview selected other cache owners and was rejected before deletion. The immutable Windows first-failure ZIP and other-session source edit were preserved.

Publication guidance describes the exact setup and retry flow. Live App import, protected default-branch activation, complete platform source/example certification, actual Pages deployment and artifact-only promotion remain unverified. The current engine run remains bound to its original Docs candidate; later documentation changes do not rewrite its evidence.

## Executable inputs and final local contracts

The source certificate now carries the canonical executable code identities, ordered reference projects, explicit host/script mode and successful compiler-report contexts. Complete projection checks compare those inputs with every current example. Source-equivalent prose corrections can retain that proof; changed code, surface, reference owners or engine inputs cannot. Artifact creation and verification require the resulting complete example coverage, in addition to source API evidence. Publication distinguishes an exact paired candidate from revised documentation for the same certified engine input tree.

All 158 Node cases passed in `artifacts/final-evidence-node-tests.log`, with no skipped cases. Coverage includes the existing content/projection/artifact suites, new example proof cases, same-tree prose carry-forward, different-tree and changed-code rejection, partial resumption and protected workflow boundaries. Resumption also rejects runs outside GitHub's 30-day rerun window, missing timestamps and unavailable, expired or mismatched preview artifacts. It retains the successful projection attempt rather than assuming the latest source-job attempt produced a new preview.

The current authoring catalog contains 2,531 pages; its refresh parsed two changed guides and reused 2,529 pages. This is an unverified local authoring snapshot, not a source certificate. No Native preparation or engine product compilation was started by the query adapter.
