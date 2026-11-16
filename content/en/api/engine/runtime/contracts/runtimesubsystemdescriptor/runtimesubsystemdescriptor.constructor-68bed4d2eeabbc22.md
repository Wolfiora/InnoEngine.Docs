---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.68bed4d2eeabbc22f85fa0009ffe3fe3fe45f877cd36a9ab572a6fc6f6630ac2
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.#ctor(Inno.Runtime.Contracts.RuntimeSubsystemId,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeSubsystemId},Inno.Runtime.Contracts.RuntimeSubsystemLifetime,Inno.Runtime.Contracts.RuntimeSubsystemRequirement,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityId})
title: RuntimeSubsystemDescriptor.Constructor
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
reviewed: 57e4fe26a2140e85b589a46e4f796dfd73460ed52e56f87e63ec0b9d95416b89
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
