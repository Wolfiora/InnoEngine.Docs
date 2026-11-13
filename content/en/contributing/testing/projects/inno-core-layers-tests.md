---
title: Layer ordering and rollback tests
description: Verify stack ordering, event precedence and reverse-order frame cleanup.
uid: project.inno-core-layers-tests
kind: project
owners:
  - Inno.Core.Layers.Tests
---
# Layer ordering and rollback tests

`Inno.Core.Layers.Tests` verifies the [Layers contracts](../../../architecture/projects/inno-core-layers.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The stack inserts ordinary layers below existing overlays and rejects duplicate instances. Event dispatch starts at the topmost overlay. Frame preparation failures unwind already prepared layers in reverse order rather than abandoning their resources.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Layers.Tests/Inno.Core.Layers.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Layers.Tests/Inno.Core.Layers.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Layer Stack

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Layers.Tests/LayerStackTests.cs). Representative entry points:

- `PushLayer_InsertsBelowExistingOverlays`
- `PushLayer_RejectsDuplicateInstance`
- `EventDispatch_RunsTopmostOverlayFirst`
- `RenderFrame_UnwindsPreparedLayersInReverseOrderAfterFailure`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
