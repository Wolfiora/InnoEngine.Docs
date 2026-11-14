---
uid: api.dff69189c6862545ae1ab14db3a0d9200edf1a106d0988162996c8eda0d10f84
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.#ctor(Inno.References.ReferenceCatalog,System.Collections.Generic.IEnumerable{Inno.References.SerializedMissingState},System.Collections.Generic.IEnumerable{Inno.References.IReferenceRecoveryParticipant})"
source: xml
reviewed: 3b1337dd046eaede2c864c82a95daaf48503f0ec6b6b6b26cb2488b49ff4ed58
title: "ReferenceRecoveryTransaction.Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Captures neutral slots and ordered domain owners without resolving or mutating live state.

## Parameters

**Parameter `catalog`:** The candidate resolver set, consulted after provisional objects are registered.

**Parameter `missingStates`:** Preserved object and dependency slots, each with a unique owner key.

**Parameter `participants`:** Domain changes in dependency order, owned until commit or complete rollback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** An input or collection entry is null.

**Exception `T:System.ArgumentException`:** A slot key is invalid or duplicated.
