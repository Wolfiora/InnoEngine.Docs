---
title: "RenderPhaseId"
description: "Reference for RenderPhaseId in Inno.Rendering."
uid: api.inno.rendering.runtime-script.551c2955cac6e73c
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderPhaseId`

This reference describes `RenderPhaseId` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderPhaseId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-80c572bf0b99010d) | Method |
| [`Equals`](#api-20c85b051b7df061) | Method |
| [`Equals`](#api-23b20c5668542dbf) | Method |
| [`GetHashCode`](#api-161bad3bad4c5cd4) | Method |
| [`op_Equality`](#api-d669f2195a257a90) | Method |
| [`op_Inequality`](#api-c060e12c3b920802) | Method |
| [`ToString`](#api-eee3fe15b4ef20d4) | Method |
| [`value`](#api-1b476471410ccf07) | Property |

## Type declaration

<a id="api-551c2955cac6e73c"></a>
<!-- api: T:InnoEngine.Rendering.RenderPhaseId bdc754ba6cc2a5e48802f5e6ce57eef94586766baab6e029cc6738fcc40aede4 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderPhaseId : System.IEquatable<InnoEngine.Rendering.RenderPhaseId>
```

Identifies an open render phase protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `#ctor`

<a id="api-80c572bf0b99010d"></a>
<!-- api: M:InnoEngine.Rendering.RenderPhaseId.#ctor(System.String) 36b438de6c4fbc54bb38bec6955609d12646da1241c3fe5cc68a15a1e18a26af -->

```csharp
public InnoEngine.Rendering.RenderPhaseId.RenderPhaseId(string value)
```

Creates an open render phase identifier.

**Parameter `value`:** Globally stable phase value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L18).

## `Equals`

<a id="api-20c85b051b7df061"></a>
<!-- api: M:InnoEngine.Rendering.RenderPhaseId.Equals(InnoEngine.Rendering.RenderPhaseId) bcf94f22a0deaef421e9647e6efa8874a1148c4e08526a4d30373246d7958675 -->

```csharp
public bool InnoEngine.Rendering.RenderPhaseId.Equals(InnoEngine.Rendering.RenderPhaseId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `Equals`

<a id="api-23b20c5668542dbf"></a>
<!-- api: M:InnoEngine.Rendering.RenderPhaseId.Equals(System.Object) fcde5309de9a730674176bf29c4c0ba9a9a03994f60f1456bdc2c106e66c7f04 -->

```csharp
public override bool InnoEngine.Rendering.RenderPhaseId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `GetHashCode`

<a id="api-161bad3bad4c5cd4"></a>
<!-- api: M:InnoEngine.Rendering.RenderPhaseId.GetHashCode e7f4b19762d67f9a4f608004a2994bf27a19efa859715242b7b1da370af19938 -->

```csharp
public override int InnoEngine.Rendering.RenderPhaseId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `op_Equality`

<a id="api-d669f2195a257a90"></a>
<!-- api: M:InnoEngine.Rendering.RenderPhaseId.op_Equality(InnoEngine.Rendering.RenderPhaseId,InnoEngine.Rendering.RenderPhaseId) c5ca3febb1db06132df2c80343d0b1870e04ba450fd0e95e6e82c33edf53f94a -->

```csharp
public static bool InnoEngine.Rendering.RenderPhaseId.operator ==(InnoEngine.Rendering.RenderPhaseId left, InnoEngine.Rendering.RenderPhaseId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `op_Inequality`

<a id="api-c060e12c3b920802"></a>
<!-- api: M:InnoEngine.Rendering.RenderPhaseId.op_Inequality(InnoEngine.Rendering.RenderPhaseId,InnoEngine.Rendering.RenderPhaseId) b8ad21f9b98a921f33414f29767e3055d37c736af216d050376a81900dc4dc8d -->

```csharp
public static bool InnoEngine.Rendering.RenderPhaseId.operator !=(InnoEngine.Rendering.RenderPhaseId left, InnoEngine.Rendering.RenderPhaseId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L10).

## `ToString`

<a id="api-eee3fe15b4ef20d4"></a>
<!-- api: M:InnoEngine.Rendering.RenderPhaseId.ToString 9e721c2cc3c2a9358bd1a67d0beacdde588f0aad046cfcbe4fb7fbe298a915b5 -->

```csharp
public override string InnoEngine.Rendering.RenderPhaseId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L35).

## `value`

<a id="api-1b476471410ccf07"></a>
<!-- api: P:InnoEngine.Rendering.RenderPhaseId.value 4b0032c50633900255bd25a121766d1c18ae66c8f1241b1f4cec3c067dac2e11 -->

```csharp
public string InnoEngine.Rendering.RenderPhaseId.value { get; }
```

Gets the globally stable phase value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L27).
