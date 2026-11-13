---
uid: api.a6290752ae1e77c36e80283899ea8e3419a4882d125dea94c2da80e5ff707df6
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.RequireBindingGenerator"
source: xml
reviewed: 0a0dfbf47d242df5e9f5d4780c1f66189368e1bdbe8564b5f9355017243b8ef1
title: "RequireBindingGenerator"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Requires generation to be configured explicitly before creating staging or launching tools.

**Returns:** The borrowed provider without discovering or constructing an implementation.

**Exception `T:System.InvalidOperationException`:** Composition has not supplied a binding generator.
