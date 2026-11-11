---
title: "DocumentationReferenceInfo"
description: "Reference for DocumentationReferenceInfo in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.3936d9869994dc28
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationReferenceInfo`

This reference describes `DocumentationReferenceInfo` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationReferenceInfo>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-204cf574a07254f0) | Method |
| [`Deconstruct`](#api-64f44462a7cd5887) | Method |
| [`Equals`](#api-e0d218442ce836bb) | Method |
| [`Equals`](#api-98c02b8a1a06b31a) | Method |
| [`GetHashCode`](#api-5096f8b356ea347b) | Method |
| [`op_Equality`](#api-e5033be72a288cc0) | Method |
| [`op_Inequality`](#api-e24c46d73c8a6b77) | Method |
| [`ToString`](#api-dffcce9b8f7c50f9) | Method |
| [`configuration`](#api-4beb5c978b1ecfe5) | Property |
| [`identity`](#api-e1d08381a00e63dc) | Property |
| [`model`](#api-df176634ec6124ad) | Property |
| [`path`](#api-e4d22d54b2291d43) | Property |
| [`projects`](#api-a1c5791bb55f6567) | Property |
| [`sourceRevision`](#api-06bdfd68ac5cb97e) | Property |
| [`sourceTree`](#api-c3c6a2f0877c0e61) | Property |
| [`target`](#api-775447b517ea6f77) | Property |

## Type declaration

<a id="api-3936d9869994dc28"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationReferenceInfo 2f0b2166ad0784200b723000f46751ced2a94dfce72ecedd4b6291a8aef7d2d6 -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationReferenceInfo : System.IEquatable<Inno.Tooling.Documentation.DocumentationReferenceInfo>
```

Identifies an immutable source-fact payload protected by a documentation snapshot.
Captured facts remain distinct from evidence that they match the current engine candidate.

**Parameter `path`:** Original reference path relative to the explicitly selected Docs checkout.

**Parameter `identity`:** SHA-256 of the complete original reference bytes.

**Parameter `model`:** Project-inventory or the actual captured API surface model.

**Parameter `configuration`:** Evaluated API configuration, or null for the project inventory.

**Parameter `target`:** Explicit captured target, or null for a target-neutral capture.

**Parameter `sourceRevision`:** Exact source revision recorded for this capture.

**Parameter `sourceTree`:** Exact source-tree identity recorded for this capture.

**Parameter `projects`:** Actual project identities present in the payload, including empty public surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `#ctor`

<a id="api-204cf574a07254f0"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.#ctor(System.String,System.String,System.String,System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String}) b95b03c276a8066deb10dd9a8545e4aae60a897af9cfe1fa567a62413ea68404 -->

```csharp
public Inno.Tooling.Documentation.DocumentationReferenceInfo.DocumentationReferenceInfo(string path, string identity, string model, string? configuration, string? target, string sourceRevision, string sourceTree, System.Collections.Generic.IReadOnlyList<string> projects)
```

Identifies an immutable source-fact payload protected by a documentation snapshot.
Captured facts remain distinct from evidence that they match the current engine candidate.

**Parameter `path`:** Original reference path relative to the explicitly selected Docs checkout.

**Parameter `identity`:** SHA-256 of the complete original reference bytes.

**Parameter `model`:** Project-inventory or the actual captured API surface model.

**Parameter `configuration`:** Evaluated API configuration, or null for the project inventory.

**Parameter `target`:** Explicit captured target, or null for a target-neutral capture.

**Parameter `sourceRevision`:** Exact source revision recorded for this capture.

**Parameter `sourceTree`:** Exact source-tree identity recorded for this capture.

**Parameter `projects`:** Actual project identities present in the payload, including empty public surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `Deconstruct`

<a id="api-64f44462a7cd5887"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.Deconstruct(System.String@,System.String@,System.String@,System.String@,System.String@,System.String@,System.String@,System.Collections.Generic.IReadOnlyList{System.String}@) 356090b10e8a22ffc438d015fe34b27ab9592f6c3ffe01bf9711f3d307cbdcf6 -->

```csharp
public void Inno.Tooling.Documentation.DocumentationReferenceInfo.Deconstruct(out string path, out string identity, out string model, out string? configuration, out string? target, out string sourceRevision, out string sourceTree, out System.Collections.Generic.IReadOnlyList<string> projects)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `Equals`

<a id="api-e0d218442ce836bb"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.Equals(Inno.Tooling.Documentation.DocumentationReferenceInfo) 4424ff9b7d00e8901d438ee34e4cb04662e65e66023df35fcda2caadb753dc11 -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationReferenceInfo.Equals(Inno.Tooling.Documentation.DocumentationReferenceInfo? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `Equals`

<a id="api-98c02b8a1a06b31a"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.Equals(System.Object) b9e9adc5ded14bdb201dc643823bbcf2147cbb3c2a82e880838b6b779faf39f1 -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationReferenceInfo.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `GetHashCode`

<a id="api-5096f8b356ea347b"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.GetHashCode a24912b47baf7fead4b5b8c00835ad329dcfced2aecee7ccde0da7c1955b3d2d -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationReferenceInfo.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `op_Equality`

<a id="api-e5033be72a288cc0"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.op_Equality(Inno.Tooling.Documentation.DocumentationReferenceInfo,Inno.Tooling.Documentation.DocumentationReferenceInfo) e3708b6dd32fb8a7664279fe000f75088113b567ae06f7e75ea1af8b699d54bd -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationReferenceInfo.operator ==(Inno.Tooling.Documentation.DocumentationReferenceInfo? left, Inno.Tooling.Documentation.DocumentationReferenceInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `op_Inequality`

<a id="api-e24c46d73c8a6b77"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.op_Inequality(Inno.Tooling.Documentation.DocumentationReferenceInfo,Inno.Tooling.Documentation.DocumentationReferenceInfo) acefa8133d70678d9998aed8c2cccb7d75099cce08dbc8f6abeb093e98ec9e87 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationReferenceInfo.operator !=(Inno.Tooling.Documentation.DocumentationReferenceInfo? left, Inno.Tooling.Documentation.DocumentationReferenceInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `ToString`

<a id="api-dffcce9b8f7c50f9"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationReferenceInfo.ToString 070fd0a20d260679150bfb73ef9a031aaf3d808701e28502190c1d8b6cd2034b -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationReferenceInfo.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L33).

## `configuration`

<a id="api-4beb5c978b1ecfe5"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.configuration 64f617b0cd618f4011aa4134900eb7d17a8f8fcc74e2412313af1907eecef7b0 -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationReferenceInfo.configuration { get; init; }
```

Evaluated API configuration, or null for the project inventory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L37).

## `identity`

<a id="api-e1d08381a00e63dc"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.identity c19bc978f65e9539aee620f02759314fad10063b679736bcd82c5f501697161e -->

```csharp
public string Inno.Tooling.Documentation.DocumentationReferenceInfo.identity { get; init; }
```

SHA-256 of the complete original reference bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L35).

## `model`

<a id="api-df176634ec6124ad"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.model 36dddf92bd57e587984900d079707276afb81e1bf7113598f9a25d1149c4b176 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationReferenceInfo.model { get; init; }
```

Project-inventory or the actual captured API surface model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L36).

## `path`

<a id="api-e4d22d54b2291d43"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.path b2600a2d5ac8ccbd4ac1a145156ba4b1bf34b58c37a0332c1f010f5d356b8bef -->

```csharp
public string Inno.Tooling.Documentation.DocumentationReferenceInfo.path { get; init; }
```

Original reference path relative to the explicitly selected Docs checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L34).

## `projects`

<a id="api-a1c5791bb55f6567"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.projects d520f024a9fe33ffba941da2c9c7264e80f9c17b5d2d5456568fb119f111623a -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationReferenceInfo.projects { get; init; }
```

Actual project identities present in the payload, including empty public surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L41).

## `sourceRevision`

<a id="api-06bdfd68ac5cb97e"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.sourceRevision 70f7dc89a3e89361e2f37e0ab8588baa1d6d8d2a9bd29404aec701097ffedac2 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationReferenceInfo.sourceRevision { get; init; }
```

Exact source revision recorded for this capture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L39).

## `sourceTree`

<a id="api-c3c6a2f0877c0e61"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.sourceTree 46d02ac2ea8abd26b6c71e7116461db99f117be3729cf5f337ef29e4d96c51dc -->

```csharp
public string Inno.Tooling.Documentation.DocumentationReferenceInfo.sourceTree { get; init; }
```

Exact source-tree identity recorded for this capture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L40).

## `target`

<a id="api-775447b517ea6f77"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationReferenceInfo.target 01d5ea26ef886428e74a7870d2d83b7f0b03e7024e34ac692a24a9e0eab82bbd -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationReferenceInfo.target { get; init; }
```

Explicit captured target, or null for a target-neutral capture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Documentation/DocumentationReferenceInfo.cs#L38).
