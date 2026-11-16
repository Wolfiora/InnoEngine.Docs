---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4078a76e6dae04288fc6020ad2c3bb1dcd3612fcbef69d649aec9180db4d40bb
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithConfiguration(System.String)
title: NativeBuildContext.WithConfiguration
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 8b53701d19371eb0171620547ef017d3f38415417174430acd638defebd32fcd
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
