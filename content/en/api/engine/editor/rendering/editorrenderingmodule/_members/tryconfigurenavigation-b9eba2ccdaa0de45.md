---
uid: api.b9eba2ccdaa0de45bb576d2bdaf3bb58723b56ed024ec8b1dfca3736a36e5267
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderingModule.TryConfigureNavigation(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportNavigationProfile@)"
source: xml
reviewed: 60447a51b37f73b172822e3a029ea591a28d4a53ff7893ceee320967c4fb8bd8
title: "TryConfigureNavigation"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Queries the selected controller's navigation contract before viewport input is processed.

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `profile`:** Receives the selected controller profile.

**Returns:** True when a contributor returned a usable navigation profile and became the controller.
