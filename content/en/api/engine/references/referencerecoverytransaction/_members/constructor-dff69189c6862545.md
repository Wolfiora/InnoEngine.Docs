---
uid: api.dff69189c6862545ae1ab14db3a0d9200edf1a106d0988162996c8eda0d10f84
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.#ctor(Inno.References.ReferenceCatalog,System.Collections.Generic.IEnumerable{Inno.References.SerializedMissingState},System.Collections.Generic.IEnumerable{Inno.References.IReferenceRecoveryParticipant})"
source: xml
reviewed: 4f80e3d3f3bd9d0f40629d79bd57602dfd4fd704ed760cbb2415e9e71217f5be
title: "Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Captures neutral slots and ordered domain owners without resolving or mutating live state.

**Parameter `catalog`:** The candidate resolver set, consulted after provisional objects are registered.

**Parameter `missingStates`:** Preserved object and dependency slots, each with a unique owner key.

**Parameter `participants`:** Domain changes in dependency order, owned until commit or complete rollback.

**Exception `T:System.ArgumentNullException`:** An input or collection entry is null.

**Exception `T:System.ArgumentException`:** A slot key is invalid or duplicated.
