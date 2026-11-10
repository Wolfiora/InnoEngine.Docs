---
title: "DocumentationCodeBlockInfo"
description: "Reference for DocumentationCodeBlockInfo in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.0b12924e5051ea9e
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationCodeBlockInfo`

This reference describes `DocumentationCodeBlockInfo` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationCodeBlockInfo>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6ee63fa2d26c66b5) | Method |
| [`Deconstruct`](#api-4d66dc08daea81d3) | Method |
| [`Equals`](#api-9b6c9c0a28cb06b0) | Method |
| [`Equals`](#api-00cd8a8d04c188e0) | Method |
| [`GetHashCode`](#api-57bcb1419012fc74) | Method |
| [`op_Equality`](#api-d8151644f550ff59) | Method |
| [`op_Inequality`](#api-6908e8c72f5276fe) | Method |
| [`ToString`](#api-2de0b168cc6b12f1) | Method |
| [`contentIdentity`](#api-b55536f97bab5785) | Property |
| [`declarationSymbols`](#api-ce1eeb217a5ba228) | Property |
| [`language`](#api-b62718c6e0e769b3) | Property |
| [`line`](#api-a191d4cc1f2aad20) | Property |
| [`section`](#api-1f0bf1bf4dcb3169) | Property |
| [`text`](#api-bffa4f112123eddb) | Property |

## Type declaration

<a id="api-0b12924e5051ea9e"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationCodeBlockInfo 538a56d6eb6032680a3342533e732a3e29ba0210d53db1fed07bbc26fa0142ee -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationCodeBlockInfo : System.IEquatable<Inno.Tooling.Documentation.DocumentationCodeBlockInfo>
```

Describes one canonical fenced code block without executing it or inferring a compilation environment.

**Parameter `language`:** The authored fence language. An empty value remains visible for content-policy validation.

**Parameter `text`:** Original code with normalized LF line endings and no closing-fence newline.

**Parameter `contentIdentity`:** SHA-256 of the normalized code, independent of its source position.

**Parameter `line`:** One-based line of the opening fence in the authored Markdown snapshot.

**Parameter `section`:** The containing canonical heading identity, or null when the block precedes every heading.

**Parameter `declarationSymbols`:** Symbols whose recorded declaration identity exactly matches this block.
Other blocks remain examples or instructions requiring an explicit validation context.
A matching declaration is not a source API or executable-example certificate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `#ctor`

<a id="api-6ee63fa2d26c66b5"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.#ctor(System.String,System.String,System.String,System.Int32,System.String,System.Collections.Generic.IReadOnlyList{System.String}) 5f6b7689089e3116f761ddd00ba1b35a51ef34f504ef14a9d2e767005861bee1 -->

```csharp
public Inno.Tooling.Documentation.DocumentationCodeBlockInfo.DocumentationCodeBlockInfo(string language, string text, string contentIdentity, int line, string? section, System.Collections.Generic.IReadOnlyList<string> declarationSymbols)
```

Describes one canonical fenced code block without executing it or inferring a compilation environment.

**Parameter `language`:** The authored fence language. An empty value remains visible for content-policy validation.

**Parameter `text`:** Original code with normalized LF line endings and no closing-fence newline.

**Parameter `contentIdentity`:** SHA-256 of the normalized code, independent of its source position.

**Parameter `line`:** One-based line of the opening fence in the authored Markdown snapshot.

**Parameter `section`:** The containing canonical heading identity, or null when the block precedes every heading.

**Parameter `declarationSymbols`:** Symbols whose recorded declaration identity exactly matches this block.
Other blocks remain examples or instructions requiring an explicit validation context.
A matching declaration is not a source API or executable-example certificate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `Deconstruct`

<a id="api-4d66dc08daea81d3"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.Deconstruct(System.String@,System.String@,System.String@,System.Int32@,System.String@,System.Collections.Generic.IReadOnlyList{System.String}@) 5cf8ffbb5e8011c05ade7c26b3ef93581b34a29c55947f3c5aa5eba953449fdf -->

```csharp
public void Inno.Tooling.Documentation.DocumentationCodeBlockInfo.Deconstruct(out string language, out string text, out string contentIdentity, out int line, out string? section, out System.Collections.Generic.IReadOnlyList<string> declarationSymbols)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `Equals`

<a id="api-9b6c9c0a28cb06b0"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.Equals(Inno.Tooling.Documentation.DocumentationCodeBlockInfo) 15da5b3f6ffe2bea8ef5effed72603c35213f511bcfbf41ab9c4a5fe998e8b5f -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationCodeBlockInfo.Equals(Inno.Tooling.Documentation.DocumentationCodeBlockInfo? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `Equals`

<a id="api-00cd8a8d04c188e0"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.Equals(System.Object) c66c0a02837b06982a0de95abaa3914663b58d65286a3856909a6bb1566911f9 -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationCodeBlockInfo.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `GetHashCode`

<a id="api-57bcb1419012fc74"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.GetHashCode d2387b936770a03a3ede9f5430db8b2fd6ec998f149f0838f02ec6a951791513 -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationCodeBlockInfo.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `op_Equality`

<a id="api-d8151644f550ff59"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.op_Equality(Inno.Tooling.Documentation.DocumentationCodeBlockInfo,Inno.Tooling.Documentation.DocumentationCodeBlockInfo) 7365cb25ac8037a5f81781dcae616e53b8f9ba93941250ce18fc51c07770c31c -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationCodeBlockInfo.operator ==(Inno.Tooling.Documentation.DocumentationCodeBlockInfo? left, Inno.Tooling.Documentation.DocumentationCodeBlockInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `op_Inequality`

<a id="api-6908e8c72f5276fe"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.op_Inequality(Inno.Tooling.Documentation.DocumentationCodeBlockInfo,Inno.Tooling.Documentation.DocumentationCodeBlockInfo) a251c4eb0ecfc4d6d50cdcdb6a4e30ffd3fda205407972d9c5a6a48bce9b4218 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationCodeBlockInfo.operator !=(Inno.Tooling.Documentation.DocumentationCodeBlockInfo? left, Inno.Tooling.Documentation.DocumentationCodeBlockInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `ToString`

<a id="api-2de0b168cc6b12f1"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.ToString 7fd44e8995e766112731a478ee95323a27a2e9f71bef09ac705ffd5074d128f9 -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationCodeBlockInfo.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L28).

## `contentIdentity`

<a id="api-b55536f97bab5785"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.contentIdentity 044dc4f962af564d5f463a691e78562ebb055b99149f9d1556c150b616d500b7 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCodeBlockInfo.contentIdentity { get; init; }
```

SHA-256 of the normalized code, independent of its source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L31).

## `declarationSymbols`

<a id="api-ce1eeb217a5ba228"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.declarationSymbols b1cf671254b5016a6810136f6cc3a5e9a17315ce065ae95de30033460756a397 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationCodeBlockInfo.declarationSymbols { get; init; }
```

Symbols whose recorded declaration identity exactly matches this block.
Other blocks remain examples or instructions requiring an explicit validation context.
A matching declaration is not a source API or executable-example certificate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L34).

## `language`

<a id="api-b62718c6e0e769b3"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.language dc6bb7897dfc543a168c5094d0c150d705ee30a39370eefadc74c511a4c0e69f -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCodeBlockInfo.language { get; init; }
```

The authored fence language. An empty value remains visible for content-policy validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L29).

## `line`

<a id="api-a191d4cc1f2aad20"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.line ae8ee7b9a58a077b7bd50ffa410c0d2c8e1efa2b18ec78ef3e703c4ad1679f3b -->

```csharp
public int Inno.Tooling.Documentation.DocumentationCodeBlockInfo.line { get; init; }
```

One-based line of the opening fence in the authored Markdown snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L32).

## `section`

<a id="api-1f0bf1bf4dcb3169"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.section 1e365295eb73412649cf43b3ebdbef486a53ba00d7caf9e406fcf962e78adacf -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationCodeBlockInfo.section { get; init; }
```

The containing canonical heading identity, or null when the block precedes every heading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L33).

## `text`

<a id="api-bffa4f112123eddb"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.text 3b28fc1c6b29deaa40c4bd060ff6bf2bedd1521a437e802cd3096b6a20cbf4e5 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationCodeBlockInfo.text { get; init; }
```

Original code with normalized LF line endings and no closing-fence newline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/tools/Inno.Tooling.Documentation/DocumentationCodeBlockInfo.cs#L30).
