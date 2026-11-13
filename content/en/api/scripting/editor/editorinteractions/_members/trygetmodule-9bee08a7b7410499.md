---
uid: api.9bee08a7b7410499b6085838ff3715773758631aac60c28e2cfa3858f6399c73
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetModule\u0060\u00601(\u0060\u00600@)"
source: xml
reviewed: f3700a5b5cfbd6ac21453ba4adf0c7785800f4f572c2de90fb0cfbb0557eccd8
title: "TryGetModule"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves an active feature module for immediate use in the current Editor callback.

**Type parameter `TModule`:** The feature module contract to resolve.

**Parameter `module`:** The started, non-quarantined module, or null when unavailable.

**Returns:** True when the active generation supplies the requested module.

## Remarks

Do not retain the result across callbacks or generation changes. Candidate modules are never exposed.
