---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d97985da7777599f4b3424616b4aeca082376ce1ffae2524bac17120e8ffdb38
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderingModule.TryConfigureNavigation(Inno.Editor.Rendering.EditorViewportKindID,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportNavigationProfile@)
title: EditorRenderingModule.TryConfigureNavigation
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: a8550319997bed8a2ba5f8bc32cbb41b8caf06c1a617cb15e583afba15523fa9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportID`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `profile`:** Receives the selected controller profile.

## Returns

True when a contributor returned a usable navigation profile and became the controller.
