---
title: Inno.Editor.Panel.Hierarchy
description: "Scene/object hierarchy presentation, typed drop geometry and domain-owned reversible actions."
uid: project.inno-editor-panel-hierarchy
kind: project
owners: [Inno.Editor.Panel.Hierarchy]
exampleMode: host
exampleProjects: [Inno.Editor.Panel.Hierarchy]
---
# Inno.Editor.Panel.Hierarchy

Scene/object hierarchy presentation, typed drop geometry and domain-owned reversible actions.

## Use the current scene workspace

[Hierarchy tasks](../../manual/editor/hierarchy.md) explain additive scene navigation, renaming, reordering, cross-scene moves, persistence and Play behavior. The panel delegates reversible changes to SceneEdits and does not implement its own snapshots or undo.

The selected public drop targets are borrowed for the current synchronous request. Do not retain them across a frame, generation or History payload. Actions use the existing interaction area and actual target type; active-scene navigation is not a content History entry.

## Presentation ownership

Internal HierarchyStyle owns row spacing, rename/drop geometry and inactive color. Visible row caches contain runtime identity/depth and follow hierarchy revision/expansion, not strong references to obsolete scene objects. Shared tree controls provide current-frame geometry, one scroll coordinate system and foreground overlays. Settings supplies the same scene/object icon values used by assets and Inspector; no second resolver or icon constants are introduced.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using Inno.Editor.Interactions;
using Inno.Editor.Scene;
using Inno.Scene;

[EditorAction("sample/scene/activate", "panel/scene.hierarchy")]
[EditorMenu("panel/scene.hierarchy", "Set Active Scene", order: 500)]
public sealed class ActivateSceneAction : EditorAction<GameScene>
{
    private readonly IEditorSceneWorkspace m_workspace;

    public ActivateSceneAction(IEditorSceneWorkspace workspace)
        => m_workspace = workspace;

    protected override void Execute(EditorActionContext<GameScene> context)
        => m_workspace.SetActiveScene(context.target);
}
```

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Inno.Editor.Panel.Hierarchy.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-presentation/inno-editor-panel-hierarchy/index.md) retain the engine-owned declarations and captured XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../editor-script/inno-editor-panel-hierarchy/index.md)
