---
title: "NativeProjectPanelProbe"
description: "Reference for NativeProjectPanelProbe in Inno.Testing.Editor.Native."
uid: api.inno.testing.editor.native.bcda82bd35977805
kind: api
owners:
  - Inno.Testing.Editor.Native
apiSurface: source-clr
contracts:
  - project.inno-testing-editor-native
---
# `NativeProjectPanelProbe`

This reference describes `NativeProjectPanelProbe` in `Inno.Testing.Editor.Native`. Read the [shared contract](../../../../contributing/testing/support/inno-testing-editor-native.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-481ac8f5ae5e4f6a) | Method |
| [`edits`](#api-c7e9810c2f2085f2) | Property |
| [`graphs`](#api-d2910568371dd125) | Property |
| [`workspace`](#api-ea9664151b735f50) | Property |

## Type declaration

<a id="api-bcda82bd35977805"></a>
<!-- api: T:Inno.Testing.Editor.Native.NativeProjectPanelProbe 0545ceabceb007bbf960592d616c18515557fae784bfbaa8c059b22bc8aed11b -->

```csharp
public sealed class Inno.Testing.Editor.Native.NativeProjectPanelProbe : Inno.Editor.Core.EditorModule
```

Resolves the actual workspace and editing services through public Editor module composition.

**Parameter `workspace`:** The composed scene workspace.

**Parameter `graphs`:** The composed graph editor module.

**Parameter `edits`:** The composed scene editing service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelProbe.cs#L15).

## `#ctor`

<a id="api-481ac8f5ae5e4f6a"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativeProjectPanelProbe.#ctor(Inno.Editor.Scene.IEditorSceneWorkspace,Inno.Editor.Graph.GraphEditorModule,Inno.Editor.Scene.SceneEdits) 1350df2a73e7ddd2f7750bbd741331de2caf62a3576860cd4ea652451c5553b0 -->

```csharp
public Inno.Testing.Editor.Native.NativeProjectPanelProbe.NativeProjectPanelProbe(Inno.Editor.Scene.IEditorSceneWorkspace workspace, Inno.Editor.Graph.GraphEditorModule graphs, Inno.Editor.Scene.SceneEdits edits)
```

Resolves the actual workspace and editing services through public Editor module composition.

**Parameter `workspace`:** The composed scene workspace.

**Parameter `graphs`:** The composed graph editor module.

**Parameter `edits`:** The composed scene editing service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelProbe.cs#L15).

## `edits`

<a id="api-c7e9810c2f2085f2"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelProbe.edits d1bcf8a69480db4b8597db80bd66c2590c0d7b406f6dba7926686c026eaec336 -->

```csharp
public Inno.Editor.Scene.SceneEdits Inno.Testing.Editor.Native.NativeProjectPanelProbe.edits { get; }
```

Gets the borrowed scene editing service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelProbe.cs#L31).

## `graphs`

<a id="api-d2910568371dd125"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelProbe.graphs 4c6ead9be440bd66b9a540a95d5ffae42d6e81e67ab5175d0eee9a1e805da181 -->

```csharp
public Inno.Editor.Graph.GraphEditorModule Inno.Testing.Editor.Native.NativeProjectPanelProbe.graphs { get; }
```

Gets the borrowed graph editor module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelProbe.cs#L27).

## `workspace`

<a id="api-ea9664151b735f50"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelProbe.workspace d2cc67dc5e46362cfa320428cfbbaee6096ea3f10144efb8a5b59ce63e5916fc -->

```csharp
public Inno.Editor.Scene.IEditorSceneWorkspace Inno.Testing.Editor.Native.NativeProjectPanelProbe.workspace { get; }
```

Gets the borrowed scene workspace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelProbe.cs#L23).
