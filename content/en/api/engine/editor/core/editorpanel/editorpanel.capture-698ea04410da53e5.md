---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.698ea04410da53e5821de32abcedf0238be12d55cbd959c0a44eabc5013fd978
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Capture(Inno.Editor.Core.EditorState)
title: EditorPanel.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: bc889f608dfdf76af262a533b2089e6f922039ebcf6aa94b8422cec6a6422586
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Overriding this method opts the panel into project-state IO. Panels that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes. Panel visibility is persisted separately for every registered panel.

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.
