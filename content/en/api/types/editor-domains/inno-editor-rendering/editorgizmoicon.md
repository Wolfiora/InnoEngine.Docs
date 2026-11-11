---
title: "EditorGizmoIcon"
description: "Reference for EditorGizmoIcon in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.68f2ed618e3123d1
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorGizmoIcon`

This reference describes `EditorGizmoIcon` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorGizmoIcon>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9d71ef16c0ab7e48) | Method |
| [`Deconstruct`](#api-85f745de0fdbf348) | Method |
| [`Equals`](#api-64a602ca133665e6) | Method |
| [`Equals`](#api-ec6e58390560d78c) | Method |
| [`GetHashCode`](#api-e5d131c80be83be2) | Method |
| [`op_Equality`](#api-bcff15ab51946725) | Method |
| [`op_Inequality`](#api-8dd027a099002d4f) | Method |
| [`ToString`](#api-9d6706514482eca6) | Method |
| [`iconId`](#api-1de6515e8384fbf7) | Property |
| [`owner`](#api-d1e796f1d4123009) | Property |
| [`position`](#api-9de8e4e9ef7818a4) | Property |

## Type declaration

<a id="api-68f2ed618e3123d1"></a>
<!-- api: T:Inno.Editor.Rendering.EditorGizmoIcon 15a4392a16a8c1b3413ddb79dd5bf9fcfcc9e3b144a273e59be335df128c8763 -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorGizmoIcon : System.IEquatable<Inno.Editor.Rendering.EditorGizmoIcon>
```

One selectable Editor icon.

**Parameter `owner`:** The object that owns the resulting lifetime and state.

**Parameter `position`:** The vector3 value used to initialize this instance.

**Parameter `iconId`:** The stable visual identity resolved by the Scene View presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `#ctor`

<a id="api-9d71ef16c0ab7e48"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.#ctor(Inno.Core.Identity.Identity,Inno.Core.Mathematics.Vector3,System.String) 44e566809295d8fd9ad8afd5a06fc1c2461c93070fa323b1aaa6d174b85ac218 -->

```csharp
public Inno.Editor.Rendering.EditorGizmoIcon.EditorGizmoIcon(Inno.Core.Identity.Identity owner, Inno.Core.Mathematics.Vector3 position, string iconId)
```

One selectable Editor icon.

**Parameter `owner`:** The object that owns the resulting lifetime and state.

**Parameter `position`:** The vector3 value used to initialize this instance.

**Parameter `iconId`:** The stable visual identity resolved by the Scene View presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `Deconstruct`

<a id="api-85f745de0fdbf348"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.Deconstruct(Inno.Core.Identity.Identity@,Inno.Core.Mathematics.Vector3@,System.String@) 0bd5ca22959ae289c25518df8831d0bd3a5a143ba61bab309349698f5a98f274 -->

```csharp
public void Inno.Editor.Rendering.EditorGizmoIcon.Deconstruct(out Inno.Core.Identity.Identity owner, out Inno.Core.Mathematics.Vector3 position, out string iconId)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `Equals`

<a id="api-64a602ca133665e6"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.Equals(Inno.Editor.Rendering.EditorGizmoIcon) 9725404ebd7b1cd888283c39b89ec45c170af28598e7a4ee378d90064b7fb765 -->

```csharp
public bool Inno.Editor.Rendering.EditorGizmoIcon.Equals(Inno.Editor.Rendering.EditorGizmoIcon other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `Equals`

<a id="api-ec6e58390560d78c"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.Equals(System.Object) a1ad7c9cdf7cddca9a6c1a92bfd0a92b6e638fc5973c7ae54d9e7eb49936bd9f -->

```csharp
public override bool Inno.Editor.Rendering.EditorGizmoIcon.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `GetHashCode`

<a id="api-e5d131c80be83be2"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.GetHashCode 8647576eb9e2459262e3c4f38246a497147f2ccb406fc5490f5e0a2b8ca3fdb1 -->

```csharp
public override int Inno.Editor.Rendering.EditorGizmoIcon.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `op_Equality`

<a id="api-bcff15ab51946725"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.op_Equality(Inno.Editor.Rendering.EditorGizmoIcon,Inno.Editor.Rendering.EditorGizmoIcon) 0d25e3642692d6cc02433373c6c1dc8883ffd54b9e6875b0bbbb91ef8429e957 -->

```csharp
public static bool Inno.Editor.Rendering.EditorGizmoIcon.operator ==(Inno.Editor.Rendering.EditorGizmoIcon left, Inno.Editor.Rendering.EditorGizmoIcon right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `op_Inequality`

<a id="api-8dd027a099002d4f"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.op_Inequality(Inno.Editor.Rendering.EditorGizmoIcon,Inno.Editor.Rendering.EditorGizmoIcon) 6d7d928d97a018143130f0190ffb7966fca27016eabab8222f32a1361b4f31d4 -->

```csharp
public static bool Inno.Editor.Rendering.EditorGizmoIcon.operator !=(Inno.Editor.Rendering.EditorGizmoIcon left, Inno.Editor.Rendering.EditorGizmoIcon right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `ToString`

<a id="api-9d6706514482eca6"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoIcon.ToString af2e7690b169327b907f35ff92afbe0a255c8e87378fce18cf5227f7b1f58520 -->

```csharp
public override string Inno.Editor.Rendering.EditorGizmoIcon.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L153).

## `iconId`

<a id="api-1de6515e8384fbf7"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoIcon.iconId 65f825b47912a65b4bcba519b7557378aa1adcdfbf87777bb1ae8fa92b619bc8 -->

```csharp
public string Inno.Editor.Rendering.EditorGizmoIcon.iconId { get; init; }
```

The stable visual identity resolved by the Scene View presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L156).

## `owner`

<a id="api-d1e796f1d4123009"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoIcon.owner 92196fcb2fdab791a4731591f0a15bee1cc6a2967c86d310f63614dc21a5d392 -->

```csharp
public Inno.Core.Identity.Identity Inno.Editor.Rendering.EditorGizmoIcon.owner { get; init; }
```

The object that owns the resulting lifetime and state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L154).

## `position`

<a id="api-9de8e4e9ef7818a4"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoIcon.position f9756fee4294658fd695fac059b1d513d0ca4f8177cfa1de4eb1983af91e029c -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Editor.Rendering.EditorGizmoIcon.position { get; init; }
```

The vector3 value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L155).
