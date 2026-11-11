---
title: "DocumentationRequest"
description: "Reference for DocumentationRequest in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.8e6e5522aad9a235
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationRequest`

This reference describes `DocumentationRequest` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationRequest>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-56c27b32d357e34a) | Method |
| [`Deconstruct`](#api-06e7bcc8b78a1dfc) | Method |
| [`Equals`](#api-b0559adb73f71d1c) | Method |
| [`Equals`](#api-41e2d2a5178af533) | Method |
| [`GetHashCode`](#api-5b71d5a1520a0232) | Method |
| [`op_Equality`](#api-d8f135cc964c9a43) | Method |
| [`op_Inequality`](#api-5ada2e5bdf299e98) | Method |
| [`ToString`](#api-eab334384930faed) | Method |
| [`limit`](#api-0337bc957802ec47) | Property |
| [`offset`](#api-a50017ef3df25eb1) | Property |
| [`operation`](#api-7b184134dc247266) | Property |
| [`project`](#api-be7bd7d6e7216317) | Property |
| [`section`](#api-365e8fb201efcadb) | Property |
| [`surface`](#api-db00e916653f690c) | Property |
| [`value`](#api-e94636704675da3e) | Property |

## Type declaration

<a id="api-8e6e5522aad9a235"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationRequest 303e7e1f9eec903c4e3e89756478a6317ee04c82423b0f4ae385eab679bbd664 -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationRequest : System.IEquatable<Inno.Tooling.Documentation.DocumentationRequest>
```

Selects a read-only query against one already published documentation snapshot.

**Parameter `operation`:** Search, read, symbol, resource or status; operation names use lowercase ASCII.

**Parameter `value`:** Search terms, a stable page identity or relative content path, an XML symbol ID, or a resource URI.

**Parameter `project`:** An exact project identity from the source project manifest, or null for every project.

**Parameter `surface`:** An exact API surface identity, or null to return qualified candidates without choosing a surface.

**Parameter `section`:** A section anchor within the selected page, or null for the page.

**Parameter `offset`:** Zero-based UTF-16 continuation offset within the selected content; search uses a result offset.

**Parameter `limit`:** Maximum search candidates, between one and one hundred. Content reads retain complete units or explicit continuations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `#ctor`

<a id="api-56c27b32d357e34a"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.#ctor(System.String,System.String,System.String,System.String,System.String,System.Int32,System.Int32) 534faf4ab1ff18fa97ab3e0b60dfaaa04c350ed184236c2a6be4805de60de40a -->

```csharp
public Inno.Tooling.Documentation.DocumentationRequest.DocumentationRequest(string operation, string? value = null, string? project = null, string? surface = null, string? section = null, int offset = 0, int limit = 5)
```

Selects a read-only query against one already published documentation snapshot.

**Parameter `operation`:** Search, read, symbol, resource or status; operation names use lowercase ASCII.

**Parameter `value`:** Search terms, a stable page identity or relative content path, an XML symbol ID, or a resource URI.

**Parameter `project`:** An exact project identity from the source project manifest, or null for every project.

**Parameter `surface`:** An exact API surface identity, or null to return qualified candidates without choosing a surface.

**Parameter `section`:** A section anchor within the selected page, or null for the page.

**Parameter `offset`:** Zero-based UTF-16 continuation offset within the selected content; search uses a result offset.

**Parameter `limit`:** Maximum search candidates, between one and one hundred. Content reads retain complete units or explicit continuations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `Deconstruct`

<a id="api-06e7bcc8b78a1dfc"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.Deconstruct(System.String@,System.String@,System.String@,System.String@,System.String@,System.Int32@,System.Int32@) e905d10f1838b58eed3a3d5ee142a51d3035da53b6f02cfec4c4d5318238dbff -->

```csharp
public void Inno.Tooling.Documentation.DocumentationRequest.Deconstruct(out string operation, out string? value, out string? project, out string? surface, out string? section, out int offset, out int limit)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `Equals`

<a id="api-b0559adb73f71d1c"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.Equals(Inno.Tooling.Documentation.DocumentationRequest) ae8d39085d740367c319b5a45ebdd311b178a019bb0489a32905b1d90fcf6f40 -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationRequest.Equals(Inno.Tooling.Documentation.DocumentationRequest? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `Equals`

<a id="api-41e2d2a5178af533"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.Equals(System.Object) dfc23fa2c3cac4178fac86afae721edbf207d8c898a1f1b948e704eb5f22a1d4 -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationRequest.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `GetHashCode`

<a id="api-5b71d5a1520a0232"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.GetHashCode b834ee88fbf313110f29892076f72b43f7306050e47892971fc44d68bf8ba639 -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationRequest.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `op_Equality`

<a id="api-d8f135cc964c9a43"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.op_Equality(Inno.Tooling.Documentation.DocumentationRequest,Inno.Tooling.Documentation.DocumentationRequest) 2ea4d714405e870095b4c84b9bc4b0d0c416ea94bf6c63e8df276216d1bd5626 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationRequest.operator ==(Inno.Tooling.Documentation.DocumentationRequest? left, Inno.Tooling.Documentation.DocumentationRequest? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `op_Inequality`

<a id="api-5ada2e5bdf299e98"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.op_Inequality(Inno.Tooling.Documentation.DocumentationRequest,Inno.Tooling.Documentation.DocumentationRequest) 1f6154624844fcd29b4b69c1b4c5e2c700f624ec8b6b1ed7a3616720153650ef -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationRequest.operator !=(Inno.Tooling.Documentation.DocumentationRequest? left, Inno.Tooling.Documentation.DocumentationRequest? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `ToString`

<a id="api-eab334384930faed"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationRequest.ToString 34f91cacdfd26521d000a13fb0275b0150156165439eb4cccb4625be35246e46 -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationRequest.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L29).

## `limit`

<a id="api-0337bc957802ec47"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationRequest.limit c8ead7592df8059fc6d061593182bf60916994486160f8f33499f6d97b9021f7 -->

```csharp
public int Inno.Tooling.Documentation.DocumentationRequest.limit { get; init; }
```

Maximum search candidates, between one and one hundred. Content reads retain complete units or explicit continuations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L36).

## `offset`

<a id="api-a50017ef3df25eb1"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationRequest.offset 7741674239495a852ecd2eb9dfbe2e3a47e8d2e5ce109abc6b39509ab3d2e323 -->

```csharp
public int Inno.Tooling.Documentation.DocumentationRequest.offset { get; init; }
```

Zero-based UTF-16 continuation offset within the selected content; search uses a result offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L35).

## `operation`

<a id="api-7b184134dc247266"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationRequest.operation 974e8d88fd61b4d7d98be18a274623e244fab1e2bb8504e2b7124859bc9ba9dd -->

```csharp
public string Inno.Tooling.Documentation.DocumentationRequest.operation { get; init; }
```

Search, read, symbol, resource or status; operation names use lowercase ASCII.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L30).

## `project`

<a id="api-be7bd7d6e7216317"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationRequest.project 2d75cd77e4643c1b4eddccbe18151ca07996ddd5bb409b41f8bedebb14828f7f -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationRequest.project { get; init; }
```

An exact project identity from the source project manifest, or null for every project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L32).

## `section`

<a id="api-365e8fb201efcadb"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationRequest.section f21a27ea370726bba488efaf62e93e2a9968bdfdcc8909d81fad6a918af345ef -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationRequest.section { get; init; }
```

A section anchor within the selected page, or null for the page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L34).

## `surface`

<a id="api-db00e916653f690c"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationRequest.surface 42793fa8809a646e61033fed5f89f4e6b57586e1380b8e75552af740e579a765 -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationRequest.surface { get; init; }
```

An exact API surface identity, or null to return qualified candidates without choosing a surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L33).

## `value`

<a id="api-e94636704675da3e"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationRequest.value 8dcc4c94b9d6a8a278a148c7ea95ef6ab98d9627e7bb469d3ca44f5693a98d01 -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationRequest.value { get; init; }
```

Search terms, a stable page identity or relative content path, an XML symbol ID, or a resource URI.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationRequest.cs#L31).
