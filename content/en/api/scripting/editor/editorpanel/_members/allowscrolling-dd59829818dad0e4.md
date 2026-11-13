---
uid: api.dd59829818dad0e419d7360ba018c6d1a67d8921a3aa2fd4eae867115fce461b
symbol: "scripting:Inno.Editor.Core:P:InnoEditor.Core.EditorPanel.allowScrolling"
source: xml
reviewed: 7c0c58bdc0d28ab58405c99cad1386532a23a820ddc1a921810dd83684890bdd
title: "allowScrolling"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Gets whether the presentation backend may create a scroll range for this panel window.

## Remarks

Full-canvas panels should return `false` and manage navigation inside their own content instead of allowing the host window to scroll.
