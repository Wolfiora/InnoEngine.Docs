---
title: Inno.Editor.PlayMode
description: "Atomic Edit/Play transitions with fresh script tickets, isolated scene/history/audio and verified retirement."
uid: project.inno-editor-playmode
kind: project
owners: [Inno.Editor.PlayMode]
exampleMode: host
exampleProjects: [Inno.Editor.PlayMode]
---
# Inno.Editor.PlayMode

Atomic Edit/Play transitions with fresh script tickets, isolated scene/history/audio and verified retirement.

## Enter and stop through one controller

[Play Mode](../../manual/editor/play-mode.md) describes its six states, fresh-ticket admission, isolated runtime world and presentation switch. The controller coordinates existing scene/script/audio/history owners rather than owning their formats or implementations. It never simulates by mutating the Edit world and later restoring bytes.

## Keep host and script surfaces distinct

IEditorPlayMode and EditorPlayModeState are selected script contracts. EditorPlayModeController and EditorPlayModeLoop are host infrastructure: frame-safe transition advancement, one tick per frame, coordinated shutdown and reload participation remain host-owned. Only the public interface/enum enter the projected script facade.

Manual Reload is admitted only while Editing. Automatic changes wait for completed Play retirement and do not stop the game. Required entry compilation can activate before Play resources exist; this is not permission for arbitrary manual Reload during Compiling. Pending disposal preserves owners/Stopping, and a faulted gate requires restart. State observation returns a disposable subscription and aggregates observer errors after notifying all listeners.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using Inno.Editor.PlayMode;

public static class Example0
{
    static bool Toggle(IEditorPlayMode playMode)
    {
        return playMode.state is EditorPlayModeState.Editing or EditorPlayModeState.Failed
            ? playMode.EnterPlayMode()
            : playMode.ExitPlayMode();
    }
}
```

## Script examples

- [Explicit editor-script surface](../../extending/examples/inno-editor-playmode-editor-script.md)

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Inno.Editor.PlayMode.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../../api/engine/editor/playmode/index.md) preserve captured declarations and source XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../../api/scripting/index.md)
