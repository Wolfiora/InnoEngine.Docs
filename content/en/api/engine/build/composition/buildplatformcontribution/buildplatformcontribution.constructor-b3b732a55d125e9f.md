---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b3b732a55d125e9f91c93e85eb3cd43f20f0414c99853a0560eab17293565c6e
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildPlatformContribution.#ctor(Inno.Build.PlatformTargetDescriptor,Inno.Build.Composition.BuildTargetFactory,Inno.Build.SupportPacks.IPlayerSupportPackSource,Inno.Build.Toolchains.INativeToolchainProvider,System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeProductContribution},Inno.Build.Toolchains.INativeBindingGenerator,System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.ManagedDeploymentID})
title: BuildPlatformContribution.Constructor
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 14d88b745cafd124395e1ad9479140291b77bec2133a79a2d598312f0dc98823
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `descriptor`:** The immutable target facts owned by the platform package.

**Parameter `factory`:** The authoring target factory for these exact target facts.

**Parameter `supportPackSource`:** The matching runtime and compiler input source.

**Parameter `toolchainProvider`:** The SDK resolver for this target, independent of the host.

**Parameter `editorProject`:** The portable checkout-relative Editor product, or null when no Editor is supported.

**Parameter `nativeProducts`:** Explicit product-native plans owned by this target; null declares no ordinary native product build.

**Parameter `bindingGenerator`:** The target-owned generator, or null when the contribution generates no bindings.

**Parameter `managedDeployments`:** Deployment identities supported by this platform, or null when none is contributed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required contribution is null.

**Exception `T:System.ArgumentException`:** A source identity differs from its target, an Editor declaration is inconsistent, native product plans are null or duplicated, or deployment identities are unassigned or repeated.
