---
uid: api.3b399684c711b49ab6edf3d975d6d5c893712a014152ec246b22774a0cc452ad
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystemContext.#ctor(Inno.Core.Events.EventDispatcher,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Identity.IdentityAllocator,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Execution.LifetimeScope,Inno.Runtime.Contracts.RuntimeSubsystemLifetime,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Runtime.Contracts.RuntimeCapabilityId})"
source: xml
reviewed: 2d80dd12f0d7b2f519e8e173c586c8871799badd05877173d60f2845ee22ddf2
title: "Constructor"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Creates the explicit construction boundary for a host or session pipeline.

**Parameter `events`:** The owner event dispatcher.

**Parameter `diagnostics`:** The shared diagnostic state owner.

**Parameter `identities`:** The isolated identity domain.

**Parameter `types`:** The active extension type catalog.

**Parameter `resources`:** The pipeline-owned construction lifetime.

**Parameter `lifetime`:** The scope in which created subsystems will live.

**Parameter `isEditMode`:** Whether simulation belongs to an authoring session.

**Parameter `capabilities`:** Verified backend-neutral capabilities supplied by composition; copied into an immutable set.

**Exception `T:System.ArgumentNullException`:** A required foundation service is null.
