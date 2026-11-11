---
title: "UiDocumentAnalysis"
description: "Reference for UiDocumentAnalysis in Inno.UI.Assets."
uid: api.inno.ui.assets.8c8e3d35bdc91a98
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentAnalysis`

This reference describes `UiDocumentAnalysis` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-64dfd6a408f60fc6) | Method |
| [`diagnostics`](#api-218f125e0b646702) | Property |
| [`fonts`](#api-9e35a6ccd25f769f) | Property |
| [`succeeded`](#api-19899398dd0472ee) | Property |
| [`text`](#api-828be11737d89378) | Property |

## Type declaration

<a id="api-8c8e3d35bdc91a98"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentAnalysis 5f7fd29183bc1a4b516ad3cc3eba5819957e2c4cd860c8b8512868ca08032d7c -->

```csharp
public sealed class Inno.UI.Assets.UiDocumentAnalysis
```

Returns validated text without retaining parser or implementation objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L75).

## `#ctor`

<a id="api-64dfd6a408f60fc6"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentAnalysis.#ctor(System.String,System.Collections.Generic.IEnumerable{Inno.UI.Assets.UiDocumentDiagnostic},System.Collections.Generic.IEnumerable{Inno.UI.Assets.UiDocumentFontDeclaration}) c2e5a79461e499f98a1d54aecc93ce6d5747a3bc9683acfa9182ea7a447ebfca -->

```csharp
public Inno.UI.Assets.UiDocumentAnalysis.UiDocumentAnalysis(string? text, System.Collections.Generic.IEnumerable<Inno.UI.Assets.UiDocumentDiagnostic> diagnostics, System.Collections.Generic.IEnumerable<Inno.UI.Assets.UiDocumentFontDeclaration>? fonts = null)
```

Creates a frozen analysis result.

**Parameter `text`:** Validated canonical text, or null on failure.

**Parameter `diagnostics`:** Complete frontend diagnostics.

**Parameter `fonts`:** Font assets declared by the document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L89).

## `diagnostics`

<a id="api-218f125e0b646702"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentAnalysis.diagnostics 00afa058d32d4a9cd5fe97257c0880321719ad465ac2f6ad8cbec482a94a4268 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.Assets.UiDocumentDiagnostic> Inno.UI.Assets.UiDocumentAnalysis.diagnostics { get; }
```

Gets frozen diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L106).

## `fonts`

<a id="api-9e35a6ccd25f769f"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentAnalysis.fonts cecf02a4810e3eab45ddf2e651dc76b8d3068740358b24a9de065e7f437ccf07 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.Assets.UiDocumentFontDeclaration> Inno.UI.Assets.UiDocumentAnalysis.fonts { get; }
```

Gets font assets declared by the canonical document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L110).

## `succeeded`

<a id="api-19899398dd0472ee"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentAnalysis.succeeded 86b1223368f73fb9e4ba64cbf49296bb2c61f79fe77dee7199b0282b46c524c3 -->

```csharp
public bool Inno.UI.Assets.UiDocumentAnalysis.succeeded { get; }
```

Gets whether the frontend accepted the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L114).

## `text`

<a id="api-828be11737d89378"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentAnalysis.text b7bfe422f61a35f017b19a31d936ec472ff57a964b35929bbfdfd462cefd8808 -->

```csharp
public string? Inno.UI.Assets.UiDocumentAnalysis.text { get; }
```

Gets canonical source text, or null after failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L102).
