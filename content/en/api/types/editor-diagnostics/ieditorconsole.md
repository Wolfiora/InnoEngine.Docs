---
title: "IEditorConsole"
description: "Reference for IEditorConsole in Inno.Editor.Diagnostics."
uid: api.inno.editor.diagnostics.4a741b6472da6bd6
kind: api
owners:
  - Inno.Editor.Diagnostics
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-diagnostics#lifetime-and-policy
---
# `IEditorConsole`

This reference describes `IEditorConsole` in `Inno.Editor.Diagnostics`. Read the [shared contract](../../projects/inno-editor-diagnostics.md#lifetime-and-policy) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-53c5582c46103910) | Method |
| [`Clear`](#api-712e2a2e3b8fe173) | Method |
| [`capacity`](#api-a8e40cde91935fd7) | Property |
| [`clearOnPlay`](#api-5902ed4ad8e07244) | Property |

## Type declaration

<a id="api-4a741b6472da6bd6"></a>
<!-- api: T:Inno.Editor.Diagnostics.IEditorConsole 23c2a0052f575253e66fb7bf0afad9368cdf69ba8710fab03216d40049818f88 -->

```csharp
public interface Inno.Editor.Diagnostics.IEditorConsole
```

Exposes read-only editor Console snapshots and explicit retention controls to editor features.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/IEditorConsole.cs#L6).

## `Capture`

<a id="api-53c5582c46103910"></a>
<!-- api: M:Inno.Editor.Diagnostics.IEditorConsole.Capture 4ed92703a60ed74eb3f69aa81391af98265023e0fddff00479f0a67ba218d774 -->

```csharp
Inno.Editor.Diagnostics.EditorConsoleSnapshot Inno.Editor.Diagnostics.IEditorConsole.Capture()
```

Captures an immutable snapshot containing both individual occurrences and global groups.

**Returns:** A consistent snapshot that remains valid while new entries arrive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/IEditorConsole.cs#L25).

## `Clear`

<a id="api-712e2a2e3b8fe173"></a>
<!-- api: M:Inno.Editor.Diagnostics.IEditorConsole.Clear 38c0b8330f49e37fab550b2971d447d0b920fec2d710cc8d4b8e3ce25d4cdcd5 -->

```csharp
void Inno.Editor.Diagnostics.IEditorConsole.Clear()
```

Removes retained logs while keeping currently reported issues visible until their owners resolve them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/IEditorConsole.cs#L30).

## `capacity`

<a id="api-a8e40cde91935fd7"></a>
<!-- api: P:Inno.Editor.Diagnostics.IEditorConsole.capacity c9c7564c5d8deed7cb29d972db4af774b08f6205ad96251d17b10998aeae1311 -->

```csharp
int Inno.Editor.Diagnostics.IEditorConsole.capacity { get; set; }
```

Gets or sets the maximum number of ordinary log occurrences retained in memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/IEditorConsole.cs#L11).

## `clearOnPlay`

<a id="api-5902ed4ad8e07244"></a>
<!-- api: P:Inno.Editor.Diagnostics.IEditorConsole.clearOnPlay b2ebd59c240fd48d40bab855c66a78f584295e4fc6c7f056598982e30c0cbae6 -->

```csharp
bool Inno.Editor.Diagnostics.IEditorConsole.clearOnPlay { get; set; }
```

Gets or sets whether ordinary Console logs are cleared when a new Play Mode request begins.
Current diagnostics remain visible because they represent active compiler and subsystem state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Diagnostics/IEditorConsole.cs#L17).
