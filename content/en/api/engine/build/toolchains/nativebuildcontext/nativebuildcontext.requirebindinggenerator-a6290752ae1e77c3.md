---
uid: api.a6290752ae1e77c36e80283899ea8e3419a4882d125dea94c2da80e5ff707df6
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.RequireBindingGenerator"
source: xml
reviewed: 1496fc04fcb2281b394c32b9b10fb1beaf57d276334e8eb28c43d39c21227743
title: "NativeBuildContext.RequireBindingGenerator"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Requires generation to be configured explicitly before creating staging or launching tools.

## Returns

The borrowed provider without discovering or constructing an implementation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Composition has not supplied a binding generator.
