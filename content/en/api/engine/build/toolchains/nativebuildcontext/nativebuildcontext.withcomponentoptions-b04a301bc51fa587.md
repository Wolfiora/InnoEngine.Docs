---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b04a301bc51fa587f9e448f489eb9557256cb19f104dfae629b0f575325b754c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithComponentOptions(Inno.Build.Toolchains.NativeComponentDescriptor,Inno.Build.Toolchains.NativeComponentBuildOptions)
title: NativeBuildContext.WithComponentOptions
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 5ff4d4bf16db1f4b2627c3d27f022f8d91b50959b34b7613e3e2694c1fbc8c8c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `component`:** The sole source and intermediate owner receiving the configuration.

**Parameter `options`:** The immutable linkage, arguments and configuration input closure.

## Returns

A context sharing inputs, bindings and statistics with the current operation.

## Exceptions

**Exception `T:System.ArgumentNullException`:** An owner or configuration is null.
