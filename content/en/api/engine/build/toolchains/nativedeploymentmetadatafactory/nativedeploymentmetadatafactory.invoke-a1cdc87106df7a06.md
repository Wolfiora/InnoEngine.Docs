---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1cdc87106df7a061e64b48f4ca674fc60689b93f727024356b8decc1723d665
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeDeploymentMetadataFactory.Invoke(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})
title: NativeDeploymentMetadataFactory.Invoke
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 05b823f28962d6dbebb99aa07d11176836af7706d0c29637f0212b1f650a5e08
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

## Returns

Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.
