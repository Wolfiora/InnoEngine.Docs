---
uid: api.324a5546ff5cef0f9c535286eb061bbf685530e6940e9cda5d4e568190746e4b
symbol: "engine:Inno.Build.MacOSArm64:M:Inno.Build.MacOSArm64.MacOSArm64BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.IPlayerSupportPackValidator,Inno.Build.Toolchains.INativeBindingGenerator)"
source: xml
reviewed: de360d106577255667acec1093362b58fde6a234e2b6fad78a88ab55ee5a1cdd
title: "CreateContribution"
kind: api
owners: [Inno.Build.MacOSArm64]
apiSurface: source-clr
---

Contributes the platform's target, product inputs and SDK resolver as one registration.

**Parameter `context`:** The borrowed SDK and execution-host selection.

**Parameter `nativePlan`:** The selected shared Player component closure.

**Parameter `editorNativePlan`:** The explicitly selected Editor component closure for ordinary product builds.

**Parameter `shaderToolsPlan`:** The host-executed offline compiler product for this explicit target.

**Parameter `supportPackValidator`:** The complete borrowed platform and selected component validator.

**Parameter `bindingGenerator`:** The generator configured by this platform integration.

**Returns:** A complete immutable contribution without starting tools or creating files.
