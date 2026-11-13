---
uid: api.472f30c9366d39bf7fa995148c0a8817bd1d260d772cf9680ff727b49ec779b0
symbol: "engine:Inno.Build.WindowsX64:M:Inno.Build.WindowsX64.WindowsX64BuildModule.CreateContribution(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.Composition.NativeProductContribution,Inno.Build.IPlayerSupportPackValidator,Inno.Build.Toolchains.INativeBindingGenerator)"
source: xml
reviewed: 4a26f0676e520ef21c3ed61ff06a09b197df8da960552f2a1541c3d0e202e11d
title: "CreateContribution"
kind: api
owners: [Inno.Build.WindowsX64]
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
