---
uid: api.922b70448e88329274cc6248d7efe5f56286b2fbe6b3ced049366965c8a50fae
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.CanRequestReload(System.String@)"
source: xml
reviewed: 9d6e9c2b68bdd5a37b2747edf6a966b2e1932faffa66bfeba6e36a9a706e13a1
title: "CanRequestReload"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Queries whether every registered owner accepts an explicit reload request.

**Parameter `reason`:** The first blocking reason, or null when the request is allowed.

**Returns:** True when all live guards permit a manual request.
