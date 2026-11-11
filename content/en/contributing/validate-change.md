---
title: Validate an engine change
description: Select the affected contracts, prepare their actual environment, and reconcile trustworthy results.
uid: contributing.validate-change
kind: how-to
---
# Validate an engine change

Use one validation plan to connect a change to its required checks, build inputs and execution environment. Start with the behavior you changed; the project names in a plan explain where that behavior is verified.

## Before you start

Work from the InnoEngine checkout with its selected .NET SDK and Git available. Confirm your branch, existing changes and baseline. The engine [validation rulebook](https://github.com/Wolfiora/InnoEngine/blob/80fbbb550f0de634b04605b31abc4d96b3d526f6/.agents/rulebook/validation.md) remains the authority for development requirements.

A managed contract test can still require a native backend. A `domain` suite must avoid that preparation dependency; a `contract` label alone does not make this guarantee. The evaluated project inputs and explicit product requirements determine preparation.

## Prepare and inspect a plan

The following PowerShell commands use the existing Build entry. They do not create a separate validation executable.

```powershell
$run = 'artifacts/validation/runs/' + [Guid]::NewGuid().ToString('N')
dotnet run --project entry/InnoEngine.Build -- validate plan --engine-root . --dotnet dotnet --base HEAD --output $run
if ($LASTEXITCODE -ne 0) { throw 'Validation planning failed.' }
```

`HEAD` includes staged, unstaged and untracked changes relative to the current commit. For an already committed feature, choose the actual development baseline instead. A clean, unchanged checkout does not select an arbitrary suite just because you want to diagnose it.

Read `plan.json` before executing. Confirm the affected owners, required checks and their reasons, excluded checks, evaluated contexts, product requirements and selected environment. An unknown relationship or missing required environment needs resolution; it is not permission to silently omit a check.

## Execute the same plan

```powershell
dotnet run --no-build --project entry/InnoEngine.Build -- validate run --engine-root . --dotnet dotnet --plan "$run/plan.json" --output $run
if ($LASTEXITCODE -ne 0) { throw 'Required validation failed.' }
```

The plan freezes its input and environment identities. If either changes, prepare the appropriate new plan. Keep run logs separate from stable build workspaces so changing a log directory does not create a cold build.

Use `validate full` when full acceptance is explicitly required. It is not the default response to a local change or a documentation edit.

## Understand the evidence layers

| Layer | What it establishes |
| --- | --- |
| Static/policy | Source, architecture, instructions and document constraints. |
| Domain | Behavior behind managed domain boundaries without native product preparation. |
| Public contract | Observable behavior and supported extension contracts. |
| Integration | Cooperation among real components, tools or processes. |
| Native | Actual native deployment, loading and backend behavior. |
| Product/device | A composed product or real device journey in its required environment. |
| Performance/long-running | Measured workloads, stability and sustained behavior. |

These are different kinds of evidence, not interchangeable levels of confidence. A successful import test does not certify audio playback; a headless native graph does not certify an output device; a host CLR example does not certify a script projection.

## Native and process requirements

Native suites declare a product such as `player` or `editor`. The plan prepares the selected target and configuration, then deploys its verified closure. Tests consume that deployment index. An unrelated DLL found in another project's output or cache is not a substitute.

Do not launch a native suite with a bare `dotnet test` command that drops its product properties. Use the plan's evaluated target, product properties, SDK `TargetPath` and execution logs when diagnosing a failure. The shared isolated executor discovers the actual process requirements rather than taking a second list from this page.

Cocoa window operations run on the process main thread. SDL window tests retain their dedicated test-assembly entry and original assertions. No dummy video driver or production-only test entry replaces the real host. A missing window, library, SDK or deployment is failed or unavailable evidence, never a pass.

## Reuse and diagnose results

The runner announces a check before executing it. Logged child processes report their PID and log location at startup, then emit an activity summary every 30 seconds while they remain active. The summary includes elapsed time, output characters, time since the last output, a short output excerpt and parent-process CPU time. Full output remains in the owned log.

This interval is a reporting cadence, not a build deadline. Parent CPU does not include compiler or other child CPU, and quiet output alone does not establish a stall. Inspect the current phase and its log before diagnosing a wait. A legitimate large third-party compilation can take substantially longer than ordinary managed feedback.

| Result | Meaning |
| --- | --- |
| `Passed` | The required check executed successfully for the recorded inputs. |
| `Reused` | Existing successful evidence still matches the required inputs and outputs. |
| `Failed` | The check or its closing integrity verification failed. |
| `Blocked` | A required prerequisite prevented valid execution. |
| `NotApplicable` | The plan explicitly excluded this check with a reason. |

Reconcile evidence using `validate evidence` with the exact plan and evidence file. This checks completion, input/environment identities, required results and output/dependency identities. A report file or an intermediate green test result alone is insufficient.

Keep the first failure. A retry records what changed or why it is justified. A filtered test can help investigate a failure, but it does not replace all obligations selected by the plan. Commit, push and report edits do not independently require repeating unchanged checks.

Each fixture owns its sessions, temporary directories and child processes. Drain its work and release its resources; do not remove another owner's lock to make a wait disappear. Test classes are discovery and assertion infrastructure, while reusable public support libraries have their own documented API contracts.

## Find a relevant suite

Start with the [test-suite reference](testing/index.md), organized by the behavior under test. Its source links describe available assertions, not results of a current run. Keep actual executions and environment limitations in acceptance records.

For documentation examples, use [example validation](example-validation.md); it preserves the declared host or script surface.

## Extend a suite safely

Add new cases beside the behavior they verify. Review the affected production contract and actual project references together. Test assemblies are not shipped with the Editor or Player, and their discovery classes do not become script-exported product APIs.

Use public entry points and replaceable contracts. Do not introduce reflection bypasses, `InternalsVisibleTo` or wider production visibility for a test. Reusable public testing libraries still need their own API contracts; being under `tests/` does not exempt them.

Restore the declared SDK, packages and external-tool prerequisites before running a focused diagnostic. Preserve each scenario's thread, cancellation and release ordering. Keep current execution results in acceptance records rather than treating the list of available scenarios as passing evidence.
