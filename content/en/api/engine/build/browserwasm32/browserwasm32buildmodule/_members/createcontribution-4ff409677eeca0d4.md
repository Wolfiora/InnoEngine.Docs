---
uid: api.4ff409677eeca0d475630798f8df05bbbb91e26fdfbec5bb5393445868c136fa
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.BrowserWasm32BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.NativeProductContribution,Inno.Build.IPlayerSupportPackValidator,Inno.Build.Toolchains.INativeBindingGenerator)"
source: xml
reviewed: c6b54595fbd51b7a5e5d327c1e6e81f99717619a6d327848a78a8132a981341a
title: "CreateContribution"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Contributes the platform's target, product inputs and SDK resolver as one registration.

**Parameter `context`:** The borrowed SDK and execution-host selection.

**Parameter `nativePlan`:** The selected shared Player component closure.

**Parameter `supportPackValidator`:** The borrowed platform and selected static-closure validator.

**Parameter `bindingGenerator`:** The generator configured by this platform integration.

**Returns:** A complete immutable contribution without starting tools or creating files.
