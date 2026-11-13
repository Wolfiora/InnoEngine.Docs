---
uid: api.09bac1958d418474dd05299f715a5912a8170b88bddd623113dca29344963e75
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.BeginWorkingDirectory(System.String,System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 1acd73ceef4619af3c4995c198d78baccb36e50edb5d28b992c3be419b15c9fe
title: "BeginWorkingDirectory"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Records a reusable workspace before its first payload write while the caller holds activity and producer leases. Existing unregistered directories are rejected, rather than adopted by cleanup authority.

**Parameter `directory`:** The new or previously registered workspace within this publisher root.

**Parameter `leasePath`:** The caller's persistent exclusive producer lease outside the workspace.

**Parameter `targetId`:** The explicit product target, or null for shared host work.

**Parameter `cancellationToken`:** Cancels registration before payload writes.

**Exception `T:System.InvalidOperationException`:** The publisher does not manage reusable workspaces or an existing directory has no current registration.

**Exception `T:System.IO.IOException`:** The workspace escapes its boundary or ownership cannot be written.
