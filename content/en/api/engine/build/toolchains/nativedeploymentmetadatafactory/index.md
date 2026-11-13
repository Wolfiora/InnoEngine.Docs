---
uid: api.inno.build.toolchains.641a8b10c3851918
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeDeploymentMetadataFactory"
source: xml
reviewed: 182425646bdcd4767f21d61acfb0c4637d526e3b220a5d733e0b70fdcde28c35
title: "NativeDeploymentMetadataFactory"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
contracts:
- project.inno-build-toolchains
aliases: []
---

Creates explicitly selected deployment metadata from a frozen Native closure.

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

**Returns:** Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.
