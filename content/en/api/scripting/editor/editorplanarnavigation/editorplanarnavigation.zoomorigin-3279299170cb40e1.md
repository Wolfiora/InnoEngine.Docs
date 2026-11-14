---
uid: api.3279299170cb40e11587fd130ba1da9d2a1a1f6d654667a10a717801491b8730
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2,System.Numerics.Vector2,System.Single,System.Single)"
source: xml
reviewed: ce32b215eeef9e1270d81e51646ae0ca974ad318b45c56db011c2e4df6279d70
title: "EditorPlanarNavigation.ZoomOrigin"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Changes the screen-space origin so zoom preserves the same content point beneath the cursor.

**Parameter `origin`:** Current logical-pixel content origin.

**Parameter `pivot`:** Logical-pixel cursor position relative to the canvas.

**Parameter `previousScale`:** Previous positive content magnification.

**Parameter `nextScale`:** New positive content magnification after clamping.

**Returns:** The origin preserving the pivot's content coordinate.

**Exception `T:System.ArgumentOutOfRangeException`:** An input is non-finite or a scale is not positive.
