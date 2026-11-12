---
title: "AssetPath"
description: "Reference for AssetPath in Inno.Assets."
uid: api.inno.assets.runtime-script.d166ef2a6ae9cf38
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetPath`

This reference describes `AssetPath` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Assets.AssetPath>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cab1137cf1dc558d) | Method |
| [`Equals`](#api-1c1c6a2345124422) | Method |
| [`Equals`](#api-b43ccaafde87b63e) | Method |
| [`GetHashCode`](#api-2f17d8b8d10642ca) | Method |
| [`op_Equality`](#api-9d6b8ab130f70043) | Method |
| [`op_Inequality`](#api-ca9f664bff015c9d) | Method |
| [`Parse`](#api-c3f1884099e26a1e) | Method |
| [`Project`](#api-c9ed16563b817390) | Method |
| [`ToString`](#api-f49b4c50e91e983d) | Method |
| [`isValid`](#api-440878731ed0c6c5) | Property |
| [`localPath`](#api-d0b42253913e1cff) | Property |
| [`source`](#api-dbc32258c5d0bdec) | Property |

## Type declaration

<a id="api-d166ef2a6ae9cf38"></a>
<!-- api: T:InnoEngine.Assets.AssetPath 648f71bee04228e80a9a491854e209d957ad3039c602c150a341187c0457f987 -->

```csharp
public struct InnoEngine.Assets.AssetPath : System.IEquatable<InnoEngine.Assets.AssetPath>
```

Addresses one asset without conflating isolated source mounts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `#ctor`

<a id="api-cab1137cf1dc558d"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.#ctor(InnoEngine.Assets.AssetSourceId,System.String) 93442140af5f043461825a1d9b5129ead6012465d45f3c65bfd5f04307edc92f -->

```csharp
public InnoEngine.Assets.AssetPath.AssetPath(InnoEngine.Assets.AssetSourceId source, string localPath)
```

Creates an asset path.

**Parameter `source`:** Owning source mount.

**Parameter `localPath`:** Source-local path using forward slashes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L74).

## `Equals`

<a id="api-1c1c6a2345124422"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.Equals(InnoEngine.Assets.AssetPath) 8cce427d937ee68fee57fb84bb929988afbf6222a454bd0f3aa50d451cd5661f -->

```csharp
public bool InnoEngine.Assets.AssetPath.Equals(InnoEngine.Assets.AssetPath other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `Equals`

<a id="api-b43ccaafde87b63e"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.Equals(System.Object) 92505088e7c48a02f33809d501a2a3acc0c98d40546830ece715044c4557872f -->

```csharp
public override bool InnoEngine.Assets.AssetPath.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `GetHashCode`

<a id="api-2f17d8b8d10642ca"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.GetHashCode ee5426fc044b70556d856bb6ecb2504080d41f7a7a92170ce75623a92f32ada8 -->

```csharp
public override int InnoEngine.Assets.AssetPath.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `op_Equality`

<a id="api-9d6b8ab130f70043"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.op_Equality(InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetPath) d860f55210853a4dbe48923927e82c9f87cec97a9e3527cae0ef169aca375623 -->

```csharp
public static bool InnoEngine.Assets.AssetPath.operator ==(InnoEngine.Assets.AssetPath left, InnoEngine.Assets.AssetPath right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `op_Inequality`

<a id="api-ca9f664bff015c9d"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.op_Inequality(InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetPath) 13a6ac3a577dabf7896e69d17f7e1c35180e15b0a93f1aac0914cdd4765dfe48 -->

```csharp
public static bool InnoEngine.Assets.AssetPath.operator !=(InnoEngine.Assets.AssetPath left, InnoEngine.Assets.AssetPath right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L61).

## `Parse`

<a id="api-c3f1884099e26a1e"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.Parse(System.String) 5408123434553ab7fd6365762ea062dc6014726d24eef61984480362d309e7eb -->

```csharp
public static InnoEngine.Assets.AssetPath InnoEngine.Assets.AssetPath.Parse(string value)
```

Parses a canonical path, treating an unqualified value as project-owned.

**Parameter `value`:** Canonical or project-local path.

**Returns:** The isolated asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L119).

## `Project`

<a id="api-c9ed16563b817390"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.Project(System.String) 5318083fa774170ff5754d1e69a747822aaffe46f9b882318638e15264e17375 -->

```csharp
public static InnoEngine.Assets.AssetPath InnoEngine.Assets.AssetPath.Project(string localPath)
```

Creates a path in the writable project source.

**Returns:** A project-owned asset path.

**Parameter `localPath`:** The local path text validated by the project operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L108).

## `ToString`

<a id="api-f49b4c50e91e983d"></a>
<!-- api: M:InnoEngine.Assets.AssetPath.ToString 7e343febc267db2707359f2f5faae04962b0a52848e07df212a4ce8c407b277d -->

```csharp
public override string InnoEngine.Assets.AssetPath.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L134).

## `isValid`

<a id="api-440878731ed0c6c5"></a>
<!-- api: P:InnoEngine.Assets.AssetPath.isValid 505c8ac1212e07a8ec5b74bbafb3b337d1464039f546787d6957bb44cfaef6c0 -->

```csharp
public bool InnoEngine.Assets.AssetPath.isValid { get; }
```

Gets whether the source and local path are valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L97).

## `localPath`

<a id="api-d0b42253913e1cff"></a>
<!-- api: P:InnoEngine.Assets.AssetPath.localPath 4f2ffd2a061fcbee9530a88e3a33ac9438406bcc6ae3c1fb175f7334be2af791 -->

```csharp
public string InnoEngine.Assets.AssetPath.localPath { get; set; }
```

Gets or sets the source-local path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L92).

## `source`

<a id="api-dbc32258c5d0bdec"></a>
<!-- api: P:InnoEngine.Assets.AssetPath.source 849bda28fb14783be82031e3c389e02731930752c77c12551e66bcb03607d062 -->

```csharp
public InnoEngine.Assets.AssetSourceId InnoEngine.Assets.AssetPath.source { get; set; }
```

Gets or sets the owning source mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L87).
