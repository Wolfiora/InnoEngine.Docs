---
uid: api.b04a301bc51fa587f9e448f489eb9557256cb19f104dfae629b0f575325b754c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithComponentOptions(Inno.Build.Toolchains.NativeComponentDescriptor,Inno.Build.Toolchains.NativeComponentBuildOptions)"
source: xml
reviewed: 6b7c042141ba496b434571b7ca26d8fed8436102b9f5c444393e3d536920ad20
title: "WithComponentOptions"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Scopes one component's explicit product configuration without changing the frozen SDK.

**Parameter `component`:** The sole source and intermediate owner receiving the configuration.

**Parameter `options`:** The immutable linkage, arguments and configuration input closure.

**Returns:** A context sharing inputs, bindings and statistics with the current operation.

**Exception `T:System.ArgumentNullException`:** An owner or configuration is null.
