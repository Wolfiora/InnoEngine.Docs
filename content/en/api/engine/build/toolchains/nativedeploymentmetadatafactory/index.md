---
uid: api.inno.build.toolchains.641a8b10c3851918
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeDeploymentMetadataFactory"
source: xml
reviewed: 196da6278c7183132319e869cb84215497103dc75e2816b77e5493d5abf3fda1
title: "NativeDeploymentMetadataFactory"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
contracts:
- project.inno-build-toolchains
aliases: []
---

Creates explicitly selected deployment metadata from a frozen Native closure.

## Parameters

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

## Returns

Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.
