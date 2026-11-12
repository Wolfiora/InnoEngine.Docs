---
title: Inno.Editor.Scene
description: "Scene document ownership, persistent-ID edits, minimal reversible History and atomic Edit/Play presentation."
uid: project.inno-editor-scene
kind: project
owners: [Inno.Editor.Scene]
exampleMode: host
exampleProjects: [Inno.Editor.Scene]
---
# Inno.Editor.Scene

Scene document ownership, persistent-ID edits, minimal reversible History and atomic Edit/Play presentation.

## Edit through the scene owner

[Scene document editing](../../manual/editor/scene-documents.md) explains source assignment, dirty state, Missing recovery and proportional History. Panels dispatch intent to SceneEdits; they do not each own snapshot/rollback algorithms. General Scene serialization does not depend on Editor History, and Scripting does not depend on Scene types.

## Preserve identity and atomicity

Handlers resolve persistent object/Stable Type IDs in the current generation. History stores scalar/property/element/subtree/document data proportional to the change, preserves reference aliases and compensates failed recording. Missing element types can be restored as placeholders rather than losing the logical type/property state. Failed compensation reports both causes and does not move the History stack as if successful.

IEditorSceneWorkspace owns query/Open/Save workflows. IEditorGameScenePresentation returns an operation-scoped ContentReadScope; IEditorScenePlayMode materializes and publishes a complete isolated runtime world. Those latter host protocols are not script APIs. Editor scripts receive the workspace and SceneEdits. Reload registration leases strongly retain their participant while held; the coordinator's weak index is not its lifetime owner.

Play changes are temporary, source synchronization is deferred, and persistence is rejected. Clean-source relocation and successful generation recovery do not become user edits; preexisting dirty state is never hidden.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using Inno.Editor.Interactions;
using Inno.Editor.Scene;
using Inno.Scene;
using Inno.Scene.Components;

public sealed class MarkerBehavior : GameBehavior { }

[EditorAction("example.add-marker", "scene/hierarchy")]
public sealed class AddMarkerAction(SceneEdits edits) : EditorAction<GameObject>
{
    protected override void Execute(EditorActionContext<GameObject> context)
        => edits.AddComponent(context.target, typeof(MarkerBehavior), "Add Marker");
}
```

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Inno.Editor.Scene.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-domains/inno-editor-scene/index.md) preserve captured declarations and source XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../editor-script/inno-editor-scene/index.md)
