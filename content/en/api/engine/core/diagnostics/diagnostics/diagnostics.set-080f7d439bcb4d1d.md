---
uid: api.080f7d439bcb4d1dfd24dac95a9b5c08450f6e2f88aae6af68cbbf2b88011303
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic},System.String)"
source: xml
reviewed: 83a1e67fdbd74023899d0fa8fd7d0ab900d05088ba71772bc560ae197cef0e98
title: "Diagnostics.Set"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Atomically sets the complete current state of one targeted diagnostic group owned by the calling type.

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostics`:** The complete current diagnostic collection. An empty collection clears the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

**Exception `T:System.ArgumentException`:** Thrown when `targetId` is empty, `group` is empty, or the collection contains a null entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.
