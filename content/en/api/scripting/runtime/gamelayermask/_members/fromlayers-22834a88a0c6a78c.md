---
uid: api.22834a88a0c6a78c5eb093e86393ba7ec5669b9daad19260bb9d7d0ab9f3dcb0
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{InnoEngine.Scene.GameLayer})"
source: xml
reviewed: 87c16f91a6e5ec7235f45b3b4a2ffafeb6d92c52d501a3ad39ab03a7824c23df
title: "FromLayers"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Creates a mask containing the supplied layers.

**Parameter `layers`:** The layers whose bits should be enabled.

**Returns:** A mask containing every supplied layer.

**Exception `T:System.ArgumentNullException`:** Thrown when `layers` is `null`.
