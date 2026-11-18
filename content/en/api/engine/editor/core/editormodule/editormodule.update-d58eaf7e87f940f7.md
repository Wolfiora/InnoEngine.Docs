---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d58eaf7e87f940f74986d55f1c6eecd69b87335c485c7a64054065ae5ba53063
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Update(Inno.Editor.Core.EditorContext)
title: EditorModule.Update
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: ebe68fa701091e923881288e10925b826e4628ced2d0c21be1075329e6e46afa
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context containing the current frame state.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:System.InvalidOperationException`:** Thrown when the module is not started.
