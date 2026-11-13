---
uid: api.f17a85313920bc29ee1bb674900cc001fee9dd9194b7c872e0c23ea14bb23964
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildPlatformContribution.#ctor(Inno.Build.PlatformTargetDescriptor,Inno.Build.Composition.BuildTargetFactory,Inno.Build.SupportPacks.IPlayerSupportPackSource,Inno.Build.Toolchains.INativeToolchainProvider,System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeProductContribution},Inno.Build.Toolchains.INativeBindingGenerator,System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.ManagedDeploymentId})"
source: xml
reviewed: c33a250b17b9ad865ddcd40c34452e70a5a67489d15d7a9751775baabe6c57f7
title: "Constructor"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Creates a complete target registration and rejects mismatched source identities immediately.

**Parameter `descriptor`:** The immutable target facts owned by the platform package.

**Parameter `factory`:** The authoring target factory for these exact target facts.

**Parameter `supportPackSource`:** The matching runtime and compiler input source.

**Parameter `toolchainProvider`:** The SDK resolver for this target, independent of the host.

**Parameter `editorProject`:** The portable checkout-relative Editor product, or null when no Editor is supported.

**Parameter `nativeProducts`:** Explicit product-native plans owned by this target; null declares no ordinary native product build.

**Parameter `bindingGenerator`:** The target-owned generator, or null when the contribution generates no bindings.

**Parameter `managedDeployments`:** Deployment identities supported by this platform, or null when none is contributed.

**Exception `T:System.ArgumentNullException`:** A required contribution is null.

**Exception `T:System.ArgumentException`:** A source identity differs from its target, an Editor declaration is inconsistent, native product plans are null or duplicated, or deployment identities are unassigned or repeated.
