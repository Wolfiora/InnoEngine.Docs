---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5ea85bcb8cf0172262a5e08e284771f48500e1b5b3306898906b6fa28251315c
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.#ctor(System.Collections.Generic.IEnumerable{Inno.Extensibility.Reload.IAssemblyUnloadProbe},Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions)
title: AssemblyUnloadBarrier.Constructor
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: 9ff821007bbcd6ee23a56abb88e8677aa79effa2e3e75d154f4612f0b1e45e09
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `probes`:** Weak unload probes for every retired collectible generation in the transaction.

**Parameter `options`:** Optional collection cadence and retention threshold.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `probes` or one of its values is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an option duration is negative or the retention threshold is zero.
