---
uid: api.1ba67f401cc31cc9c27f8f8bbfba226968c17a29662b34cb3b4374a29973ce9d
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeModule})"
source: xml
reviewed: f794d63014215d3e6a2f443987f7093133b3bd0a50215ac903b59f9b1af57307
title: "Constructor"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Copies an explicit code closure and verifies unique ownership and dependency ordering.

**Parameter `modules`:** Ordered immutable module contributions; an empty closure describes an engine-only composition.

**Exception `T:System.IO.InvalidDataException`:** A module is null or duplicated, an assembly has multiple owners, or an upstream module is absent.
