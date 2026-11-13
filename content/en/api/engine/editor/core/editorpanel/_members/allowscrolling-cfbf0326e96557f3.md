---
uid: api.cfbf0326e96557f3d760ddbfc7ac7466079587cb8c74cfdef681c69150db4e57
symbol: "engine:Inno.Editor.Core:P:Inno.Editor.Core.EditorPanel.allowScrolling"
source: xml
reviewed: 9194b2c844cf5363838ec79d078c5d74814181668f1c121b7e4c548b38acc594
title: "allowScrolling"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Gets whether the presentation backend may create a scroll range for this panel window.

## Remarks

Full-canvas panels should return `false` and manage navigation inside their own content instead of allowing the host window to scroll.
