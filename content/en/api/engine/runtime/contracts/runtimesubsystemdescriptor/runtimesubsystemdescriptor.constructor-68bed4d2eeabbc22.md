---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.68bed4d2eeabbc22f85fa0009ffe3fe3fe45f877cd36a9ab572a6fc6f6630ac2
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.#ctor(Inno.Runtime.Contracts.RuntimeSubsystemId,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeSubsystemId},Inno.Runtime.Contracts.RuntimeSubsystemLifetime,Inno.Runtime.Contracts.RuntimeSubsystemRequirement,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityId})
title: RuntimeSubsystemDescriptor.Constructor
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
sourceFingerprint: a35a18e9aa8b73d9e532596a0f922b3b682050e1369f297739ffc207ddbb6499
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The unique subsystem protocol identifier.

**Parameter `order`:** The deterministic tie-break order among otherwise independent subsystems.

**Parameter `dependencies`:** Features that must attach and execute before this subsystem.

**Parameter `lifetime`:** The exclusive Host or Session lifetime required by this subsystem.

**Parameter `requirement`:** Whether startup must succeed or may remain explicitly unavailable after complete compensation.

**Parameter `requiredCapabilities`:** Backend-neutral capabilities that composition must supply before factory creation.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is invalid or a dependency is invalid, duplicated, or self-referential.
