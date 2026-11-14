---
uid: api.a19f1dd56c8466bb4cab5c760d96a44f4547cdc021dc0323351054f1d8d272c9
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,Inno.Core.Diagnostics.Diagnostic,System.String)"
source: xml
reviewed: 0edcbf84a2e46c13333249e5f4260475aef55ddafb6417302f76013c6be4c816
title: "Diagnostics.Set"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Atomically sets the complete current state of one targeted diagnostic group owned by the calling type.

## Parameters

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `targetId` is empty or `group` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.
