---
uid: api.e7e6026d39a5b71dc47daac90a9d7286d7da3654e2b2d57eb25caad5a3343aab
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2,System.Numerics.Vector2,System.Single,System.Single)"
source: xml
reviewed: aa49a7dca727037db19914563106cdabe9b80f6a8945783f2c29f3da66b9e1cf
title: "ZoomOrigin"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Changes the screen-space origin so zoom preserves the same content point beneath the cursor.

**Parameter `origin`:** Current logical-pixel content origin.

**Parameter `pivot`:** Logical-pixel cursor position relative to the canvas.

**Parameter `previousScale`:** Previous positive content magnification.

**Parameter `nextScale`:** New positive content magnification after clamping.

**Returns:** The origin preserving the pivot's content coordinate.

**Exception `T:System.ArgumentOutOfRangeException`:** An input is non-finite or a scale is not positive.
