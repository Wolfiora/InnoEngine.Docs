---
title: Diagnostic ownership tests
description: Verify replacement, clearing, severity and independent report owners.
uid: project.inno-core-diagnostics-tests
kind: project
owners:
  - Inno.Core.Diagnostics.Tests
---
# Diagnostic ownership tests

`Inno.Core.Diagnostics.Tests` verifies the [Diagnostics contracts](../../../architecture/projects/inno-core-diagnostics.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The hub tests cover severity and source location factories, complete report replacement for one caller group, clearing an empty group, and independent targeted reports. This is current diagnostic state, not the Console log history.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Diagnostics.Tests/Inno.Core.Diagnostics.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Diagnostics.Tests/Inno.Core.Diagnostics.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Diagnostic Hub

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Diagnostics.Tests/DiagnosticHubTests.cs). Representative entry points:

- `DiagnosticFactories_CreateTheRequestedSeverityAndLocation`
- `Set_ReplacesTheCompleteReportOwnedByOneCallerGroup`
- `Set_EmptyCollectionClearsOnlyItsCallerGroup`
- `Set_TargetedReportsRemainIndependent`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
