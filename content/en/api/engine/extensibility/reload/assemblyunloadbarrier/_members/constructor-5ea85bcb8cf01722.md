---
uid: api.5ea85bcb8cf0172262a5e08e284771f48500e1b5b3306898906b6fa28251315c
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.#ctor(System.Collections.Generic.IEnumerable{Inno.Extensibility.Reload.IAssemblyUnloadProbe},Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions)"
source: xml
reviewed: c0dfe8488ee7038ff83d666485bbbd6e49b5a2a1e1b074d86ed7a6bb47ac631a
title: "Constructor"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Creates a barrier over a complete retirement set.

**Parameter `probes`:** Weak unload probes for every retired collectible generation in the transaction.

**Parameter `options`:** Optional collection cadence and retention threshold.

**Exception `T:System.ArgumentNullException`:** Thrown when `probes` or one of its values is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an option duration is negative or the retention threshold is zero.
