---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2167d5cd692055d7fee28d9dc8f02bbbebebcc385afd12664a46bb7f4d96fd56
symbol: engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.FromManifest(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameRuntimeModule})
title: GameCodeDeployment.FromManifest
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: 2ddb865a6954e7e94db88372f8ecb15caa78c13a6ba7bd8ac23ad82da6c48abe
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `modules`:** Current-format runtime manifest declarations.

## Returns

An immutable logical deployment; invalid declarations fail before activation.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A declaration or its ownership and dependencies are invalid.
