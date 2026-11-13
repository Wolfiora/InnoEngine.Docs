---
uid: api.f2557ea75cfdac51d22d54fc60b5a1258bbcbd7dc8ec05a2fb83feaf9c974bfb
symbol: "engine:Inno.Build.MacOSArm64:M:Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.#ctor(Inno.Build.Composition.NativeProductContribution,Inno.Build.Toolchains.BuildHostDescriptor,System.String,Inno.Build.Toolchains.INativeBindingGenerator,Inno.Build.IPlayerSupportPackValidator)"
source: xml
reviewed: 10fd1bf79cdc0832e8cbf303ad8256892d8869e8f5aef9c5c8415fff9904b502
title: "Constructor"
kind: api
owners: [Inno.Build.MacOSArm64]
apiSurface: source-clr
---

Captures the selected product closure and tool execution host.

**Parameter `nativePlan`:** The explicit Player component closure.

**Parameter `host`:** The declared machine executing platform tools.

**Parameter `bindingGenerator`:** The borrowed shared binding implementation selected by distribution.

**Parameter `dotnetHost`:** The explicit SDK executable for binding generation.

**Parameter `supportPackValidator`:** The borrowed validator selected by the distribution.
