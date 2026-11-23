---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6a705bcea2200790c2c97bfd2becb020c30f1305c66e754a0c2f5fac2265e3d1
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildRecipe.#ctor(Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Collections.Generic.IEnumerable{System.String})
title: NativeBuildRecipe.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: c86b0f758c6684f59b6cc6c1bf0a4e2feea8048a5a33011ce34bb9d96ffc8ff5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** The explicit component descriptor identifying source and intermediate owners.

**Parameter `component`:** The component's portable artifact path segment.

**Parameter `targetID`:** The ABI's portable artifact path segment.

**Parameter `inputs`:** The complete source, generator, executor and SDK input closure.

**Parameter `declarations`:** Ordered compiler, linker, include-search and non-file inputs; order is significant.

## Exceptions

**Exception `T:System.ArgumentException`:** A component or target is not a portable segment, or an input is null.

**Exception `T:System.ArgumentNullException`:** A required owner or collection is null.
