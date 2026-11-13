---
uid: api.35401d46d800b4474740ded1a8cfd7a7a17640aa6bad3ee2db4e3c599ff3a6f5
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.CanActivateReload(System.String@)"
source: xml
reviewed: 9637908e0a7b54e9bb05342ad80e57cdc50d238be092f2977ae7743855a85d60
title: "CanActivateReload"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Queries whether compilation and activation can proceed without interrupting a running session.

**Parameter `reason`:** The first blocking reason, or null when activation is allowed.

**Returns:** True when all live guards permit generation work.
