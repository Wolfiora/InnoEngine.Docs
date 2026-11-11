---
title: Inno.Editor.PlayMode editor-script examples
description: Verified logical API use sites with the owning feature lifecycle kept explicit.
uid: examples.inno-editor-playmode.editor-script
kind: how-to
owners: [Inno.Editor.PlayMode]
contracts: [project.inno-editor-playmode]
exampleMode: editor-script
exampleProjects: [Inno.Editor.PlayMode]
---
# Inno.Editor.PlayMode editor-script examples

These examples use the selected logical script surface. Read [the feature contract](../../api/projects/inno-editor-playmode.md) before adapting them. Host implementation namespaces and host-only readiness services are not substitutes for these references.

Provide the live services or authored source context required by each declaration. Compilation verifies these use sites, not device execution or completion of a reload lifecycle.

```csharp
using InnoEditor.PlayMode;

public static class Example0
{
    static bool TryEnter(IEditorPlayMode playMode)
        => playMode.EnterPlayMode();
}
```
