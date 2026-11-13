---
uid: api.inno.build.toolchains.c422605c13a4c705
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeBindingSourceRoot"
source: xml
reviewed: 4a4c9693822d24558203ec405707a116b046cf6913c28ac9f86ec73012678740
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
