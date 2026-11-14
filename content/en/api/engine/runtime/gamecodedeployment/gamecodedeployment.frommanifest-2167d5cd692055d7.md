---
uid: api.2167d5cd692055d7fee28d9dc8f02bbbebebcc385afd12664a46bb7f4d96fd56
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.FromManifest(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameRuntimeModule})"
source: xml
reviewed: 4f32bace153139ec98b5d342e99fc2aaf3442fc158c17408a768d265d226cb00
title: "GameCodeDeployment.FromManifest"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Freezes validated manifest declarations without retaining their mutable arrays or entries.

## Parameters

**Parameter `modules`:** Current-format runtime manifest declarations.

## Returns

An immutable logical deployment; invalid declarations fail before activation.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A declaration or its ownership and dependencies are invalid.
