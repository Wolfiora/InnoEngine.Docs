---
title: "EditorDropWidgetResult"
description: "Reference for EditorDropWidgetResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.369c185825b378d0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorDropWidgetResult`

This reference describes `EditorDropWidgetResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.ImGui.EditorDropWidgetResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-728bb463200c37d3) | Method |
| [`Equals`](#api-24562aea25b1516b) | Method |
| [`Equals`](#api-c0bc1f738178aca0) | Method |
| [`GetHashCode`](#api-506408ff0fa98b17) | Method |
| [`op_Equality`](#api-f82f09ea32d06f05) | Method |
| [`op_Inequality`](#api-ff8aae18fb7bcfce) | Method |
| [`ToString`](#api-9892fb0ac45c380c) | Method |
| [`isPreviewing`](#api-2af980ca30c3a916) | Property |
| [`none`](#api-d69deb12f9d9a33f) | Property |
| [`result`](#api-23d18e3666bf803b) | Property |
| [`status`](#api-fe93492ff392b5b6) | Property |

## Type declaration

<a id="api-369c185825b378d0"></a>
<!-- api: T:Inno.Editor.ImGui.EditorDropWidgetResult fcf5a69c5e193e587c60e48717e0b1d86c114fd273bbf8647bee78ba0688d5da -->

```csharp
public readonly record struct Inno.Editor.ImGui.EditorDropWidgetResult : System.IEquatable<Inno.Editor.ImGui.EditorDropWidgetResult>
```

Reports the preview and delivery state of an ImGui editor drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L74).

## `#ctor`

<a id="api-728bb463200c37d3"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDropWidgetResult.#ctor(System.Boolean,Inno.Editor.Interactions.EditorDropStatus,Inno.Editor.Interactions.EditorDropResult) 51c8afed2db64dd45d12179313614d5a100da678837bce6e159e55f61bd11071 -->

```csharp
public Inno.Editor.ImGui.EditorDropWidgetResult.EditorDropWidgetResult(bool isPreviewing, Inno.Editor.Interactions.EditorDropStatus status, Inno.Editor.Interactions.EditorDropResult result)
```

Creates a combined native-preview and managed-drop result.

**Parameter `isPreviewing`:** Whether a compatible native payload is currently hovering the target.

**Parameter `status`:** The compatibility and visual state returned by the managed drop router.

**Parameter `result`:** The result produced when the payload was delivered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L88).

## `Equals`

<a id="api-24562aea25b1516b"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDropWidgetResult.Equals(Inno.Editor.ImGui.EditorDropWidgetResult) 45368120522218992faea04278733d081c92eadbcff46bfce2b6443466c271e1 -->

```csharp
public bool Inno.Editor.ImGui.EditorDropWidgetResult.Equals(Inno.Editor.ImGui.EditorDropWidgetResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L74).

## `Equals`

<a id="api-c0bc1f738178aca0"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDropWidgetResult.Equals(System.Object) 514226d417e048cc71381b722da4479efb0ecb7ea6ace439e7cf840cd3298e9b -->

```csharp
public override bool Inno.Editor.ImGui.EditorDropWidgetResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L74).

## `GetHashCode`

<a id="api-506408ff0fa98b17"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDropWidgetResult.GetHashCode 76cefb46bf58bb88441a53615b768b4521158532b51d1994de9d1690d2cb8343 -->

```csharp
public override int Inno.Editor.ImGui.EditorDropWidgetResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L74).

## `op_Equality`

<a id="api-f82f09ea32d06f05"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDropWidgetResult.op_Equality(Inno.Editor.ImGui.EditorDropWidgetResult,Inno.Editor.ImGui.EditorDropWidgetResult) 7987f2a54570aa3b91e66c09959739ec7e606babfc058b010c4a6a700d942a87 -->

```csharp
public static bool Inno.Editor.ImGui.EditorDropWidgetResult.operator ==(Inno.Editor.ImGui.EditorDropWidgetResult left, Inno.Editor.ImGui.EditorDropWidgetResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L74).

## `op_Inequality`

<a id="api-ff8aae18fb7bcfce"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDropWidgetResult.op_Inequality(Inno.Editor.ImGui.EditorDropWidgetResult,Inno.Editor.ImGui.EditorDropWidgetResult) 38a081a614e3079cd4043d29a0581a9ac59d92b37f16b85e34cbbf12c0989709 -->

```csharp
public static bool Inno.Editor.ImGui.EditorDropWidgetResult.operator !=(Inno.Editor.ImGui.EditorDropWidgetResult left, Inno.Editor.ImGui.EditorDropWidgetResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L74).

## `ToString`

<a id="api-9892fb0ac45c380c"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDropWidgetResult.ToString a2d25247fa95db5379fa0039d4ffe19aab13ef548f93ea171f7d5547ec8c516d -->

```csharp
public override string Inno.Editor.ImGui.EditorDropWidgetResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L74).

## `isPreviewing`

<a id="api-2af980ca30c3a916"></a>
<!-- api: P:Inno.Editor.ImGui.EditorDropWidgetResult.isPreviewing 5447225d4ee1a13219bf9147837f67252ee6d389decf0a75892aa2ed68201a57 -->

```csharp
public bool Inno.Editor.ImGui.EditorDropWidgetResult.isPreviewing { get; }
```

Gets whether a compatible native payload is hovering the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L101).

## `none`

<a id="api-d69deb12f9d9a33f"></a>
<!-- api: P:Inno.Editor.ImGui.EditorDropWidgetResult.none 2f44cb17024e8618c8285389c571a8fd701f46eb682e403eee7b8e4d7fc24171 -->

```csharp
public static Inno.Editor.ImGui.EditorDropWidgetResult Inno.Editor.ImGui.EditorDropWidgetResult.none { get; }
```

Gets an inactive drop target result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L113).

## `result`

<a id="api-23d18e3666bf803b"></a>
<!-- api: P:Inno.Editor.ImGui.EditorDropWidgetResult.result 2341502ee7b17b173da7ad08d90b0199616e4ac4f9767c9c265e491302a69b88 -->

```csharp
public Inno.Editor.Interactions.EditorDropResult Inno.Editor.ImGui.EditorDropWidgetResult.result { get; }
```

Gets the delivered drop result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L109).

## `status`

<a id="api-fe93492ff392b5b6"></a>
<!-- api: P:Inno.Editor.ImGui.EditorDropWidgetResult.status 18cc5f78098e134add3c4a00eb9069492df8d7b5cecc9d950571aa48492a83e9 -->

```csharp
public Inno.Editor.Interactions.EditorDropStatus Inno.Editor.ImGui.EditorDropWidgetResult.status { get; }
```

Gets the managed drop compatibility status.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L105).
