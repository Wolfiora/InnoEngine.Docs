---
uid: api.fd7d9c1c51709403118e874ac7e97900767c62a9e12f574cedbf9f5857f4dd4b
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameLayerCatalog.TryGetLayer(InnoEngine.Settings.ProjectId,InnoEngine.Scene.GameLayerId,InnoEngine.Scene.GameLayer@)"
source: xml
reviewed: 59bae4c759325dcf8d1d22bdcef1333ab627301bcc3d73fb79cfcae70fbd933c
title: "TryGetLayer"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Tries to resolve a qualified identity to its compact runtime slot.

**Parameter `projectId`:** The current project namespace.

**Parameter `id`:** The complete layer identity.

**Parameter `layer`:** The resolved runtime slot.

**Returns:** `true` when the identity belongs to this project and is defined.
