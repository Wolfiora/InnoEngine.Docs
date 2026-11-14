---
uid: api.922b70448e88329274cc6248d7efe5f56286b2fbe6b3ced049366965c8a50fae
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.CanRequestReload(System.String@)"
source: xml
reviewed: 55568570a6b3b23fc324551f814c7f4aa31b9b75436e679c23a5f528f1a447d1
title: "EditorReloadCoordinator.CanRequestReload"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Queries whether every registered owner accepts an explicit reload request.

**Parameter `reason`:** The first blocking reason, or null when the request is allowed.

**Returns:** True when all live guards permit a manual request.
