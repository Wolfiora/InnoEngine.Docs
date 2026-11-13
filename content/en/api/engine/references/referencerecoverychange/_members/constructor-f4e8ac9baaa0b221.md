---
uid: api.f4e8ac9baaa0b221f3e509880229ac32dd0e23662d539202469bdd91615a39ad
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryChange.#ctor(Inno.References.SerializedMissingState,Inno.References.ReferenceResolution)"
source: xml
reviewed: b67e39162e583f6652fbd05eed49b54a4d28f414d1a98f07d3fa67f84ba7dd36
title: "Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates a recovery change from preserved state and its candidate resolution.

**Parameter `missingState`:** The immutable state captured before the candidate generation was applied.

**Parameter `resolution`:** The result produced by the candidate reference catalog.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is null.
