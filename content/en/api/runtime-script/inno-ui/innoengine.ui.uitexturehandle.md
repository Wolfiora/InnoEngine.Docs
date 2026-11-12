---
title: "UiTextureHandle"
description: "Reference for UiTextureHandle in Inno.UI."
uid: api.inno.ui.runtime-script.89de2bc544f7374c
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiTextureHandle`

This reference describes `UiTextureHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-27c84c86f92aa373) | Method |
| [`Deconstruct`](#api-ff21c3ede0afda22) | Method |
| [`Equals`](#api-6d9ef6a5a2e56508) | Method |
| [`Equals`](#api-df2dd76e9c4e752f) | Method |
| [`GetHashCode`](#api-515ec6d6dcbe8bbd) | Method |
| [`op_Equality`](#api-cd44afe109d7ed2a) | Method |
| [`op_Inequality`](#api-1cd601fa072a0204) | Method |
| [`ToString`](#api-a5362cb88a38a02b) | Method |
| [`isValid`](#api-eb69e2dba4d54532) | Property |
| [`value`](#api-59a5f32dbc1a6ae5) | Property |

## Type declaration

<a id="api-89de2bc544f7374c"></a>
<!-- api: T:InnoEngine.UI.UiTextureHandle 9ee0e427e5eef32d7c15f82e5944c8388af3cdedb083bc3238407dddd0f22d41 -->

```csharp
public readonly struct InnoEngine.UI.UiTextureHandle : System.IEquatable<InnoEngine.UI.UiTextureHandle>
```

Identifies one backend-owned immutable texture generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `#ctor`

<a id="api-27c84c86f92aa373"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.#ctor(System.UInt64) cae64f71feac48d9f97faa7a9a622b57722efbffbbcbdb87f1812aa1aae654d1 -->

```csharp
public InnoEngine.UI.UiTextureHandle.UiTextureHandle(ulong value)
```

Identifies one backend-owned immutable texture generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `Deconstruct`

<a id="api-ff21c3ede0afda22"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.Deconstruct(System.UInt64@) 45862e14c87ca3fd35c64e180268f86097a54d3e39290c13ff496cd638b82403 -->

```csharp
public void InnoEngine.UI.UiTextureHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `Equals`

<a id="api-6d9ef6a5a2e56508"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.Equals(InnoEngine.UI.UiTextureHandle) c151e1d764d9942c637023d6ecf134a5ce12db06cca63b4756782624bb913e60 -->

```csharp
public bool InnoEngine.UI.UiTextureHandle.Equals(InnoEngine.UI.UiTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `Equals`

<a id="api-df2dd76e9c4e752f"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.Equals(System.Object) b9d97d01cc839d1cb4d7378131b3da9d72a5315b9b4c570101b597627770f8d6 -->

```csharp
public override bool InnoEngine.UI.UiTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `GetHashCode`

<a id="api-515ec6d6dcbe8bbd"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.GetHashCode 359080a6226c74357e972a93980d7338f35ccccf2f4462015711bf19f2bb68d3 -->

```csharp
public override int InnoEngine.UI.UiTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `op_Equality`

<a id="api-cd44afe109d7ed2a"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.op_Equality(InnoEngine.UI.UiTextureHandle,InnoEngine.UI.UiTextureHandle) c453b6e4a8411a6bb034f096c3a773033aa4572676f86da3ae6350b6937b41bb -->

```csharp
public static bool InnoEngine.UI.UiTextureHandle.operator ==(InnoEngine.UI.UiTextureHandle left, InnoEngine.UI.UiTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `op_Inequality`

<a id="api-1cd601fa072a0204"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.op_Inequality(InnoEngine.UI.UiTextureHandle,InnoEngine.UI.UiTextureHandle) 1932b672c48939dbfa3169ea1e50fcac0054dd449fd0550fc9be525ac19cf185 -->

```csharp
public static bool InnoEngine.UI.UiTextureHandle.operator !=(InnoEngine.UI.UiTextureHandle left, InnoEngine.UI.UiTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `ToString`

<a id="api-a5362cb88a38a02b"></a>
<!-- api: M:InnoEngine.UI.UiTextureHandle.ToString 035b37240deb99a412572eb1aad19c2c0a74abbca3ce0e6ead2577df4d0bd477 -->

```csharp
public override string InnoEngine.UI.UiTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `isValid`

<a id="api-eb69e2dba4d54532"></a>
<!-- api: P:InnoEngine.UI.UiTextureHandle.isValid f69b05ce77fc8482e3a25c6fbb64464e5dba31f76ed16a71a9dd1610ca3353af -->

```csharp
public bool InnoEngine.UI.UiTextureHandle.isValid { get; }
```

Gets whether the handle identifies a texture; an unassigned handle selects the renderer's white texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L69).

## `value`

<a id="api-59a5f32dbc1a6ae5"></a>
<!-- api: P:InnoEngine.UI.UiTextureHandle.value 9c6127d000fd365e24049d1480ee7da1f59fb1f9cb9e612b5f6868935824014b -->

```csharp
public ulong InnoEngine.UI.UiTextureHandle.value { get; set; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).
