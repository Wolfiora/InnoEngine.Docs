---
uid: api.inno.build.toolchains.c422605c13a4c705
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeBindingSourceRoot"
source: xml
reviewed: 9a2c3bc7c2a97903e052a83a2e07542c090fe3829ab0d3a8db52e8d80ff3fa50
title: "NativeBindingSourceRoot"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
contracts:
- project.inno-build-toolchains
aliases: []
---

Identifies one component-local root without exposing a generator-specific contract.

**Parameter `id`:** An ordinal identity scoped to this component's selected generation.

**Parameter `directory`:** The checkout-relative or absolute external location; empty for generated output.

**Parameter `generated`:** Whether this root denotes the selected native output directory.

**Parameter `frozen`:** Whether source files must be copied before compilation.
