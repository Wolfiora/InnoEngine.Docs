---
uid: api.945618a99667bb072774c92dd949d32f8dc904f26f261813a50e17e5a749e3fb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.CreateExecutionAsync(System.Threading.CancellationToken)"
source: xml
reviewed: 38a166b5e1eed71b229ba70ea5d0099e1f8a225dcab10820084f3edd603363ec
title: "ManagedBuildInputSnapshot.CreateExecutionAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Materializes the operation's declared repository inputs into an exclusively owned source workspace. Compilers and source extraction must use the returned project and root, never the mutable checkout.

## Parameters

**Parameter `cancellationToken`:** Cancels ownership acquisition or verified copying before execution ownership is returned.

## Returns

Caller-owned fixed execution inputs. Dispose only after all compiler and source consumers finish.

## Exceptions

**Exception `T:System.InvalidOperationException`:** An input differs from its planned bytes while being copied.

**Exception `T:System.ArgumentException`:** The project does not belong to the operation's source root.
