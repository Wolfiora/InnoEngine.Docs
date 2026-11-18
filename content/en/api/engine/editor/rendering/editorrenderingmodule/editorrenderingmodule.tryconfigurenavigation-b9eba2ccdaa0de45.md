---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b9eba2ccdaa0de45bb576d2bdaf3bb58723b56ed024ec8b1dfca3736a36e5267
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderingModule.TryConfigureNavigation(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportNavigationProfile@)
title: EditorRenderingModule.TryConfigureNavigation
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: 30d6c2324c47ebc1a7f61c845d232ac76112ae58c61ca39fc45abad99645f80b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `profile`:** Receives the selected controller profile.

## Returns

True when a contributor returned a usable navigation profile and became the controller.
