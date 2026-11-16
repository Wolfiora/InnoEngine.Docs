---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8f618c29b64e42c4629a38ad6b86fbf64fa3beafda69ea3a07aca2945dd36b36
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.ResolveExecutable(System.String)
title: NativeToolchainSelection.ResolveExecutable
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 3cb8ed738894b0d9c23242bb66006477d8025c9e52239a23bdd55a8354883c67
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The explicit command registered by the platform provider.

## Returns

The selected executable; an absent command fails immediately.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The provider did not register the requested command.
