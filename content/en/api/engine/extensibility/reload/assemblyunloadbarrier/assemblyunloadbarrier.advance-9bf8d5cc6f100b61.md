---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9bf8d5cc6f100b6151645d727f2d14f55b18a97678b04d61d611647d9a244b07
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Advance
title: AssemblyUnloadBarrier.Advance
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
reviewed: e9d90d604af3bfa796e589924609569147986664cf27d868d61269413deab496
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

`true` only when every probe has completed; otherwise, `false`.

## Exceptions

**Exception `T:Inno.Extensibility.Reload.AssemblyUnloadException`:** Thrown on every call after the retention threshold is reached while a generation remains reachable.
