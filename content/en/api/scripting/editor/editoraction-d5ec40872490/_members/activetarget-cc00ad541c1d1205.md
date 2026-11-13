---
uid: api.cc00ad541c1d12055d02ccaed842f20d84fa6106591910fbb9cef4fa6c8131fe
symbol: "scripting:Inno.Editor.Interactions:P:InnoEditor.Interactions.EditorAction.activeTarget"
source: xml
reviewed: 7ee7a81639fa2b69fbf2921c770247d611186460f73fe094f7c8bb67fae94a66
title: "activeTarget"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves the active target afresh for this callback; null means the identity is unavailable.

## Remarks

Do not retain the result across callbacks. Activation stores a domain-qualified reference rather than the live object.
