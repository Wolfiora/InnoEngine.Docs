---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8f618c29b64e42c4629a38ad6b86fbf64fa3beafda69ea3a07aca2945dd36b36
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.ResolveExecutable(System.String)
title: NativeToolchainSelection.ResolveExecutable
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 73847fb66c280cdef9de09831b5ca953a2fa2aa5073685b1aee290bd0695d2b7
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
