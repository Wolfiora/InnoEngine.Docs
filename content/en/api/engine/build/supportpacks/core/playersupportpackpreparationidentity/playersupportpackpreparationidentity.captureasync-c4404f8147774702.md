---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c4404f8147774702876aa7a9341f3cb2e0288dcef11516fe053f6ee45747f7d1
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.CaptureAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.DotNetSdkDescriptor,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken)
title: PlayerSupportPackPreparationIdentity.CaptureAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: b9b7fffbc6cfb10fbcc17a4d932b7d3c2b32922f1ea9c4ae31ee4745b3e57e21
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The borrowed operation with a frozen SDK and binding input provider.

**Parameter `nativePlan`:** The exact product component closure used by preparation.

**Parameter `sdk`:** The selected managed SDK also used for the actual Player build.

**Parameter `project`:** The existing Player entry project whose graph supplies managed sources.

**Parameter `properties`:** The compiler and product properties used by the managed preparation build.

**Parameter `preparationInputs`:** The complete explicit platform layout, template, validator and preparation implementation inputs.

**Parameter `cancellationToken`:** Cancels input evaluation and hashing without publishing a Pack.

## Returns

A frozen identity; no Native compilation, binding generation or Player build is executed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required operation or input declaration is null.

**Exception `T:System.InvalidOperationException`:** The selected source, SDK or generator input graph cannot be resolved.

**Exception `T:System.OperationCanceledException`:** Input capture was canceled.
