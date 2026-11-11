---
title: "DocumentationPageInfo"
description: "Reference for DocumentationPageInfo in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.5cad6c3641b0832f
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationPageInfo`

This reference describes `DocumentationPageInfo` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationPageInfo>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e47bba0ad8ea76ea) | Method |
| [`Deconstruct`](#api-7bcc1082425f7637) | Method |
| [`Equals`](#api-46e8c685f885323c) | Method |
| [`Equals`](#api-7d5c6fb688db10a6) | Method |
| [`GetHashCode`](#api-ef7b75ffed0466b6) | Method |
| [`op_Equality`](#api-fda5232ede5bd2a2) | Method |
| [`op_Inequality`](#api-0d436fc641efe1bf) | Method |
| [`ToString`](#api-378ec70ad5da975d) | Method |
| [`codeBlocks`](#api-966f31690a58aff6) | Property |
| [`contentIdentity`](#api-b6a465ec9c66412f) | Property |
| [`contracts`](#api-15bc0d65f79d58bd) | Property |
| [`examples`](#api-6cf69f059683a679) | Property |
| [`id`](#api-8c83b94c26f843b8) | Property |
| [`includes`](#api-24eb07d168dae41f) | Property |
| [`kind`](#api-16885adf39a7cf9d) | Property |
| [`owners`](#api-26dbc087d10936d0) | Property |
| [`path`](#api-bf353ebbf11c75d4) | Property |
| [`sections`](#api-5d6032f341ce4ac6) | Property |
| [`surface`](#api-69b64bdb7f5199eb) | Property |
| [`symbols`](#api-08ebc01f2e10de27) | Property |
| [`title`](#api-04b30faab37549cc) | Property |

## Type declaration

<a id="api-5cad6c3641b0832f"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationPageInfo 34016c341219ca098e908aa836b4fe455567cb7fa7b5010537bb21bcdc6883c6 -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationPageInfo : System.IEquatable<Inno.Tooling.Documentation.DocumentationPageInfo>
```

Supplies canonical page metadata to navigation and rendered-output checks without a second Markdown parser.

**Parameter `id`:** Stable authored page identity.

**Parameter `path`:** Source path relative to the selected Docs checkout.

**Parameter `contentIdentity`:** SHA-256 of original UTF-8 Markdown text.

**Parameter `title`:** Plain-text H1 derived by the canonical parser.

**Parameter `kind`:** Validated page purpose, such as tutorial, project or api.

**Parameter `owners`:** Actual project identities from the bound manifest.

**Parameter `surface`:** Qualified API surface, or null for shared guidance.

**Parameter `sections`:** Canonical heading anchors mapped to one-based source lines.

**Parameter `symbols`:** Exact XML symbol identities mapped to canonical anchors, signature identities and visible code.

**Parameter `contracts`:** Necessary page or section identities that must remain visible to readers.

**Parameter `includes`:** Source-relative API includes, validated for ownership, existence and cycles.

**Parameter `codeBlocks`:** Canonical fenced code for example selection and declaration comparison, without reparsing Markdown.
Compilation contexts and execution evidence belong to the validation caller.

**Parameter `examples`:** Explicit authored reference context, or null when the page declares no example context.
A validator must report executable examples without a context as blocked, not guess one from a namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `#ctor`

<a id="api-e47bba0ad8ea76ea"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.#ctor(System.String,System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.Int32},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Tooling.Documentation.DocumentationSymbolInfo},System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationCodeBlockInfo},Inno.Tooling.Documentation.DocumentationExampleContext) df97e016e372c0dd9c12cf244dd7cc11805ddf5259644e42d48e2003f8cab469 -->

```csharp
public Inno.Tooling.Documentation.DocumentationPageInfo.DocumentationPageInfo(string id, string path, string contentIdentity, string title, string kind, System.Collections.Generic.IReadOnlyList<string> owners, string? surface, System.Collections.Generic.IReadOnlyDictionary<string, int> sections, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Tooling.Documentation.DocumentationSymbolInfo> symbols, System.Collections.Generic.IReadOnlyList<string> contracts, System.Collections.Generic.IReadOnlyList<string> includes, System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationCodeBlockInfo> codeBlocks, Inno.Tooling.Documentation.DocumentationExampleContext? examples)
```

Supplies canonical page metadata to navigation and rendered-output checks without a second Markdown parser.

**Parameter `id`:** Stable authored page identity.

**Parameter `path`:** Source path relative to the selected Docs checkout.

**Parameter `contentIdentity`:** SHA-256 of original UTF-8 Markdown text.

**Parameter `title`:** Plain-text H1 derived by the canonical parser.

**Parameter `kind`:** Validated page purpose, such as tutorial, project or api.

**Parameter `owners`:** Actual project identities from the bound manifest.

**Parameter `surface`:** Qualified API surface, or null for shared guidance.

**Parameter `sections`:** Canonical heading anchors mapped to one-based source lines.

**Parameter `symbols`:** Exact XML symbol identities mapped to canonical anchors, signature identities and visible code.

**Parameter `contracts`:** Necessary page or section identities that must remain visible to readers.

**Parameter `includes`:** Source-relative API includes, validated for ownership, existence and cycles.

**Parameter `codeBlocks`:** Canonical fenced code for example selection and declaration comparison, without reparsing Markdown.
Compilation contexts and execution evidence belong to the validation caller.

**Parameter `examples`:** Explicit authored reference context, or null when the page declares no example context.
A validator must report executable examples without a context as blocked, not guess one from a namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `Deconstruct`

<a id="api-7bcc1082425f7637"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.Deconstruct(System.String@,System.String@,System.String@,System.String@,System.String@,System.Collections.Generic.IReadOnlyList{System.String}@,System.String@,System.Collections.Generic.IReadOnlyDictionary{System.String,System.Int32}@,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Tooling.Documentation.DocumentationSymbolInfo}@,System.Collections.Generic.IReadOnlyList{System.String}@,System.Collections.Generic.IReadOnlyList{System.String}@,System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationCodeBlockInfo}@,Inno.Tooling.Documentation.DocumentationExampleContext@) 295407d66e6f3f56278d57586cfba3046df463149c5fc192b9caf5e27d53858d -->

```csharp
public void Inno.Tooling.Documentation.DocumentationPageInfo.Deconstruct(out string id, out string path, out string contentIdentity, out string title, out string kind, out System.Collections.Generic.IReadOnlyList<string> owners, out string? surface, out System.Collections.Generic.IReadOnlyDictionary<string, int> sections, out System.Collections.Generic.IReadOnlyDictionary<string, Inno.Tooling.Documentation.DocumentationSymbolInfo> symbols, out System.Collections.Generic.IReadOnlyList<string> contracts, out System.Collections.Generic.IReadOnlyList<string> includes, out System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationCodeBlockInfo> codeBlocks, out Inno.Tooling.Documentation.DocumentationExampleContext? examples)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `Equals`

<a id="api-46e8c685f885323c"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.Equals(Inno.Tooling.Documentation.DocumentationPageInfo) d672429c25aa5877a7a2e342ccd5de4333dab10cb404caa5d8091c243c31954a -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationPageInfo.Equals(Inno.Tooling.Documentation.DocumentationPageInfo? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `Equals`

<a id="api-7d5c6fb688db10a6"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.Equals(System.Object) 0f14ec17b0bbf8dcb27efb562af587fffc9e86f4b8c67aced5a8ac4a1b71f6da -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationPageInfo.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `GetHashCode`

<a id="api-ef7b75ffed0466b6"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.GetHashCode 47b893f2374828ceecd141b492c739a11233f00312da9541cf673a9e8c192f89 -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationPageInfo.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `op_Equality`

<a id="api-fda5232ede5bd2a2"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.op_Equality(Inno.Tooling.Documentation.DocumentationPageInfo,Inno.Tooling.Documentation.DocumentationPageInfo) 5e59d72ac04fc56e08baf105baba11535522d29602abc650bb4333731b1288c9 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationPageInfo.operator ==(Inno.Tooling.Documentation.DocumentationPageInfo? left, Inno.Tooling.Documentation.DocumentationPageInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `op_Inequality`

<a id="api-0d436fc641efe1bf"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.op_Inequality(Inno.Tooling.Documentation.DocumentationPageInfo,Inno.Tooling.Documentation.DocumentationPageInfo) 49fc0abb3d5c6169ace5a19b41fbc478a0d101f7e010fffc14fe77f0247589d3 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationPageInfo.operator !=(Inno.Tooling.Documentation.DocumentationPageInfo? left, Inno.Tooling.Documentation.DocumentationPageInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `ToString`

<a id="api-378ec70ad5da975d"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationPageInfo.ToString b2e1bcec2a9af2fe46730c18067467367a26b7d23a19d660812337af3852eabb -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationPageInfo.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L49).

## `codeBlocks`

<a id="api-966f31690a58aff6"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.codeBlocks ba539e797786935c64089c009bcc5eaa7a9507feacae11bcf35f3c62030b6ade -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationCodeBlockInfo> Inno.Tooling.Documentation.DocumentationPageInfo.codeBlocks { get; init; }
```

Canonical fenced code for example selection and declaration comparison, without reparsing Markdown.
Compilation contexts and execution evidence belong to the validation caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L61).

## `contentIdentity`

<a id="api-b6a465ec9c66412f"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.contentIdentity 7fec0927f17f93ed64d095cc8a306b2c84174419db3c67cad4aac08cf8aca767 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationPageInfo.contentIdentity { get; init; }
```

SHA-256 of original UTF-8 Markdown text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L52).

## `contracts`

<a id="api-15bc0d65f79d58bd"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.contracts a847707b37bfca4f086b62ec58fce3873dae9a55aa8c946542752201c94f8792 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationPageInfo.contracts { get; init; }
```

Necessary page or section identities that must remain visible to readers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L59).

## `examples`

<a id="api-6cf69f059683a679"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.examples 724494211e32962ae38789bb80554088749ab9fc3b3925e3ea860f5194a111da -->

```csharp
public Inno.Tooling.Documentation.DocumentationExampleContext? Inno.Tooling.Documentation.DocumentationPageInfo.examples { get; init; }
```

Explicit authored reference context, or null when the page declares no example context.
A validator must report executable examples without a context as blocked, not guess one from a namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L62).

## `id`

<a id="api-8c83b94c26f843b8"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.id 39d62dda04a167cb2ed35c3ae229f62d2f89075053b5815d874a881c45e6fede -->

```csharp
public string Inno.Tooling.Documentation.DocumentationPageInfo.id { get; init; }
```

Stable authored page identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L50).

## `includes`

<a id="api-24eb07d168dae41f"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.includes 5fee8d6dc263d2ed6ebb71afca67186a1718acbd3f53cea0c9f4a846c23d551b -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationPageInfo.includes { get; init; }
```

Source-relative API includes, validated for ownership, existence and cycles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L60).

## `kind`

<a id="api-16885adf39a7cf9d"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.kind 4176795c9b90ae5d7a0d3186a6972e5e6ac8d584b38383544225fb77c112bb25 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationPageInfo.kind { get; init; }
```

Validated page purpose, such as tutorial, project or api.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L54).

## `owners`

<a id="api-26dbc087d10936d0"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.owners 70f7b439539a59302ade8e3b5f081a51e44a55b93030061cb75cfc8cb13972c1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Tooling.Documentation.DocumentationPageInfo.owners { get; init; }
```

Actual project identities from the bound manifest.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L55).

## `path`

<a id="api-bf353ebbf11c75d4"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.path 640ca22a0b63625a3518222ce094e49c56bac42a0f5a6917bca8daf89acf9eb5 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationPageInfo.path { get; init; }
```

Source path relative to the selected Docs checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L51).

## `sections`

<a id="api-5d6032f341ce4ac6"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.sections 091e2740ca317e323d0c3aeadbfcabbaf6340d550a66107bbb01ebe14eaeb907 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, int> Inno.Tooling.Documentation.DocumentationPageInfo.sections { get; init; }
```

Canonical heading anchors mapped to one-based source lines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L57).

## `surface`

<a id="api-69b64bdb7f5199eb"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.surface 657dd7d81608af229d791c4b628bc01fc21f4d6a5fb1a3741ba0cd71dc371735 -->

```csharp
public string? Inno.Tooling.Documentation.DocumentationPageInfo.surface { get; init; }
```

Qualified API surface, or null for shared guidance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L56).

## `symbols`

<a id="api-08ebc01f2e10de27"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.symbols 868045b120aea3d27b94a5f593ca84590643a664a84018b18efdcf2aa801ec17 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Tooling.Documentation.DocumentationSymbolInfo> Inno.Tooling.Documentation.DocumentationPageInfo.symbols { get; init; }
```

Exact XML symbol identities mapped to canonical anchors, signature identities and visible code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L58).

## `title`

<a id="api-04b30faab37549cc"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationPageInfo.title 38c22d907e0265e2b8358375fcadd0b8001e9e5412a8d694ac6ed9337d852ecd -->

```csharp
public string Inno.Tooling.Documentation.DocumentationPageInfo.title { get; init; }
```

Plain-text H1 derived by the canonical parser.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Documentation/DocumentationPageInfo.cs#L53).
