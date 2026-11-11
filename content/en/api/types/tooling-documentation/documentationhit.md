---
title: "DocumentationHit"
description: "Reference for DocumentationHit in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.1c4ba59d81c5562a
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationHit`

This reference describes `DocumentationHit` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationHit>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dbcd1d59d03360ba) | Method |
| [`Deconstruct`](#api-7f7e8caacd19f5bf) | Method |
| [`Equals`](#api-3886863cc404d079) | Method |
| [`Equals`](#api-7ba80a6ca051b694) | Method |
| [`GetHashCode`](#api-619043bc2b6264aa) | Method |
| [`op_Equality`](#api-838c992ff512e72f) | Method |
| [`op_Inequality`](#api-b130b8e8ff1b7030) | Method |
| [`ToString`](#api-de4f08e353692991) | Method |
| [`completeness`](#api-9c781848669d4fe5) | Property |
| [`line`](#api-141c490c6d7df631) | Property |
| [`page`](#api-bccfd8adf298bdae) | Property |
| [`pageId`](#api-1e3f64be40065cce) | Property |
| [`projects`](#api-29a659add744768f) | Property |
| [`reason`](#api-58d8ab2304d7663a) | Property |
| [`resource`](#api-f8a28bc76fcfe288) | Property |
| [`section`](#api-0a99fe7f8df4f827) | Property |
| [`surface`](#api-f99b510a3c626496) | Property |
| [`symbol`](#api-65cbb1a54a3ecbc0) | Property |
| [`text`](#api-1be8905da2f70de0) | Property |

## Type declaration

<a id="api-1c4ba59d81c5562a"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationHit 3292533625063bd3ceff37e2dcf25e7e376b47f32bd5dd0769ca4ec99cbbb005 -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationHit : System.IEquatable<Inno.Tooling.Documentation.DocumentationHit>
```

Identifies an original content unit or an explicitly incomplete search excerpt.

**Parameter `pageId`:** Stable page identity independent of its title or current path.

**Parameter `page`:** Relative path within the documentation checkout.

**Parameter `section`:** Stable section anchor, or an empty string for a whole page.

**Parameter `line`:** One-based source line of the selected content.

**Parameter `projects`:** Actual source project owners declared by the page and validated against the reference manifest.

**Parameter `surface`:** Qualified API surface, or null for surface-independent guidance.

**Parameter `symbol`:** Exact XML symbol identity when resolving a symbol, otherwise null.

**Parameter `reason`:** Why this content was selected.

**Parameter `completeness`:** CompleteUnit, Excerpt or Partial; complete units may still have necessary related contracts.

**Parameter `text`:** Original Markdown for reads, or an explicitly marked excerpt for search.

**Parameter `resource`:** Stable inno-doc resource URI bound to the returned snapshot and page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `#ctor`

<a id="api-dbcd1d59d03360ba"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.#ctor(System.String,System.String,System.String,System.Int32,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.String,System.String,System.String,System.String,System.String) f8c5659b13a207c9e4d8ee48577091b78df27f773f19ca08636906cf680e0fe4 -->

```csharp
public Inno.Tooling.Documentation.DocumentationHit.DocumentationHit(string pageId, string page, string section, int line, System.Collections.Generic.IReadOnlyList<string> projects, string? surface, string? symbol, string reason, string completeness, string text, string resource)
```

Identifies an original content unit or an explicitly incomplete search excerpt.

**Parameter `pageId`:** Stable page identity independent of its title or current path.

**Parameter `page`:** Relative path within the documentation checkout.

**Parameter `section`:** Stable section anchor, or an empty string for a whole page.

**Parameter `line`:** One-based source line of the selected content.

**Parameter `projects`:** Actual source project owners declared by the page and validated against the reference manifest.

**Parameter `surface`:** Qualified API surface, or null for surface-independent guidance.

**Parameter `symbol`:** Exact XML symbol identity when resolving a symbol, otherwise null.

**Parameter `reason`:** Why this content was selected.

**Parameter `completeness`:** CompleteUnit, Excerpt or Partial; complete units may still have necessary related contracts.

**Parameter `text`:** Original Markdown for reads, or an explicitly marked excerpt for search.

**Parameter `resource`:** Stable inno-doc resource URI bound to the returned snapshot and page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `Deconstruct`

<a id="api-7f7e8caacd19f5bf"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.Deconstruct(System.String@,System.String@,System.String@,System.Int32@,System.Collections.Generic.IReadOnlyList{System.String}@,System.String@,System.String@,System.String@,System.String@,System.String@,System.String@) f014acb1ce03db74a308a763eff00190c0f69fa4f856b2862b04efc178d2ad4f -->

```csharp
public void Inno.Tooling.Documentation.DocumentationHit.Deconstruct(out string pageId, out string page, out string section, out int line, out System.Collections.Generic.IReadOnlyList<string> projects, out string? surface, out string? symbol, out string reason, out string completeness, out string text, out string resource)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `Equals`

<a id="api-3886863cc404d079"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.Equals(Inno.Tooling.Documentation.DocumentationHit) fa6726cd60a63fc6368ec54ed8ad9f10a1cd79ac5aa9f4ea6ff238548dc314c1 -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationHit.Equals(Inno.Tooling.Documentation.DocumentationHit? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `Equals`

<a id="api-7ba80a6ca051b694"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.Equals(System.Object) 17b0e77bf73be1ee819b5a732e342a1e581b9d803066d4147c604da8a7770609 -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationHit.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `GetHashCode`

<a id="api-619043bc2b6264aa"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.GetHashCode 6c8bcca507e5ec496ea304c5068e8df7259968e344ac5772f9fe94c4d0603aac -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationHit.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `op_Equality`

<a id="api-838c992ff512e72f"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.op_Equality(Inno.Tooling.Documentation.DocumentationHit,Inno.Tooling.Documentation.DocumentationHit) 91c96f5c26fd1bdf277db76c9379557f8e62b1957de52881460326a5e12f325d -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationHit.operator ==(Inno.Tooling.Documentation.DocumentationHit? left, Inno.Tooling.Documentation.DocumentationHit? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `op_Inequality`

<a id="api-b130b8e8ff1b7030"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.op_Inequality(Inno.Tooling.Documentation.DocumentationHit,Inno.Tooling.Documentation.DocumentationHit) d4c361a4fe923040a84fde27680b8ce429603f228b415df28a5e6982ea2fa7d8 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationHit.operator !=(Inno.Tooling.Documentation.DocumentationHit? left, Inno.Tooling.Documentation.DocumentationHit? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `ToString`

<a id="api-de4f08e353692991"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationHit.ToString 3d5acbf6433f92d2db01b112c808a9e50309cd1507ef5d202892abd57820d960 -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationHit.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L41).

## `completeness`

<a id="api-9c781848669d4fe5"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.completeness 9ea14db1705960e69434699ae9d77307190f01b3b2dd4f27eb783a578e9f0513 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationHit.completeness { get; init; }
```

CompleteUnit, Excerpt or Partial; complete units may still have necessary related contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L50).

## `line`

<a id="api-141c490c6d7df631"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.line be6a89621e6948489845756d9510c1d13cb31cbd1cb8da45e0c8e2570716d478 -->

```csharp
public int Inno.Tooling.Documentation.DocumentationHit.line { get; init; }
```

One-based source line of the selected content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L45).

## `page`

<a id="api-bccfd8adf298bdae"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.page 0b401d8cdcf8bcda749d18baf9b725f4330d7df0b80cd20cc10d893dac207ece -->

```csharp
public string Inno.Tooling.Documentation.DocumentationHit.page { get; init; }
```

Relative path within the documentation checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L43).

## `pageId`

<a id="api-1e3f64be40065cce"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.pageId 10059de882fb66d2292cb15e412d86b8e644a02d6627bf6e5d64bb23878ff28a -->

```csharp
public string Inno.Tooling.Documentation.DocumentationHit.pageId { get; init; }
```

Stable page identity independent of its title or current path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L42).

## `projects`

<a id="api-29a659add744768f"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.projects 186506ecdc47ed1481093e05fa184186c24fb0bc5b1b60b03c30bfff52e158c7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationHit.projects { get; init; }
```

Actual source project owners declared by the page and validated against the reference manifest.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L46).

## `reason`

<a id="api-58d8ab2304d7663a"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.reason 1a8e5a91b332129ba6e738f005d652edb09d7b2c40eafec88ef59b3693128a72 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationHit.reason { get; init; }
```

Why this content was selected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L49).

## `resource`

<a id="api-f8a28bc76fcfe288"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.resource 880f012f4794e939c8c20219f987552cf5bf9b1ac784786c024e612a3b8a5066 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationHit.resource { get; init; }
```

Stable inno-doc resource URI bound to the returned snapshot and page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L52).

## `section`

<a id="api-0a99fe7f8df4f827"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.section 856e68c120818da6be268b1f3627dc139bedf0d729aa0e8760ee8967c6e5ea10 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationHit.section { get; init; }
```

Stable section anchor, or an empty string for a whole page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L44).

## `surface`

<a id="api-f99b510a3c626496"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.surface 341e88dc56616072bba5581c28fd9f8735f92ab21147f8d10a992988a4a493fa -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationHit.surface { get; init; }
```

Qualified API surface, or null for surface-independent guidance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L47).

## `symbol`

<a id="api-65cbb1a54a3ecbc0"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.symbol c3113e2d827c318fc7a63909e8c3163cf28d17d8caab152f99886e1c23120396 -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationHit.symbol { get; init; }
```

Exact XML symbol identity when resolving a symbol, otherwise null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L48).

## `text`

<a id="api-1be8905da2f70de0"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationHit.text ec22451e04d1327a61364ff8b8fbcdbcf1725e86a015a3eac6262e975214750e -->

```csharp
public string Inno.Tooling.Documentation.DocumentationHit.text { get; init; }
```

Original Markdown for reads, or an explicitly marked excerpt for search.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationHit.cs#L51).
