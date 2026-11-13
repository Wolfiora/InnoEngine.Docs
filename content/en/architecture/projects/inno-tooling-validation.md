---
title: Inno.Tooling.Validation
description: "Dependency-aware validation planning, owned execution and evidence reconciliation."
uid: project.inno-tooling-validation
kind: project
owners: [Inno.Tooling.Validation]
exampleMode: host
exampleProjects: [Inno.Tooling.Validation]
---
# Inno.Tooling.Validation

Dependency-aware validation planning, owned execution and evidence reconciliation.

Use the task linked below before inspecting this implementation entry.

## Choose an operation

Use the existing Build validate command: plan records obligations without executing them; run consumes a plan or prepares one; full requests complete functional acceptance; evidence reconciles an existing result with its inputs. See [validate a change](../../contributing/validate-change.md).

[Input/build/evidence architecture](../validation-evidence.md) explains evaluated property variants, unions, precise output proofs, prerequisite blocking and completion publication. [Product journeys](../../contributing/product-journeys.md) explain real process exit, retained-memory samples, deep workloads and artifact retention. These narrative pages are authoritative for their topics rather than duplicated as an API table.

## Tool boundary

ValidationCommand is the only public command entry. ExecuteAsync accepts operation arguments and cancellation and returns zero for a successful request; invalid arguments, stale inputs or missing/failed evidence cause an exception that the Build CLI reports as failure. Cancellation drains owned child processes. Internal plans, SDK snapshots and result JSON are diagnostics, not runtime persistence or script APIs.

The library remains tooling-only and does not add a daily executable or runtime/Player dependency. Architecture validation, evaluated SDK facts and neutral Build Toolchains supply its inputs and ownership mechanisms.

`--docs-cache-root` and `--docs-snapshot` select an explicit protected documentation generation. Optional `--docs-base-snapshot` compares two prepared generations for documentation-only or paired changes. The canonical Documentation library owns parsing and page/reference identities; this planner owns which checks and compilation prerequisites the task requires. It does not maintain an independent Markdown parser or fall back to the engine's retired product-documentation tree.

## Ownership and failure

The default stable writable owner is `artifacts/validation/workspaces/<configuration>`. An explicit workspace must be new or registered to the same owner. A lease protects the whole build/test operation; concurrent users wait and cancellation releases responsibility. The running CLI and outputs being replaced must have distinct write owners.

First failures and TRX remain available. A report's completed flag cannot replace per-check reconciliation. Missing discovery, missing results, unexecuted dependent checks, unsupported environments and changed inputs never become green through artifact export or a successful unrelated owner. CI cross-run evidence is not automatically inherited.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Tooling.Validation;

public static class ValidationExample
{
    public static Task<int> CreatePlan(string[] options)
        => ValidationCommand.ExecuteAsync(["plan", ..options], CancellationToken.None);
}
```

## Source boundary

[documentation tooling workflow](../../contributing/documentation-queries.md).

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/tools/Inno.Tooling.Validation/Inno.Tooling.Validation.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.
