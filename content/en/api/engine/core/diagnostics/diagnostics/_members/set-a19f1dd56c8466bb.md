---
uid: api.a19f1dd56c8466bb4cab5c760d96a44f4547cdc021dc0323351054f1d8d272c9
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,Inno.Core.Diagnostics.Diagnostic,System.String)"
source: xml
reviewed: 06f8e453b59bd27c036eedeac189171868f19b799c2c95a7316fa5c9d48a602b
title: "Set"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Atomically sets the complete current state of one targeted diagnostic group owned by the calling type.

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

**Exception `T:System.ArgumentException`:** Thrown when `targetId` is empty or `group` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.
