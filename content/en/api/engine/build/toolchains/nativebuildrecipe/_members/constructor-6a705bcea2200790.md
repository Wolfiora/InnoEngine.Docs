---
uid: api.6a705bcea2200790c2c97bfd2becb020c30f1305c66e754a0c2f5fac2265e3d1
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildRecipe.#ctor(Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 016719d9c42ae60a565b7622ce0e4711f2f2ddb31b6e04cd6f508fa3d9567fbd
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates a complete recipe without inferring implementation identity from an assembly MVID.

**Parameter `owner`:** The explicit component descriptor identifying source and intermediate owners.

**Parameter `component`:** The component's portable artifact path segment.

**Parameter `targetId`:** The ABI's portable artifact path segment.

**Parameter `inputs`:** The complete source, generator, executor and SDK input closure.

**Parameter `declarations`:** Ordered compiler, linker, include-search and non-file inputs; order is significant.

**Exception `T:System.ArgumentException`:** A component or target is not a portable segment, or an input is null.

**Exception `T:System.ArgumentNullException`:** A required owner or collection is null.
