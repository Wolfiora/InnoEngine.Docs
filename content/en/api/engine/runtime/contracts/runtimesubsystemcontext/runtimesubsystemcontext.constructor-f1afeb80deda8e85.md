---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f1afeb80deda8e850454a3a0ff9f493889e60e0abcf71292ad7ce1e2be1c9ec7
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystemContext.#ctor(Inno.Core.Events.EventDispatcher,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Identity.IdentityAllocator,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Execution.LifetimeScope,Inno.Runtime.Contracts.RuntimeSubsystemLifetime,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Runtime.Contracts.RuntimeCapabilityID})
title: RuntimeSubsystemContext.Constructor
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
sourceFingerprint: 7f917f4ab3df15a0bdd2034490c67876111f9a998edba8220234acde4f4e4f51
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `events`:** The owner event dispatcher.

**Parameter `diagnostics`:** The shared diagnostic state owner.

**Parameter `identities`:** The isolated identity domain.

**Parameter `types`:** The active extension type catalog.

**Parameter `resources`:** The pipeline-owned construction lifetime.

**Parameter `lifetime`:** The scope in which created subsystems will live.

**Parameter `isEditMode`:** Whether simulation belongs to an authoring session.

**Parameter `capabilities`:** Verified backend-neutral capabilities supplied by composition; copied into an immutable set.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required foundation service is null.
