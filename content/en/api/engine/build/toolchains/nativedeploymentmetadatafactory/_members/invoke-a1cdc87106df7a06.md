---
uid: api.a1cdc87106df7a061e64b48f4ca674fc60689b93f727024356b8decc1723d665
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeDeploymentMetadataFactory.Invoke(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: ec0670d9986f91d910b701c52482a59a77a458978b858e5afe17eeb6ac7b0e67
title: "Invoke"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates explicitly selected deployment metadata from a frozen Native closure.

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

**Returns:** Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.
