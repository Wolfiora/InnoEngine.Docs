---
title: "EditorViewportFocusBounds"
description: "Reference for EditorViewportFocusBounds in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.e17c7b11cd863876
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportFocusBounds`

This reference describes `EditorViewportFocusBounds` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.EditorViewportFocusBounds>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-31489536eefc0640) | Method |
| [`Equals`](#api-083a32f30111901d) | Method |
| [`Equals`](#api-47ae26f3884f229e) | Method |
| [`GetHashCode`](#api-9f5473a216d50ad4) | Method |
| [`op_Equality`](#api-876ae3b534c91487) | Method |
| [`op_Inequality`](#api-6e9d5cae1210fcd1) | Method |
| [`ToString`](#api-ea41376320a3745c) | Method |
| [`center`](#api-c2a3cac4532f54de) | Property |
| [`radius`](#api-b558ca946b9ad4b9) | Property |

## Type declaration

<a id="api-e17c7b11cd863876"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportFocusBounds e70fd227ca9c5e01ba4a9252772e261750f167eb1ee52e60fb7445cf28901736 -->

```csharp
public readonly struct InnoEditor.Rendering.EditorViewportFocusBounds : System.IEquatable<InnoEditor.Rendering.EditorViewportFocusBounds>
```

Describes a world-space sphere that can be framed by host navigation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `#ctor`

<a id="api-31489536eefc0640"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportFocusBounds.#ctor(InnoEngine.Mathematics.Vector3,System.Single) 8cae1929b9cc9e313d1b9e5ab99401985841c736a976aab0e50c13d3029d36f3 -->

```csharp
public InnoEditor.Rendering.EditorViewportFocusBounds.EditorViewportFocusBounds(InnoEngine.Mathematics.Vector3 center, float radius)
```

Creates a finite focus bound.

**Parameter `center`:** World-space focus center.

**Parameter `radius`:** Non-negative world-space radius.

**Throws `System.ArgumentException`:** Thrown when the center contains a non-finite value.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when the radius is negative or non-finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L142).

## `Equals`

<a id="api-083a32f30111901d"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportFocusBounds.Equals(InnoEditor.Rendering.EditorViewportFocusBounds) c2aed086f2d4c822a087358590a376662934908d04a737465cd8cbedffc8fd67 -->

```csharp
public bool InnoEditor.Rendering.EditorViewportFocusBounds.Equals(InnoEditor.Rendering.EditorViewportFocusBounds other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `Equals`

<a id="api-47ae26f3884f229e"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportFocusBounds.Equals(System.Object) 9737990b647053fd7f3c7c7ec6e68b552c00b2157512da96518e273ea24c72d2 -->

```csharp
public override bool InnoEditor.Rendering.EditorViewportFocusBounds.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `GetHashCode`

<a id="api-9f5473a216d50ad4"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportFocusBounds.GetHashCode 965069ad1c09ff1e076bd511fa0d5cf0e7d7e6a98e9110f876e19779448f067a -->

```csharp
public override int InnoEditor.Rendering.EditorViewportFocusBounds.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `op_Equality`

<a id="api-876ae3b534c91487"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportFocusBounds.op_Equality(InnoEditor.Rendering.EditorViewportFocusBounds,InnoEditor.Rendering.EditorViewportFocusBounds) 8d806cd08f0e38e8cd7b607080071d93f0b046c4f3eb1d3dfd674cbaeb2e9150 -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportFocusBounds.operator ==(InnoEditor.Rendering.EditorViewportFocusBounds left, InnoEditor.Rendering.EditorViewportFocusBounds right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `op_Inequality`

<a id="api-6e9d5cae1210fcd1"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportFocusBounds.op_Inequality(InnoEditor.Rendering.EditorViewportFocusBounds,InnoEditor.Rendering.EditorViewportFocusBounds) 78d5b9e53cc299ff37d97dc30b8ccda4d98e69aa8b98c9b7ac671a392234f856 -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportFocusBounds.operator !=(InnoEditor.Rendering.EditorViewportFocusBounds left, InnoEditor.Rendering.EditorViewportFocusBounds right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `ToString`

<a id="api-ea41376320a3745c"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportFocusBounds.ToString 816dc26adcf26344c9513d46e26ac866968c48dc2836becd6e32b3d2537acf47 -->

```csharp
public override string InnoEditor.Rendering.EditorViewportFocusBounds.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `center`

<a id="api-c2a3cac4532f54de"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportFocusBounds.center e022a07a329c93746c464bf48a6cb29a0b4f0aa5e80e0e8e8283180bd72a2927 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEditor.Rendering.EditorViewportFocusBounds.center { get; }
```

Gets the world-space focus center.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L157).

## `radius`

<a id="api-b558ca946b9ad4b9"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportFocusBounds.radius 1b3e1433083562bad08aa94160b1d4c97c3281e66527915ffbfb6f12ca0b34b6 -->

```csharp
public float InnoEditor.Rendering.EditorViewportFocusBounds.radius { get; }
```

Gets the non-negative world-space radius.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L162).
