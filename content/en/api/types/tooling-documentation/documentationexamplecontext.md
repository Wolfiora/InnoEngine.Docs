---
title: "DocumentationExampleContext"
description: "Reference for DocumentationExampleContext in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.d08e77b2a3339140
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationExampleContext`

This reference describes `DocumentationExampleContext` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationExampleContext>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-56d7aed5c1ec6939) | Method |
| [`Deconstruct`](#api-1b47dafc292dfe62) | Method |
| [`Equals`](#api-874ff5b9b9b5a3d1) | Method |
| [`Equals`](#api-cb67945df0e80a8c) | Method |
| [`GetHashCode`](#api-de7d6ff521f09d50) | Method |
| [`op_Equality`](#api-a88c18343ad54498) | Method |
| [`op_Inequality`](#api-4cb4596ed70cbde7) | Method |
| [`ToString`](#api-38438b43cc7560da) | Method |
| [`mode`](#api-23c37ae14cfc0b97) | Property |
| [`projects`](#api-298ab833db834a0d) | Property |

## Type declaration

<a id="api-d08e77b2a3339140"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationExampleContext d86a4fd89abaa37f4791c6368a46634bf3c6a11abb6673dc8d5c4644354c8d3d -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationExampleContext : System.IEquatable<Inno.Tooling.Documentation.DocumentationExampleContext>
```

Identifies the authored compilation context for a page's executable examples without preparing it.

**Parameter `mode`:** The explicit reference mode: host, runtime-script or editor-script.
Script modes require the actual projected assemblies, never substituted host references.

**Parameter `projects`:** Actual project identities supplying the SDK context and host dependencies.
For script modes they identify ownership only; their host assemblies must not enter the example's references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `#ctor`

<a id="api-56d7aed5c1ec6939"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.#ctor(System.String,System.Collections.Generic.IReadOnlyList{System.String}) 54656464b1b83be397be0d8ecffcdd53afb2a6568e545b606e940aa57777f309 -->

```csharp
public Inno.Tooling.Documentation.DocumentationExampleContext.DocumentationExampleContext(string mode, System.Collections.Generic.IReadOnlyList<string> projects)
```

Identifies the authored compilation context for a page's executable examples without preparing it.

**Parameter `mode`:** The explicit reference mode: host, runtime-script or editor-script.
Script modes require the actual projected assemblies, never substituted host references.

**Parameter `projects`:** Actual project identities supplying the SDK context and host dependencies.
For script modes they identify ownership only; their host assemblies must not enter the example's references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `Deconstruct`

<a id="api-1b47dafc292dfe62"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.Deconstruct(System.String@,System.Collections.Generic.IReadOnlyList{System.String}@) b4abf1b432e352f8e9b6f1c976522995a1a00f8220ebcb61badaa047969e3b61 -->

```csharp
public void Inno.Tooling.Documentation.DocumentationExampleContext.Deconstruct(out string mode, out System.Collections.Generic.IReadOnlyList<string> projects)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `Equals`

<a id="api-874ff5b9b9b5a3d1"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.Equals(Inno.Tooling.Documentation.DocumentationExampleContext) 63ecb95287ec6f64dfd243e06ac7391711e76e49e931f2df2c0247cc678dbb51 -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationExampleContext.Equals(Inno.Tooling.Documentation.DocumentationExampleContext? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `Equals`

<a id="api-cb67945df0e80a8c"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.Equals(System.Object) 7637be3e57c23ed9a014dfbffa43fa4713b686c69129f17117358b76e7909d4f -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationExampleContext.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `GetHashCode`

<a id="api-de7d6ff521f09d50"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.GetHashCode 45a144614152f5e40f20a2086b843dc6950e00619a4d3edf88f5373ce8efcddf -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationExampleContext.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `op_Equality`

<a id="api-a88c18343ad54498"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.op_Equality(Inno.Tooling.Documentation.DocumentationExampleContext,Inno.Tooling.Documentation.DocumentationExampleContext) 5e8a86a3eb993562bd004730e9b5ff1b9aea788ee8fc82d311afde59602fe4fd -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationExampleContext.operator ==(Inno.Tooling.Documentation.DocumentationExampleContext? left, Inno.Tooling.Documentation.DocumentationExampleContext? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `op_Inequality`

<a id="api-4cb4596ed70cbde7"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.op_Inequality(Inno.Tooling.Documentation.DocumentationExampleContext,Inno.Tooling.Documentation.DocumentationExampleContext) da0c5a96fddb3a27381869c4e74b4e5984aa50c3d111afdcbbf0ffb1a3119f32 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationExampleContext.operator !=(Inno.Tooling.Documentation.DocumentationExampleContext? left, Inno.Tooling.Documentation.DocumentationExampleContext? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `ToString`

<a id="api-38438b43cc7560da"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationExampleContext.ToString 02024fde92584ac19f3f3dd1bce7967247fbae3c23706767d239f6e61c1f4038 -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationExampleContext.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L16).

## `mode`

<a id="api-23c37ae14cfc0b97"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationExampleContext.mode 1185c6375d5ed0d5db1d8f0d9785fc40e39159b1dd8f4331b2173866a10bc300 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationExampleContext.mode { get; init; }
```

The explicit reference mode: host, runtime-script or editor-script.
Script modes require the actual projected assemblies, never substituted host references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L17).

## `projects`

<a id="api-298ab833db834a0d"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationExampleContext.projects 07fc4dcf0e26f7300648b8fa378cb6307efbedd0ed2d561e6ed7403b6a5b5f59 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationExampleContext.projects { get; init; }
```

Actual project identities supplying the SDK context and host dependencies.
For script modes they identify ownership only; their host assemblies must not enter the example's references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationExampleContext.cs#L18).
