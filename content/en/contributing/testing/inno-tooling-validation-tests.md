---
title: Validation planning and evidence tests
description: Verify change selection, real builds, prerequisite handling and trustworthy completion.
uid: project.inno-tooling-validation-tests
kind: project
owners:
  - Inno.Tooling.Validation.Tests
---
# Validation planning and evidence tests

`Inno.Tooling.Validation.Tests` tests the machinery behind [validating an engine change](../validate-change.md). It drives the public `ValidationCommand.ExecuteAsync` through real temporary Git repositories, the selected SDK, child processes and result files. It does not replace the engine tests that a plan selects.

## Change selection and input identity

Planning cases cover additions, deletion, both sides of a move, imports, dynamic discovery inputs, unknown owners, empty required tests and the actual merge base after the base branch advances. They preserve native requirements on conditional reference edges and reject native preparation in a domain suite's transitive closure.

Git cases change file contents without changing length or timestamps, leave the index cache unrefreshed, or stage a change while restoring the working file to HEAD. Clean filters, CRLF normalization and Unicode paths remain part of the input identity. Submodule cases cover uninitialized state, actual source changes hidden from index shortcuts, external links, referenced compilation inputs and ignored source that must not be silently omitted.

Documentation cases distinguish prose, executable examples and public support libraries under `tests/`. Rule, skill and record changes retain separate obligations. Records do not select native recipes; API fragments resolve through inclusion relationships rather than their names. Missing required fragments fail planning. Unknown executable Agent inputs still expand conservatively.

## Real compilation and dependency reuse

`ValidationSolutionTests` reproduces an SDK solution filter reporting success while an IDE configuration disables an owner. The selected solution must build every owner without remapping SourceDebug to Debug, and a policy failure must stop its dependent build.

`ValidationRuntimeClosureTests` builds an executable, a library exporting a runtime closure, and two levels of private compilation dependencies. Cold and reused-dependency runs must deploy and load the deepest assembly. A warm run must not invoke Build on an unselected dependency merely to discover its runtime files.

Execution tests corrupt a test after planning, compile the failing assertion, and then restore the original source bytes and timestamps. The repaired run must recompile. A later leaf-only edit preserves unchanged dependency output bytes and timestamps; changing dependency contents invalidates reuse even when its timestamp is restored. Timestamps observe unnecessary work; they are not the authority for reuse.

## Environment and completion integrity

External reference packs, imports and linked source come from the SDK's actual selection. Same-length changes invalidate old plans and evidence. A check that changes both source and environment must retain separate `input-stability` and `environment-stability` failures.

`ValidationCompletionTests` blocks the final read of an external import after checks have executed. An intermediate report with green checks is still uncertifiable. After the obstruction is removed, execution and evidence reconciliation must both succeed. CI also rejects missing, incomplete or incorrectly typed completion fields.

## Test ownership and host requirements

Host-contract fixtures compile real Input consumers and inspect their TRX: class-level OS declarations, method overrides and historical guards cannot convert an applicable skip into a pass. Their dynamic SDK/project/protocol inputs are explicit; an ordinary Input behavior change should not independently require every validator protocol fixture.

Input/UI ownership cases exercise shared and isolated test processes. One failed owner does not erase another completed owner's result, but a failed process prevents certification of the entire required run. Every isolated discovery needs one completion record. A missing result cannot be hidden behind another successful method in the same assembly. After a justified fix, unchanged successful owners may reuse evidence only while all required inputs and outputs still match.

## CI and deeper obligations

The suite checks output races, cancellation, refusal to take over unknown directories, cold inputs, ten warm iterations and Release product prerequisites. CI contract discovery finds `tests/ci/*.Tests.ps1`; empty discovery fails instead of silently passing.

PowerShell contracts reject invalid aggregate results, schedules, release sources, archive paths and altered artifact bytes. Export/certification simulations ensure a canceled or failed run can transport only newly completed immutable archives. An old candidate cannot impersonate a new export. These protocol tests do not certify a real Windows/macOS native producer, device journey or release.

Source-policy inputs include test C#, documentation C# templates and root MSBuild properties. Execution scripts remain direct evidence inputs, not invented source compilation inputs. Reuse fixtures first finish actual restore so newly discovered NuGet imports are not mistaken for an unchanged environment.

## Run and maintain

The suite requires Git, .NET 10 and local process communication. Missing prerequisites fail explicitly. Use the validation plan for affected behavior; a focused diagnostic is:

```powershell
dotnet test tests/tooling/Inno.Tooling.Validation.Tests/Inno.Tooling.Validation.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Fixtures drain child processes before removing their owned temporary sources, outputs and Git metadata. Follow [suite maintenance](../validate-change.md#extend-a-suite-safely); no private reflection, IVT or production backdoor is needed.

[Browse the pinned assertions and project metadata](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/tooling/Inno.Tooling.Validation.Tests). A scenario's presence is not evidence that it passed for your current engine revision.
