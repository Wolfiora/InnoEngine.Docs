---
uid: api.1ba67f401cc31cc9c27f8f8bbfba226968c17a29662b34cb3b4374a29973ce9d
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeModule})"
source: xml
reviewed: e952d3c0dc985cdaaa64fecea7d7d0e0455424b9cc6273c41c9656ef5c018e94
title: "GameCodeDeployment.Constructor"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Copies an explicit code closure and verifies unique ownership and dependency ordering.

## Parameters

**Parameter `modules`:** Ordered immutable module contributions; an empty closure describes an engine-only composition.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A module is null or duplicated, an assembly has multiple owners, or an upstream module is absent.
