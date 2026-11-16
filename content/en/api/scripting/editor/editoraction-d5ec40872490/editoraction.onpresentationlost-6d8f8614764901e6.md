---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6d8f8614764901e6396dae8a35a73cdd2f30a3840ab44bbd9d56cfddec96e490
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorAction.OnPresentationLost
title: EditorAction.OnPresentationLost
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 432cc89eaa85e0030c2ed9ecedfd58b353ea5ce9710827f5704cc9483fb9dbe7
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The default behavior cancels the active operation. An action that owns an editable value may override this method to validate and commit that value. The operation is cancelled automatically when an override returns without calling `M:InnoEditor.Interactions.EditorAction.Complete` or `M:InnoEditor.Interactions.EditorAction.Cancel`.
