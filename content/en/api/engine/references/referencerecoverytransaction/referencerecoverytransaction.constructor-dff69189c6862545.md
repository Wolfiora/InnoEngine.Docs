---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dff69189c6862545ae1ab14db3a0d9200edf1a106d0988162996c8eda0d10f84
symbol: engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.#ctor(Inno.References.ReferenceCatalog,System.Collections.Generic.IEnumerable{Inno.References.SerializedMissingState},System.Collections.Generic.IEnumerable{Inno.References.IReferenceRecoveryParticipant})
title: ReferenceRecoveryTransaction.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: b87dc5ddce001db5672815f5b6d4b0722ec8e62d1dc3a7e3cb9bd70e39a8754f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `catalog`:** The candidate resolver set, consulted after provisional objects are registered.

**Parameter `missingStates`:** Preserved object and dependency slots, each with a unique owner key.

**Parameter `participants`:** Domain changes in dependency order, owned until commit or complete rollback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** An input or collection entry is null.

**Exception `T:System.ArgumentException`:** A slot key is invalid or duplicated.
