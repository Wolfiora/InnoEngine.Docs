---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.build.toolchains.641a8b10c3851918
symbol: engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeDeploymentMetadataFactory
title: NativeDeploymentMetadataFactory
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 3d068871889b7bbaac0e5cb1d2d9a45a8adf0486b4bc55e0b2a977185dc49bdd
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
