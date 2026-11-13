---
title: Validation inputs, builds and evidence
description: Understand how a selected change becomes an owned build and a
  reconciled result.
uid: architecture.validation-evidence
kind: explanation
owners:
  - Inno.Tooling.Validation
contracts:
  - project.inno-tooling-validation
---
# Validation inputs, builds and evidence

A validation result describes a particular input, tool, environment and output set. Planning chooses obligations; execution produces evidence; reconciliation checks whether that evidence is complete and still applicable. None of these phases can be replaced by a marker file or a previous green job.

Use [validate a change](../contributing/validate-change.md) for commands. This page explains the mechanism behind their decisions.

## Derive owners from actual inputs

One SDK graph captures source files, resources, imports, references and explicit additional validation inputs. Reference-edge global properties matter: the same project can have several configurations or conditional input sets. Equivalent captured facts can share their input body while retaining original property collections.

Git selection uses the correct merge base and includes staged, unstaged and untracked changes. Moves affect both old and new paths. Tracked-file content is compared through Git's actual clean transformations, including same-length changes with restored timestamps; planning does not write Git objects or refresh the index.

Submodule identity and relevant contents enter their consumers' inputs. A symbolic link contributes its link text, never a traversal of its target. Ignored SDK Compile input without a recorded identity is an error. Unknown relationships expand scope visibly rather than silently omitting an owner.

Domain-test transitive dependencies must not enter Native preparation. Test runners are identified by SDK IsTestProject; public support libraries still have API/XML/example contracts. Shell commands or prose in a suite guide do not independently justify building its Native product.

## Separate evidence responsibilities

Source policy, behavior, public contracts, integrations, Native deployment, products/devices and performance each establish different facts. Compilation is their shared prerequisite, not a replacement for any behavior check.

Source-policy inputs include the C#, templates and MSBuild files actually inspected, including tests. A shared test-execution script is a direct input to affected test checks, not automatically a Native recipe input. Rules, skills and records have separate policy responsibilities; records do not become product inputs merely by living under `.agents`.

Documentation structure/link checks precede dependent API/example checks. An API fragment belongs to its declared owner and selected surface. Script examples use the matching projected facade and configuration; a Debug request cannot borrow an unexecuted Release output.

External documentation contributes a protected snapshot, its canonical owners, reference payloads and parsed example contexts. The planner consumes these facts directly. It does not parse Markdown a second time or infer a script environment from namespace text. Source-reference comparisons select owners within a captured configuration/target batch; example checks retain their declared host or script prerequisites.

An explicit earlier Docs snapshot supplies a content baseline. Page moves, additions, deletions, include changes and necessary contract changes identify affected guides. Per-owner source-reference identities remain separate from the whole site's prose identity, so an unrelated prose edit does not change a selected API comparison's definition. Missing captures and snapshots remain blocked obligations. An available snapshot is not a publication certificate or proof of source compatibility.

## Build one union per context

The selected projects/configurations become a temporary SDK solution independent of IDE Build.0 exclusions. Stable workspace output directories are separate from per-run logs. Evaluated and executed configuration inheritance agree, including dependencies outside solution roots and explicit reference-edge mappings.

A context shares one Task-bootstrap owner across its roots. Clean and Build are separate processes with separate ownership identities. Clean is serial and explicitly disables product Native preparation; the following bounded Build retains its real product requirements, deployment checks and consumer protection. Managed parallelism is bounded by available processors and four.

After preparation, compiled API inspection, selected documentation API comparison and example compilation share one resolved SDK reference graph per eligible context. Failed prerequisites are excluded from this union. Successful build roots remain included even when only their dependency exposes an API: consumer reference edges can select additional property variants. Consumers read the same effective properties and references; they do not each launch reference resolution. The graph remains valid only inside the execution boundary whose source, environment and outputs are checked again at completion.

Only complete content proof permits preserving dependency outputs. If changes affect exclusively owned Compile inputs of selected roots while all other source, imports, generators, resources, tools, restored packages and outputs still match, clean those roots and retain verified ordinary dependencies. Selected roots that reference each other still rebuild as roots. Missing proof, changed variants or damaged output requires the wider clean.

Validated ordinary dependencies may provide their known TargetPath without repeating Build. Selected roots retain real reference builds, including binding selection established during preparation. Custom targets and private Task bootstrapping preserve their own behavior. This optimization does not remove Native input validation, leases or deployment checks.

## Fail by prerequisite, not by an unrelated result

The plan records explicit prerequisites before consumers. Policy or preparation failure blocks dependent work; independent checks can continue unless cancellation or global input/environment integrity makes the whole execution invalid.

Within a test union, completely executed owners retain their actual result. Failed owners and not-run dependencies remain failed or blocked. A nonzero executor exit remains a failure even when some owners passed. Empty discovery, missing cases, count mismatches and undeclared skips do not certify success.

SupportedOSPlatform metadata identifies genuine OS applicability without loading test objects or maintaining a name whitelist. NotApplicable is explicit in owner evidence. Missing devices/tools cannot be converted into an OS exclusion. Standard declared OS names are validated; unknown environment names fail.

## Publish completion only after closing checks

Execution environment identity includes the selected SDK/runtime/reference packs, PowerShell, external imports and applicable package contents. Independent content roots can be read with bounded parallelism, but execution closes by rereading complete source/environment identities and validating outputs, dependencies and owners.

Until those checks finish, results retain `completed=false`. `completed=true` means closing work finished, not that every check passed. Missing completion, interruption or read failure invalidates reuse and aggregation.

Reusable compilation receipts also wait for closing verification. A test assertion failure may leave a proven compilation receipt; changed source/environment/output cannot. Restoring a file later does not legitimize a receipt prematurely published during a failed execution.

Evidence compares output file contents and the complete expected membership. Added, missing or replaced outputs invalidate it. Same length and timestamp are insufficient. Deterministic reuse requires matching source, tests, tools, configuration, dependencies and environment; performance/device obligations retain their own freshness requirements.

## Retain unchanged documentation source evidence

API export, API import and example compilation have separate responsibilities. Engine master exports actual C# and projected script facts. Docs imports the complete package and composes type/member pages. Import and prepared-snapshot reading do not build the engine.

Export preparation compiles real managed dependencies and necessary generated declarations. The explicit `InnoBuildPurpose=ApiReferences` context uses an isolated SDK `ArtifactsPath`; it does not prepare runtime Shader resources or Native product deployment and cannot publish a runnable product. Product-specific NuGet restore remains required. Ordinary Editor, product and device builds retain their complete preparation and acceptance.

Docs CI selects reusable example receipts only from successful default-branch Documentation runs. It verifies the producing repository, workflow, event, attempt, required aggregate and archive digest before reading reports. Forks, PR outputs, failed runs and expired or tampered artifacts cannot supply trusted cross-run evidence.

Receipts bind exact executable blocks, owner selection, host/script mode, API manifests, tooling, compiler and real reference identities. A prose edit or page move can retain unchanged groups. Changed or uncovered groups require compilation against the explicitly selected engine revision; unavailable real inputs block them. Script groups also require matching actual logical projections for their configuration and target.

The example planner consumes the canonical snapshot and actual project inventory. It prepares only the required owner union, adding the existing Build entry when logical script projections are needed. Reused groups remain identified as reused; they are not reported as newly compiled or as engine runtime tests.

Website validation reconciles all required examples with retained and new receipts. Missing evidence never becomes a pass. Publication does not wait for unrelated full-engine CI, require paired PR metadata or require the selected API revision to equal the newest master commit. Engine functional and periodic acceptance retain their own obligations.

## Transport artifacts without transporting owners

Native/binding archives contain complete immutable generations and identities for recipe, tools, SDK, target and configuration. Import validates identity, file membership and hashes before establishing local ownership/read protection. Active leases, PID state, absolute owner claims and writable obj directories do not cross runners.

Retain can export a successfully prepared immutable generation even if unrelated acceptance fails. Export success does not turn missing, canceled or failed evidence green. Only generations actually adopted during the run are treated as its completed products; a restored old transport cache is not new execution evidence.

PR merge-ref caches and default-branch caches have different trust/access scopes. Consumption always revalidates transported artifacts. A matching artifact is not inherited test success. Keep first failures, explicit retry reasons and exact input identities with the result.

See [product journey evidence](../contributing/product-journeys.md) for process completion and retained-memory sampling, and [build artifacts](build-artifacts.md) for owner/lease publication.
