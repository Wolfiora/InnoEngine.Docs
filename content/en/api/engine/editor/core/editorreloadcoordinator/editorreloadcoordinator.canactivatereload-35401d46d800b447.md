---
uid: api.35401d46d800b4474740ded1a8cfd7a7a17640aa6bad3ee2db4e3c599ff3a6f5
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.CanActivateReload(System.String@)"
source: xml
reviewed: aa2a9d4e5678d4d9cdc25d314c7a96a6c168a1ca7490b81df3f16e091ff9b052
title: "EditorReloadCoordinator.CanActivateReload"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Queries whether compilation and activation can proceed without interrupting a running session.

**Parameter `reason`:** The first blocking reason, or null when activation is allowed.

**Returns:** True when all live guards permit generation work.
