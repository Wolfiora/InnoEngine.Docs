---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6d8f8614764901e6396dae8a35a73cdd2f30a3840ab44bbd9d56cfddec96e490
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorAction.OnPresentationLost
title: EditorAction.OnPresentationLost
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 6a529e151d63c75813c1671e2ecd605bc04d9c2afcdbcc26577c6d24ea48299f
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The default behavior cancels the active operation. An action that owns an editable value may override this method to validate and commit that value. The operation is cancelled automatically when an override returns without calling `M:InnoEditor.Interactions.EditorAction.Complete` or `M:InnoEditor.Interactions.EditorAction.Cancel`.
