---
title: "EditorViewportKindId"
description: "Reference for EditorViewportKindId in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.41289c38010e81ce
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportKindId`

This reference describes `EditorViewportKindId` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorViewportKindId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-28ee0604cad22d00) | Method |
| [`Equals`](#api-bb8efbc4a2a7512a) | Method |
| [`Equals`](#api-8075f2a86c670c43) | Method |
| [`GetHashCode`](#api-36dcd82598cc7c96) | Method |
| [`op_Equality`](#api-4db985da4f0d9b1b) | Method |
| [`op_Inequality`](#api-8438cc0c9b8bb4f5) | Method |
| [`ToString`](#api-663dcb3d724f5781) | Method |
| [`isValid`](#api-89d5b6b9c985f041) | Property |
| [`value`](#api-cec1a2c2f0e58d9d) | Property |

## Type declaration

<a id="api-41289c38010e81ce"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportKindId c627545730471230199ef0035fb9758fa76f7ec021ef3745b58c8642b54b1869 -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorViewportKindId : System.IEquatable<Inno.Editor.Rendering.EditorViewportKindId>
```

Identifies one open Editor viewport purpose without prescribing rendering semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `#ctor`

<a id="api-28ee0604cad22d00"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportKindId.#ctor(System.String) 48a546bdaaad2c1d29bc5203aeff080ad7f65e475364b28291e5ecdecb3cb2ff -->

```csharp
public Inno.Editor.Rendering.EditorViewportKindId.EditorViewportKindId(string value)
```

Creates a stable viewport purpose identifier.

**Parameter `value`:** Globally stable viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L24).

## `Equals`

<a id="api-bb8efbc4a2a7512a"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportKindId.Equals(Inno.Editor.Rendering.EditorViewportKindId) cccb04fd488b61472b9a24775b47ef30c463f8665208d746ef2539df2913fdd8 -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportKindId.Equals(Inno.Editor.Rendering.EditorViewportKindId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `Equals`

<a id="api-8075f2a86c670c43"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportKindId.Equals(System.Object) 9101449cfac384da2622c9c5f4c5852609a9477964abdf21ac91ae2f882615c5 -->

```csharp
public override bool Inno.Editor.Rendering.EditorViewportKindId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `GetHashCode`

<a id="api-36dcd82598cc7c96"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportKindId.GetHashCode e4a3fd1a0c4e1f058d26b40b5d576f9d761947ae1d8f43c5e32ac18336bbef7f -->

```csharp
public override int Inno.Editor.Rendering.EditorViewportKindId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `op_Equality`

<a id="api-4db985da4f0d9b1b"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportKindId.op_Equality(Inno.Editor.Rendering.EditorViewportKindId,Inno.Editor.Rendering.EditorViewportKindId) 22b145f39c19377b8a4c644a31519ea3b405e6b5a0afe90ad861ae38b6b3581c -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportKindId.operator ==(Inno.Editor.Rendering.EditorViewportKindId left, Inno.Editor.Rendering.EditorViewportKindId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `op_Inequality`

<a id="api-8438cc0c9b8bb4f5"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportKindId.op_Inequality(Inno.Editor.Rendering.EditorViewportKindId,Inno.Editor.Rendering.EditorViewportKindId) 6ed0598fd53025f1c03db71c76cf9d137b71302a2fa6f70898d307617ba385f4 -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportKindId.operator !=(Inno.Editor.Rendering.EditorViewportKindId left, Inno.Editor.Rendering.EditorViewportKindId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `ToString`

<a id="api-663dcb3d724f5781"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportKindId.ToString c12197cc14adc0c798c3a1272f3f7cee96c6db15494aee95b3d005beabcac025 -->

```csharp
public override string Inno.Editor.Rendering.EditorViewportKindId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L46).

## `isValid`

<a id="api-89d5b6b9c985f041"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportKindId.isValid 46ef63b29df4c10dfdc4395b09ebc6b84e623c20a57f2b029d6e9986de97a9cb -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportKindId.isValid { get; }
```

Gets whether this identifier is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L38).

## `value`

<a id="api-cec1a2c2f0e58d9d"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportKindId.value 80af401fecd1afa91b7fcfef8f22cce1b4301bfb081bf13cbe01f4dad88f4a7f -->

```csharp
public string Inno.Editor.Rendering.EditorViewportKindId.value { get; }
```

Gets the stable viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L33).
