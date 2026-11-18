---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4078a76e6dae04288fc6020ad2c3bb1dcd3612fcbef69d649aec9180db4d40bb
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithConfiguration(System.String)
title: NativeBuildContext.WithConfiguration
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 0add19810e29d8fdf0699c1fa251540f272b6feb6ee423472a87252fb4694e5d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `configuration`:** The debug or release configuration owned by the product step.

## Returns

A derived context with no inherited workspace or artifact identity from another configuration.

## Exceptions

**Exception `T:System.ArgumentException`:** The requested configuration is unsupported.
