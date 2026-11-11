---
title: "DocumentationCatalogReport"
description: "Reference for DocumentationCatalogReport in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.3f297b186dd8c22c
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationCatalogReport`

This reference describes `DocumentationCatalogReport` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationCatalogReport>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-98f521e00b89c04b) | Method |
| [`Deconstruct`](#api-f93622975790b2df) | Method |
| [`Equals`](#api-e6c8908241f26fe5) | Method |
| [`Equals`](#api-b061a035bb0ec13b) | Method |
| [`GetHashCode`](#api-85738aa6e9e159e4) | Method |
| [`op_Equality`](#api-1a5e897510514e0e) | Method |
| [`op_Inequality`](#api-4a9723c972331119) | Method |
| [`ToString`](#api-19cbeda457b1abc0) | Method |
| [`contentIdentity`](#api-0e5ac02c13686a5a) | Property |
| [`pages`](#api-c9cd3c0c90aaea8b) | Property |
| [`projects`](#api-7ea6340d969eb7da) | Property |
| [`repository`](#api-a94415b4f7c5552e) | Property |
| [`revision`](#api-ba5cabbbceeb31eb) | Property |
| [`snapshot`](#api-75e7023d3eee1a49) | Property |
| [`sourceApiStatus`](#api-3f5c7bd84dc91bb9) | Property |
| [`sourceTree`](#api-bdc15cf9c9b1ef9e) | Property |
| [`toolingRevision`](#api-21718aadf34146b6) | Property |

## Type declaration

<a id="api-3f297b186dd8c22c"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationCatalogReport 330d615590875352e02128aa27841ed61180533850806df387f983ad25f725ff -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationCatalogReport : System.IEquatable<Inno.Tooling.Documentation.DocumentationCatalogReport>
```

Describes a prepared snapshot for website, coverage and transport adapters without reparsing Markdown.
Content identity excludes query implementation details; source verification remains separate.

**Parameter `snapshot`:** Exact query generation protected by the exporting session.

**Parameter `contentIdentity`:** SHA-256 of sorted page paths and content hashes, independent of machine paths and query binaries.

**Parameter `repository`:** Source repository recorded in the selected binding.

**Parameter `revision`:** Exact engine source revision recorded in the selected binding.

**Parameter `sourceTree`:** Engine source-tree identity; this value alone does not certify compatibility.

**Parameter `toolingRevision`:** Tooling revision requested by the documentation source binding.

**Parameter `sourceApiStatus`:** Source API evidence state. Unverified must not be treated as a passed API check.

**Parameter `projects`:** Actual project identities mapped to their authoritative page identity; null identifies missing coverage.

**Parameter `pages`:** Parsed page facts in stable path order, including complete section and contract identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `#ctor`

<a id="api-98f521e00b89c04b"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.#ctor(System.String,System.String,System.String,System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationPageInfo}) 91d820870614c6f1ebbfbf5303de174616fbc3043c8d02968b3246ea1ba1badb -->

```csharp
public Inno.Tooling.Documentation.DocumentationCatalogReport.DocumentationCatalogReport(string snapshot, string contentIdentity, string repository, string revision, string sourceTree, string toolingRevision, string sourceApiStatus, System.Collections.Generic.IReadOnlyDictionary<string, string?> projects, System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationPageInfo> pages)
```

Describes a prepared snapshot for website, coverage and transport adapters without reparsing Markdown.
Content identity excludes query implementation details; source verification remains separate.

**Parameter `snapshot`:** Exact query generation protected by the exporting session.

**Parameter `contentIdentity`:** SHA-256 of sorted page paths and content hashes, independent of machine paths and query binaries.

**Parameter `repository`:** Source repository recorded in the selected binding.

**Parameter `revision`:** Exact engine source revision recorded in the selected binding.

**Parameter `sourceTree`:** Engine source-tree identity; this value alone does not certify compatibility.

**Parameter `toolingRevision`:** Tooling revision requested by the documentation source binding.

**Parameter `sourceApiStatus`:** Source API evidence state. Unverified must not be treated as a passed API check.

**Parameter `projects`:** Actual project identities mapped to their authoritative page identity; null identifies missing coverage.

**Parameter `pages`:** Parsed page facts in stable path order, including complete section and contract identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `Deconstruct`

<a id="api-f93622975790b2df"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.Deconstruct(System.String@,System.String@,System.String@,System.String@,System.String@,System.String@,System.String@,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@,System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationPageInfo}@) 6a31d7f5f42999d8cc856dc7d76dd594e0c4e78b8aa57a2fbf63bdfd661c432a -->

```csharp
public void Inno.Tooling.Documentation.DocumentationCatalogReport.Deconstruct(out string snapshot, out string contentIdentity, out string repository, out string revision, out string sourceTree, out string toolingRevision, out string sourceApiStatus, out System.Collections.Generic.IReadOnlyDictionary<string, string?> projects, out System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationPageInfo> pages)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `Equals`

<a id="api-e6c8908241f26fe5"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.Equals(Inno.Tooling.Documentation.DocumentationCatalogReport) 77024f2aec75b9672b261f3df6326d93209352ee7722c34c7061352916981d53 -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationCatalogReport.Equals(Inno.Tooling.Documentation.DocumentationCatalogReport? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `Equals`

<a id="api-b061a035bb0ec13b"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.Equals(System.Object) 9d5c97f84486fb21dedd4baa505929ae6936184ae020e9155998880e801e8780 -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationCatalogReport.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `GetHashCode`

<a id="api-85738aa6e9e159e4"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.GetHashCode 4da16724370b680ef56ea64d9e92999d0934cda958aab9e0adea618aea1be199 -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationCatalogReport.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `op_Equality`

<a id="api-1a5e897510514e0e"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.op_Equality(Inno.Tooling.Documentation.DocumentationCatalogReport,Inno.Tooling.Documentation.DocumentationCatalogReport) 13fd809e7f220a251a6778c54b40b71e070b15dbe81183e051c9436062d5d105 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationCatalogReport.operator ==(Inno.Tooling.Documentation.DocumentationCatalogReport? left, Inno.Tooling.Documentation.DocumentationCatalogReport? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `op_Inequality`

<a id="api-4a9723c972331119"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.op_Inequality(Inno.Tooling.Documentation.DocumentationCatalogReport,Inno.Tooling.Documentation.DocumentationCatalogReport) 0643acfd45cb65578e6db89d9e13896dbbc0ef0e09104dac95219df9245edabc -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationCatalogReport.operator !=(Inno.Tooling.Documentation.DocumentationCatalogReport? left, Inno.Tooling.Documentation.DocumentationCatalogReport? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `ToString`

<a id="api-19cbeda457b1abc0"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCatalogReport.ToString 97ef1fe426cb821a2d423f2169b230f4187e16666653c82966e59d67180cdbe7 -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationCatalogReport.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L36).

## `contentIdentity`

<a id="api-0e5ac02c13686a5a"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.contentIdentity ff67f7ee2c0cd922f6ad4cb04ea53802f1c47d7429822c34574008ff4bd52993 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCatalogReport.contentIdentity { get; init; }
```

SHA-256 of sorted page paths and content hashes, independent of machine paths and query binaries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L38).

## `pages`

<a id="api-c9cd3c0c90aaea8b"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.pages 4ffa5c9322732d181f98b4c9c038f9d95a15626d035944f0ba6351c1caad4ca3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationPageInfo> Inno.Tooling.Documentation.DocumentationCatalogReport.pages { get; init; }
```

Parsed page facts in stable path order, including complete section and contract identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L45).

## `projects`

<a id="api-7ea6340d969eb7da"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.projects 5be2a582279fcaabfc0ce2e742f210bc2d9ae17cff28c8d30c0f8cb38c332b12 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string?> Inno.Tooling.Documentation.DocumentationCatalogReport.projects { get; init; }
```

Actual project identities mapped to their authoritative page identity; null identifies missing coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L44).

## `repository`

<a id="api-a94415b4f7c5552e"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.repository 0b31ab9c9e1ffd2c1e86b2317a8c856c0da777dc93e8dbdadb7d868c28c16e1f -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCatalogReport.repository { get; init; }
```

Source repository recorded in the selected binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L39).

## `revision`

<a id="api-ba5cabbbceeb31eb"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.revision b46da59018ac87e1194c86145d559aa1eea1c9b19359290837fc663ff07a5756 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCatalogReport.revision { get; init; }
```

Exact engine source revision recorded in the selected binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L40).

## `snapshot`

<a id="api-75e7023d3eee1a49"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.snapshot 6fe16e1c723ff82eccb80a97e83678f955f15109e78474153025a2cd9af90a58 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCatalogReport.snapshot { get; init; }
```

Exact query generation protected by the exporting session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L37).

## `sourceApiStatus`

<a id="api-3f5c7bd84dc91bb9"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.sourceApiStatus 75c5dbc192d96cbd022f914532529b4c4d87b9039ac91595ce763156133b06b2 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCatalogReport.sourceApiStatus { get; init; }
```

Source API evidence state. Unverified must not be treated as a passed API check.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L43).

## `sourceTree`

<a id="api-bdc15cf9c9b1ef9e"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.sourceTree 70634498ff14813c8150e3de14102576f6d5725c9a3c99f91dac1cb24d8c9080 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCatalogReport.sourceTree { get; init; }
```

Engine source-tree identity; this value alone does not certify compatibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L41).

## `toolingRevision`

<a id="api-21718aadf34146b6"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCatalogReport.toolingRevision 93f05324339874eeeb2cbf14b25dada29668077d2cd2f9b36cba4429e4458494 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCatalogReport.toolingRevision { get; init; }
```

Tooling revision requested by the documentation source binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/tools/Inno.Tooling.Documentation/DocumentationCatalogReport.cs#L42).
