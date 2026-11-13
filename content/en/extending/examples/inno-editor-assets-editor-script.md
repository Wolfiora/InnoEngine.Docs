---
title: Inno.Editor.Assets editor-script examples
description: Verified logical API use sites with the owning feature lifecycle kept explicit.
uid: examples.inno-editor-assets.editor-script
kind: how-to
owners:
  - Inno.Editor.Assets
contracts:
  - project.inno-editor-assets
exampleMode: editor-script
exampleProjects:
  - Inno.Editor.Assets
---
# Inno.Editor.Assets editor-script examples

These examples use the selected logical script surface. Read [the feature contract](../../architecture/projects/inno-editor-assets.md) before adapting them. Host implementation namespaces and host-only readiness services are not substitutes for these references.

Provide the live services or authored source context required by each declaration. Compilation verifies these use sites, not device execution or completion of a reload lifecycle.

```csharp
using InnoEditor.Assets;
using InnoEngine.Assets;
using InnoEngine.Serialization;

public sealed class DialogueAsset : AssetObject
{
    [SerializableProperty]
    public string text { get; set; } = string.Empty;
}

[AssetCreationMenu("example.asset-create.dialogue", "Gameplay/Dialogue", ".dialogue", "New Dialogue", groupOrder: 400)]
public sealed class DialogueCreationTemplate : AssetCreationTemplate<DialogueAsset>
{
}
```
