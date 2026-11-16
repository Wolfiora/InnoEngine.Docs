---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.40b22b43659424765dcad42627dc5421de27e46feeae7185581e0b8b86d2cb74
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPanelExtension.TryGetWindowPresentation(System.Boolean@,System.Boolean@,System.Numerics.Vector2@)
title: EditorPanelExtension.TryGetWindowPresentation
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 42078a92650d18fc95a9f5c0b13917346f7fc5486383bb6dbb4c17c0ec25458e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `useWindowPadding`:** The requested padding policy, or the safe default when the panel is quarantined.

**Parameter `allowScrolling`:** The requested scrolling policy, or the safe default when the panel is quarantined.

**Parameter `initialSize`:** The preferred first-use floating size, or zero when native sizing is requested.

## Returns

`true` when the policy was read without quarantining the panel.
