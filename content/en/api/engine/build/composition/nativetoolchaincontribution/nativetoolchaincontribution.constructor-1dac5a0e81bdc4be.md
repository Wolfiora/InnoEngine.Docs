---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1dac5a0e81bdc4bece1e7d476dbb9644f2725120d6ebb62e0d80ab883092eb47
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.NativeToolchainContribution.#ctor(Inno.Build.PlatformTargetDescriptor,Inno.Build.Toolchains.INativeToolchainProvider,System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeProductContribution},Inno.Build.Toolchains.INativeBindingGenerator)
title: NativeToolchainContribution.Constructor
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 723dbf25b201ae176743a8c83104ceeaa0df852185eb6b119b3ab35bd742387d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `descriptor`:** The exact target and ABI supported by this contribution.

**Parameter `provider`:** The borrowed provider that resolves executable tools for that target.

**Parameter `nativeProducts`:** Optional implemented native-only products, without game publication registration.

**Parameter `bindingGenerator`:** The target-owned generator, or null when the contribution generates no bindings.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required contribution member is null.
