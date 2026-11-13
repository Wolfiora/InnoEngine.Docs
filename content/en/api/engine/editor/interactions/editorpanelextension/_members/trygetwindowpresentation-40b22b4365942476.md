---
uid: api.40b22b43659424765dcad42627dc5421de27e46feeae7185581e0b8b86d2cb74
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPanelExtension.TryGetWindowPresentation(System.Boolean@,System.Boolean@,System.Numerics.Vector2@)"
source: xml
reviewed: fcaf4d3aedcea8b4f1c26ecc23982d6d88158b46452110040fa080c72e239fd8
title: "TryGetWindowPresentation"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Safely reads the panel window-presentation policy through the active extension boundary.

**Parameter `useWindowPadding`:** The requested padding policy, or the safe default when the panel is quarantined.

**Parameter `allowScrolling`:** The requested scrolling policy, or the safe default when the panel is quarantined.

**Parameter `initialSize`:** The preferred first-use floating size, or zero when native sizing is requested.

**Returns:** `true` when the policy was read without quarantining the panel.
