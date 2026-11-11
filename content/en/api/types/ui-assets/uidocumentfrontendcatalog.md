---
title: "UiDocumentFrontendCatalog"
description: "Reference for UiDocumentFrontendCatalog in Inno.UI.Assets."
uid: api.inno.ui.assets.87c1b02e0fffe81b
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentFrontendCatalog`

This reference describes `UiDocumentFrontendCatalog` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6858533be0ca33b3) | Method |
| [`Analyze`](#api-48d9ace104bcb118) | Method |
| [`languageIds`](#api-5f5e0b955cc65f8e) | Property |

## Type declaration

<a id="api-87c1b02e0fffe81b"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentFrontendCatalog 01dada62ddc3714ebc3373aba25948a10b72e333d36c1f9f2a19fe1bef3e6e1c -->

```csharp
public sealed class Inno.UI.Assets.UiDocumentFrontendCatalog
```

Owns one immutable UI language registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L141).

## `#ctor`

<a id="api-6858533be0ca33b3"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFrontendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.UI.Assets.IUiDocumentFrontend}) 4e74ed9fb4ef38c24a1785abd984d06337a6dbcc4666791d2cd51fdf04aed3b6 -->

```csharp
public Inno.UI.Assets.UiDocumentFrontendCatalog.UiDocumentFrontendCatalog(System.Collections.Generic.IEnumerable<Inno.UI.Assets.IUiDocumentFrontend> frontends)
```

Captures a validated provider set.

**Parameter `frontends`:** Providers owned by the authoring generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L150).

## `Analyze`

<a id="api-48d9ace104bcb118"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFrontendCatalog.Analyze(Inno.UI.UiDocumentLanguageId,Inno.UI.Assets.UiDocumentSourceFile) b1ea2cd3ef84303de5686784606fed0967f592487e8d6d2855cedb29d4d6af79 -->

```csharp
public Inno.UI.Assets.UiDocumentAnalysis Inno.UI.Assets.UiDocumentFrontendCatalog.Analyze(Inno.UI.UiDocumentLanguageId language, Inno.UI.Assets.UiDocumentSourceFile source)
```

Analyzes source using an explicit language.

**Parameter `language`:** Registered language identity.

**Parameter `source`:** Immutable source snapshot.

**Returns:** Neutral analysis result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L175).

## `languageIds`

<a id="api-5f5e0b955cc65f8e"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentFrontendCatalog.languageIds f3a45c6ff572313029123024ee1ef0fc0fed2062a06a48733b966c1cfd04de6a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiDocumentLanguageId> Inno.UI.Assets.UiDocumentFrontendCatalog.languageIds { get; }
```

Gets registered language identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L161).
