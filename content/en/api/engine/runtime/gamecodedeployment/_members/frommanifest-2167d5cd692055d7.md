---
uid: api.2167d5cd692055d7fee28d9dc8f02bbbebebcc385afd12664a46bb7f4d96fd56
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.FromManifest(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameRuntimeModule})"
source: xml
reviewed: 54f24b69672940caaae67dcd6ee9dd51f560f0408b618e40de65651e7d9a2129
title: "FromManifest"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Freezes validated manifest declarations without retaining their mutable arrays or entries.

**Parameter `modules`:** Current-format runtime manifest declarations.

**Returns:** An immutable logical deployment; invalid declarations fail before activation.

**Exception `T:System.IO.InvalidDataException`:** A declaration or its ownership and dependencies are invalid.
