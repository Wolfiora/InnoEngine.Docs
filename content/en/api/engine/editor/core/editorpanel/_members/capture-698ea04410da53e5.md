---
uid: api.698ea04410da53e5821de32abcedf0238be12d55cbd959c0a44eabc5013fd978
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Capture(Inno.Editor.Core.EditorState)"
source: xml
reviewed: 7917373c8af70e20c8c26a0bd354b4fd2e631ddb395bd71eecc6ff13c7e2625d
title: "Capture"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Captures readable project state owned by this panel.

## Remarks

Overriding this method opts the panel into project-state IO. Panels that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes. Panel visibility is persisted separately for every registered panel.

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.
