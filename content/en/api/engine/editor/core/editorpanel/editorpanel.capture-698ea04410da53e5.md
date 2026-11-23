---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.698ea04410da53e5821de32abcedf0238be12d55cbd959c0a44eabc5013fd978
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Capture(Inno.Editor.Core.EditorState)
title: EditorPanel.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 3045a8445ef79e9a377bb133bec1a3ce155b682ce70f1955a3122b29ba14e001
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.

## Remarks

Overriding this method opts the panel into project-state IO. Panels that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes. Panel visibility is persisted separately for every registered panel.
