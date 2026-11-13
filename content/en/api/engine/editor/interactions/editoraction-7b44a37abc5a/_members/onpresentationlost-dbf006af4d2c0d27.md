---
uid: api.dbf006af4d2c0d27c768db6fe9f173356ad689477bf141c799972dfcc065aad7
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorAction.OnPresentationLost"
source: xml
reviewed: e29149f84517fea3c8a1fecafb451c9b6343e5f7acbefd8da8397b8169c3e87c
title: "OnPresentationLost"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Runs when this action's active target loses editor presentation focus.

## Remarks

The default behavior cancels the active operation. An action that owns an editable value may override this method to validate and commit that value. The operation is cancelled automatically when an override returns without calling `M:Inno.Editor.Interactions.EditorAction.Complete` or `M:Inno.Editor.Interactions.EditorAction.Cancel`.
