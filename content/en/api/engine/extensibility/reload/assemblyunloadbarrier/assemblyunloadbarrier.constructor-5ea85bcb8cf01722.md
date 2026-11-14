---
uid: api.5ea85bcb8cf0172262a5e08e284771f48500e1b5b3306898906b6fa28251315c
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.#ctor(System.Collections.Generic.IEnumerable{Inno.Extensibility.Reload.IAssemblyUnloadProbe},Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions)"
source: xml
reviewed: f45ba86e8a1ec8cc188f2e8dbf16960cbe4b81082ca0deaa390e44fca65fb1bb
title: "AssemblyUnloadBarrier.Constructor"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Creates a barrier over a complete retirement set.

**Parameter `probes`:** Weak unload probes for every retired collectible generation in the transaction.

**Parameter `options`:** Optional collection cadence and retention threshold.

**Exception `T:System.ArgumentNullException`:** Thrown when `probes` or one of its values is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an option duration is negative or the retention threshold is zero.
