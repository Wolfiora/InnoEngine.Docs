---
uid: api.f8a4401875afa361d43a2d65f02ff86c0d4c704cd6119d8cedfdaacfb85a62b2
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.#ctor(Inno.Build.BuildTargetId,System.String,System.String,System.String,Inno.Build.IPlayerSupportPackValidator,System.String,System.String,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.INativeProductExecutor,Inno.Build.Toolchains.INativeToolchainProvider,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.Toolchains.INativeBindingGenerator,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 9814d1e877ead46c54a889251487a283c35e521d8e77f1c81eb0a38db4b8d54a
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Captures the platform layout and validator without preparing any tools or files.

**Parameter `target`:** The publication platform identity.

**Parameter `runtimeIdentifier`:** The managed SDK runtime target.

**Parameter `nativePlatform`:** The native toolchain target identity required by this source.

**Parameter `nativeExtension`:** The runtime library suffix selected by this platform.

**Parameter `validator`:** The borrowed platform validator used before publication.

**Parameter `productProject`:** The explicit checkout-relative product project.

**Parameter `templateFile`:** The explicit checkout-relative publication template.

**Parameter `nativePlan`:** The frozen product component closure.

**Parameter `toolchainProvider`:** The SDK provider for the explicit native target.

**Parameter `host`:** The declared machine executing tools.

**Parameter `nativeExecutor`:** The product-selected native execution strategy.

**Parameter `bindingGenerator`:** The borrowed generation service used by the frozen Native operation.

**Parameter `preparationInputs`:** The platform-owned preparation and validator implementation files included in source identity.

**Exception `T:System.ArgumentException`:** A platform identifier or required target string is blank.

**Exception `T:System.ArgumentNullException`:** The validator is null.
