---
uid: api.6d8f8614764901e6396dae8a35a73cdd2f30a3840ab44bbd9d56cfddec96e490
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorAction.OnPresentationLost"
source: xml
reviewed: 8584729b4f31913e5eb221f374801675eb8b25a76acd9ce30a2bfecb6f3cd759
title: "OnPresentationLost"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Runs when this action's active target loses editor presentation focus.

## Remarks

The default behavior cancels the active operation. An action that owns an editable value may override this method to validate and commit that value. The operation is cancelled automatically when an override returns without calling `M:InnoEditor.Interactions.EditorAction.Complete` or `M:InnoEditor.Interactions.EditorAction.Cancel`.
