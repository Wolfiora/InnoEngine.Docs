---
uid: api.ab9807fae2cc39b2104b600bb178a4d75abb0fe0f393f76b584baf5d123414c4
symbol: "engine:Inno.Build.WindowsX64:M:Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.#ctor(Inno.Build.Composition.NativeProductContribution,Inno.Build.Toolchains.BuildHostDescriptor,System.String,Inno.Build.Toolchains.INativeBindingGenerator,Inno.Build.IPlayerSupportPackValidator)"
source: xml
reviewed: 4a73e46ecd46d1ce3a79341c20e728c6eb737f0c836fdc3e338ebeb9df457caf
title: "Constructor"
kind: api
owners: [Inno.Build.WindowsX64]
apiSurface: source-clr
---

Captures the selected product closure and tool execution host.

**Parameter `nativePlan`:** The explicit Player component closure.

**Parameter `host`:** The declared machine executing platform tools.

**Parameter `bindingGenerator`:** The borrowed shared binding implementation selected by distribution.

**Parameter `dotnetHost`:** The explicit SDK executable for binding generation.

**Parameter `supportPackValidator`:** The borrowed validator selected by the distribution.
