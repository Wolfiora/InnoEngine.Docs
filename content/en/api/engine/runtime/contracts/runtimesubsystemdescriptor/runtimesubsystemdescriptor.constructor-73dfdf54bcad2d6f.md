---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.73dfdf54bcad2d6f4a8f0c9077671b3ffb1c168518dd9ebd7af7132dc8a7104c
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.#ctor(Inno.Runtime.Contracts.RuntimeSubsystemID,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeSubsystemID},Inno.Runtime.Contracts.RuntimeSubsystemLifetime,Inno.Runtime.Contracts.RuntimeSubsystemRequirement,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityID})
title: RuntimeSubsystemDescriptor.Constructor
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
sourceFingerprint: dbb5c5e100be65366053f0d5d96a8695fa05c3a799a30c76d857dc76535e1240
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
