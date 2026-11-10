---
exampleMode: host
exampleProjects: [Inno.Editor.Core]
title: Preserve Editor extension state
description: Persist neutral Module and Panel state without saving live objects or bypassing host-owned layout storage.
uid: extending.editor-state
kind: how-to
owners: [Inno.Editor.Core, Inno.Editor.Interactions]
contracts: [architecture.editor-generations, manual.identity-and-missing]
---
# Preserve Editor extension state

Modules and panels opt into project state by overriding `Capture(EditorState)`. The host identifies their sections using the existing attribute ID, restores them after activation and writes one readable `editor.ini`. A separate settings document owns business preferences.

## Implement capture and restore

The following host-side module stores a persistent document identity and a zoom value:

```csharp
using System;
using Inno.Editor.Core;

[EditorModule("example.navigation")]
public sealed class NavigationModule : EditorModule
{
    private Guid m_documentId;
    private float m_zoom = 1f;

    protected override void Capture(EditorState state)
    {
        state.Set("document", m_documentId);
        state.Set("zoom", m_zoom);
    }

    protected override void Restore(EditorState state)
    {
        m_documentId = state.Get("document", Guid.Empty);
        m_zoom = state.Get("zoom", 1f);
    }
}
```

Capture receives writable state; restore receives a read-only view. `Get` uses the supplied fallback when a section/value is absent or cannot be read. An extension that does not override capture does not create an empty section or participate in state IO. Panel visibility is saved independently by stable panel ID.

Store project-related neutral values, such as persistent IDs, paths, numbers and strings. Resolve current runtime objects after restoration. Do not save threads, delegates, types, live resources or plugin instances, or add an independent schema/alias mechanism around the host format.

## Understand what survives

| State | Lifetime |
| --- | --- |
| Captured module/panel values | Project `editor.ini` sections. |
| Panel `isOpen` | Automatically retained by panel identity. |
| ImGui layout | A separate part of the same host-owned document. |
| Selection and focus | Current Editor session; not restored from disk. |
| Undo history, dirty content and compiler intermediates | Their real owner; not extension-state persistence. |

Complex values occupy a readable JSON value in one INI entry rather than an opaque whole-document payload. Unknown extension sections remain, so temporarily removing a plugin does not erase its state. The host throttles changed-content saves during normal execution and forces final capture/write before teardown. `EditorInteractionRuntime.SaveState()` is the explicit host capture/flush boundary.

## Avoid reentrant restoration

The runtime weakly tracks restoration by instance. Only a successfully restored instance can later capture. Reentrant compilation or type refresh during a restore callback must not restore the instance twice or overwrite disk state with uninitialized defaults. Reusing an instance does not itself prove it has completed its first restore.

## Preserve additional reload-only bytes

A panel implementing `IEditorPanelReloadState` can capture additional neutral bytes across generation replacement. It must not place references to plugin objects in that payload. This is separate from visibility and project state. See the [panel task](editor-panels.md) for the lifecycle in which the callbacks run.

Scripts can implement the exported state hooks. They cannot access raw sections, save another extension's state or call host-only layout methods directly.
