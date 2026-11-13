---
title: UI frame-context tests
description: Backend-neutral UI runtime input and script-facade binding without native preparation.
uid: project.inno-ui-tests
kind: project
owners:
  - Inno.UI.Tests
---
# UI frame-context tests

`Inno.UI.Tests` verifies the neutral `UiRuntime` frame boundary through a replaceable backend. This domain suite does not reference RmlUi or require a window, GPU or native deployment.

## Behavior covered

`UiRuntimeTests.FrameScopeCapturesInputAndBindsTheScriptFacade` checks that the frame scope captures input and supplies the UI script facade with the appropriate context. The fixture releases its runtime and borrowed boundaries at the end of the scenario.

RmlUi importing, fonts, DOM, Context and native lifetime assertions belong to the separate `Inno.Adapter.UI.RmlUi.Tests` backend suite. This managed test does not certify those capabilities.

## Run and maintain

Use [the shared validation workflow](../../validate-change.md) for an actual change. A focused diagnostic can run directly from the engine root:

```powershell
dotnet test tests/ui/Inno.UI.Tests/Inno.UI.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

The xUnit entry is test infrastructure, not a public product or protected extension contract. Preserve the neutral backend boundary when extending the scenario.

[Read the assertions and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/ui/Inno.UI.Tests).
