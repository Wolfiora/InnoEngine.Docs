---
title: Inno.Editor.Scripting runtime-script examples
description: Verified logical API use sites with the owning feature lifecycle kept explicit.
uid: examples.inno-editor-scripting.runtime-script
kind: how-to
owners: [Inno.Editor.Scripting]
contracts: [project.inno-editor-scripting]
exampleMode: runtime-script
exampleProjects: [Inno.Editor.Scripting]
---
# Inno.Editor.Scripting runtime-script examples

These examples use the selected logical script surface. Read [the feature contract](../../api/projects/inno-editor-scripting.md) before adapting them. Host implementation namespaces and host-only readiness services are not substitutes for these references.

Provide the live services or authored source context required by each declaration. Compilation verifies these use sites, not device execution or completion of a reload lifecycle.

```csharp
using InnoEngine.Logging;
using InnoEngine.Reflection;
using InnoEngine.Scene;
using InnoEngine.Serialization;

[StableTypeId("c14f7138-0c5c-4e69-8376-cec8edc3056c")]
public sealed class PlayerController : GameBehavior
{
    [SerializableProperty]
    private float m_speed = 5f;

    protected override void Update()
    {
        Log.Debug(typeof(PlayerController), "Speed: {0}", [m_speed]);
    }
}
```
