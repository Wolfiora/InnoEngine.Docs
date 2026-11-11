---
title: "EditorGizmoLine"
description: "Reference for EditorGizmoLine in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.a3607169ea34e0ec
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorGizmoLine`

This reference describes `EditorGizmoLine` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorGizmoLine>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3ce51f6b45051380) | Method |
| [`Deconstruct`](#api-2e934cc46abfdef6) | Method |
| [`Equals`](#api-f1ba476b392eb9d4) | Method |
| [`Equals`](#api-794490467db0a417) | Method |
| [`GetHashCode`](#api-5648e1337ffbd5e3) | Method |
| [`op_Equality`](#api-0aea6dd896cbdb2b) | Method |
| [`op_Inequality`](#api-8f284653393d4a5a) | Method |
| [`ToString`](#api-9ff9618cdd96cb3f) | Method |
| [`end`](#api-33487d91b7d4210d) | Property |
| [`start`](#api-2325dda3c701b3b1) | Property |

## Type declaration

<a id="api-a3607169ea34e0ec"></a>
<!-- api: T:Inno.Editor.Rendering.EditorGizmoLine b1e038c4efa86df62067a2dcdf5df0f9fbd99b023f3e0fe5c414281857bda33f -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorGizmoLine : System.IEquatable<Inno.Editor.Rendering.EditorGizmoLine>
```

One non-interactive Editor line.

**Parameter `start`:** The vector3 value used to initialize this instance.

**Parameter `end`:** The vector3 value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `#ctor`

<a id="api-3ce51f6b45051380"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 1ab69bb91d5b06c6a2c70519b94b0e5f912d4217a73d3aa518777b552912c34f -->

```csharp
public Inno.Editor.Rendering.EditorGizmoLine.EditorGizmoLine(Inno.Core.Mathematics.Vector3 start, Inno.Core.Mathematics.Vector3 end)
```

One non-interactive Editor line.

**Parameter `start`:** The vector3 value used to initialize this instance.

**Parameter `end`:** The vector3 value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `Deconstruct`

<a id="api-2e934cc46abfdef6"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.Deconstruct(Inno.Core.Mathematics.Vector3@,Inno.Core.Mathematics.Vector3@) d586bb5d0b808c7ee2f210b66aff847bf21c44d86a17b998690c85d17de9d3a8 -->

```csharp
public void Inno.Editor.Rendering.EditorGizmoLine.Deconstruct(out Inno.Core.Mathematics.Vector3 start, out Inno.Core.Mathematics.Vector3 end)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `Equals`

<a id="api-f1ba476b392eb9d4"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.Equals(Inno.Editor.Rendering.EditorGizmoLine) ba54e834425c4e822b58d9a8a262592cfd007759e5171fddbb598b1aeab95ea0 -->

```csharp
public bool Inno.Editor.Rendering.EditorGizmoLine.Equals(Inno.Editor.Rendering.EditorGizmoLine other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `Equals`

<a id="api-794490467db0a417"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.Equals(System.Object) 5ab81f5aec576f2f5d71793520eeb4eb684b3b1e2b922083cdd9787b3ab6a5f7 -->

```csharp
public override bool Inno.Editor.Rendering.EditorGizmoLine.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `GetHashCode`

<a id="api-5648e1337ffbd5e3"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.GetHashCode 57f92e75a5532f7e76b8a3b16d347af2cae5c91cac7586b88743fa122133bf37 -->

```csharp
public override int Inno.Editor.Rendering.EditorGizmoLine.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `op_Equality`

<a id="api-0aea6dd896cbdb2b"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.op_Equality(Inno.Editor.Rendering.EditorGizmoLine,Inno.Editor.Rendering.EditorGizmoLine) 695ecdce47dc1d81fe622ad065fad9ba6d90cd3a4f7a72ac2124514cfb15edb3 -->

```csharp
public static bool Inno.Editor.Rendering.EditorGizmoLine.operator ==(Inno.Editor.Rendering.EditorGizmoLine left, Inno.Editor.Rendering.EditorGizmoLine right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `op_Inequality`

<a id="api-8f284653393d4a5a"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.op_Inequality(Inno.Editor.Rendering.EditorGizmoLine,Inno.Editor.Rendering.EditorGizmoLine) 6a1fc647512a12678f97e7b56e543640f0c1efd8b61b4ac234404473c8ed43ad -->

```csharp
public static bool Inno.Editor.Rendering.EditorGizmoLine.operator !=(Inno.Editor.Rendering.EditorGizmoLine left, Inno.Editor.Rendering.EditorGizmoLine right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `ToString`

<a id="api-9ff9618cdd96cb3f"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoLine.ToString b30eece653b115ed37d4c6b366d46db6a2168236c6d278cd94546e414ef4fa48 -->

```csharp
public override string Inno.Editor.Rendering.EditorGizmoLine.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L168).

## `end`

<a id="api-33487d91b7d4210d"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoLine.end f71f78a19f6f307ba00fd02050779d09416dc15aca436b2d219c4558b77c5a6a -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Editor.Rendering.EditorGizmoLine.end { get; init; }
```

The vector3 value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L170).

## `start`

<a id="api-2325dda3c701b3b1"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoLine.start b74e3046e77463141afbf12664a7a74868e226c2330781f4d589c5687e69e7bf -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Editor.Rendering.EditorGizmoLine.start { get; init; }
```

The vector3 value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L169).
