---
uid: api.cfbf0326e96557f3d760ddbfc7ac7466079587cb8c74cfdef681c69150db4e57
symbol: "engine:Inno.Editor.Core:P:Inno.Editor.Core.EditorPanel.allowScrolling"
source: xml
reviewed: b230c5a31e92a81280b64ef73d637bba21bfe4c63fb462335eca69e2327c7169
title: "allowScrolling"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Gets whether the presentation backend may create a scroll range for this panel window.

## Remarks

Full-canvas panels should return `false` and manage navigation inside their own content instead of allowing the host window to scroll.
