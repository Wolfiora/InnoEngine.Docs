---
uid: api.6cd4f87aa89faf74d985b966d880635d2721554d7c75b3fa7bd986873aa019a3
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.ResolveRoot(System.String,System.String,System.String)"
source: xml
reviewed: ee499c1155bda1d87f6649ad700bf13919e9e1ca2344af826e68ce5928693755
title: "ResolveRoot"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves a component-local root using the current checkout and selected output.

**Parameter `engineRoot`:** The current checkout's absolute root.

**Parameter `nativeDirectory`:** The selected generation's absolute native output.

**Parameter `rootId`:** An ordinal root identity from this description.

**Returns:** The physical root; no other component's root table participates.

**Exception `T:System.IO.InvalidDataException`:** The root identity is unknown.
