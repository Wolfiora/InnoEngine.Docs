---
uid: api.f4e8ac9baaa0b221f3e509880229ac32dd0e23662d539202469bdd91615a39ad
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryChange.#ctor(Inno.References.SerializedMissingState,Inno.References.ReferenceResolution)"
source: xml
reviewed: 7558e72b2a4c408270627d5e9762e2da1d9adad5e576b52c8044fe5eb33a6dd7
title: "ReferenceRecoveryChange.Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates a recovery change from preserved state and its candidate resolution.

## Parameters

**Parameter `missingState`:** The immutable state captured before the candidate generation was applied.

**Parameter `resolution`:** The result produced by the candidate reference catalog.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is null.
