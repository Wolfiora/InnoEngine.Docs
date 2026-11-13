---
uid: api.945618a99667bb072774c92dd949d32f8dc904f26f261813a50e17e5a749e3fb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.CreateExecutionAsync(System.Threading.CancellationToken)"
source: xml
reviewed: a6cd5cb0e6e2837d5868e1f58b40632f376463b15ade4adebe05480ef7eac4a3
title: "CreateExecutionAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Materializes the operation's declared repository inputs into an exclusively owned source workspace. Compilers and source extraction must use the returned project and root, never the mutable checkout.

**Parameter `cancellationToken`:** Cancels ownership acquisition or verified copying before execution ownership is returned.

**Returns:** Caller-owned fixed execution inputs. Dispose only after all compiler and source consumers finish.

**Exception `T:System.InvalidOperationException`:** An input differs from its planned bytes while being copied.

**Exception `T:System.ArgumentException`:** The project does not belong to the operation's source root.
