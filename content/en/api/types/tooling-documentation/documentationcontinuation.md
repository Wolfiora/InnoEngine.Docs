---
title: "DocumentationContinuation"
description: "Reference for DocumentationContinuation in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.2081f72d9226e8fe
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationContinuation`

This reference describes `DocumentationContinuation` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationContinuation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-560e00de30728897) | Method |
| [`Deconstruct`](#api-d4ec5c8a9080f967) | Method |
| [`Equals`](#api-c8011ff2502ca9bb) | Method |
| [`Equals`](#api-c9d33967e73f8b55) | Method |
| [`GetHashCode`](#api-097d19daf0d01568) | Method |
| [`op_Equality`](#api-5a19f63751294dfc) | Method |
| [`op_Inequality`](#api-8af5591461440452) | Method |
| [`ToString`](#api-19186ec1b957aee7) | Method |
| [`offset`](#api-a359e3087ff4d9e6) | Property |
| [`pageId`](#api-0d6538c5b1dcabac) | Property |
| [`reason`](#api-d4ddb2cfdb293a6c) | Property |
| [`section`](#api-fad8b59b8b6c0079) | Property |

## Type declaration

<a id="api-2081f72d9226e8fe"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationContinuation 81f33691f3e9f37a1fbf381736f9cd709c80a87d74d458c993269eb9805b631b -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationContinuation : System.IEquatable<Inno.Tooling.Documentation.DocumentationContinuation>
```

Identifies unread content without silently dropping constraints or splitting their ownership.

**Parameter `pageId`:** Stable page identity within the same snapshot.

**Parameter `section`:** Section anchor, or null for the entire page.

**Parameter `offset`:** UTF-16 position within the selection for a content continuation; zero begins a related contract.

**Parameter `reason`:** Whether the target continues original text or supplies a necessary associated contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `#ctor`

<a id="api-560e00de30728897"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.#ctor(System.String,System.String,System.Int32,System.String) c8f49cf3a4f9b7f038c08f79b7385563cd54f2f97988dc80235e56a7ad589ce9 -->

```csharp
public Inno.Tooling.Documentation.DocumentationContinuation.DocumentationContinuation(string pageId, string? section, int offset, string reason)
```

Identifies unread content without silently dropping constraints or splitting their ownership.

**Parameter `pageId`:** Stable page identity within the same snapshot.

**Parameter `section`:** Section anchor, or null for the entire page.

**Parameter `offset`:** UTF-16 position within the selection for a content continuation; zero begins a related contract.

**Parameter `reason`:** Whether the target continues original text or supplies a necessary associated contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `Deconstruct`

<a id="api-d4ec5c8a9080f967"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.Deconstruct(System.String@,System.String@,System.Int32@,System.String@) 665612d981b761459f790d7604d24ac6f6e37eaff10ba649b1ff08f2c855711a -->

```csharp
public void Inno.Tooling.Documentation.DocumentationContinuation.Deconstruct(out string pageId, out string? section, out int offset, out string reason)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `Equals`

<a id="api-c8011ff2502ca9bb"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.Equals(Inno.Tooling.Documentation.DocumentationContinuation) 58a088ccaae15bd5c8bc007f33b6f12d9e1eed799874b07ac04c5d50e07deede -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationContinuation.Equals(Inno.Tooling.Documentation.DocumentationContinuation? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `Equals`

<a id="api-c9d33967e73f8b55"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.Equals(System.Object) 4184a186fc7d86f53e1f8dc61a61bc8d88b20abfa22fb2a0fe0637f1a4bf3d4d -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationContinuation.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `GetHashCode`

<a id="api-097d19daf0d01568"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.GetHashCode c50d5f479165bd5ea0bc586bc92036d9e29272db1f120868865d415391089c63 -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationContinuation.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `op_Equality`

<a id="api-5a19f63751294dfc"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.op_Equality(Inno.Tooling.Documentation.DocumentationContinuation,Inno.Tooling.Documentation.DocumentationContinuation) 58224f6c36a9a8ace8d7a2e55241f144f614c3e418d3cf911cf6a53e62772ca6 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationContinuation.operator ==(Inno.Tooling.Documentation.DocumentationContinuation? left, Inno.Tooling.Documentation.DocumentationContinuation? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `op_Inequality`

<a id="api-8af5591461440452"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.op_Inequality(Inno.Tooling.Documentation.DocumentationContinuation,Inno.Tooling.Documentation.DocumentationContinuation) cdcd077c464a008b1f72ab3453dad314cecd0900e78063bee549eebe4e3fb7d0 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationContinuation.operator !=(Inno.Tooling.Documentation.DocumentationContinuation? left, Inno.Tooling.Documentation.DocumentationContinuation? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `ToString`

<a id="api-19186ec1b957aee7"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationContinuation.ToString 472cc1c1b5c22c135d8cbdd2ef4b8e7fba810cec6242ef5bc9dbbd8940cd0c9e -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationContinuation.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L18).

## `offset`

<a id="api-a359e3087ff4d9e6"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationContinuation.offset 60cbad2e66e2b7b2d151950dd188689bbe3698a29e8051dbcebf4fdf69fd0934 -->

```csharp
public int Inno.Tooling.Documentation.DocumentationContinuation.offset { get; init; }
```

UTF-16 position within the selection for a content continuation; zero begins a related contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L21).

## `pageId`

<a id="api-0d6538c5b1dcabac"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationContinuation.pageId 9dddcd8695ae0cdc2ad7c50e48267a725fffb7f2750e9173e0cb233baffae8b8 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationContinuation.pageId { get; init; }
```

Stable page identity within the same snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L19).

## `reason`

<a id="api-d4ddb2cfdb293a6c"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationContinuation.reason d98ea74c76a44e2ee9a1c2f246132348a1be4a1fd30d9aff09ac9d333b850a38 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationContinuation.reason { get; init; }
```

Whether the target continues original text or supplies a necessary associated contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L22).

## `section`

<a id="api-fad8b59b8b6c0079"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationContinuation.section 092858adfe78b96ab62f0afd69abb23c72e7a24ac9ac2a64f36254f9e2ca63c3 -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationContinuation.section { get; init; }
```

Section anchor, or null for the entire page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationContinuation.cs#L20).
