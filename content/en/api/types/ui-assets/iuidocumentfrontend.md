---
title: "IUiDocumentFrontend"
description: "Reference for IUiDocumentFrontend in Inno.UI.Assets."
uid: api.inno.ui.assets.016cd54dccf8c937
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `IUiDocumentFrontend`

This reference describes `IUiDocumentFrontend` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Analyze`](#api-0afe849e6b277078) | Method |
| [`languageId`](#api-4ba196cb5daf8ebb) | Property |

## Type declaration

<a id="api-016cd54dccf8c937"></a>
<!-- api: T:Inno.UI.Assets.IUiDocumentFrontend 912f7c7b466709182713eebd1691df724d05f7f70b27d323d9d2af12b0815c62 -->

```csharp
public interface Inno.UI.Assets.IUiDocumentFrontend
```

Validates one UI document language without creating runtime UI objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L120).

## `Analyze`

<a id="api-0afe849e6b277078"></a>
<!-- api: M:Inno.UI.Assets.IUiDocumentFrontend.Analyze(Inno.UI.Assets.UiDocumentSourceFile) 1b57f4c88d43d245002eb24d1b1efb20ad21c3d91a4c5586d953a0dcbc4d8cee -->

```csharp
Inno.UI.Assets.UiDocumentAnalysis Inno.UI.Assets.IUiDocumentFrontend.Analyze(Inno.UI.Assets.UiDocumentSourceFile source)
```

Analyzes one immutable source snapshot.

**Parameter `source`:** Original source snapshot.

**Returns:** Canonical text or neutral diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L135).

## `languageId`

<a id="api-4ba196cb5daf8ebb"></a>
<!-- api: P:Inno.UI.Assets.IUiDocumentFrontend.languageId 200a4cb4f45359d10fc44cec498034d8f1279b11b77fa0b22fa29ed6b7ea714d -->

```csharp
Inno.UI.UiDocumentLanguageId Inno.UI.Assets.IUiDocumentFrontend.languageId { get; }
```

Gets the open source-language identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L125).
