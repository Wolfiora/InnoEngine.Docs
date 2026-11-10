---
exampleMode: editor-script
exampleProjects: [Inno.Editor.Annotations]
title: Inno.Editor.Annotations
description: Stateless Inspector presentation metadata with an explicit authoring-only script surface.
uid: api.projects.inno-editor-annotations
kind: project
owners: [Inno.Editor.Annotations]
contracts: [architecture.ownership]
---
# Inno.Editor.Annotations

This project defines Inspector authoring annotations. It uses `System.Attribute` and assembly/export identity contracts, without depending on Serialization, Scene, Rendering, ImGui or a panel. Inspection interprets the metadata; Serialization remains responsible for data.

## Choose presentation metadata

All presentation attributes derive from `InspectorPresentationAttribute` and share writable display ordering.

| Annotation | Reader-visible effect |
| --- | --- |
| `Header` | A group title with an optional hover description. |
| `Text` | Persistent neutral explanation. |
| `Space` | Logical-pixel spacing. |
| `Tooltip` | Row hover help without permanent layout space. |
| `InspectorName` | Display naming without changing a persistent property key. |
| `Range` | Numeric editing limits, not runtime value validation. |
| `InspectorReadOnly` | Disabled editing. |
| `ShowIf` / `HideIf` | Visibility based on an identified member and condition. |
| `HelpBox` | An informational, warning or error card with optional conditions. |

Conditions include truthiness, equality, nullness and assignment. Read each overload for its exact accepted values. Invalid titles/member names, ranges and spacing are rejected as specified; invalid metadata conditions produce Inspector diagnostics.

## Annotate a script property

This example belongs to an authoring script compilation with the actual runtime and Editor annotation facades:

```csharp
using InnoEngine.Scene;
using InnoEngine.Serialization;
using InnoEditor.Annotations;

public sealed class Mover : GameBehavior
{
    [SerializableProperty]
    [Header("Movement", "World units per second.")]
    [Tooltip("Maximum movement speed.")]
    [Range(0, 30)]
    public float speed { get; set; } = 6;
}
```

The annotation does not make a property serializable. `SerializableProperty` remains explicit. Runtime validation also remains a domain responsibility; an Inspector slider cannot enforce values written by other code.

## Loading and script availability

The assembly uses `AssemblyScope.Runtime`, allowing authoring game modules to retain pure metadata. Its export scope is `ScriptingApiScope.Authoring`. These describe different boundaries: loading dependencies versus publication semantics.

Host Editor code uses `Inno.Editor.Annotations`; authoring scripts use `InnoEditor.Annotations`. Player compilation erases authoring annotations, custom derived annotation declarations and their related imports before binding platform assemblies. The final Player does not retain this assembly reference. This does not grant game scripts access to Editor hosts, panels or drawing services.

## Extend the presentation contract

Derive from `InspectorPresentationAttribute` to introduce metadata and provide the corresponding `InspectorAttributeDrawer` through the Inspection extension system. Store only scalar values, strings and enums. An attribute has no protected lifecycle hook and must not own services or live resources.

Drawers rebuild with the TypeCache generation. Static retention of collectible types would prevent retirement. The source reference describes the CLR contracts; correct authoring erasure and script export remain separate validation obligations.

## API reference

Exact constructors, condition enums and inherited contracts come from the bound source facts. Presentation metadata has no initialization or disposal sequence of its own.

[Browse annotation types](../types/editor-annotations/index.md).
