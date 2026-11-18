---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.build.toolchains.641a8b10c3851918
symbol: engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeDeploymentMetadataFactory
title: NativeDeploymentMetadataFactory
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: d4cf60633afdd7e08e400416ef0fac683ffb908f015129e4db23f7f5cb76f0bf
contracts:
- project.inno-build-toolchains

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

## Returns

Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.
