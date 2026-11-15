---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d58eaf7e87f940f74986d55f1c6eecd69b87335c485c7a64054065ae5ba53063
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Update(Inno.Editor.Core.EditorContext)
title: EditorModule.Update
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 869309eef342d8410a8238ec941e29381f005fb82dfb8bb1d296c1f6064b49c5

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context containing the current frame state.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:System.InvalidOperationException`:** Thrown when the module is not started.
