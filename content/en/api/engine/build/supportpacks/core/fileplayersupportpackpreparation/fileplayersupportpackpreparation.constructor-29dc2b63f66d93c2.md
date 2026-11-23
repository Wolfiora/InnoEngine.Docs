---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.29dc2b63f66d93c2d35dce2c534479129d0098ac0263fc11e1ca964f312002d1
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.#ctor(Inno.Build.BuildTargetID,System.String,System.String,System.String,Inno.Build.IPlayerSupportPackValidator,System.String,System.String,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.INativeProductExecutor,Inno.Build.Toolchains.INativeToolchainProvider,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.Toolchains.INativeBindingGenerator,System.Collections.Generic.IReadOnlyList{System.String})
title: FilePlayerSupportPackPreparation.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: e3e0b805bdf1725fddca41d1b59fc9cc2b54f404bffb7f1864fa90647d68aa0c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The publication platform identity.

**Parameter `runtimeIdentifier`:** The managed SDK runtime target.

**Parameter `nativePlatform`:** The native toolchain target identity required by this source.

**Parameter `nativeExtension`:** The runtime library suffix selected by this platform.

**Parameter `validator`:** The borrowed platform validator used before publication.

**Parameter `productProject`:** The explicit checkout-relative product project.

**Parameter `templateFile`:** The explicit checkout-relative publication template.

**Parameter `nativePlan`:** The frozen product component closure.

**Parameter `nativeExecutor`:** The product-selected native execution strategy.

**Parameter `toolchainProvider`:** The SDK provider for the explicit native target.

**Parameter `host`:** The declared machine executing tools.

**Parameter `bindingGenerator`:** The borrowed generation service used by the frozen Native operation.

**Parameter `preparationInputs`:** The platform-owned preparation and validator implementation files included in source identity.

## Exceptions

**Exception `T:System.ArgumentException`:** A platform identifier or required target string is blank.

**Exception `T:System.ArgumentNullException`:** The validator is null.
