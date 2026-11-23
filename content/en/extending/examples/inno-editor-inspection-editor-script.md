---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: examples.inno-editor-inspection.editor-script
kind: how-to

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners:
  - Inno.Editor.Inspection
contracts:
  - project.inno-editor-inspection
exampleMode: editor-script
exampleProjects:
  - Inno.Editor.Inspection

# Authoring metadata. Edit these fields and the text below.
title: Inno.Editor.Inspection editor-script examples
description: Verified logical API use sites with the owning feature lifecycle kept explicit.
---
# Inno.Editor.Inspection editor-script examples

These examples use the selected logical script surface. Read [the feature contract](../../architecture/projects/inno-editor-inspection.md) before adapting them. Host implementation namespaces and host-only readiness services are not substitutes for these references.

Provide the live services or authored source context required by each declaration. Compilation verifies these use sites, not device execution or completion of a reload lifecycle.

```csharp
using InnoEngine.Serialization;
using InnoEditor.Annotations;

public sealed class CharacterPresentation : ISerializable
{
    [SerializableProperty]
    [Header("Movement", "Values are authored in world units per second.")]
    [InspectorName("Move Speed")]
    [Tooltip("Maximum planar speed.")]
    [Range(0, 30)]
    public float speed { get; set; } = 6f;

    [SerializableProperty]
    public bool useAcceleration { get; set; }

    [SerializableProperty]
    [ShowIf(nameof(useAcceleration))]
    [Range(0, 100)]
    public float acceleration { get; set; } = 20f;
}
```

```csharp
using InnoEngine.Serialization;
using InnoEditor.Annotations;

public sealed class AuthoredValues : ISerializable
{
    [SerializableProperty]
    [Text("This message remains visible above the control.")]
    public float authoredValue { get; set; }
}
```
