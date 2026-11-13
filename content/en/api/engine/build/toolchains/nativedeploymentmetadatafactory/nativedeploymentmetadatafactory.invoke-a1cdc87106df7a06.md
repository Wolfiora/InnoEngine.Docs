---
uid: api.a1cdc87106df7a061e64b48f4ca674fc60689b93f727024356b8decc1723d665
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeDeploymentMetadataFactory.Invoke(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: 871597751056ea93a82ce70fff3b5091f6c19cd1490f56d22fbee9e98244c80e
title: "NativeDeploymentMetadataFactory.Invoke"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates explicitly selected deployment metadata from a frozen Native closure.

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

**Returns:** Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.
