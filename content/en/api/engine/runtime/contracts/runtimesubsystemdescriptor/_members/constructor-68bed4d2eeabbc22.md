---
uid: api.68bed4d2eeabbc22f85fa0009ffe3fe3fe45f877cd36a9ab572a6fc6f6630ac2
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.#ctor(Inno.Runtime.Contracts.RuntimeSubsystemId,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeSubsystemId},Inno.Runtime.Contracts.RuntimeSubsystemLifetime,Inno.Runtime.Contracts.RuntimeSubsystemRequirement,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityId})"
source: xml
reviewed: 6e308ac0d2e7eccfb646fa9e4b0da0d3038145bd02adf63ee17608034ad406a2
title: "Constructor"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Creates an immutable runtime subsystem descriptor.

**Parameter `id`:** The unique subsystem protocol identifier.

**Parameter `order`:** The deterministic tie-break order among otherwise independent subsystems.

**Parameter `dependencies`:** Features that must attach and execute before this subsystem.

**Parameter `lifetime`:** The exclusive Host or Session lifetime required by this subsystem.

**Parameter `requirement`:** Whether startup must succeed or may remain explicitly unavailable after complete compensation.

**Parameter `requiredCapabilities`:** Backend-neutral capabilities that composition must supply before factory creation.

**Exception `T:System.ArgumentException`:** Thrown when `id` is invalid or a dependency is invalid, duplicated, or self-referential.
