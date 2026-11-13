---
uid: api.e7e6026d39a5b71dc47daac90a9d7286d7da3654e2b2d57eb25caad5a3343aab
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2,System.Numerics.Vector2,System.Single,System.Single)"
source: xml
reviewed: 57de5f2a8c5cc431ff02dbce922dc73dd718a2dc658967c41ac4b2fd6bf9905e
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
