---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9bf8d5cc6f100b6151645d727f2d14f55b18a97678b04d61d611647d9a244b07
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Advance
title: AssemblyUnloadBarrier.Advance
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: 9f88572a38092f9db104a8011d9227618d4dd2e21e6492c4356a08aa7f491a98
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
