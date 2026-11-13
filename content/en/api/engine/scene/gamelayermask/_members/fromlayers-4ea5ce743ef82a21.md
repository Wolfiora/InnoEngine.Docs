---
uid: api.4ea5ce743ef82a21ee0e031194b4637cd4fdb15e4a65bcb3c217ff301da8c2f0
symbol: "engine:Inno.Scene:M:Inno.Scene.Layers.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{Inno.Scene.Layers.GameLayer})"
source: xml
reviewed: 1fbc17c883592bac1b952949b24a89b766e9d88032f54428ad536ba7e5d624f0
title: "FromLayers"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates a mask containing the supplied layers.

**Parameter `layers`:** The layers whose bits should be enabled.

**Returns:** A mask containing every supplied layer.

**Exception `T:System.ArgumentNullException`:** Thrown when `layers` is `null`.
