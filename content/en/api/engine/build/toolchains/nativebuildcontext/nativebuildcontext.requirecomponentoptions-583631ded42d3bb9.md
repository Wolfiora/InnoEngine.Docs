---
uid: api.583631ded42d3bb9f5fa51dbd496221b685b44f3775922f3263e564958553bdb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.RequireComponentOptions(Inno.Build.Toolchains.NativeComponentDescriptor)"
source: xml
reviewed: 53bbbcbc07f7abd1a3eb48c13685341cf5b4410a78c5d8b07d2dbe62b49834e7
title: "NativeBuildContext.RequireComponentOptions"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Requires product configuration for the exact component before its recipe or tools execute.

**Parameter `component`:** The component requesting its scoped configuration.

**Returns:** The immutable configuration; absent or foreign ownership fails explicitly.

**Exception `T:System.InvalidOperationException`:** No options are assigned to this component owner.
