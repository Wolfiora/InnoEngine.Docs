---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6a705bcea2200790c2c97bfd2becb020c30f1305c66e754a0c2f5fac2265e3d1
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildRecipe.#ctor(Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Collections.Generic.IEnumerable{System.String})
title: NativeBuildRecipe.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: f9074dea863aeaed50795794a0e78ef89672aaed1e2d6fd41406412da425bfad
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** The explicit component descriptor identifying source and intermediate owners.

**Parameter `component`:** The component's portable artifact path segment.

**Parameter `targetId`:** The ABI's portable artifact path segment.

**Parameter `inputs`:** The complete source, generator, executor and SDK input closure.

**Parameter `declarations`:** Ordered compiler, linker, include-search and non-file inputs; order is significant.

## Exceptions

**Exception `T:System.ArgumentException`:** A component or target is not a portable segment, or an input is null.

**Exception `T:System.ArgumentNullException`:** A required owner or collection is null.
