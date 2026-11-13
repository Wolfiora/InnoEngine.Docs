---
uid: api.b5ace5715a3e72776fd4c63ab31ff5909115f62515b6c34d7866d1be570889cf
symbol: "engine:Inno.Build:M:Inno.Build.BuildPipeline.TryGetGameTargetDisplayName(Inno.Build.BuildTargetId,System.String@)"
source: xml
reviewed: bbc495f06313b775a37100167b1cf5876df7f330de0ef5adf3043649f09dec90
title: "TryGetGameTargetDisplayName"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Tries to get the adapter-owned display name for a registered game target.

**Parameter `target`:** The stable target identity to query.

**Parameter `displayName`:** Receives the registered user-facing name, or an empty value when no target is registered.

**Returns:** `true` when the target is registered; otherwise, `false`.
